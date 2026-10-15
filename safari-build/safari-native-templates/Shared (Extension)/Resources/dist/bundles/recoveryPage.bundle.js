(()=>{"use strict";var e,r,n,t,a={6888(e,r,n){var t=n(620),a=n(6292),o=n(6815),s=n(7437),l=n(4421),i=n(7927);let p=t(),c=a`<a class="navy link underline-under hover-aqua" href="https://docs.ipfs.tech/how-to/companion-node-types/" target="_blank" rel="noopener noreferrer">${o.i18n.getMessage("recovery_page_learn_more")}</a>`,f=a`<a class="navy link underline-under hover-aqua" id="learn-more" href="${i.Sz}" target="_blank" rel="noopener noreferrer">${o.i18n.getMessage("recovery_page_update_preferences")}</a>`;p.use((0,l.A)(o.i18n,o.runtime)),p.route("*",e=>{let{hash:r}=window.location,{href:n}=new URL(decodeURIComponent(r.slice(1)));if(!n)return;let t=()=>{try{console.log("Opening URL from hash:",n),window.location.replace(n)}catch(e){console.error("Failed to open URL from hash:",e)}},l=/^ip[fn]s:\/\//.test(n);if(e.isIpfsOnline){if(l){let e=n.replace(/^(ip[fn]s):\/\//,"/$1/");o.runtime.sendMessage({pubGwUrlForIpfsOrIpnsPath:e}).then(({pubGwUrlForIpfsOrIpnsPath:e})=>{e&&window.location.replace(e)}).catch(e=>console.error("Failed to resolve native URI to a gateway URL:",e));return}t();return}let[i,p]=l?[()=>window.open("https://docs.ipfs.tech/install/ipfs-desktop/","_blank","noopener,noreferrer"),"recovery_page_button_installDesktop"]:[t,"recovery_page_button"];return a`<div class="flex flex-column flex-row-l">
    <div id="left-col" class="min-vh-100 flex flex-column justify-center items-center bg-navy white">
      <div class="mb4 flex flex-column justify-center items-center">
        ${(0,s.cP)(200)}
        <p class="mt0 mb0 f3 tc">${o.i18n.getMessage("recovery_page_sub_header")}</p>
      </div>
    </div>

    <div id="right-col" class="pt7 mt5 w-100 flex flex-column justify-around items-center">
      <p class="f3 fw5">${o.i18n.getMessage("recovery_page_message_p1")}</p>
      <p class="f4 fw4">${l?o.i18n.getMessage("recovery_page_message_p2_native"):o.i18n.getMessage("recovery_page_message_p2")}</p>
      <p class="f4 fw4 w-100"><span class="b-ns">${l?o.i18n.getMessage("recovery_page_nativeUrl"):o.i18n.getMessage("recovery_page_publicUrl")}</span> <a class="no-underline navy link hover-aqua" href="${n}" rel="noopener noreferrer" target="_blank">${n}</a></p>
      <button
        class="fade-in ba bw1 b--teal bg-teal snow f7 ph2 pv3 br2 ma4 pointer"
        onclick=${i}
      >
        <span class="f5 fw6">${o.i18n.getMessage(p)}</span>
      </button>
      <p class="f5 fw2 pt5">
        ${c} | ${f}
      </p>
    </div>
  </div>`}),p.mount("#root"),document.title=o.i18n.getMessage("recovery_page_title")}},o={};function s(e){var r=o[e];if(void 0!==r)return r.exports;var n=o[e]={exports:{}};return a[e].call(n.exports,n,n.exports,s),n.exports}s.m=a,s.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return s.d(r,{a:r}),r},s.d=(e,r,n)=>{var t=(r,n)=>{for(var t in r)s.o(r,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,[n]:r[t]})};t(r,"get"),t(n,"value")},s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),s.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),e=[],s.O=(r,n,t,a)=>{if(n){a=a||0;for(var o=e.length;o>0&&e[o-1][2]>a;o--)e[o]=e[o-1];e[o]=[n,t,a];return}for(var l=1/0,o=0;o<e.length;o++){for(var[n,t,a]=e[o],i=!0,p=0;p<n.length;p++)(!1&a||l>=a)&&Object.keys(s.O).every(e=>s.O[e](n[p]))?n.splice(p--,1):(i=!1,a<l&&(l=a));if(i){e.splice(o--,1);var c=t();void 0!==c&&(r=c)}}return r},s.j="500",r={500:0},s.O.j=e=>0===r[e],n=(e,n)=>{var t,a,[o,l,i]=n,p=0;if(o.some(e=>0!==r[e])){for(t in l)s.o(l,t)&&(s.m[t]=l[t]);if(i)var c=i(s)}for(e&&e(n);p<o.length;p++)a=o[p],s.o(r,a)&&r[a]&&r[a][0](),r[a]=0;return s.O(c)},(t=self.rspackChunkipfs_companion=self.rspackChunkipfs_companion||[]).forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t));var l=s.O(void 0,["290"],()=>s(6888));l=s.O(l)})();