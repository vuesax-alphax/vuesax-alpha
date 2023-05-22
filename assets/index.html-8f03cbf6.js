import{_ as p,r as c,o as u,c as r,a as s,w as t,b as n,d as a}from"./app-f60374db.js";const i={},k=n("h1",{id:"colors",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#colors","aria-hidden":"true"},"#"),a(" Colors")],-1),d=n("h2",{id:"default-colors",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#default-colors","aria-hidden":"true"},"#"),a(" Default Colors")],-1),h=n("p",null,"Vuesax has the main colors that are maintained throughout the application to facilitate change and effective operation",-1),m=n("p",null,"The main colors can be changed and customized to the taste of each developer for a more personalized application",-1),_=n("p",null,"Default colors:",-1),f=n("ul",null,[n("li",null,"primary"),n("li",null,"success"),n("li",null,"danger"),n("li",null,"warn"),n("li",null,"dark")],-1),g=n("h2",{id:"customize-theme-colors",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#customize-theme-colors","aria-hidden":"true"},"#"),a(" Customize Theme Colors")],-1),v=n("p",null,"You can change the colors as you want and at any time, vuesax uses native css variables which means you can access them and change them whenever you want",-1),y=n("p",null,"equal vuesax gives you several ways to change the main colors either by css or javascript",-1),b=n("h2",{id:"javascript",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#javascript","aria-hidden":"true"},"#"),a(" Javascript")],-1),x=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[a("app"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),a("Vuesax"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  colors`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    primary`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'#5b3cc4'"),n("span",{class:"token punctuation"},","),a(`
    success`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'rgb(23, 201, 100)'"),n("span",{class:"token punctuation"},","),a(`
    danger`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'rgb(242, 19, 93)'"),n("span",{class:"token punctuation"},","),a(`
    warning`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'rgb(255, 130, 0)'"),n("span",{class:"token punctuation"},","),a(`
    dark`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'rgb(36, 33, 69)'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])])],-1),w=n("h2",{id:"css",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#css","aria-hidden":"true"},"#"),a(" CSS")],-1),C=n("p",null,"You can change the vuesax variables by means of css like any other css variable",-1),V=n("div",{class:"custom-container warning"},[a("HEX Format Numbers Only "),n("p",null,[a("It is important that the colors are in HEX format and only the numerical value for example: "),n("code",null,"rgb (255,100,50)"),a(" is equivalent to "),n("code",null,"255,100,50")])],-1),T=n("div",{class:"language-css","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},":root"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"--vs-primary"),n("span",{class:"token punctuation"},":"),a(" 91"),n("span",{class:"token punctuation"},","),a(" 60"),n("span",{class:"token punctuation"},","),a(" 196"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"--vs-success"),n("span",{class:"token punctuation"},":"),a(" 23"),n("span",{class:"token punctuation"},","),a(" 201"),n("span",{class:"token punctuation"},","),a(" 100"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"--vs-danger"),n("span",{class:"token punctuation"},":"),a(" 242"),n("span",{class:"token punctuation"},","),a(" 19"),n("span",{class:"token punctuation"},","),a(" 93"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"--vs-warn"),n("span",{class:"token punctuation"},":"),a(" 254"),n("span",{class:"token punctuation"},","),a(" 130"),n("span",{class:"token punctuation"},","),a(" 0"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"--vs-dark"),n("span",{class:"token punctuation"},":"),a(" 36"),n("span",{class:"token punctuation"},","),a(" 33"),n("span",{class:"token punctuation"},","),a(" 69"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),j=n("h2",{id:"vs-function",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vs-function","aria-hidden":"true"},"#"),a(" VS Function")],-1),N=n("p",null,[a("You can change the main colors at any point of your application but only on the client side with the existence of the "),n("code",null,"document object"),a(" with the function of vuesax "),n("code",null,"setCssVar()")],-1),z=n("div",{class:"custom-container warning"},[n("p",null,[a("You can only use this function when you can obtain the document object, for example it cannot be used in the "),n("code",null,"created()"),a(" hook of vuejs since the document and the elements are not yet rendered")])],-1),E=n("div",{class:"language-html","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" onMounted "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" setCssVar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vuesax-alpha'"),a(`

`),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setCssVar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'primary'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'#000'"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),D=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[a(`/**
 * `),n("span",{class:"token keyword"},"@param"),a(),n("span",{class:"token parameter"},"propertyName"),a(` The name of the property
 * `),n("span",{class:"token keyword"},"@param"),a(),n("span",{class:"token parameter"},"value"),a(` The value of the property
 * `),n("span",{class:"token keyword"},"@param"),a(),n("span",{class:"token parameter"},"el"),a(` The element to set the property. Default document.documentElement
 * `),n("span",{class:"token keyword"},"@param"),a(),n("span",{class:"token parameter"},"namespace"),a(` The namespace of vs app. Default'vs'
 */`)]),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"setCssVar"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),a(`
  propertyName`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),a(` 
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),a(` 
  el`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" HTMLElement"),n("span",{class:"token punctuation"},","),a(` 
  namespace`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"string"),a(`
`),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"void"),a(`
`)])])],-1);function Y(q,B){const l=c("colors-default"),e=c("card"),o=c("command");return u(),r("div",null,[k,s(e,null,{default:t(()=>[d,h,m,_,f,s(l)]),_:1}),s(e,null,{default:t(()=>[g,v,y]),_:1}),s(e,null,{default:t(()=>[b,s(o,null,{default:t(()=>[x]),_:1})]),_:1}),s(e,null,{default:t(()=>[w,C,V,s(o,null,{default:t(()=>[T]),_:1})]),_:1}),s(e,null,{default:t(()=>[j,N,z,s(o,null,{default:t(()=>[E]),_:1}),s(o,null,{default:t(()=>[D]),_:1})]),_:1})])}const M=p(i,[["render",Y],["__file","index.html.vue"]]);export{M as default};
