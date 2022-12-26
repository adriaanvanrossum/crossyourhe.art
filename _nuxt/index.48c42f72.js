import{o,a as n,b as s,e as F,r as v,u as t,w as b,v as x,i as L,f as m,t as U,h as c,F as C,j as V,k as P,p as O,l as z}from"./entry.648ab0b7.js";function E(a,i){return o(),n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 9h16.5m-16.5 6.75h16.5"})])}function H(a,i){return o(),n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 12h-15"})])}function D(a,i){return o(),n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})])}function q(a,i){return o(),n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"})])}function G(a,i){return o(),n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})])}const J=a=>(O("data-v-606862f9"),a=a(),z(),a),K=J(()=>s("p",null,[m(" Calculate a "),s("a",{href:"https://en.wikipedia.org/wiki/Cross-multiplication"},"cross-multiplication"),m(" without picking up a pen. ")],-1)),Q={class:"max-w-xl mx-auto grid grid-cols-4 gap-4 justify-center mt-8 mb-8"},W={class:"flex items-center justify-center"},X={class:"flex items-center justify-center"},Y=["onUpdate:modelValue"],Z=["onClick"],I={class:"mt-6 col-span-2 flex justify-center items-center space-x-4"},ee={__name:"Calculator",setup(a){const i=v("People"),p=v("Apples"),g=v(!1),f=v(!1),y=v(new Date),l=v([[4,12],[3,null]]),M=()=>{l.value.push([0,null])},N=()=>{l.value.pop()},R=()=>{l.value=[[4,12],[3,null]],i.value="People",p.value="Apples",y.value=new Date},$=(h,e)=>{const r=e===0,k=l.value[h][r?1:0];if(!k)return;const u=l.value.filter((_,A)=>A!==h).find(_=>_[0]&&_[1]);if(!u)return;const[w,j]=u,B=(r?k*w/j:k*j/w).toFixed(3).replace(/\.?0+$/,""),T=l.value[h][e]===null,S=y.value.getTime()+200<Date.now();return T&&S&&(l.value[h][e]=B),B};return(h,e)=>(o(),n("div",null,[K,s("div",Q,[s("div",W,[t(g)?b((o(),n("input",{key:0,"onUpdate:modelValue":e[0]||(e[0]=r=>L(i)?i.value=r:null),type:"text",placeholder:"People",onBlur:e[1]||(e[1]=r=>g.value=!1)},null,544)),[[x,t(i)]]):(o(),n("p",{key:1,class:"text-right cursor-pointer",onClick:e[2]||(e[2]=r=>g.value=!0)},[m(U(t(i)||"Unit")+" ",1),c(t(D),{class:"inline ml-1 w-3 h-3"})]))]),s("div",X,[t(f)?b((o(),n("input",{key:0,"onUpdate:modelValue":e[3]||(e[3]=r=>L(p)?p.value=r:null),type:"text",placeholder:"Apples",onBlur:e[4]||(e[4]=r=>f.value=!1)},null,544)),[[x,t(p)]]):(o(),n("p",{key:1,class:"text-right cursor-pointer",onClick:e[5]||(e[5]=r=>f.value=!0)},[m(U(t(p)||"Unit")+" ",1),c(t(D),{class:"inline ml-1 w-3 h-3"})]))]),(o(!0),n(C,null,V(t(l),(r,d)=>(o(),n(C,{key:`row:${d}`},[(o(!0),n(C,null,V(r,(k,u)=>(o(),n("div",{key:`cell:${d}-${u}`,class:"relative"},[b(s("input",{type:"text","onUpdate:modelValue":w=>t(l)[d][u]=w},null,8,Y),[[x,t(l)[d][u]]]),$(d,u)?(o(),n("a",{key:0,onClick:w=>t(l)[d][u]=$(d,u),class:"absolute top-2 right-2 sm:p-1 border-2 border-violet-500 rounded cursor-pointer"},[c(t(E),{class:"fill-violet-600 w-6 h-6 sm:w-7 sm:h-7"})],8,Z)):P("",!0)]))),128))],64))),128)),s("div",I,[s("button",{onClick:e[6]||(e[6]=r=>R()),class:"border-2 border-indigo-600 dark:border-indigo-400 rounded-xl hover:bg-indigo-600 dark:hover:bg-indigo-400"},[c(t(G),{class:"w-12 h-12 p-2 stroke-white"})]),s("button",{onClick:e[7]||(e[7]=r=>N()),class:"border-2 border-indigo-600 dark:border-indigo-400 rounded-xl hover:bg-indigo-600 dark:hover:bg-indigo-400"},[c(t(H),{class:"w-12 h-12 p-2 stroke-white"})]),s("button",{onClick:e[8]||(e[8]=r=>M()),class:"border-2 border-indigo-600 dark:border-indigo-400 rounded-xl hover:bg-indigo-600 dark:hover:bg-indigo-400"},[c(t(q),{class:"w-12 h-12 p-2 stroke-white"})])])])]))}},te=F(ee,[["__scopeId","data-v-606862f9"]]),re={__name:"index",setup(a){return(i,p)=>(o(),n("div",null,[c(te)]))}};export{re as default};