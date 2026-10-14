(()=>{"use strict";var e,a,s,r,i={3221(e,a,s){s.r(a);var r=s(8783);let i=(0,r.yE)({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),d=(0,r.yE)({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),n=(0,r.yE)({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),l=(0,r.yE)({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6});s.d(a,{},{base64:i,base64pad:d,base64url:n,base64urlpad:l})},6870(e,a,s){s(1474),s(9236),s(4505),s(7182),s(3626),s(198),s(8782),s(3221),s(8863),s(9096);s(515),s(2595);s(8650),s(8653);s(8429)},6674(e,a,s){var r=s(620),i=s(6292),d=s(6815);s(9247),s(6870),s(9061);let n="dnslink-under-ipfs",l="ipns-key-under-ipfs",t="lowercased-cidv0",p="unrecognized-identifier",c=new Set([n,l,t,p]);var _=s(7437);let o=r(),f={href:"https://docs.ipfs.tech/how-to/address-ipfs-on-web/",label:"invalid_address_page_learn_more"},g={[n]:{header:"invalid_address_page_wrong_namespace_header",message:"invalid_address_page_dnslink_message",advice:"invalid_address_page_namespace_advice",links:[{href:"https://docs.ipfs.tech/concepts/dnslink/",label:"invalid_address_page_learn_dnslink"},f]},[l]:{header:"invalid_address_page_wrong_namespace_header",message:"invalid_address_page_ipns_key_message",advice:"invalid_address_page_namespace_advice",links:[{href:"https://docs.ipfs.tech/concepts/ipns/#mutability-in-ipfs",label:"invalid_address_page_learn_mutability"},f]},[t]:{header:"invalid_address_page_lowercased_header",message:"invalid_address_page_lowercased_message",advice:"invalid_address_page_lowercased_advice",links:[{href:"https://cid.ipfs.tech/",label:"invalid_address_page_convert_cid"},f]},[p]:{header:"invalid_address_page_unrecognized_header",message:"invalid_address_page_unrecognized_message",advice:"invalid_address_page_unrecognized_advice",links:[{href:"https://specs.ipfs.tech/cid/",label:"invalid_address_page_learn_cid"},{href:"https://specs.ipfs.tech/ipns/ipns-record/",label:"invalid_address_page_learn_ipns_record"},{href:"https://docs.ipfs.tech/concepts/dnslink/",label:"invalid_address_page_learn_dnslink"}]}},u=(e,a,s)=>i`
  <div class="mb3 w-100">
    <p class="ma0 f6 fw6 ttu tracked charcoal-muted">${d.i18n.getMessage(e)}</p>
    <code class="db mt1 f5 word-wrap ${s}">${a}</code>
  </div>
`;o.route("*",()=>{let e=function(e){let a=new URLSearchParams(String(e??"").replace(/^#/,"")),s=a.get("reason");if(!c.has(s))return null;let r=a.get("suggestedAddress")??"";return{reason:s,address:a.get("address")??"",suggestedAddress:r,suggestedUrl:function(e,a){if(!a||!e)return null;let s=e.match(/^(ipfs|ipns):\/\/([^/?#]+)/);if(!s)return null;let[,r,i]=s;try{let e=new URL(a);if("https:"!==e.protocol&&"http:"!==e.protocol)return null;return e.pathname.startsWith(`/${r}/${i}`)?a:null}catch(e){return null}}(r,a.get("suggestedUrl"))}}(window.location.hash);if(!e)return i`<div class="pa4 f4">${d.i18n.getMessage("invalid_address_page_sub_header")}</div>`;let{reason:a,address:s,suggestedAddress:r,suggestedUrl:n}=e,{header:l,message:t,advice:p,links:o}=g[a];return i`<div class="flex flex-column flex-row-l">
    <div id="left-col" class="flex flex-column justify-center items-center bg-navy white">
      <div class="flex flex-column justify-center items-center">
        ${(0,_.cP)(200)}
        <p class="mt3 mb0 f3 tc">${d.i18n.getMessage("invalid_address_page_sub_header")}</p>
      </div>
    </div>

    <div id="right-col" class="w-100 flex flex-column justify-around items-start">
      <h1 class="f3 fw5 mt0">${d.i18n.getMessage(l)}</h1>
      <p class="f5 fw4 lh-copy">${d.i18n.getMessage(t)}</p>

      ${u("invalid_address_page_opened_label",s,"red strike")}
      ${r?u("invalid_address_page_correct_label",r,"green"):""}

      <p class="f5 fw4 lh-copy">${d.i18n.getMessage(p)}</p>

      ${n?i`<a
            class="fade-in ba bw1 b--teal bg-teal snow no-underline f5 fw6 ph4 pv3 br2 mv3 pointer"
            href="${n}"
          >${d.i18n.getMessage("invalid_address_page_button",[r])} →</a>`:""}

      <ul class="f5 fw2 pt4 pl0 list">
        ${o.map(({href:e,label:a})=>i`
          <li class="mb2">
            <a class="navy link underline-under hover-aqua" href="${e}" target="_blank" rel="noopener noreferrer">
              ${d.i18n.getMessage(a)}
            </a>
          </li>
        `)}
      </ul>
    </div>
  </div>`}),o.mount("#root"),document.title=d.i18n.getMessage("invalid_address_page_title")}},d={};function n(e){var a=d[e];if(void 0!==a)return a.exports;var s=d[e]={exports:{}};return i[e].call(s.exports,s,s.exports,n),s.exports}n.m=i,n.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return n.d(a,{a:a}),a},n.d=(e,a,s)=>{var r=(a,s)=>{for(var r in a)n.o(a,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,[s]:a[r]})};r(a,"get"),r(s,"value")},n.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),n.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),e=[],n.O=(a,s,r,i)=>{if(s){i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[s,r,i];return}for(var l=1/0,d=0;d<e.length;d++){for(var[s,r,i]=e[d],t=!0,p=0;p<s.length;p++)(!1&i||l>=i)&&Object.keys(n.O).every(e=>n.O[e](s[p]))?s.splice(p--,1):(t=!1,i<l&&(l=i));if(t){e.splice(d--,1);var c=r();void 0!==c&&(a=c)}}return a},n.j="66",a={66:0},n.O.j=e=>0===a[e],s=(e,s)=>{var r,i,[d,l,t]=s,p=0;if(d.some(e=>0!==a[e])){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(t)var c=t(n)}for(e&&e(s);p<d.length;p++)i=d[p],n.o(a,i)&&a[i]&&a[i][0](),a[i]=0;return n.O(c)},(r=self.rspackChunkipfs_companion=self.rspackChunkipfs_companion||[]).forEach(s.bind(null,0)),r.push=s.bind(null,r.push.bind(r));var l=n.O(void 0,["290"],()=>n(6674));l=n.O(l)})();
//# sourceMappingURL=invalidAddressPage.bundle.js.map