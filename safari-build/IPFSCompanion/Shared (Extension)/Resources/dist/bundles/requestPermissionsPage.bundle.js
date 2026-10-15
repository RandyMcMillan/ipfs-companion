(()=>{"use strict";var e,r,s,n,t={6124(e,r,s){var n=s(620),t=s(6292),o=s(6815),a=s(7437),i=s(4421),l=s(7927);let p=n(),u=t`<a class="navy link underline-under hover-aqua" href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions#requested_permissions_and_user_prompts" target="_blank" rel="noopener noreferrer">${o.i18n.getMessage("request_permissions_page_learn_more")}</a>`,f=t`<a class="navy link underline-under hover-aqua" id="learn-more" href="${l.Sz}" target="_blank" rel="noopener noreferrer">${o.i18n.getMessage("recovery_page_update_preferences")}</a>`,c="u">typeof navigator&&/Safari/i.test(navigator.userAgent||"")&&!/Chrome|Chromium|Edg|OPR|Firefox/i.test(navigator.userAgent||""),d=c?t`<p class="f4 fw4">On Safari, open Safari Settings &gt; Extensions &gt; IPFS Companion &gt; Websites, choose "Allow on All Websites", then click below to reload.</p>`:t``;p.use((0,i.A)(o.i18n,o.runtime)),p.route("*",()=>{let e=async()=>{if(c)return void o.runtime.reload();try{await o.permissions.request({origins:["<all_urls>"]})&&o.runtime.reload()}catch(e){console.error("[ipfs-companion] Failed to request permissions",e)}};return t`<div class="flex flex-column flex-row-l">
    <div id="left-col" class="min-vh-100 flex flex-column justify-center items-center bg-navy white">
      <div class="mb4 flex flex-column justify-center items-center">
        ${(0,a.cP)(200)}
        <p class="mt0 mb0 f3 tc">${o.i18n.getMessage("request_permissions_page_sub_header")}</p>
      </div>
    </div>

    <div id="right-col" class="pt7 mt5 w-100 flex flex-column justify-around items-center">
      <p class="f3 fw5">${o.i18n.getMessage("request_permissions_page_message_p1")}</p>
      <p class="f4 fw4">${o.i18n.getMessage("request_permissions_page_message_p2")}</p>
      ${d}
      <button
        class="fade-in ba bw1 b--teal bg-teal snow f7 ph2 pv3 br2 ma4 pointer"
        onclick=${e}
      >
        <span class="f5 fw6">${c?"I have enabled access — reload":o.i18n.getMessage("request_permissions_page_button")}</span>
      </button>
      <p class="f5 fw2 pt5">
        ${u} | ${f}
      </span>
    </div>
  </div>`}),p.mount("#root"),document.title=o.i18n.getMessage("request_permissions_page_title")}},o={};function a(e){var r=o[e];if(void 0!==r)return r.exports;var s=o[e]={exports:{}};return t[e].call(s.exports,s,s.exports,a),s.exports}a.m=t,a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},a.d=(e,r,s)=>{var n=(r,s)=>{for(var n in r)a.o(r,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,[s]:r[n]})};n(r,"get"),n(s,"value")},a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),e=[],a.O=(r,s,n,t)=>{if(s){t=t||0;for(var o=e.length;o>0&&e[o-1][2]>t;o--)e[o]=e[o-1];e[o]=[s,n,t];return}for(var i=1/0,o=0;o<e.length;o++){for(var[s,n,t]=e[o],l=!0,p=0;p<s.length;p++)(!1&t||i>=t)&&Object.keys(a.O).every(e=>a.O[e](s[p]))?s.splice(p--,1):(l=!1,t<i&&(i=t));if(l){e.splice(o--,1);var u=n();void 0!==u&&(r=u)}}return r},a.j="592",r={592:0},a.O.j=e=>0===r[e],s=(e,s)=>{var n,t,[o,i,l]=s,p=0;if(o.some(e=>0!==r[e])){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(l)var u=l(a)}for(e&&e(s);p<o.length;p++)t=o[p],a.o(r,t)&&r[t]&&r[t][0](),r[t]=0;return a.O(u)},(n=self.rspackChunkipfs_companion=self.rspackChunkipfs_companion||[]).forEach(s.bind(null,0)),n.push=s.bind(null,n.push.bind(n));var i=a.O(void 0,["290"],()=>a(6124));i=a.O(i)})();