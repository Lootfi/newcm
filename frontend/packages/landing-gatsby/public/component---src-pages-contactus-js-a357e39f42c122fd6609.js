(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{APMH:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var a=n("j/s1"),o=a.d.div.withConfig({displayName:"confidentialitystyle__ConfidWrapper",componentId:"k862c2-0"})(["\n  padding-top: 150px;\n  background-color: black;\n  color: white;\n  ul {\n    padding-left: 20px;\n    li {\n      padding: 7px;\n    }\n  }\n"]),i=a.d.section.withConfig({displayName:"confidentialitystyle__FaqWrapper",componentId:"k862c2-1"})(["\n  padding-bottom: 65px;\n  overflow: hidden;\n  @media (max-width: 768px) {\n    padding: 60px 0 15px;\n  }\n  .sectionHeader {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .reusecore__accordion {\n    max-width: 820px;\n    margin: 0 auto;\n    border-radius: 5px;\n\n    .accordion__item {\n      border-top: 0;\n      background-color: #08153f;\n      color: #fff;\n      border-radius: 5px;\n      transition: all 0.3s ease;\n      cursor: pointer;\n      i {\n        opacity: 0.6;\n      }\n\n      .accordion__header {\n        padding: 20px 30px;\n        margin-bottom: 7px;\n      }\n\n      .accordion__body {\n        padding: 5px 30px 20px;\n      }\n    }\n  }\n\n  .faqButton:hover {\n    background: rgb(235, 77, 75);\n    color: black;\n  }\n"])},EfrM:function(e){e.exports=JSON.parse('{"data":{"saasClassicJson":{"FOOTER_WIDGET":[{"title":"A propos de nous","menuItems":[{"text":"Comment ça marche ?","url":"/comment"},{"text":"Prix","url":"/prix"},{"text":"Nous Contacter","url":"/contactus"}]},{"title":"Mon compte","menuItems":[{"text":"Inscription","url":"#"},{"text":"Connexion","url":"#"},{"text":"FAQ","url":"/faq"}]},{"title":"Base de contacts","menuItems":[{"text":"Accéder à la base","url":"#"},{"text":"Suggérer un contact","url":"/suggest"},{"text":"Supprimer un contact","url":"/supprimer"}]},{"title":"Règles d\'utilisation","menuItems":[{"text":"Termes et Conditions","url":"/conditions"},{"text":"Politique de Confidentialité","url":"/confidentiality"},{"text":"CGU Offre essai 24h","url":"/essai"}]}]}}}')},K5K5:function(e,t,n){"use strict";var a=n("EfrM"),o=n("ERkP"),i=n.n(o),r=n("dWle"),l=n("Eakc"),c=n("PPo7"),d=n("kXTX"),s=n("kQsd"),p=n("j/s1"),m=p.d.footer.withConfig({displayName:"footerstyle__FooterWrapper",componentId:"sc-169980s-0"})(["\n  position: relative;\n  background: #000;\n  overflow: hidden;\n  padding: 20px 0 10px 0;\n  color: #fff;\n  @media (max-width: 400px) {\n    padding-top: 0;\n  }\n\n  .footer_container {\n    background-color: rgb(0, 0, 0);\n    padding-top: 80px;\n    padding-bottom: 20px;\n    position: relative;\n    @media (max-width: 990px) {\n      padding-bottom: 40px;\n    }\n    @media (max-width: 767px) {\n      padding-bottom: 0px;\n    }\n  }\n\n  .bottomRow > * {\n    & > *:nth-child(1) {\n      padding-right: 5px;\n      opacity: 0.6;\n    }\n    & > *:nth-child(2) {\n      opacity: 0.6;\n    }\n  }\n\n  @media (max-width: 750px) {\n    .bottomRow {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      font-size: 15px;\n    }\n  }\n  @media (max-width: 400px) {\n    .bottomRow > * {\n      & > *:nth-child(1) {\n        padding-right: 0px;\n        opacity: 0.6;\n      }\n    }\n  }\n"]),x=p.d.ul.withConfig({displayName:"footerstyle__List",componentId:"sc-169980s-1"})([""]),u=p.d.li.withConfig({displayName:"footerstyle__ListItem",componentId:"sc-169980s-2"})(["\n  a {\n    color: rgba(200, 200, 200, 0.8);\n    font-size: 14px;\n    line-height: 36px;\n    transition: all 0.2s ease;\n    &:hover,\n    &:focus {\n      outline: 0;\n      text-decoration: none;\n      color: #343d48;\n    }\n  }\n"]),f=m,g=n("dIzs"),h=n.n(g),b=n("gZWR"),w=n("PHms"),E=n.n(w),y=function(e){var t=e.row,n=e.col,o=e.colOne,p=e.colTwo,m=e.titleStyle,g=e.logoStyle,w=e.textStyle,y=e.bottomRow,I=i.a.useContext(b.a).handleLightbox,_=a.data;return i.a.createElement(f,null,i.a.createElement(s.a,{className:"footer_container"},i.a.createElement(r.a,Object.assign({className:"row"},t),i.a.createElement(r.a,o,i.a.createElement(d.a,{href:"#",logoSrc:h.a,title:"Hosting",logoStyle:g}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(l.a,Object.assign({content:"support@contactmajor.com"},w)),i.a.createElement(l.a,Object.assign({content:"+33 183 620 250"},w))),i.a.createElement(r.a,p,_.saasClassicJson.FOOTER_WIDGET.map((function(e,t){return i.a.createElement(r.a,Object.assign({className:"col"},n,{key:"footer-widget-"+t}),i.a.createElement(c.a,Object.assign({content:e.title},m)),i.a.createElement(x,null,e.menuItems.map((function(e,t){return i.a.createElement(u,{key:"footer-list-item-"+t},"#"===e.url?i.a.createElement("a",{href:"#",onClick:function(){return I("Inscription"===e.text?"signup":"connexion")},className:"ListItem"},e.text):i.a.createElement("a",{href:e.url,className:"ListItem"},e.text))}))))}))))),i.a.createElement(s.a,null,i.a.createElement(r.a,Object.assign({},y,{className:"bottomRow"}),i.a.createElement(r.a,y,i.a.createElement("p",null,"© 2020 ContactMajor"),i.a.createElement("div",{style:{display:"flex",alignItems:"baseline"}},i.a.createElement("img",{width:"20px",style:{marginRight:"1px"},src:E.a,alt:"Lock"}),i.a.createElement("p",null,"Sécurisé avec SSL"))))))};y.defaultProps={ListItem:{color:"red"},row:{flexBox:!0,flexWrap:"wrap",ml:"-15px",mr:"-15px"},colOne:{width:[1,"35%","35%","23%"],mt:[0,"13px"],mb:["30px",0],pl:["15px",0],pr:["15px","15px",0]},colTwo:{width:["100%","65%","65%","77%"],flexBox:!0,flexWrap:"wrap"},col:{width:["50%","50%","50%","25%"],pl:"15px",pr:"15px",mb:"30px"},titleStyle:{color:"#fff",fontSize:"16px",fontWeight:"700",mb:"30px"},logoStyle:{width:["180px","150px"],mb:"15px"},textStyle:{color:"#eee",fontSize:"16px",mb:"10px"},bottomRow:{display:"inline-flex",alignItems:"center"}};t.a=y},QooC:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n("ERkP"),o=n.n(a),i=n("HXws"),r=n("kQsd"),l=n("APMH"),c=n("vrFN"),d=n("K5K5");function s(){return o.a.useEffect((function(){var e,t=document,n=t.getElementById,a=t.createElement,o=t.getElementsByTagName,i="aidaform-embed";n.call(t,i)||((e=a.call(t,"script")).id=i,e.src="https://embed.aidaform.com/embed.js",(t.head||o.call(t,"head")[0]).appendChild(e))}),[]),o.a.createElement(i.a,null,o.a.createElement(c.a,{title:"Contactez nous - ContactMajor"}),o.a.createElement(l.a,null,o.a.createElement(r.a,null,o.a.createElement("div",{"data-aidaform-widget":"form-2019-12","data-url":"https://contactmajor.aidaform.com/contact","data-width":"100%","data-height":"500px","data-do-resize":!0}))),o.a.createElement(d.a,null))}}}]);
//# sourceMappingURL=component---src-pages-contactus-js-a357e39f42c122fd6609.js.map