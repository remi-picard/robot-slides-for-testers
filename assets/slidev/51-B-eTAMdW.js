import{_ as g}from"./CodeBlockWrapper-C_JswlOh.js";import{I as k}from"../default-47_uW8Vn.js";import{b,aF as i}from"../index-WYfXgJxz.js";import{p as c,u,f as h}from"./context-CJEfZu6v.js";import{b as $,o as y,w as d,g as s,e as x,m as T,a0 as e,v,x as C}from"../modules/vue-4mDv654O.js";import"../modules/unplugin-icons-IIIzr7mw.js";import"./index-z_I6THre.js";import"../modules/shiki-Cs_zAk09.js";const S={__name:"51",setup(m,{expose:n}){n(),c(i);const{$slidev:l,$nav:a,$clicksContext:o,$clicks:r,$page:t,$renderContext:f,$frontmatter:_}=u(),p={$slidev:l,$nav:a,$clicksContext:o,$clicks:r,$page:t,$renderContext:f,$frontmatter:_,InjectedLayout:k,get frontmatter(){return i},get useSlideContext(){return u},get _provideFrontmatter(){return c},get _frontmatterToProps(){return h}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function P(m,n,l,a,o,r){const t=g;return y(),$(a.InjectedLayout,v(C(a._frontmatterToProps(a.frontmatter,50))),{default:d(()=>[n[1]||(n[1]=s("h2",null,"Requests Library",-1)),x(t,T({},{ranges:["1-2","-6","1-2,8-9","1-2,11-13","1-2,15-","all"]}),{default:d(()=>[...n[0]||(n[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"*** Settings ***")]),e(`
`),s("span",{class:"line"},[s("span",null,"Library     RequestsLibrary")]),e(`
`),s("span",{class:"line"},[s("span")]),e(`
`),s("span",{class:"line"},[s("span",null,"*** Test Cases ***")]),e(`
`),s("span",{class:"line"},[s("span",null,"Quick Get Request Test")]),e(`
`),s("span",{class:"line"},[s("span",null,"    ${response}    GET    https://www.google.com")]),e(`
`),s("span",{class:"line"},[s("span")]),e(`
`),s("span",{class:"line"},[s("span",null,"Quick Get Request With Parameters Test")]),e(`
`),s("span",{class:"line"},[s("span",null,"    ${response}    GET    https://www.google.com/search    params=query=ciao    expected_status=200")]),e(`
`),s("span",{class:"line"},[s("span")]),e(`
`),s("span",{class:"line"},[s("span",null,"Quick Get A JSON Body Test")]),e(`
`),s("span",{class:"line"},[s("span",null,"    ${response}    GET    https://jsonplaceholder.typicode.com/posts/1")]),e(`
`),s("span",{class:"line"},[s("span",null,"    Should Be Equal As Strings    1    ${response.json()}[id]")]),e(`
`),s("span",{class:"line"},[s("span")]),e(`
`),s("span",{class:"line"},[s("span",null,"Create Booking")]),e(`
`),s("span",{class:"line"},[s("span",null,"    ${booking_dates}    Create Dictionary    checkin=2022-12-31    checkout=2023-01-01")]),e(`
`),s("span",{class:"line"},[s("span",null,"    ${body}    Create Dictionary")]),e(`
`),s("span",{class:"line"},[s("span",null,"    ...    firstname=Hans")]),e(`
`),s("span",{class:"line"},[s("span",null,"    ...    lastname=Gruber")]),e(`
`),s("span",{class:"line"},[s("span",null,"    ...    totalprice=200")]),e(`
`),s("span",{class:"line"},[s("span",null,"    ...    depositpaid=false")]),e(`
`),s("span",{class:"line"},[s("span",null,"    ...    bookingdates=${booking_dates}")]),e(`
`),s("span",{class:"line"},[s("span",null,"    ${response}    POST    url=https://restful-booker.herokuapp.com/booking    json=${body}")]),e(`
`),s("span",{class:"line"},[s("span",null,"    ${id}    Set Variable    ${response.json()}[bookingid]")])])],-1)])]),_:1},16)]),_:1},16)}const N=b(S,[["render",P],["__file","/@slidev/slides/51.md"]]);export{N as default};
