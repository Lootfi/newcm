(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{APMH:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return o}));var a=n("j/s1"),l=a.d.div.withConfig({displayName:"confidentialitystyle__ConfidWrapper",componentId:"k862c2-0"})(["\n  padding-top: 150px;\n  background-color: black;\n  color: white;\n  ul {\n    padding-left: 20px;\n    li {\n      padding: 7px;\n    }\n  }\n"]),o=a.d.section.withConfig({displayName:"confidentialitystyle__FaqWrapper",componentId:"k862c2-1"})(["\n  padding-bottom: 65px;\n  overflow: hidden;\n  @media (max-width: 768px) {\n    padding: 60px 0 15px;\n  }\n  .sectionHeader {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .reusecore__accordion {\n    max-width: 820px;\n    margin: 0 auto;\n    border-radius: 5px;\n\n    .accordion__item {\n      border-top: 0;\n      background-color: #08153f;\n      color: #fff;\n      border-radius: 5px;\n      transition: all 0.3s ease;\n      cursor: pointer;\n      i {\n        opacity: 0.6;\n      }\n\n      .accordion__header {\n        padding: 20px 30px;\n        margin-bottom: 7px;\n      }\n\n      .accordion__body {\n        padding: 5px 30px 20px;\n      }\n    }\n  }\n\n  .faqButton:hover {\n    background: rgb(235, 77, 75);\n    color: black;\n  }\n"])},EfrM:function(e){e.exports=JSON.parse('{"data":{"saasClassicJson":{"FOOTER_WIDGET":[{"title":"A propos de nous","menuItems":[{"text":"Comment ça marche ?","url":"/comment"},{"text":"Prix","url":"/prix"},{"text":"Nous Contacter","url":"/contactus"}]},{"title":"Mon compte","menuItems":[{"text":"Inscription","url":"#"},{"text":"Connexion","url":"#"},{"text":"FAQ","url":"/faq"}]},{"title":"Base de contacts","menuItems":[{"text":"Accéder à la base","url":"#"},{"text":"Suggérer un contact","url":"/suggest"},{"text":"Supprimer un contact","url":"/supprimer"}]},{"title":"Règles d\'utilisation","menuItems":[{"text":"Termes et Conditions","url":"/conditions"},{"text":"Politique de Confidentialité","url":"/confidentiality"},{"text":"CGU Offre essai 24h","url":"/essai"}]}]}}}')},K5K5:function(e,t,n){"use strict";var a=n("EfrM"),l=n("ERkP"),o=n.n(l),r=n("dWle"),i=n("Eakc"),s=n("PPo7"),c=n("kXTX"),u=n("kQsd"),p=n("j/s1"),m=p.d.footer.withConfig({displayName:"footerstyle__FooterWrapper",componentId:"sc-169980s-0"})(["\n  position: relative;\n  background: #000;\n  overflow: hidden;\n  padding: 15px 0 40px 0;\n  color: #fff;\n\n  .footer_container {\n    background-color: rgb(0, 0, 0);\n    padding-top: 80px;\n    padding-bottom: 80px;\n    position: relative;\n    @media (max-width: 990px) {\n      padding-bottom: 40px;\n    }\n    @media (max-width: 767px) {\n      padding-bottom: 0px;\n    }\n  }\n\n  .bottomRow > * {\n    & > *:nth-child(1) {\n      padding: 0 10px;\n      opacity: 0.6;\n    }\n    & > *:nth-child(2) {\n      padding: 0 10px;\n      opacity: 0.6;\n    }\n  }\n\n  @media (max-width: 750px) {\n    .bottomRow {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n  }\n"]),d=p.d.ul.withConfig({displayName:"footerstyle__List",componentId:"sc-169980s-1"})([""]),f=p.d.li.withConfig({displayName:"footerstyle__ListItem",componentId:"sc-169980s-2"})(["\n  a {\n    color: rgba(200, 200, 200, 0.8);\n    font-size: 14px;\n    line-height: 36px;\n    transition: all 0.2s ease;\n    &:hover,\n    &:focus {\n      outline: 0;\n      text-decoration: none;\n      color: #343d48;\n    }\n  }\n"]),E=m,x=n("dIzs"),g=n.n(x),h=n("gZWR"),b=n("PHms"),I=n.n(b),y=function(e){var t=e.row,n=e.col,l=e.colOne,p=e.colTwo,m=e.titleStyle,x=e.logoStyle,b=e.textStyle,y=e.bottomRow,v=o.a.useContext(h.a).handleLightbox,C=a.data;return o.a.createElement(E,null,o.a.createElement(u.a,{className:"footer_container"},o.a.createElement(r.a,Object.assign({className:"row"},t),o.a.createElement(r.a,l,o.a.createElement(c.a,{href:"#",logoSrc:g.a,title:"Hosting",logoStyle:x}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(i.a,Object.assign({content:"support@contactmajor.com"},b)),o.a.createElement(i.a,Object.assign({content:"+33 183 620 250"},b))),o.a.createElement(r.a,p,C.saasClassicJson.FOOTER_WIDGET.map((function(e,t){return o.a.createElement(r.a,Object.assign({className:"col"},n,{key:"footer-widget-"+t}),o.a.createElement(s.a,Object.assign({content:e.title},m)),o.a.createElement(d,null,e.menuItems.map((function(e,t){return o.a.createElement(f,{key:"footer-list-item-"+t},"#"===e.url?o.a.createElement("a",{href:"#",onClick:function(){return v("Inscription"===e.text?"signup":"connexion")},className:"ListItem"},e.text):o.a.createElement("a",{href:e.url,className:"ListItem"},e.text))}))))}))))),o.a.createElement(u.a,null,o.a.createElement(r.a,Object.assign({},y,{className:"bottomRow"}),o.a.createElement("img",{href:"#",src:g.a,style:x}),o.a.createElement(r.a,y,o.a.createElement("p",null,"© 2020 ContactMajor"),o.a.createElement("div",{style:{display:"flex",alignItems:"baseline"}},o.a.createElement("img",{width:"20px",style:{marginRight:"3px"},src:I.a,alt:"Lock"}),o.a.createElement("p",null,"Secured with SSL"))))))};y.defaultProps={ListItem:{color:"red"},row:{flexBox:!0,flexWrap:"wrap",ml:"-15px",mr:"-15px"},colOne:{width:[1,"35%","35%","23%"],mt:[0,"13px"],mb:["30px",0],pl:["15px",0],pr:["15px","15px",0]},colTwo:{width:["100%","65%","65%","77%"],flexBox:!0,flexWrap:"wrap"},col:{width:["50%","50%","50%","25%"],pl:"15px",pr:"15px",mb:"30px"},titleStyle:{color:"#fff",fontSize:"16px",fontWeight:"700",mb:"30px"},logoStyle:{width:["180px","150px"],mb:"15px"},textStyle:{color:"#eee",fontSize:"16px",mb:"10px"},bottomRow:{display:"inline-flex",alignItems:"center"}};t.a=y},KSKp:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n("ERkP"),l=n.n(a),o=n("vrFN"),r=n("kQsd"),i=n("K5K5"),s=n("APMH"),c=n("HXws");function u(){return l.a.createElement(c.a,null,l.a.createElement(o.a,{title:"Conditions g&eacute;n&eacute;rales de l'offre d'essai - ContactMajor"}),l.a.createElement(s.a,null,l.a.createElement(r.a,null,l.a.createElement("h1",null,"Conditions générales de l'offre d'essai gratuit de 24h de ContactMajor"),l.a.createElement("p",null,l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("p",null,l.a.createElement("span",{style:{fontWeight:"400"}},"VEUILLEZ LIRE ATTENTIVEMENT CES CONDITIONS GÉNÉRALES. ILS CONTIENNENT CERTAINES CONDITIONS ET RESTRICTIONS CONCERNANT LA DISPONIBILITÉ ET L'UTILISATION DE L'OFFRE D'ESSAI GRATUIT, Y COMPRIS CE QUI SE PRODUIT APRÈS LA FIN DE VOTRE PÉRIODE D'ESSAI GRATUIT.")),l.a.createElement("p",null," "),l.a.createElement("p",null,l.a.createElement("h2",null,"Introduction")),l.a.createElement("p",null,l.a.createElement("span",{style:{fontWeight:"400"}},"Cette offre d'essai gratuit de 24 heures de ContactMajor (l '«offre d'essai gratuit») est proposée par APPHOTEL LTD.")),l.a.createElement("p",null," "),l.a.createElement("p",null,l.a.createElement("h2",null,"L'offre")),l.a.createElement("p",null,l.a.createElement("span",{style:{fontWeight:"400"}},"L'offre d'essai gratuit vous permet d'accéder au contenu payan de ContactMajor pour la période de 24 heures à compter du moment où vous soumettez les détails de votre compte et le mode de paiement et que ces informations sont vérifiées par nous (la «période d'essai gratuite»), gratuitement frais.")),l.a.createElement("p",null," "),l.a.createElement("p",null,l.a.createElement("span",{style:{fontWeight:"400"}},"En acceptant cette offre, vous acceptez les conditions d'utilisation et que vos informations seront traitées conformément à la politique de confidentialité.")),l.a.createElement("p",null," "),l.a.createElement("p",null,l.a.createElement("h2",null,"Abonnement et annulation automatiques")),l.a.createElement("p",null,l.a.createElement("span",{style:{fontWeight:"400"}},"Sauf si vous annulez avant la fin de la période d'essai gratuite, vous serez automatiquement inscrit au compte premium de ContactMajor, et votre mode de paiement sera facturé au prix affiché sur votre écran d'inscription. . Vous serez facturé une seule fois au prix alors en vigueur jusqu'à ce que vous annuliez votre abonnement et aucun paiement récurrent mensuel ou annuel ne sera procédé par la suite. L'accès au compte premium sera sans limitation en terme de durée.")),l.a.createElement("p",null," "),l.a.createElement("p",null,l.a.createElement("span",{style:{fontWeight:"400"}},"Pour annuler, vous devez vous connecter à votre compte ContactMajor et suivre les instructions sur la page Paramètres.")),l.a.createElement("p",null," "),l.a.createElement("p",null,l.a.createElement("h2",null,"Disponibilité")),l.a.createElement("p",null,l.a.createElement("span",{style:{fontWeight:"400"}},"L'offre d'essai gratuit n'est disponible que dans certaines juridictions et à certaines personnes. L'offre d'essai gratuit est personnelle à la personne à laquelle elle est présentée.")),l.a.createElement("p",null," "),l.a.createElement("p",null,l.a.createElement("span",{style:{fontWeight:"400"}},"ContactMajor se réserve le droit de modifier ou de résilier cette offre d'essai gratuit à tout moment et pour quelque raison que ce soit.")),l.a.createElement("p",null," "),l.a.createElement("p",null,l.a.createElement("h2",null,"Admissibilité")),l.a.createElement("p",null,l.a.createElement("span",{style:{fontWeight:"400"}},"Pour être éligible à l'offre d'essai gratuit, vous devez:")),l.a.createElement("p",null," "),l.a.createElement("p",null,l.a.createElement("span",{style:{fontWeight:"400"}},"(A) être nouveau sur ContactMajor. Si vous avez déjà acheté un compte Premium ou pris un essai ou une offre de lancement, vous n'êtes pas éligible à cette offre;")),l.a.createElement("p",null," "),l.a.createElement("p",null,l.a.createElement("span",{style:{fontWeight:"400"}},"(B) fournir à ContactMajor un mode de paiement valide et actuel; et")),l.a.createElement("p",null," "),l.a.createElement("p",null,l.a.createElement("span",{style:{fontWeight:"400"}},"(C) inscrivez-vous directement sur le site Web de ContactMajor et non via un tiers.")),l.a.createElement("p",null," "))),l.a.createElement(i.a,null))}}}]);
//# sourceMappingURL=component---src-pages-essai-js-61a72f42073ab765574b.js.map