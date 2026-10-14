import { fileURLToPath } from 'node:url'
import { readFileSync, writeFileSync } from 'node:fs'

// Deep-merge the shared manifest with a per-browser one and write add-on/manifest.json.
// Objects merge recursively; everything else (scalars, arrays) is overridden by the
// per-browser manifest. Replaces the `json --deep-merge` CLI used in the bundle scripts.
function deepMerge (base, override) {
  const out = { ...base }
  for (const [key, value] of Object.entries(override)) {
    const mergeable = (v) => v !== null && typeof v === 'object' && !Array.isArray(v)
    out[key] = mergeable(value) && mergeable(out[key]) ? deepMerge(out[key], value) : value
  }
  return out
}

export function mergeManifest (target) {
  const common = JSON.parse(readFileSync('add-on/manifest.common.json', 'utf8'))
  const specific = JSON.parse(readFileSync(`add-on/manifest.${target}.json`, 'utf8'))
  writeFileSync('add-on/manifest.json', `${JSON.stringify(deepMerge(common, specific), null, 2)}\n`)
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const target = process.argv[2]
  if (target !== 'chromium' && target !== 'firefox' && target !== 'safari') {
    console.error('usage: node scripts/merge-manifest.js <chromium|firefox|safari>')
    process.exit(1)
  }
  if (target === 'safari') {
    // Safari builds on the Chromium manifest, then drops keys Safari rejects.
    const common = JSON.parse(readFileSync('add-on/manifest.common.json', 'utf8'))
    const specific = JSON.parse(readFileSync('add-on/manifest.chromium.json', 'utf8'))
    const merged = deepMerge(common, specific)
    delete merged.minimum_chrome_version
    delete merged.incognito
    if (merged.action) delete merged.action.browser_style
    if (merged.options_ui) {
      delete merged.options_ui.browser_style
      delete merged.options_ui.open_in_tab
    }
    if (Array.isArray(merged.permissions)) {
      merged.permissions = merged.permissions.filter((p) => p !== 'idle' && p !== 'notifications')
    }
    writeFileSync('add-on/manifest.json', `${JSON.stringify(merged, null, 2)}\n`)
    process.exit(0)
  }
  mergeManifest(target)
}
