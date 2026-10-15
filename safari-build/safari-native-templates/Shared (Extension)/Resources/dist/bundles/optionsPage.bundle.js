(()=>{"use strict";var e,t,s,i,n={3975(e,t,s){let i="[a-fA-F\\d:]",n=e=>e&&e.includeBoundaries?`(?:(?<=\\s|^)(?=${i})|(?<=${i})(?=\\s|$))`:"",a="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",o="[a-fA-F\\d]{1,4}",l=`
(?:
(?:${o}:){7}(?:${o}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${o}:){6}(?:${a}|:${o}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${o}:){5}(?::${a}|(?::${o}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${o}:){4}(?:(?::${o}){0,1}:${a}|(?::${o}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${o}:){3}(?:(?::${o}){0,2}:${a}|(?::${o}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${o}:){2}(?:(?::${o}){0,3}:${a}|(?::${o}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${o}:){1}(?:(?::${o}){0,4}:${a}|(?::${o}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${o}){0,5}:${a}|(?::${o}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),d=RegExp(`(?:^${a}$)|(?:^${l}$)`),r=RegExp(`^${a}$`),p=RegExp(`^${l}$`),c=e=>e&&e.exact?d:RegExp(`(?:${n(e)}${a}${n(e)})|(?:${n(e)}${l}${n(e)})`,"g");c.v4=e=>e&&e.exact?r:RegExp(`${n(e)}${a}${n(e)}`,"g"),c.v6=e=>e&&e.exact?p:RegExp(`${n(e)}${l}${n(e)}`,"g"),s.d(t,{},{A:c})},8779(e,t,s){s.d(t,{uv:()=>o});var i=s(2654);let{toString:n}=Object.prototype,a={global:"g",ignoreCase:"i",multiline:"m",dotAll:"s",sticky:"y",unicode:"u"};function o(e,t,{timeout:s}={}){try{return(0,i.A)(()=>(function(e,t={}){if("[object RegExp]"!==n.call(e))throw TypeError("Expected a RegExp instance");let s=Object.keys(a).map(s=>("boolean"==typeof t[s]?t[s]:e[s])?a[s]:"").join(""),i=new RegExp(t.source||e.source,s);return i.lastIndex="number"==typeof t.lastIndex?t.lastIndex:e.lastIndex,i})(e).test(t),{timeout:s})()}catch(e){if((0,i.c)(e))return!1;throw e}}},192(e,t,s){var i=s(6815),n=s.n(i),a=s(620),o=s(6292),l=s(7833),d=s.n(l),r=s(197);let p=d()("ipfs-companion:redirect-handler:blockOrObserve");p.error=d()("ipfs-companion:redirect-handler:blockOrObserve:error");let c=new Set(["ipfs","ipns"]);(0,r.mf)("allow:x-ipfs-companion-no-redirect",{forcePositive:!0}),[...c].join("|");let u=()=>n().declarativeNetRequest?.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES>0;async function g(e,t){u()&&await n().runtime.sendMessage({type:e,value:t})}async function f(){return p("notifyOptionChange"),await g("GLOBAL_STATE_OPTION_CHANGE")}async function b(e){return await g("DELETE_RULE_REQUEST",e)}var h=s(9247),_=s(6354);let $=Object.freeze({active:!0,ipfsNodeType:"external",ipfsNodeConfig:JSON.stringify({config:{Addresses:{Swarm:[]}}},null,2),publicGatewayUrl:"https://ipfs.io",publicSubdomainGatewayUrl:"https://dweb.link",usePublicGatewaysForShare:!0,useCustomGateway:!0,useSubdomains:!0,redirectSubresources:!1,enabledOn:[],disabledOn:[],automaticMode:!0,linkify:!1,dnslinkLookup:!0,dnslinkRedirect:!0,recoverFailedHttpRequests:!0,redirectToXIpfsPathValue:!1,honorRedirectOptOutHint:!0,preloadAtPublicGateway:!0,catchUnhandledProtocols:!0,displayNotifications:!0,displayReleaseNotes:!1,customGatewayUrl:"http://localhost:8080",ipfsApiUrl:"http://127.0.0.1:5001",ipfsApiPollForegroundSeconds:3,ipfsApiPollBackgroundSeconds:60,logNamespaces:"",importDir:"/ipfs-companion-imports/%Y-%M-%D_%h%m%s/",useLatestWebUI:!1,dismissedUpdate:null,openViaWebUI:!0});function m(e,t){var s,i,n,a;if(!e)return"";return(s=e,i=(i=t)||{useLocalhostName:!0},"string"==typeof s&&(s=new URL(s)),"0.0.0.0"===s.hostname&&((s=new URL(s.toString())).hostname="127.0.0.1"),i.useLocalhostName&&("string"==typeof(n=s)&&(n=new URL(n)),"127.0.0.1"===n.hostname||"[::1]"===n.hostname)&&(s.hostname="localhost"),!i.useLocalhostName&&("string"==typeof(a=s)&&(a=new URL(a)),"localhost"===a.hostname.toLowerCase())&&(s.hostname="127.0.0.1"),s).toString().replace(/\/$/,"")}function v(e){if(h(e)||(0,_.wM)(e))return!0;let t=e.match(/^\[(.*)\]$/);return null!=t&&(0,_.w7)(t[1])}function y(e){return(e=[...new Set(e=(e=(e=e.map(e=>e.trim().toLowerCase())).map(e=>{try{return(0,_.w7)(e)&&(e=`[${e}]`),new URL(`http://${e}`).hostname}catch(e){return}})).filter(Boolean).filter(v))]).sort(),e}function w(e){return y(e).join("\n")}function M(e){return y(e.split("\n"))}var k=s(405),x=s(5487);let S=/^https:\/\/|^http:\/\/localhost|^http:\/\/127.0.0.1|^http:\/\/\[::1\]/;function A({active:e,onOptionChange:t}){let s=t("active");return o`
    <form class="db b mb3 bg-aqua-muted charcoal">
      <label for="active" class="dib pa3 flex items-center pointer ${!e?"charcoal bg-gray-muted br2":""}">
        ${(0,k.A)({id:"active",checked:e,onchange:s,style:"mr3"})}
        ${i.i18n.getMessage("panel_headerActiveToggleTitle")}
      </label>
    </form>
  `}async function R(){let e=await i.storage.local.get();return Object.keys($).reduce((t,s)=>(t[s]=null==e[s]?$[s]:e[s],t),{})}let U=a();U.use(function(e,t){e.options=$;let s=async()=>{if(!i.declarativeNetRequest){e.redirectRules=[];return}e.redirectRules=(await i.declarativeNetRequest.getDynamicRules()).map(e=>({id:e.id,origin:e.condition.regexFilter?.replace("((?:[^\\.]|$).*)$","(.*)").replaceAll("\\",""),target:e.action.redirect?.regexSubstitution})),t.emit("render")},n=async()=>{e.options=await R(),t.emit("render")};t.on("DOMContentLoaded",async()=>{n(),s(),i.storage.onChanged.addListener(n)}),t.on("redirectRuleDeleteRequest",async e=>{console.log("delete rule request",e),i.runtime.onMessage.addListener(({type:e})=>{"DELETE_RULE_REQUEST_SUCCESS"===e&&t.emit("render")}),b(e)}),t.on("optionChange",async({key:e,value:t})=>{i.storage.local.set({[e]:t}),await f()}),t.on("optionsReset",async()=>{i.storage.local.set($),await f()})}),U.route("*",function(e,t){let s=(e,s)=>i=>{i.preventDefault();let n="checkbox"===i.target.type?i.target.checked:i.target.value;if(!i.target.reportValidity())return console.warn(`[ipfs-companion] Invalid value for ${e}: ${n}`);t("optionChange",{key:e,value:s?s(n):n}),s&&t("render")};return e.options.active?o`
    <div class="sans-serif">
  ${A({active:e.options.active,onOptionChange:s})}
  ${function({ipfsNodeType:e,onOptionChange:t}){let s=t("ipfsNodeType"),n=x.P.length>1;return o`
    <form>
      <fieldset class="mb3 pa1 pa4-ns pa3 bg-snow-muted charcoal">
        <h2 class="ttu tracked f6 fw4 teal mt0-ns mb3-ns mb1 mt2 ">${i.i18n.getMessage("option_header_nodeType")}</h2>
        ${n?o`<div class="flex-row-ns pb0-ns">
            <label for="ipfsNodeType">
              <dl>
                <dt>${i.i18n.getMessage("option_ipfsNodeType_title")}</dt>
                <dd>
                  <p>${i.i18n.getMessage("option_ipfsNodeType_external_description")}</p>
                </dd>
              </dl>
            </label>
            <select id="ipfsNodeType" name='ipfsNodeType' class="self-center-ns bg-white navy" onchange=${s}>
              ${x.P.map(t=>o`<option
                value=${t}
                selected=${e===t}>
                ${i.i18n.getMessage(`option_ipfsNodeType_${t}`)}
              </option>`)}
            </select>
          </div>`:null}
        ${"external"===e?o`<div class="flex-row-ns pb0-ns">
            <dl>
              <dt class="fw6">${i.i18n.getMessage("option_ipfsNodeType_external")}</dt>
              <dd class="ml0 mv2">
                ${i.i18n.getMessage("option_ipfsNodeType_external_explainer")}
                <p>
                  <a class="link underline hover-aqua" href="https://docs.ipfs.tech/install/command-line/" target="_blank">
                    ${i.i18n.getMessage("option_ipfsNodeType_external_installKubo")}
                  </a> | <a class="link underline hover-aqua" href="https://docs.ipfs.tech/install/ipfs-desktop/" target="_blank">
                    ${i.i18n.getMessage("option_ipfsNodeType_external_installDesktop")}
                  </a> | <a class="link underline hover-aqua" href="https://docs.ipfs.tech/reference/kubo/rpc/" target="_blank">
                    ${i.i18n.getMessage("option_ipfsNodeType_external_rpcDocs")}
                  </a>
                </p>
              </dd>
            </dl>
          </div>`:null}
      </fieldset>
    </form>
  `}({ipfsNodeType:e.options.ipfsNodeType,ipfsNodeConfig:e.options.ipfsNodeConfig,onOptionChange:s})}
  ${e.options.ipfsNodeType.startsWith("external")?function({ipfsNodeType:e,ipfsApiUrl:t,ipfsApiPollForegroundSeconds:s,ipfsApiPollBackgroundSeconds:n,automaticMode:a,onOptionChange:l}){let d=l("ipfsApiUrl",e=>m(e,{useLocalhostName:!1})),r=l("ipfsApiPollForegroundSeconds"),p=l("ipfsApiPollBackgroundSeconds"),c=l("automaticMode"),u="external"===e;return o`
    <form>
      <fieldset class="mb3 pa1 pa4-ns pa3 bg-snow-muted charcoal">
        <h2 class="ttu tracked f6 fw4 teal mt0-ns mb3-ns mb1 mt2 ">${i.i18n.getMessage("option_header_api")}</h2>
        <div class="mb2">
          ${i.i18n.getMessage("option_api_sectionIntro")}
          <a class="link underline hover-aqua" href="https://docs.ipfs.tech/reference/kubo/rpc/" target="_blank">${i.i18n.getMessage("option_legend_readMore")}</a>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="ipfsApiUrl">
            <dl>
              <dt>${i.i18n.getMessage("option_ipfsApiUrl_title")}</dt>
              <dd>${i.i18n.getMessage("option_ipfsApiUrl_description")}</dd>
            </dl>
          </label>
          <input
            class="bg-white navy self-center-ns"
            id="ipfsApiUrl"
            type="url"
            inputmode="url"
            required
            pattern="https?://.+"
            spellcheck="false"
            title="${i.i18n.getMessage(u?"option_hint_url":"option_hint_readonly")}"
            onchange=${d}
            ${u?"":"disabled"}
            value=${t} />
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="ipfsApiPollForegroundSeconds">
            <dl>
              <dt>${i.i18n.getMessage("option_ipfsApiPollForegroundSeconds_title")}</dt>
              <dd>${i.i18n.getMessage("option_ipfsApiPollForegroundSeconds_description")}</dd>
            </dl>
          </label>
          <input
            class="bg-white navy self-center-ns"
            id="ipfsApiPollForegroundSeconds"
            type="number"
            inputmode="numeric"
            min="1"
            max="60"
            step="1"
            required
            onchange=${r}
            value=${s} />
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="ipfsApiPollBackgroundSeconds">
            <dl>
              <dt>${i.i18n.getMessage("option_ipfsApiPollBackgroundSeconds_title")}</dt>
              <dd>${i.i18n.getMessage("option_ipfsApiPollBackgroundSeconds_description")}</dd>
            </dl>
          </label>
          <input
            class="bg-white navy self-center-ns"
            id="ipfsApiPollBackgroundSeconds"
            type="number"
            inputmode="numeric"
            min="30"
            max="3600"
            step="5"
            required
            onchange=${p}
            value=${n} />
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="automaticMode">
            <dl>
              <dt>${i.i18n.getMessage("option_automaticMode_title")}</dt>
              <dd>
                ${i.i18n.getMessage("option_automaticMode_description")}
                ${!a?o`<p class="red i">${i.i18n.getMessage("option_automaticMode_description_subtext")}</p>`:null}
              </dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,k.A)({id:"automaticMode",checked:a,onchange:c})}</div>
        </div>
      </fieldset>
    </form>
  `}({ipfsNodeType:e.options.ipfsNodeType,ipfsApiUrl:e.options.ipfsApiUrl,ipfsApiPollForegroundSeconds:e.options.ipfsApiPollForegroundSeconds,ipfsApiPollBackgroundSeconds:e.options.ipfsApiPollBackgroundSeconds,automaticMode:e.options.automaticMode,onOptionChange:s}):null}
  ${function({ipfsNodeType:e,customGatewayUrl:t,useCustomGateway:s,useSubdomains:n,redirectSubresources:a,disabledOn:l,enabledOn:d,publicGatewayUrl:r,publicSubdomainGatewayUrl:p,usePublicGatewaysForShare:c,onOptionChange:u}){let g=u("customGatewayUrl",e=>m(e,{useLocalhostName:n})),f=u("useCustomGateway"),b=u("useSubdomains"),h=u("redirectSubresources"),_=u("publicGatewayUrl",m),$=u("publicSubdomainGatewayUrl",m),v=u("usePublicGatewaysForShare"),y=!!(r||p),A=u("disabledOn",M),R=u("enabledOn",M),U=!S.test(t),O=x.P.includes(e),N="external"===e;return o`
    <form>
      <fieldset class="mb3 pa1 pa4-ns pa3 bg-snow-muted charcoal">
        <h2 class="ttu tracked f6 fw4 teal mt0-ns mb3-ns mb1 mt2 ">${i.i18n.getMessage("option_header_gateways")}</h2>
        <div class="mb2">
          ${i.i18n.getMessage("option_gateways_sectionIntro")}
          <a class="link underline hover-aqua" href="https://specs.ipfs.tech/http-gateways/" target="_blank">${i.i18n.getMessage("option_legend_readMore")}</a>
        </div>
          ${O?o`<div class="flex-row-ns pb0-ns">
              <label for="customGatewayUrl">
                <dl>
                  <dt>${i.i18n.getMessage("option_customGatewayUrl_title")}</dt>
                  <dd>${i.i18n.getMessage("option_customGatewayUrl_description")}
                    ${U?o`<p class="red i">${i.i18n.getMessage("option_customGatewayUrl_warning")}</p>`:null}
                  </dd>
                </dl>
              </label>
              <input
                class="bg-white navy self-center-ns"
                id="customGatewayUrl"
                type="url"
                inputmode="url"
                required
                pattern="https?://.+"
                spellcheck="false"
                title="${i.i18n.getMessage(N?"option_hint_url":"option_hint_readonly")}"
                onchange=${g}
                ${N?"":"disabled"}
                value=${t} />
            </div>`:null}
          ${O?o`<div class="flex-row-ns pb0-ns">
              <label for="useCustomGateway">
                <dl>
                  <dt>${i.i18n.getMessage("option_useCustomGateway_title")}</dt>
                  <dd>${i.i18n.getMessage("option_useCustomGateway_description")}</dd>
                </dl>
              </label>
              <div class="self-center-ns">${(0,k.A)({id:"useCustomGateway",checked:s,onchange:f})}</div>
            </div>`:null}
          ${O?o`<div class="flex-row-ns pb0-ns">
              <label for="useSubdomains">
                <dl>
                  <dt>${i.i18n.getMessage("option_useSubdomains_title")}</dt>
                  <dd>
                    ${i.i18n.getMessage("option_useSubdomains_description")}
                    ${!n?o`<p class="red i">${i.i18n.getMessage("option_useSubdomains_warning")}</p>`:null}
                    <p><a class="link underline hover-aqua" href="https://docs.ipfs.tech/how-to/address-ipfs-on-web/#subdomain-gateway" target="_blank">
                      ${i.i18n.getMessage("option_legend_readMore")}
                    </a></p>
                  </dd>
                </dl>
              </label>
              <div class="self-center-ns">${(0,k.A)({id:"useSubdomains",checked:n,onchange:b})}</div>
            </div>`:null}
          ${O?o`<div class="flex-row-ns pb0-ns">
              <label for="redirectSubresources">
                <dl>
                  <dt>${i.i18n.getMessage("option_redirectSubresources_title")}</dt>
                  <dd>
                    ${i.i18n.getMessage("option_redirectSubresources_description")}
                    ${a?o`<p class="red i">${i.i18n.getMessage("option_redirectSubresources_warning")}</p>`:null}
                  </dd>
                </dl>
              </label>
              <div class="self-center-ns">${(0,k.A)({id:"redirectSubresources",checked:a,onchange:h})}</div>
            </div>`:null}
          <div class="flex-row-ns pb0-ns">
            <label for="publicGatewayUrl">
              <dl>
                <dt>${i.i18n.getMessage("option_publicGatewayUrl_title")}</dt>
                <dd>
                  ${i.i18n.getMessage("option_publicGatewayUrl_description")}
                  <p><a class="link underline hover-aqua" href="https://specs.ipfs.tech/http-gateways/path-gateway/" target="_blank">
                    ${i.i18n.getMessage("option_legend_readMore")}
                  </a></p>
                </dd>
              </dl>
            </label>
            <input
              class="bg-white navy self-center-ns"
              id="publicGatewayUrl"
              type="url"
              inputmode="url"
              pattern="https?://.+"
              spellcheck="false"
              title="${i.i18n.getMessage("option_hint_url")}"
              onchange=${_}
              value=${r} />
          </div>
          <div class="flex-row-ns pb0-ns">
            <label for="publicSubdomainGatewayUrl">
              <dl>
                <dt>${i.i18n.getMessage("option_publicSubdomainGatewayUrl_title")}</dt>
                <dd>
                  ${i.i18n.getMessage("option_publicSubdomainGatewayUrl_description")}
                  <p><a class="link underline hover-aqua" href="https://specs.ipfs.tech/http-gateways/subdomain-gateway/" target="_blank">
                    ${i.i18n.getMessage("option_legend_readMore")}
                  </a></p>
                </dd>
              </dl>
            </label>
            <input
              class="bg-white navy self-center-ns"
              id="publicSubdomainGatewayUrl"
              type="url"
              inputmode="url"
              pattern="https?://.+"
              spellcheck="false"
              title="${i.i18n.getMessage("option_hint_url")}"
              onchange=${$}
              value=${p} />
          </div>
          <div class="flex-row-ns pb0-ns">
            <label for="usePublicGatewaysForShare">
              <dl>
                <dt>${i.i18n.getMessage("option_usePublicGatewaysForShare_title")}</dt>
                <dd>${i.i18n.getMessage("option_usePublicGatewaysForShare_description")}</dd>
              </dl>
            </label>
            <div class="self-center-ns">${(0,k.A)({id:"usePublicGatewaysForShare",checked:c&&y,onchange:v,disabled:!y})}</div>
          </div>
          ${O?o`<div class="flex-row-ns pb0-ns">
              <label for="disabledOn">
                <dl>
                  <dt>${i.i18n.getMessage("option_disabledOn_title")}</dt>
                  <dd>${i.i18n.getMessage("option_disabledOn_description")}</dd>
                </dl>
              </label>
              <textarea
                class="bg-white navy self-center-ns"
                id="disabledOn"
                spellcheck="false"
                onchange=${A}
                rows="${Math.min(l.length+1,10)}"
                >${w(l)}</textarea>
            </div>
            <div class="flex-row-ns pb0-ns">
              <label for="enabledOn">
                <dl>
                  <dt>${i.i18n.getMessage("option_enabledOn_title")}</dt>
                  <dd>${i.i18n.getMessage("option_enabledOn_description")}</dd>
                </dl>
              </label>
              <textarea
                class="bg-white navy self-center-ns"
                id="enabledOn"
                spellcheck="false"
                onchange=${R}
                rows="${Math.min(d.length+1,10)}"
                >${w(d)}</textarea>
            </div>`:null}

      </fieldset>
    </form>
  `}({ipfsNodeType:e.options.ipfsNodeType,customGatewayUrl:e.options.customGatewayUrl,useCustomGateway:e.options.useCustomGateway,useSubdomains:e.options.useSubdomains,redirectSubresources:e.options.redirectSubresources,publicGatewayUrl:e.options.publicGatewayUrl,publicSubdomainGatewayUrl:e.options.publicSubdomainGatewayUrl,usePublicGatewaysForShare:e.options.usePublicGatewaysForShare,disabledOn:e.options.disabledOn,enabledOn:e.options.enabledOn,onOptionChange:s})}
  ${function({importDir:e,openViaWebUI:t,preloadAtPublicGateway:s,onOptionChange:n}){let a=n("importDir"),l=n("openViaWebUI"),d=n("preloadAtPublicGateway");return o`
    <form>
      <fieldset class="mb3 pa1 pa4-ns pa3 bg-snow-muted charcoal">
        <h2 class="ttu tracked f6 fw4 teal mt0-ns mb3-ns mb1 mt2 ">${i.i18n.getMessage("option_header_fileImport")}</h2>
        <div class="flex-row-ns pb0-ns">
          <label for="importDir">
            <dl>
              <dt>${i.i18n.getMessage("option_importDir_title")}</dt>
              <dd>
                ${i.i18n.getMessage("option_importDir_description")}
                <p><a class="link underline hover-aqua" href="https://docs.ipfs.tech/concepts/file-systems/#mutable-file-system-mfs" target="_blank">
                  ${i.i18n.getMessage("option_legend_readMore")}
                </a></p>
              </dd>
            </dl>
          </label>
          <input
            class="bg-white navy self-center-ns"
            id="importDir"
            type="text"
            pattern="^\/(.*)"
            required
            onchange=${a}
            value=${e} />
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="openViaWebUI">
            <dl>
              <dt>${i.i18n.getMessage("option_openViaWebUI_title")}</dt>
              <dd>${i.i18n.getMessage("option_openViaWebUI_description")}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,k.A)({id:"openViaWebUI",checked:t,onchange:l})}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="preloadAtPublicGateway">
            <dl>
              <dt>${i.i18n.getMessage("option_preloadAtPublicGateway_title")}</dt>
              <dd>${i.i18n.getMessage("option_preloadAtPublicGateway_description")}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,k.A)({id:"preloadAtPublicGateway",checked:s,onchange:d})}</div>
        </div>
      </fieldset>
    </form>
  `}({importDir:e.options.importDir,openViaWebUI:e.options.openViaWebUI,preloadAtPublicGateway:e.options.preloadAtPublicGateway,onOptionChange:s})}
  ${function({dnslinkLookup:e,dnslinkRedirect:t,useSubdomains:s,onOptionChange:n}){let a=n("dnslinkLookup"),l=n("dnslinkRedirect");return o`
    <form>
      <fieldset class="mb3 pa1 pa4-ns pa3 bg-snow-muted charcoal">
        <h2 class="ttu tracked f6 fw4 teal mt0-ns mb3-ns mb1 mt2 ">${i.i18n.getMessage("option_header_dnslink")}</h2>
        <div class="mb2">
          ${i.i18n.getMessage("option_dnslink_sectionIntro")}
          <a class="link underline hover-aqua" href="https://docs.ipfs.tech/concepts/dnslink/" target="_blank">${i.i18n.getMessage("option_legend_readMore")}</a>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="dnslinkLookup">
            <dl>
              <dt>${i.i18n.getMessage("option_dnslinkLookup_title")}</dt>
              <dd>
                ${i.i18n.getMessage("option_dnslinkLookup_description")}
                <p><a class="link underline hover-aqua" href="https://docs.ipfs.tech/how-to/dnslink-companion/" target="_blank">
                  ${i.i18n.getMessage("option_legend_readMore")}
                </a></p>
              </dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,k.A)({id:"dnslinkLookup",checked:e,onchange:a})}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="dnslinkRedirect">
            <dl>
              <dt>${i.i18n.getMessage("option_dnslinkRedirect_title")}</dt>
              <dd>
                ${i.i18n.getMessage("option_dnslinkRedirect_description")}
                ${e&&t&&!s?o`<p class="red i">${i.i18n.getMessage("option_dnslinkRedirect_warning")}</p>`:null}
                <p><a class="link underline hover-aqua" href="https://docs.ipfs.tech/how-to/address-ipfs-on-web/#subdomain-gateway" target="_blank">
                  ${i.i18n.getMessage("option_legend_readMore")}
                </a></p>
              </dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,k.A)({id:"dnslinkRedirect",checked:t,disabled:!e,onchange:l})}</div>
        </div>
      </fieldset>
    </form>
  `}({dnslinkLookup:e.options.dnslinkLookup,dnslinkRedirect:e.options.dnslinkRedirect,useSubdomains:e.options.useSubdomains,onOptionChange:s})}
  ${function({useLatestWebUI:e,displayNotifications:t,displayReleaseNotes:s,catchUnhandledProtocols:n,linkify:a,recoverFailedHttpRequests:l,redirectToXIpfsPathValue:d,honorRedirectOptOutHint:r,logNamespaces:p,onOptionChange:c}){let u=c("displayNotifications"),g=c("displayReleaseNotes"),f=c("useLatestWebUI"),b=c("catchUnhandledProtocols"),h=c("linkify"),_=c("recoverFailedHttpRequests"),$=c("redirectToXIpfsPathValue"),m=c("honorRedirectOptOutHint");return o`
    <form>
      <fieldset class="mb3 pa1 pa4-ns pa3 bg-snow-muted charcoal">
        <h2 class="ttu tracked f6 fw4 teal mt0-ns mb3-ns mb1 mt2 ">${i.i18n.getMessage("option_header_experiments")}</h2>
        <div class="mb2">${i.i18n.getMessage("option_experiments_warning")}</div>
        <div class="flex-row-ns pb0-ns">
          <label for="useLatestWebUI">
            <dl>
              <dt>${i.i18n.getMessage("option_useLatestWebUI_title")}</dt>
              <dd>${i.i18n.getMessage("option_useLatestWebUI_description")}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,k.A)({id:"useLatestWebUI",checked:e,onchange:f})}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="displayNotifications">
            <dl>
              <dt>${i.i18n.getMessage("option_displayNotifications_title")}</dt>
              <dd>${i.i18n.getMessage("option_displayNotifications_description")}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,k.A)({id:"displayNotifications",checked:t,onchange:u})}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="displayReleaseNotes">
            <dl>
              <dt>${i.i18n.getMessage("option_displayReleaseNotes_title")}</dt>
              <dd>${i.i18n.getMessage("option_displayReleaseNotes_description")}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,k.A)({id:"displayReleaseNotes",checked:s,onchange:g})}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="catchUnhandledProtocols">
            <dl>
              <dt>${i.i18n.getMessage("option_catchUnhandledProtocols_title")}</dt>
              <dd>${i.i18n.getMessage("option_catchUnhandledProtocols_description")}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,k.A)({id:"catchUnhandledProtocols",checked:n,onchange:b})}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="recoverFailedHttpRequests">
            <dl>
              <dt>${i.i18n.getMessage("option_recoverFailedHttpRequests_title")}</dt>
              <dd>${i.i18n.getMessage("option_recoverFailedHttpRequests_description")}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,k.A)({id:"recoverFailedHttpRequests",checked:l,onchange:_})}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="linkify">
            <dl>
              <dt>${i.i18n.getMessage("option_linkify_title")}</dt>
              <dd>${i.i18n.getMessage("option_linkify_description")}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,k.A)({id:"linkify",checked:a,onchange:h})}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="redirectToXIpfsPathValue">
            <dl>
              <dt>${i.i18n.getMessage("option_redirectToXIpfsPathValue_title")}</dt>
              <dd>
                ${i.i18n.getMessage("option_redirectToXIpfsPathValue_description")}
                ${d?o`<p class="red i">${i.i18n.getMessage("option_redirectToXIpfsPathValue_warning")}</p>`:null}
                <p><a class="link underline hover-aqua" href="https://docs.ipfs.tech/concepts/glossary/#x-ipfs-path" target="_blank">
                  ${i.i18n.getMessage("option_legend_readMore")}
                </a></p>
              </dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,k.A)({id:"redirectToXIpfsPathValue",checked:d,onchange:$})}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="honorRedirectOptOutHint">
            <dl>
              <dt>${i.i18n.getMessage("option_honorRedirectOptOutHint_title")}</dt>
              <dd>${i.i18n.getMessage("option_honorRedirectOptOutHint_description")}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${(0,k.A)({id:"honorRedirectOptOutHint",checked:r,onchange:m})}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="logNamespaces">
            <dl>
              <dt>${i.i18n.getMessage("option_logNamespaces_title")}</dt>
              <dd>${i.i18n.getMessage("option_logNamespaces_description")}</dd>
            </dl>
          </label>
          <input
            class="bg-white navy self-center-ns"
            id="logNamespaces"
            type="text"
            onchange=${c("logNamespaces")}
            value=${p} />
        </div>
      </fieldset>
    </form>
  `}({useLatestWebUI:e.options.useLatestWebUI,displayNotifications:e.options.displayNotifications,displayReleaseNotes:e.options.displayReleaseNotes,catchUnhandledProtocols:e.options.catchUnhandledProtocols,linkify:e.options.linkify,recoverFailedHttpRequests:e.options.recoverFailedHttpRequests,redirectToXIpfsPathValue:e.options.redirectToXIpfsPathValue,honorRedirectOptOutHint:e.options.honorRedirectOptOutHint,logNamespaces:e.options.logNamespaces,onOptionChange:s})}
  ${function({onOptionsReset:e}){return o`
    <form>
      <fieldset class="mb3 pa1 pa4-ns pa3 bg-snow-muted charcoal">
        <h2 class="ttu tracked f6 fw4 teal mt0-ns mb3-ns mb1 mt2 ">${i.i18n.getMessage("option_header_reset")}</h2>
        <div class="flex-row-ns pb0-ns">
          <label for="resetAllOptions">
            <dl>
              <dt>${i.i18n.getMessage("option_resetAllOptions_title")}</dt>
              <dd>${i.i18n.getMessage("option_resetAllOptions_description")}</dd>
            </dl>
          </label>
          <div class="self-center-ns"><button id="resetAllOptions" class="Button transition-all sans-serif v-mid fw5 nowrap lh-copy bn br1 pa2 pointer focus-outline white bg-red white" onclick=${e}>${i.i18n.getMessage("option_resetAllOptions_title")}</button></div>
        </div>
      </fieldset>
    </form>
  `}({onOptionsReset:e=>{e.preventDefault(),t("optionsReset")}})}
  ${!u()?"":function({emit:e,redirectRules:t}){return o`
    <form>
      <fieldset class="mb3 pa1 pa4-ns pa3 bg-snow-muted charcoal">
        <h2 class="ttu tracked f6 fw4 teal mt0-ns mb3-ns mb1 mt2 ">${i.i18n.getMessage("option_header_redirect_rules")}</h2>
        <div class="flex-row-ns pb0-ns">
          <label for="deleteAllRules">
            <dl>
              <dt>
                <div class="self-right-ns">
                  Found ${t?.length??0} rules
                </div>
              </dt>
            </dl>
          </label>
          <div class="self-center-ns">
            <button id="deleteAllRules" class="Button transition-all sans-serif v-mid fw5 nowrap lh-copy bn br1 pa2 pointer focus-outline white bg-red white" onclick=${()=>e("redirectRuleDeleteRequest")}>${i.i18n.getMessage("option_redirect_rules_reset_all")}</button>
          </div>
        </div>
        <div style="max-height: 250px; overflow-y: auto">
          ${t?t.map(function({id:t,origin:s,target:n}){return o`
      <div class="flex flex-row-ns pb0-ns">
        <dl class="flex-grow-1">
          <dt>
          <span class="b">${i.i18n.getMessage("option_redirect_rules_row_origin")}:</span> ${s}
          </dt>
          <dt>
          <span class="b">${i.i18n.getMessage("option_redirect_rules_row_target")}:</span> ${n}
          </dt>
        </dl>
        <div class="rule-delete">
          <button class="f6 ph3 pv2 mt0 mb0 bg-transparent b--none red" onclick=${()=>e("redirectRuleDeleteRequest",t)}>X</button>
        </div>
      </div>
    `}):o`<div>Loading...</div>`}
        </div>
      </fieldset>
    </form>
  `}({redirectRules:e.redirectRules,emit:t})}
    </div>
  `:o`
    <div class="sans-serif">
      ${A({active:e.options.active,onOptionChange:s})}
    </div>
    `}),U.mount("#root"),document.getElementById("header-text").innerText=i.i18n.getMessage("option_page_header"),document.title=i.i18n.getMessage("option_page_title")}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var s=a[e]={exports:{}};return n[e].call(s.exports,s,s.exports,o),s.exports}o.m=n,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t,s)=>{var i=(t,s)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,[s]:t[i]})};i(t,"get"),i(s,"value")},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),e=[],o.O=(t,s,i,n)=>{if(s){n=n||0;for(var a=e.length;a>0&&e[a-1][2]>n;a--)e[a]=e[a-1];e[a]=[s,i,n];return}for(var l=1/0,a=0;a<e.length;a++){for(var[s,i,n]=e[a],d=!0,r=0;r<s.length;r++)(!1&n||l>=n)&&Object.keys(o.O).every(e=>o.O[e](s[r]))?s.splice(r--,1):(d=!1,n<l&&(l=n));if(d){e.splice(a--,1);var p=i();void 0!==p&&(t=p)}}return t},o.j="767",t={767:0},o.O.j=e=>0===t[e],s=(e,s)=>{var i,n,[a,l,d]=s,r=0;if(a.some(e=>0!==t[e])){for(i in l)o.o(l,i)&&(o.m[i]=l[i]);if(d)var p=d(o)}for(e&&e(s);r<a.length;r++)n=a[r],o.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return o.O(p)},(i=self.rspackChunkipfs_companion=self.rspackChunkipfs_companion||[]).forEach(s.bind(null,0)),i.push=s.bind(null,i.push.bind(i));var l=o.O(void 0,["290"],()=>o(192));l=o.O(l)})();