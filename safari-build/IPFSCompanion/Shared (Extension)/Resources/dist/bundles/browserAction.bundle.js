(()=>{"use strict";var e,t,n,r,a={3221(e,t,n){n.r(t);var r=n(8783);let a=(0,r.yE)({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),i=(0,r.yE)({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),s=(0,r.yE)({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),o=(0,r.yE)({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6});n.d(t,{},{base64:a,base64pad:i,base64url:s,base64urlpad:o})},6870(e,t,n){var r=n(1474),a=n(9236),i=n(4505),s=n(7182),o=n(3626),l=n(198),c=n(8782),p=n(3221),u=n(8863),d=n(9096);n(515),n(2595);n(8650),n(8653);n(8429);let g={...d,...i,...u,...r,...a,...o,...l,...c,...p,...s};n.d(t,{},{Fo:g})},8231(e,t,n){function r(e){if(e<128)return 1;if(e<16384)return 2;if(e<2097152)return 3;if(e<0x10000000)return 4;if(e<0x800000000)return 5;if(e<0x40000000000)return 6;if(e<0x2000000000000)return 7;if(null!=Number.MAX_SAFE_INTEGER&&e>Number.MAX_SAFE_INTEGER)throw RangeError("Could not encode varint");return 8}function a(e,t,n=0){switch(r(e)){case 8:t[n++]=255&e|128,e/=128;case 7:t[n++]=255&e|128,e/=128;case 6:t[n++]=255&e|128,e/=128;case 5:t[n++]=255&e|128,e/=128;case 4:t[n++]=255&e|128,e>>>=7;case 3:t[n++]=255&e|128,e>>>=7;case 2:t[n++]=255&e|128,e>>>=7;case 1:t[n++]=255&e,e>>>=7;break;default:throw Error("unreachable")}return t}function i(e,t=0){let n;if(e instanceof Uint8Array){let n,r=e[t];if(n=0+(127&r),r<128||(n+=(127&(r=e[t+1]))<<7,r<128)||(n+=(127&(r=e[t+2]))<<14,r<128)||(n+=(127&(r=e[t+3]))<<21,r<128)||(n+=(127&(r=e[t+4]))*0x10000000,r<128)||(n+=(127&(r=e[t+5]))*0x800000000,r<128)||(n+=(127&(r=e[t+6]))*0x40000000000,r<128)||(n+=(127&(r=e[t+7]))*0x2000000000000,r<128))return n;throw RangeError("Could not decode varint")}let r=e.get(t);if(n=0+(127&r),r<128||(n+=(127&(r=e.get(t+1)))<<7,r<128)||(n+=(127&(r=e.get(t+2)))<<14,r<128)||(n+=(127&(r=e.get(t+3)))<<21,r<128)||(n+=(127&(r=e.get(t+4)))*0x10000000,r<128)||(n+=(127&(r=e.get(t+5)))*0x800000000,r<128)||(n+=(127&(r=e.get(t+6)))*0x40000000000,r<128)||(n+=(127&(r=e.get(t+7)))*0x2000000000000,r<128))return n;throw RangeError("Could not decode varint")}n.d(t,{D4:()=>i,OY:()=>r,mD:()=>a})},167(e,t,n){function r(e=0){return new Uint8Array(e)}n.d(t,{K:()=>r})},997(e,t,n){var r=n(6870),a=n(167);function i(e,t,n,r){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:n},decoder:{decode:r}}}let s=i("utf8","u",e=>"u"+new TextDecoder("utf8").decode(e),e=>new TextEncoder().encode(e.substring(1))),o=i("ascii","a",e=>{let t="a";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t},e=>{e=e.substring(1);let t=(0,a.K)(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}),l={utf8:s,"utf-8":s,hex:r.Fo.base16,latin1:o,ascii:o,binary:o,...r.Fo};n.d(t,{},{A:l})},9024(e,t,n){var r=n(620),a=n(6292),i=n(720),s=n(6815),o=n.n(s);function l({svg:e,title:t,active:n,action:r,className:i}){return a`
    <button class="header-icon pa0 ma0 dib bn bg-transparent transition-all ${i} ${r?"pointer":null} ${n?"aqua":"gray"}"
      style="outline:none;"
      title="${s.i18n.getMessage(t)||t}"
      onclick=${r}>
      ${e}
    </button>
  `}function c({label:e,labelLegend:t,value:n,check:r,itemClass:i="",valueClass:o=""}){let l=s.i18n.getMessage("panel_statusOffline");return e=e?s.i18n.getMessage(e):null,t=t?s.i18n.getMessage(t):e,n=n||0===n?n:l,a`
      <div class="flex mb1 ${r?"":"o-60"} ${i}" title="${t}">
        <span class="w-40 f7 ttu no-user-select">${e}</span>
        <span class="w-60 f7 tr monospace truncate force-select-all ${o}" title="${n}">${n}</span>
      </div>
    `}var p=n(405);function u({disabled:e,helperText:t,onClick:n,style:r,switchValue:i,text:s,title:o}){let l="black button-reset db w-100 bg-white b--none outline-0--focus pt2 ph3 f6 tl";return e?l+=" o-40":l+=" pointer bg-near-white--hover",r&&(l+=` ${r}`),e&&(o=""),a`

    <button class="${l}"
            onclick=${e?null:n}  title="${o||""}" ${e?"disabled":""}>
      <div class="flex flex-row items-center justify-between"><div class="truncate">${s}</div>${(0,p.A)({checked:i,disabled:e,style:"fr ml2"})}</div>
      <div class="f7 o-40 w-80 truncate mv1">${t}</div>
    </button>
  `}n(5606),"object"==typeof performance&&performance&&"function"==typeof performance.now&&performance;n(8307),n(4183);var d=n(6438);n(3626),n(8782);var g=n(9061);n(8580);var f=n(8067);let h=/^https?:\/\/[^/]+\/(ip[fn]s)\/([^/?#]+)/,v=/^\/(ip[fn]s)\/([^/?#]+)/,b=/^https?:\/\/([^/]+)\.(ip[fn]s)\.[^/?]+/,w=/^(([a-z0-9]|[a-z0-9][a-z0-9-]*[a-z0-9])\.)+([a-z0-9]|[a-z0-9][a-z0-9-]*[a-z0-9])$/;function m(e){try{if(x(e))return!!g.TO.parse(e);if(e instanceof Uint8Array)return!!g.TO.decode(e);return!!g.TO.asCID(e)}catch{return!1}}function y(e,t,n=1,r=2){let a=C(e);if(!1===a)return!1;let i=a.match(t);if(null==i||"ipfs"!==i[n])return!1;let s=i[r];return null!=s&&t===b&&(s=s.toLowerCase()),m(s)}function $(e,t,n=1,r=2){let a=C(e);if(!1===a)return!1;let i=a.match(t);if(null==i||"ipns"!==i[n])return!1;let s=i[r];if(null!=s&&t===b){if(m(s=s.toLowerCase()))return!0;try{!s.includes(".")&&s.includes("-")&&(s=s.replace(/--/g,"@").replace(/-/g,".").replace(/@/g,"-"));let{hostname:e}=new d.URL(`http://${s}`);return w.test(e)}catch(e){return!1}}return!0}function x(e){return"string"==typeof e}function C(e){return e instanceof Uint8Array?(0,f.d)(e,"base58btc"):!!x(e)&&e}let M=e=>y(e,b,2,1)||$(e,b,2,1),k=e=>{let t,n;return y(t=e,h)||y(t,b,2,1)||$(n=e,h)||$(n,b,2,1)||M(e)},O=e=>y(e,v)||$(e,v);function A(e,t){if(!t)return!1;if("string"==typeof e&&(e=new URL(e)),"string"==typeof t&&(t=new URL(t)),"ipfs.io"===e.hostname)return e.hostname===t.hostname;if("0.0.0.0"===e.hostname&&((e=new URL(e.toString())).hostname="127.0.0.1"),!(k(e.toString())||M(e.toString())||e.pathname.startsWith("/api/v0/")||e.pathname.startsWith("/webui")))return!1;let n=[t.host];for(let r of("localhost"===t.hostname&&n.push(`127.0.0.1:${t.port}`),("127.0.0.1"===t.hostname||"[::1]"===t.hostname)&&n.push(`localhost:${t.port}`),n))if(e.host===r||e.host.endsWith(`.${r}`))return!0;return!1}n(9247),n(198);var T=n(7833),_=n.n(T);T("ipfs-companion:import").error=T("ipfs-companion:import:error");var R=n(2754);T("ipfs-companion:context-menus").error=T("ipfs-companion:context-menus:error");let U="panelCopy_currentIpfsAddress",S="panelCopy_currentIpnsAddress",I="panelCopy_copyRawCid",P="panel_copyCurrentPublicGwUrl",L="panel_contextMenuViewOnGateway",z="panel_copyCurrentPermalink";new R.k;var E=n(5487);let G=s.i18n.getMessage("panelCopy_notReadyHint");function j({disabled:e,iconD:t,iconSize:n,onClick:r,style:i,text:s,title:o}){let l="header-icon fade-in w-50 ba bw1 snow b--snow bg-transparent f7 ph1 pv0 br4 ma1 flex justify-center items-center truncate";return e?l+=" o-60":l+=" pointer",i&&(l+=` ${i}`),e&&(o=""),a`

    <div class="${l}" onclick=${e?null:r}  title="${o||""}" ${e?"disabled":""}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="mr1" width="${n}" height="${n}"><path fill="currentColor" d="${t}"/></svg>
      <div class="flex flex-row items-center justify-between"><div class="truncate">${s}</div></div>
    </div>
  `}var N=n(7927),V=n(197);let W=_()("ipfs-companion:redirect-handler:blockOrObserve");W.error=_()("ipfs-companion:redirect-handler:blockOrObserve:error");let B=new Set(["ipfs","ipns"]);async function D(e,t){o().declarativeNetRequest?.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES>0&&await o().runtime.sendMessage({type:e,value:t})}async function F(){return W("notifyOptionChange"),await D("GLOBAL_STATE_OPTION_CHANGE")}(0,V.mf)("allow:x-ipfs-companion-no-redirect",{forcePositive:!0}),[...B].join("|");let q=r();q.use((e,t)=>{let n;async function r(t){t?(Object.assign(e,t),e.active&&t.redirect&&E.P.includes(t.ipfsNodeType)?e.gatewayAddress=t.gwURLString:e.gatewayAddress=t.pubGwURLString||t.gwURLString,e.isApiAvailable=e.active&&!s.extension.inIncognitoContext,e.swarmPeers=e.active&&-1!==t.peerCount?t.peerCount:null,e.isIpfsOnline=e.active&&t.peerCount>-1,e.kuboRpcBackendVersion=e.active&&t.kuboRpcBackendVersion?t.kuboRpcBackendVersion:null,e.ipfsApiUrl=e.active?t.apiURLString:null):(e.ipfsNodeType="external",e.swarmPeers=null,e.isIpfsOnline=!1,e.kuboRpcBackendVersion=null,e.isIpfsContext=!1,e.isRedirectContext=!1)}Object.assign(e,{active:!0,redirect:!0,isIpfsContext:!1,isRedirectContext:!1,ipfsNodeType:"external",isIpfsOnline:!1,ipfsApiUrl:null,publicGatewayUrl:null,publicSubdomainGatewayUrl:null,gatewayAddress:null,swarmPeers:null,kuboRpcBackendVersion:null,isApiAvailable:!1,currentTab:null,currentFqdn:null,currentDnslinkFqdn:null,enabledOn:[],disabledOn:[]}),t.on("DOMContentLoaded",async()=>{t.emit("render"),(n=s.runtime.connect({name:"browser-action-port"})).onMessage.addListener(async e=>{if(e.statusUpdate){let n=e.statusUpdate;console.log("In browser action, received message from background:",e),await r(n),t.emit("render")}}),setTimeout(()=>{document.body.style.height=window.innerHeight+1+"px",setTimeout(()=>document.body.style.removeProperty("height"),50)},100)}),t.on("viewOnGateway",async()=>{n.postMessage({event:L}),window.close()}),t.on("copy",function(e){switch(e){case S:n.postMessage({event:S});break;case U:n.postMessage({event:U});break;case I:n.postMessage({event:I});break;case P:n.postMessage({event:P});break;case z:n.postMessage({event:z})}window.close()}),t.on("filesCpImport",()=>{n.postMessage({event:"browserActionFilesCpImportCurrentTab"}),window.close()}),t.on("quickImport",()=>{s.tabs.create({url:s.runtime.getURL("dist/popup/quick-import.html")}),window.close()}),t.on("openWelcomePage",async()=>{try{await s.tabs.create({url:N.Q9}),window.close()}catch(e){console.error(`Unable Open WelcomePage (${N.Q9})`,e)}}),t.on("openWebUi",async(t="/")=>{let n=`${e.webuiRootUrl}#${t}`;try{await s.tabs.create({url:n}),window.close()}catch(e){console.error(`Unable Open Web UI (${n})`,e)}}),t.on("openReleaseNotes",async()=>{let e,{version:t}=s.runtime.getManifest(),n=2===t.match(/\./g).length;try{n?(e=`https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v${t}`,await s.storage.local.set({dismissedUpdate:t})):e="https://github.com/ipfs-shipyard/ipfs-companion/issues/964",await s.tabs.create({url:e}),window.close()}catch(t){console.error(`Unable to open release notes (${e})`,t)}}),t.on("openPrefs",()=>{s.runtime.openOptionsPage().then(()=>window.close()).catch(e=>{console.error("runtime.openOptionsPage() failed, opening options page in tab instead.",e),s.tabs.create({url:s.runtime.getURL(N.Sz)})})}),t.on("toggleGlobalRedirect",async()=>{let n=e.redirect;e.redirect=!n,e.gatewayAddress=e.redirect?e.gwURLString:e.pubGwURLString||e.gwURLString,t.emit("render");try{await s.storage.local.set({useCustomGateway:!n})}catch(r){console.error(`Unable to update redirect state due to ${r}`),e.redirect=n,t.emit("render")}}),t.on("toggleSiteIntegrations",async()=>{let n=e.currentTabIntegrationsOptOut;e.currentTabIntegrationsOptOut=!n,t.emit("render");try{let{enabledOn:t,disabledOn:r,currentTab:a,currentDnslinkFqdn:i,currentFqdn:o}=e,l=i||o;n?(r=r.filter(e=>e!==l),t.push(l)):(t=t.filter(e=>e!==l),r.push(l)),await s.storage.local.set({disabledOn:r,enabledOn:t}),await F(),await new Promise(e=>setTimeout(e,200));let c=function(e,t){let n;if(t=t||{},e&&e.toString().startsWith("ip")&&(e=e.replace(/^(ip[n|f]s):\/\//,"/$1/")),!(k(n=e)||O(n)))return null;O(e)&&(e=`https://localhost${e}`);let r="string"==typeof e?new URL(e):e;if(M(e)){var a,i;let e,{id:t,ns:n}=(a=r,"string"==typeof a&&(a=new URL(a)),!!(e=a.toString().match(b))&&!(e.length<3)&&{id:e[1],ns:e[2]});(i=t)&&!i.includes(".")&&i.includes("-")&&!m(i)&&(i=i.replace(/--/g,"@").replace(/-/g,".").replace(/@/g,"-")),t=i,r=new URL(`https://localhost/${n}/${t}${r.pathname}${r.search}${r.hash}`)}let s=decodeURI(r.pathname);return O(s)?t.keepURIParams?`${s}${r.search}${r.hash}`:s:null}(a.url,{keepURIParams:!0});if(i&&$(c,v)){let e=c.replace(/^.*\/ipns\//,"http://");await s.tabs.update(a.id,{url:e})}else await s.tabs.reload(a.id)}catch(e){console.error(`Unable to update integrations state due to ${e}`),t.emit("render")}}),t.on("toggleActive",async()=>{let n=e.active;e.active=!n;try{e.active||(e.gatewayAddress=e.pubGwURLString||e.gwURLString,e.ipfsApiUrl=null,e.kuboRpcBackendVersion=null,e.swarmPeers=null,e.isIpfsOnline=!1),await F(),await s.storage.local.set({active:e.active})}catch(t){console.error(`Unable to update global Active flag due to ${t}`),e.active=n}t.emit("render")})}),q.route("*",function(e,t){let n=Object.assign({onToggleActive:()=>t("toggleActive"),onOpenPrefs:()=>t("openPrefs"),onOpenReleaseNotes:()=>t("openReleaseNotes"),onOpenWelcomePage:()=>t("openWelcomePage")},e),r=Object.assign({onViewOnGateway:()=>t("viewOnGateway"),onToggleSiteIntegrations:()=>t("toggleSiteIntegrations"),onCopy:e=>t("copy",e),onFilesCpImport:()=>t("filesCpImport")},e),o=Object.assign({onQuickImport:()=>t("quickImport"),onOpenWebUi:()=>t("openWebUi","/"),onToggleGlobalRedirect:()=>t("toggleGlobalRedirect")},e);return a`
    <div class="sans-serif" style="text-rendering: optimizeLegibility;">
      <div class="ba bw1 b--white ipfs-gradient-0">
        ${function(e){let{ipfsNodeType:t,active:n,onToggleActive:r,onOpenPrefs:o,onOpenReleaseNotes:p,isIpfsOnline:u,onOpenWelcomePage:d,newVersion:g}=e;return a`
    <div>
      <div class="pt3 pr3 pb2 pl3 no-user-select flex justify-between items-center">
        <div class="inline-flex items-center">
        <div
          onclick=${d}
          class="transition-all pointer ${n?"":"o-40"}"
          style="${n?"":"filter: blur( .15em )"}">
  ${(0,i.A)({size:54,path:"../../../icons",ipfsNodeType:t,isIpfsOnline:n&&u})}
        </div>
          <div class="flex flex-column ml2 white ${n?"":"o-40"}" style="position: relative;">
            <div>
              <h1 class="inter fw6 f2 ttu ma0 pa0">
                IPFS
              </h1>
            </div>
            <span class="${n?"":"o-0"}">${function({kuboRpcBackendVersion:e}){return a`
  ${function({label:e,labelLegend:t,title:n,value:r,check:i,valueClass:o=""}){let l=s.i18n.getMessage("panel_statusOffline");return e=e?s.i18n.getMessage(e):null,t=t?s.i18n.getMessage(t):e,r=r||0===r?r:l,a`
      <div title="${t}" class="ma0 pa0" style="position: absolute; line-height: 0.25">
        <span class="f7 tr monospace force-select-all ${o}" title="${n}">${r}</span>
      </div>
    `}({title:s.i18n.getMessage("panel_kuboRpcBackendVersionTitle"),value:e,check:e})}
  `}(e)}</span>
          </div>
        </div>
        <div class="tr ma0 pb1">
          ${g?function({action:e,active:t,className:n,newVersion:r,size:i="1.8rem",title:s}){let o=a`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 86"
        class="fill-yellow-muted mr1"
        style="width:${i}; height:${i}">
        <path xmlns="http://www.w3.org/2000/svg" d="M71.13 28.87a29.88 29.88 0 100 42.26 29.86 29.86 0 000-42.26zm-18.39 37.6h-5.48V44.71h5.48zm0-26.53h-5.48v-5.49h5.48z"/>
      </svg>
    `;return r.match(/\./g).length>2&&(o=a`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 86"
          class="fill-red-muted mr1"
          style="width:${i}; height:${i}">
          <path d="M82.84 71.14L55.06 23a5.84 5.84 0 00-10.12 0L17.16 71.14a5.85 5.85 0 005.06 8.77h55.56a5.85 5.85 0 005.06-8.77zm-30.1-.66h-5.48V65h5.48zm0-10.26h-5.48V38.46h5.48z"/>
      </svg>
    `,s="Beta channel is deprecated, please switch to regular releases",n=`${n} blink`),l({svg:o,title:s,active:t,action:e,className:n})}({newVersion:g,active:n,title:"panel_headerNewVersionTitle",action:p}):null}
          ${function({action:e,active:t,size:n="1.8rem",title:r}){return l({svg:a`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 86"
        class="fill-current-color mr1"
        style="width:${n}; height:${n}">
        <path d="M50 20.11A29.89 29.89 0 1 0 79.89 50 29.89 29.89 0 0 0 50 20.11zm-3.22 17a3.22 3.22 0 0 1 6.44 0v6.43a3.22 3.22 0 0 1-6.44 0zM50 66.08a16.14 16.14 0 0 1-11.41-27.49 3.28 3.28 0 0 1 1.76-.65 2.48 2.48 0 0 1 2.42 2.41 2.58 2.58 0 0 1-.77 1.77A10.81 10.81 0 0 0 38.59 50a11.25 11.25 0 0 0 22.5 0 10.93 10.93 0 0 0-3.21-7.88 3.37 3.37 0 0 1-.65-1.77 2.48 2.48 0 0 1 2.42-2.41 2.16 2.16 0 0 1 1.76.65A16.14 16.14 0 0 1 50 66.08z"/>
      </svg>
    `,title:r,active:t,action:e})}({active:n,title:"panel_headerActiveToggleTitle",action:r})}
          ${function({action:e,active:t,size:n="1.8rem",title:r}){return l({svg:a`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 86"
        class="fill-current-color"
        style="width:${n}; height:${n}">
        <path d="M74.05 50.23c-.07-3.58 1.86-5.85 5.11-7.1-.2-2-2.48-7.45-3.63-8.76-3.11 1.46-6.06 1.23-8.54-1.22s-2.72-5.46-1.26-8.64a29.24 29.24 0 0 0-8.8-3.63c-1.06 3.08-3.12 5-6.35 5.25-3.82.29-6.29-1.69-7.61-5.22a30.11 30.11 0 0 0-8.77 3.67c1.5 3.16 1.3 6.1-1.15 8.6s-5.45 2.76-8.64 1.29a29.33 29.33 0 0 0-3.58 8.79C24 44.43 25.94 46.62 26 50s-1.82 5.84-5.1 7.12a29.21 29.21 0 0 0 3.68 8.71c3.09-1.38 6-1.15 8.42 1.22s2.79 5.33 1.41 8.49a29.72 29.72 0 0 0 8.76 3.57 1.46 1.46 0 0 0 .11-.21 7.19 7.19 0 0 1 13.53-.16c.13.33.28.32.55.25a29.64 29.64 0 0 0 8-3.3 4 4 0 0 0 .37-.25c-1.27-2.86-1.15-5.57.88-7.94 2.44-2.84 5.5-3.26 8.91-1.8a29.23 29.23 0 0 0 3.65-8.7c-3.17-1.22-5.05-3.38-5.12-6.77zM50 59.54a8.57 8.57 0 1 1 8.59-8.31A8.58 8.58 0 0 1 50 59.54z"/>
      </svg>
    `,title:r,active:t,action:e})}({active:n,title:"panel_openPreferences",action:o})}
        </div>
      </div>
      <div class="pb1 ${n?"":"o-40"}">
        ${function({gatewayAddress:e,kuboRpcBackendVersion:t,ipfsApiUrl:n,swarmPeers:r}){return a`
    <ul class="fade-in list mv0 pt2 ph3 white">
    ${c({label:"panel_statusSwarmPeers",labelLegend:"panel_statusSwarmPeersTitle",value:r,check:r})}
    ${c({label:"panel_statusGatewayAddress",labelLegend:"panel_statusGatewayAddressTitle",value:e,check:e})}
    ${c({label:"panel_statusApiAddress",labelLegend:"panel_statusApiAddressTitle",value:n,check:t})}
    </ul>
  `}(e)}
      </div>
    </div>
  `}(n)}
        ${function({active:e,ipfsNodeType:t,isApiAvailable:n,isIpfsOnline:r,onOpenWebUi:i,onQuickImport:o}){let l=e&&r&&E.P.includes(t);return a`
    <div class="flex pb2 ph2 justify-between">
  ${j({text:s.i18n.getMessage("panel_quickImport"),title:s.i18n.getMessage("panel_quickImportTooltip"),disabled:!(e&&r&&n),onClick:o,iconSize:20,iconD:"M71.13 28.87a29.88 29.88 0 100 42.26 29.86 29.86 0 000-42.26zm-18.39 37.6h-5.48V52.74H33.53v-5.48h13.73V33.53h5.48v13.73h13.73v5.48H52.74z"})}
  ${j({text:s.i18n.getMessage("panel_openWebui"),title:s.i18n.getMessage("panel_openWebuiTooltip"),disabled:!l,onClick:i,iconSize:18,iconD:"M69.69 20.57c-.51-.51-1.06-1-1.62-1.47l-.16-.1c-.56-.46-1.15-.9-1.76-1.32l-.5-.35c-.25-.17-.52-.32-.79-.48A28.27 28.27 0 0050 12.23h-.69a28.33 28.33 0 00-27.52 28.36c0 13.54 19.06 37.68 26 46a3.21 3.21 0 005 0c6.82-8.32 25.46-32.25 25.46-45.84a28.13 28.13 0 00-8.56-20.18zM51.07 49.51a9.12 9.12 0 119.13-9.12 9.12 9.12 0 01-9.13 9.12z"})}
    </div>
  `}(o)}
      </div>
      ${function(e){if(e.isRedirectContext||e.isIpfsContext)return a`
      <div class="mb1">
      ${a`
    <div class="no-select w-100 outline-0--focus tl ph3 pt2 mt1 pb1 o-40 f6">
      ${s.i18n.getMessage("panel_activeTabSectionHeader")}
    </div>
  `}
      <div class="fade-in pv0">
        ${function({active:e,redirect:t,isRedirectContext:n,pubGwURLString:r,gwURLString:i,currentTab:o,currentFqdn:l,currentDnslinkFqdn:c,currentTabIntegrationsOptOut:p,currentTabContentPath:d=G,currentTabImmutablePath:g=G,currentTabCid:f=G,currentTabPublicUrl:h=G,currentTabPermalink:v=G,ipfsNodeType:b,isIpfsContext:w,isIpfsOnline:m,isApiAvailable:y,onToggleSiteIntegrations:$,onViewOnGateway:x,onCopy:C,importDir:M,onFilesCpImport:k}){let O=e&&m&&y&&f,T=e&&m&&y&&E.P.includes(b)&&M,_=d.startsWith("/ipns/");return a`
    <div class='fade-in pv1'>
  ${(()=>{if(n)return a`
  ${u({text:s.i18n.getMessage("panel_activeTabSiteIntegrationsToggle",l),title:s.i18n.getMessage("panel_activeTabSiteIntegrationsToggleTooltip",l),style:"truncate",disabled:!e,switchValue:e&&!p,onClick:$})}
      `})()}
  ${(()=>{if(w){var e;let t,n;return a`<div>
  ${(e=>{if(!e)return!1;let{url:t}=e;return!(t.startsWith("ip")||A(t,i)||A(t,r))})(o)?u({text:s.i18n.getMessage(L),onClick:()=>x(L)}):null}
  ${u({text:s.i18n.getMessage(P),title:s.i18n.getMessage("panel_copyCurrentPublicGwUrlTooltip"),helperText:h,onClick:()=>C(P)})}
  ${_?u({text:s.i18n.getMessage(z),title:s.i18n.getMessage("panel_copyCurrentPermalinkTooltip"),helperText:v,onClick:()=>C(z)}):""}
  ${_?u({text:s.i18n.getMessage(S),title:s.i18n.getMessage("panelCopy_currentIpnsAddressTooltip"),helperText:d,onClick:()=>C(S)}):""}
  ${u({text:s.i18n.getMessage(U),title:s.i18n.getMessage("panelCopy_currentIpfsAddressTooltip"),helperText:g,onClick:()=>C(U)})}
  ${u({text:s.i18n.getMessage(I),title:s.i18n.getMessage("panelCopy_copyRawCidTooltip"),helperText:f,disabled:!O,onClick:()=>C(I)})}
  ${u({text:s.i18n.getMessage("panel_importCurrentIpfsAddress"),title:s.i18n.getMessage("panel_importCurrentIpfsAddressTooltip"),helperText:(e=(e=(e=M).replace(/\/$|$/,"/")).replace(/(\/)\/+/g,"$1"),n=[(t=new Date).getFullYear(),t.getMonth()+1,t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds()].map(e=>String(e).padStart(2,"0")),[/%Y/g,/%M/g,/%D/g,/%h/g,/%m/g,/%s/g].forEach((t,r)=>{e=e.replace(t,n[r])}),e),disabled:!T,onClick:k})}
  </div>
    `}})()}
    </div>
  `}(e)}      </div>
      </div>
  `}(r)}
    </div>
  `}),q.mount("#root")}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return a[e].call(n.exports,n,n.exports,s),n.exports}s.m=a,s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t,n)=>{var r=(t,n)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,[n]:t[r]})};r(t,"get"),r(n,"value")},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),e=[],s.O=(t,n,r,a)=>{if(n){a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[n,r,a];return}for(var o=1/0,i=0;i<e.length;i++){for(var[n,r,a]=e[i],l=!0,c=0;c<n.length;c++)(!1&a||o>=a)&&Object.keys(s.O).every(e=>s.O[e](n[c]))?n.splice(c--,1):(l=!1,a<o&&(o=a));if(l){e.splice(i--,1);var p=r();void 0!==p&&(t=p)}}return t},s.j="996",t={996:0},s.O.j=e=>0===t[e],n=(e,n)=>{var r,a,[i,o,l]=n,c=0;if(i.some(e=>0!==t[e])){for(r in o)s.o(o,r)&&(s.m[r]=o[r]);if(l)var p=l(s)}for(e&&e(n);c<i.length;c++)a=i[c],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(p)},(r=self.rspackChunkipfs_companion=self.rspackChunkipfs_companion||[]).forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r));var o=s.O(void 0,["290"],()=>s(9024));o=s.O(o)})();
//# sourceMappingURL=browserAction.bundle.js.map