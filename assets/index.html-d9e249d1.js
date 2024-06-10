import{_ as i,r as o,o as u,c as k,a as t,w as s,b as n,d as a}from"./app-bcbed475.js";const r={},d=n("h1",{id:"icons",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#icons","aria-hidden":"true"},"#"),a(" Icons")],-1),h=n("h2",{id:"installation",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),a(" Installation")],-1),_=n("p",null,"Vuesax alpha provides a set of common icons.",-1),m=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(` @vuesax-alpha/icons-vue
`)])])],-1),g=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(` @vuesax-alpha/icons-vue
`)])])],-1),x=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),a(),n("span",{class:"token function"},"install"),a(` @vuesax-alpha/icons-vue
`)])])],-1),f=n("h2",{id:"register-all-icons",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#register-all-icons","aria-hidden":"true"},"#"),a(" Register All Icons")],-1),v=n("div",{class:"custom-container tip"},[n("p",null,"You can change icon name")],-1),b=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// main.ts"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token operator"},"*"),a(),n("span",{class:"token keyword"},"as"),a(" VuesaxAlphaIconsVue "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@vuesax-alpha/icons-vue'"),a(`

`),n("span",{class:"token keyword"},"const"),a(" app "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"createApp"),n("span",{class:"token punctuation"},"("),a("App"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token keyword"},"for"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"["),a("key"),n("span",{class:"token punctuation"},","),a(" component"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token keyword"},"of"),a(" Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"entries"),n("span",{class:"token punctuation"},"("),a("VuesaxAlphaIconsVue"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"component"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"VsIcon"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("key"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(" component"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),y=n("h2",{id:"example",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#example","aria-hidden":"true"},"#"),a(" Example")],-1),w=n("div",{class:"language-vue","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("center"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("vs-icon")]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("30"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("vs-icon-home")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("vs-icon")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),V=n("h2",{id:"icon-collection",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#icon-collection","aria-hidden":"true"},"#"),a(" Icon Collection")],-1);function I(A,B){const c=o("command"),e=o("card"),l=o("icons-example"),p=o("icons-collection");return u(),k("div",null,[d,t(e,null,{default:s(()=>[h,_,t(c,null,{npm:s(()=>[m]),yarn:s(()=>[g]),pnpm:s(()=>[x]),_:1})]),_:1}),t(e,null,{default:s(()=>[f,v,b]),_:1}),t(e,null,{example:s(()=>[t(l)]),template:s(()=>[w]),default:s(()=>[y]),_:1}),t(e,null,{example:s(()=>[t(p)]),default:s(()=>[V]),_:1})])}const N=i(r,[["render",I],["__file","index.html.vue"]]);export{N as default};
