(()=>{"use strict";var e,r,s,n,t={6124(e,r,s){var n=s(620),t=s(6292),a=s(6815),i=s(7437),o=s(4421),l=s(7927);let p=n(),u=t`<a class="navy link underline-under hover-aqua" href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions#requested_permissions_and_user_prompts" target="_blank" rel="noopener noreferrer">${a.i18n.getMessage("request_permissions_page_learn_more")}</a>`,f=t`<a class="navy link underline-under hover-aqua" id="learn-more" href="${l.Sz}" target="_blank" rel="noopener noreferrer">${a.i18n.getMessage("recovery_page_update_preferences")}</a>`;p.use((0,o.A)(a.i18n,a.runtime)),p.route("*",()=>{let e=async()=>{await a.permissions.request({origins:["<all_urls>"]}),a.runtime.reload()};return t`<div class="flex flex-column flex-row-l">
    <div id="left-col" class="min-vh-100 flex flex-column justify-center items-center bg-navy white">
      <div class="mb4 flex flex-column justify-center items-center">
        ${(0,i.cP)(200)}
        <p class="mt0 mb0 f3 tc">${a.i18n.getMessage("request_permissions_page_sub_header")}</p>
      </div>
    </div>

    <div id="right-col" class="pt7 mt5 w-100 flex flex-column justify-around items-center">
      <p class="f3 fw5">${a.i18n.getMessage("request_permissions_page_message_p1")}</p>
      <p class="f4 fw4">${a.i18n.getMessage("request_permissions_page_message_p2")}</p>
      <button
        class="fade-in ba bw1 b--teal bg-teal snow f7 ph2 pv3 br2 ma4 pointer"
        onclick=${e}
      >
        <span class="f5 fw6">${a.i18n.getMessage("request_permissions_page_button")}</span>
      </button>
      <p class="f5 fw2 pt5">
        ${u} | ${f}
      </span>
    </div>
  </div>`}),p.mount("#root"),document.title=a.i18n.getMessage("request_permissions_page_title")}},a={};function i(e){var r=a[e];if(void 0!==r)return r.exports;var s=a[e]={exports:{}};return t[e].call(s.exports,s,s.exports,i),s.exports}i.m=t,i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r,s)=>{var n=(r,s)=>{for(var n in r)i.o(r,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,[s]:r[n]})};n(r,"get"),n(s,"value")},i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),i.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),e=[],i.O=(r,s,n,t)=>{if(s){t=t||0;for(var a=e.length;a>0&&e[a-1][2]>t;a--)e[a]=e[a-1];e[a]=[s,n,t];return}for(var o=1/0,a=0;a<e.length;a++){for(var[s,n,t]=e[a],l=!0,p=0;p<s.length;p++)(!1&t||o>=t)&&Object.keys(i.O).every(e=>i.O[e](s[p]))?s.splice(p--,1):(l=!1,t<o&&(o=t));if(l){e.splice(a--,1);var u=n();void 0!==u&&(r=u)}}return r},i.j="592",r={592:0},i.O.j=e=>0===r[e],s=(e,s)=>{var n,t,[a,o,l]=s,p=0;if(a.some(e=>0!==r[e])){for(n in o)i.o(o,n)&&(i.m[n]=o[n]);if(l)var u=l(i)}for(e&&e(s);p<a.length;p++)t=a[p],i.o(r,t)&&r[t]&&r[t][0](),r[t]=0;return i.O(u)},(n=self.rspackChunkipfs_companion=self.rspackChunkipfs_companion||[]).forEach(s.bind(null,0)),n.push=s.bind(null,n.push.bind(n));var o=i.O(void 0,["290"],()=>i(6124));o=i.O(o)})();
//# sourceMappingURL=requestPermissionsPage.bundle.js.map