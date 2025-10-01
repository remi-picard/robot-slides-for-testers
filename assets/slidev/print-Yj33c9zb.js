import{d as _,$ as f,y as u,f as n,o as i,g as e,t as a,F as h,Z as g,i as v,e as b,a0 as x}from"../modules/vue-4mDv654O.js";import{u as N,j as y,c as m,b as k}from"../index-BPoptjxD.js";import{N as w}from"./NoteDisplay-DstEKkSW.js";import"../modules/shiki-Cs_zAk09.js";const S=_({__name:"print",setup(p,{expose:r}){r();const{slides:l,total:o}=N();f(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),y({title:`Notes - ${m.title}`});const d=u(()=>l.value.map(t=>{var s;return(s=t.meta)==null?void 0:s.slide}).filter(t=>t!==void 0&&t.noteHTML!=="")),c={slides:l,total:o,slidesWithNote:d,get configs(){return m},NoteDisplay:w};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),D={id:"page-root"},L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},j={class:"opacity-50"},B={class:"text-lg"},H={class:"font-bold flex gap-2"},W={class:"opacity-50"},C={key:0,class:"border-main mb-8"};function F(p,r,l,o,d,c){return i(),n("div",D,[e("div",L,[e("div",T,[e("h1",V,a(o.configs.title),1),e("div",j,a(new Date().toLocaleString()),1)]),(i(!0),n(h,null,g(o.slidesWithNote,(t,s)=>(i(),n("div",{key:s,class:"flex flex-col gap-4 break-inside-avoid-page"},[e("div",null,[e("h2",B,[e("div",H,[e("div",W,a(t==null?void 0:t.no)+"/"+a(o.total),1),x(" "+a(t==null?void 0:t.title)+" ",1),r[0]||(r[0]=e("div",{class:"flex-auto"},null,-1))])]),b(o.NoteDisplay,{"note-html":t.noteHTML,class:"max-w-full"},null,8,["note-html"])]),s<o.slidesWithNote.length-1?(i(),n("hr",C)):v("v-if",!0)]))),128))])])}const O=k(S,[["render",F],["__file","/home/runner/work/robot-slides-for-testers/robot-slides-for-testers/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{O as default};
