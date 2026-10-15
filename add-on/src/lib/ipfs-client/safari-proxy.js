'use strict'

import browser from 'webextension-polyfill'
import debug from 'debug'

const log = debug('ipfs-companion:client:safari-proxy')
log.error = debug('ipfs-companion:client:safari-proxy:error')

const nativeAppName = 'org.ipfs.IPFSCompanion'

let originalFetch = null
let getStateRef = null

/**
 * Install or update a fetch proxy that forwards API/gateway requests to the
 * native Safari app extension. Safari web-extension service workers cannot
 * reach cleartext localhost directly, but the containing app can.
 *
 * @param {() => import('../types/companion.js').CompanionState} getState
 */
export function installSafariFetchProxy (getState) {
  getStateRef = getState

  if (originalFetch) {
    log('fetch proxy already installed, updated state reference')
    return
  }

  originalFetch = globalThis.fetch
  globalThis.fetch = async function safariFetch (resource, options = {}) {
    const urlString = normalizeUrlString(resource)
    if (!urlString || !getStateRef) {
      return originalFetch.call(globalThis, resource, options)
    }

    const state = getStateRef()
    const apiUrl = state.apiURLString
    const gwUrl = state.gwURLString

    const isApiRequest = apiUrl && urlString.startsWith(apiUrl)
    const isGatewayRequest = gwUrl && urlString.startsWith(gwUrl)

    if (!isApiRequest && !isGatewayRequest) {
      return originalFetch.call(globalThis, resource, options)
    }

    return proxyFetch(urlString, options)
  }
  log('installed Safari fetch proxy')
}

export function uninstallSafariFetchProxy () {
  if (!originalFetch) return
  globalThis.fetch = originalFetch
  originalFetch = null
  getStateRef = null
  log('uninstalled Safari fetch proxy')
}

function normalizeUrlString (resource) {
  try {
    if (typeof resource === 'string') {
      return resource
    }
    if (resource instanceof URL) {
      return resource.toString()
    }
    if (resource instanceof Request) {
      return resource.url
    }
  } catch (err) {
    log.error('failed to normalize fetch resource', err)
  }
  return null
}

async function proxyFetch (url, options) {
  const method = (options.method || 'GET').toUpperCase()
  const headers = normalizeHeaders(options.headers)
  const bodyBase64 = await encodeBody(options.body)

  const message = {
    type: 'http',
    method,
    url,
    headers,
    body: bodyBase64
  }

  log('%s %s', method, url)

  try {
    const reply = await browser.runtime.sendNativeMessage(nativeAppName, message)

    if (reply && reply.error) {
      log.error('native proxy error', reply.error)
      return Response.error()
    }

    const status = reply.status || 0
    const statusText = reply.statusText || ''
    const responseHeaders = new Headers(reply.headers || {})
    const body = decodeBase64(reply.bodyBase64 || '')

    return new Response(body, {
      status,
      statusText,
      headers: responseHeaders
    })
  } catch (err) {
    log.error('native messaging failed', err)
    return Response.error()
  }
}

function normalizeHeaders (headersInit) {
  const headers = {}
  if (!headersInit) return headers
  try {
    const h = new Headers(headersInit)
    h.forEach((value, name) => {
      headers[name] = value
    })
  } catch (err) {
    log.error('failed to normalize headers', err)
  }
  return headers
}

async function encodeBody (body) {
  if (body == null) return null

  if (typeof body === 'string') {
    return base64FromBuffer(new TextEncoder().encode(body))
  }

  if (body instanceof ArrayBuffer || ArrayBuffer.isView(body)) {
    return base64FromBuffer(body)
  }

  if (body instanceof Blob) {
    const arrayBuffer = await body.arrayBuffer()
    return base64FromBuffer(arrayBuffer)
  }

  if (body instanceof FormData || body instanceof URLSearchParams) {
    const text = body.toString()
    return base64FromBuffer(new TextEncoder().encode(text))
  }

  log.error('unsupported fetch body type, sending empty body', typeof body, body?.constructor?.name)
  return null
}

function base64FromBuffer (buffer) {
  const bytes = new Uint8Array(buffer)
  let binary = ''
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary)
}

function decodeBase64 (base64) {
  if (!base64) return new ArrayBuffer(0)
  const binary = atob(base64)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i)
  }
  return bytes.buffer
}
