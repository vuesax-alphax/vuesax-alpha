import{_ as i,r as o,o as k,c as r,a as t,w as s,b as a,d as n}from"./app-bcbed475.js";const d={},m=a("h1",{id:"time-select",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#time-select","aria-hidden":"true"},"#"),n(" Time select")],-1),g=a("h2",{id:"default",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#default","aria-hidden":"true"},"#"),n(" Default")],-1),v=a("p",null,"Use Time Select for time input.",-1),h=a("p",null,"The available time range is 00:00 to 23:59",-1),_=a("div",{class:"custom-container tip"},[a("p",null,[n("This component requires the "),a("code",null,"<client-only> </client-only>"),n(" wrap when used in SSR (eg: "),a("a",{href:"https://nuxt.com/",target:"_blank",rel:"noopener noreferrer"},"Nuxt"),n(") and SSG (eg: "),a("a",{href:"https://vitepress.dev/",target:"_blank",rel:"noopener noreferrer"},"VitePress"),n(").")])],-1),f=a("div",{class:"language-vue","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("center"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vs-time-select")]),n(`
      `),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("value"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},"start"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("08:30"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},"step"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("00:15"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},"end"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("18:30"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},"placeholder"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("Select time"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token punctuation"},"/>")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),q=a("div",{class:"language-vue","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),n(),a("span",{class:"token attr-name"},"setup"),n(),a("span",{class:"token attr-name"},"lang"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("ts"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" ref "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'vue'"),n(`

`),a("span",{class:"token keyword"},"const"),n(" value "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"ref"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"''"),a("span",{class:"token punctuation"},")"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),b=a("h2",{id:"time-formats",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#time-formats","aria-hidden":"true"},"#"),n(" Time Formats")],-1),x=a("p",null,"Use format to control format of time(hours and minutes).",-1),w=a("p",null,[n("Check the list "),a("a",{href:"https://day.js.org/docs/en/display/format#list-of-all-available-formats",target:"_blank",rel:"noopener noreferrer"},"here"),n(" of all available formats of Day.js.")],-1),y=a("div",{class:"custom-container warning"},[a("p",null,"Pay attention to capitalization")],-1),T=a("div",{class:"language-vue","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("center"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vs-time-select")]),n(`
      `),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("value"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},"start"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("00:00"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},"step"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("00:30"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},"end"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("23:59"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},"placeholder"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("Select time"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},"format"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("hh:mm A"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token punctuation"},"/>")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),S=a("div",{class:"language-vue","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),n(),a("span",{class:"token attr-name"},"setup"),n(),a("span",{class:"token attr-name"},"lang"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("ts"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" ref "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'vue'"),n(`

`),a("span",{class:"token keyword"},"const"),n(" value "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"ref"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"''"),a("span",{class:"token punctuation"},")"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),j=a("h2",{id:"fixed-time-ranges",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#fixed-time-ranges","aria-hidden":"true"},"#"),n(" Fixed time ranges")],-1),N=a("p",null,"If start( end ) time is picked at first, then the status of end( start ) time’s options will change accordingly.",-1),V=a("div",{class:"language-vue","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("center time-range"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vs-time-select")]),n(`
      `),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("startTime"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},":max-time"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("endTime"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("mr-4"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},"placeholder"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("Start time"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},"start"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("08:30"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},"step"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("00:15"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},"end"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("18:30"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token punctuation"},"/>")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vs-time-select")]),n(`
      `),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("endTime"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},":min-time"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("startTime"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},"placeholder"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("End time"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},"start"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("08:30"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},"step"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("00:15"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},"end"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("18:30"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token punctuation"},"/>")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),B=a("div",{class:"language-vue","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),n(),a("span",{class:"token attr-name"},"lang"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("ts"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"setup"),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" ref "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'vue'"),n(`

`),a("span",{class:"token keyword"},"const"),n(" startTime "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"ref"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"''"),a("span",{class:"token punctuation"},")"),n(`
`),a("span",{class:"token keyword"},"const"),n(" endTime "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"ref"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"''"),a("span",{class:"token punctuation"},")"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),C=a("h2",{id:"disabled",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#disabled","aria-hidden":"true"},"#"),n(" Disabled")],-1),D=a("p",null,"whether TimeSelect is disabled",-1),P=a("div",{class:"language-vue","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("center"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vs-time-select")]),n(`
      `),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("value"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},"start"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("08:30"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},"step"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("00:15"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},"end"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("18:30"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},"placeholder"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("Select time"),a("span",{class:"token punctuation"},'"')]),n(`
      `),a("span",{class:"token attr-name"},"disabled"),n(`
    `),a("span",{class:"token punctuation"},"/>")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{class:"highlight-line"}," "),a("br"),a("br"),a("br")])],-1),A=a("div",{class:"language-vue","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),n(),a("span",{class:"token attr-name"},"setup"),n(),a("span",{class:"token attr-name"},"lang"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("ts"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" ref "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'vue'"),n(`

`),a("span",{class:"token keyword"},"const"),n(" value "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"ref"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"''"),a("span",{class:"token punctuation"},")"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),E=a("h2",{id:"api",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#api","aria-hidden":"true"},"#"),n(" API")],-1);function F(I,U){const c=o("time-select-default"),e=o("card"),l=o("time-select-format"),p=o("time-select-time-range"),u=o("time-select-disabled");return k(),r("div",null,[m,t(e,null,{example:s(()=>[t(c)]),template:s(()=>[f]),script:s(()=>[q]),default:s(()=>[g,v,h,_]),_:1}),t(e,null,{example:s(()=>[t(l)]),template:s(()=>[T]),script:s(()=>[S]),default:s(()=>[b,x,w,y]),_:1}),t(e,null,{example:s(()=>[t(p)]),template:s(()=>[V]),script:s(()=>[B]),default:s(()=>[j,N]),_:1}),t(e,null,{example:s(()=>[t(u)]),template:s(()=>[P]),script:s(()=>[A]),default:s(()=>[C,D]),_:1}),t(e,null,{default:s(()=>[E]),_:1})])}const G=i(d,[["render",F],["__file","time-select.html.vue"]]);export{G as default};
