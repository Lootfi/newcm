(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"7QsZ":function(e,t,n){"use strict";var a=n("IGGJ");t.__esModule=!0,t.default=void 0;var i,r=a(n("1Pcy")),s=a(n("W/Kd")),o=a(n("LdEA")),d=a(n("97Jx")),c=a(n("ERkP")),l=a(n("aWzz")),u=function(e){var t=(0,d.default)({},e),n=t.resolutions,a=t.sizes,i=t.critical;return n&&(t.fixed=n,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(x&&!!window.matchMedia(t).matches)},f=function(e){var t=e.fluid,n=e.fixed;return m(t||n).src},m=function(e){if(x&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var n=e.findIndex((function(e){return void 0===e.media}));if(-1!==n)return e[n]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),n=f(t);return g[n]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,x="undefined"!=typeof window,y=x&&window.IntersectionObserver,v=new WeakMap;function E(e){return e.map((function(e){var t=e.src,n=e.srcSet,a=e.srcSetWebp,i=e.media,r=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},a&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:a,sizes:r}),c.default.createElement("source",{media:i,srcSet:n,sizes:r}))}))}function w(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function S(e){return e.map((function(e){var t=e.src,n=e.media,a=e.tracedSVG;return c.default.createElement("source",{key:t,media:n,srcSet:a})}))}function I(e){return e.map((function(e){var t=e.src,n=e.media,a=e.base64;return c.default.createElement("source",{key:t,media:n,srcSet:a})}))}function N(e,t){var n=e.srcSet,a=e.srcSetWebp,i=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?a:n)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var C=function(e,t){var n=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return n&&(n.observe(e),v.set(e,t)),function(){n.unobserve(e),v.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+c+s+o+n+a+t+r+i+d+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=c.default.forwardRef((function(e,t){var n=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,s=e.ariaHidden,o=c.default.createElement(k,(0,d.default)({ref:t,src:n},r,{ariaHidden:s}));return a.length>1?c.default.createElement("picture",null,i(a),o):o})),k=c.default.forwardRef((function(e,t){var n=e.sizes,a=e.srcSet,i=e.src,r=e.style,s=e.onLoad,l=e.onError,u=e.loading,p=e.draggable,f=e.ariaHidden,m=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,d.default)({"aria-hidden":f,sizes:n,srcSet:a,src:i},m,{onLoad:s,onError:l,ref:t,loading:u,draggable:p,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));k.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var z=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=x&&h(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!b&&y&&!n.isCritical&&!n.seenBefore;var a=n.isCritical||x&&(b||!n.useIOSupport);return n.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=c.default.createRef(),n.placeholderRef=t.placeholderRef||c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,r.default)(n)),n.handleRef=n.handleRef.bind((0,r.default)(n)),n}(0,s.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=u(e),n=f(t),g[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=u(this.props),t=e.title,n=e.alt,a=e.className,i=e.style,r=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,l=e.placeholderStyle,p=void 0===l?{}:l,f=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,x=e.durationFadeIn,y=e.Tag,v=e.itemProp,w=e.loading,N=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,W=(0,d.default)({opacity:C?1:0,transition:z?"opacity "+x+"ms":"none"},o),_="boolean"==typeof b?"lightgray":b,L={transitionDelay:x+"ms"},R=(0,d.default)({opacity:this.state.imgLoaded?0:1},z&&L,o,p),q={title:t,alt:this.state.isVisible?"":n,style:R,className:f,itemProp:v};if(g){var T=g,M=m(g);return c.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:M.maxWidth?M.maxWidth+"px":null,maxHeight:M.maxHeight?M.maxHeight+"px":null},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},c.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),_&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:_,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&L)}),M.base64&&c.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:q,imageVariants:T,generateSources:I}),M.tracedSVG&&c.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:q,imageVariants:T,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,E(T),c.default.createElement(k,{alt:n,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:W,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:n,title:t,loading:w},M,{imageVariants:T}))}}))}if(h){var H=h,P=m(h),V=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},r);return"inherit"===r.display&&delete V.display,c.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},_&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:_,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},z&&L)}),P.base64&&c.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:q,imageVariants:H,generateSources:I}),P.tracedSVG&&c.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:q,imageVariants:H,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,E(H),c.default.createElement(k,{alt:n,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:W,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:n,title:t,loading:w},P,{imageVariants:H}))}}))}return null},t}(c.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var W=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),_=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string,maxWidth:l.default.number,maxHeight:l.default.number});z.propTypes={resolutions:W,sizes:_,fixed:l.default.oneOfType([W,l.default.arrayOf(W)]),fluid:l.default.oneOfType([_,l.default.arrayOf(_)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var L=z;t.default=L},APMH:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return o}));var a=n("j/s1"),i=a.d.div.withConfig({displayName:"confidentialitystyle__PasswordResetWrapper",componentId:"k862c2-0"})(["\n  padding-top: 160px;\n  background-color: black;\n  color: white;\n\n  .form-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    position: relative;\n    height: 35%;\n  }\n\n  .btn-red3 {\n    border: 1px solid #c83233;\n    padding: 10px;\n    width: 180px;\n    font-family: 'Poppins', sans-serif;\n    border-radius: 3px;\n    transition: 0.3s;\n    font-size: 15px;\n    background-color: #c83233;\n    text-transform: uppercase;\n    color: #ffffff;\n    cursor: pointer;\n    text-align: center;\n  }\n\n  .form-container input {\n    border: 1px solid #b0b0b0;\n    padding: 10px;\n    width: 300px;\n    height: 45px;\n    border-radius: 5px;\n    margin-bottom: 30px;\n  }\n\n  .form-container input:focus {\n    border: 1px solid #000000;\n  }\n"]),r=a.d.div.withConfig({displayName:"confidentialitystyle__ConfidWrapper",componentId:"k862c2-1"})(["\n  padding-top: 160px;\n  background-color: black;\n  color: white;\n  ul {\n    padding-left: 20px;\n    li {\n      padding: 7px;\n    }\n  }\n"]),s=a.d.div.withConfig({displayName:"confidentialitystyle__FoncWrapper",componentId:"k862c2-2"})(["\n  padding-top: 80px;\n  background-color: black;\n  color: white;\n"]),o=a.d.section.withConfig({displayName:"confidentialitystyle__FaqWrapper",componentId:"k862c2-3"})(["\n  padding-bottom: 65px;\n  overflow: hidden;\n  @media (max-width: 768px) {\n    padding: 60px 0 15px;\n  }\n  .sectionHeader {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .reusecore__accordion {\n    max-width: 820px;\n    margin: 0 auto;\n    border-radius: 5px;\n\n    .accordion__item {\n      border-top: 0;\n      background-color: #08153f;\n      color: #fff;\n      border-radius: 5px;\n      transition: all 0.3s ease;\n      cursor: pointer;\n      i {\n        opacity: 0.6;\n      }\n\n      .accordion__header {\n        padding: 20px 30px;\n        margin-bottom: 7px;\n      }\n\n      .accordion__body {\n        padding: 5px 30px 20px;\n      }\n    }\n  }\n\n  .faqButton:hover {\n    background: rgb(235, 77, 75);\n    color: black;\n  }\n\n  .loader {\n    text-align: center;\n  }\n"])},Chfx:function(e){e.exports=JSON.parse('{"data":{"saasClassicJson":{"IMAGES_FONCTIONNEMENT":{"first":{"childImageSharp":{"fluid":{"src":"/static/77e6f4258773c45960d6606cf9b78a01/fb51d/1.jpg"}}},"second":{"childImageSharp":{"fluid":{"src":"/static/8713dd07c1aacdc3a834b5ee28ac233f/fb51d/2.jpg"}}},"third":{"childImageSharp":{"fluid":{"src":"/static/9c1e74cf00786d54db5c86dc7fac087f/fb51d/3.jpg"}}},"fourth":{"childImageSharp":{"fluid":{"src":"/static/5f7ad8ab8dfb8161bfcab25e5994cca0/fb51d/4.jpg"}}}}}}}')},DRSL:function(e,t,n){e.exports=n.p+"static/banner-51e6912c8042af64c7d4a5223ac7f621.jpg"},OM9D:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.play=void 0;t.play={viewBox:"0 0 20 20",children:[{name:"path",attribs:{d:"M15,10.001c0,0.299-0.305,0.514-0.305,0.514l-8.561,5.303C5.51,16.227,5,15.924,5,15.149V4.852\r\n\tc0-0.777,0.51-1.078,1.135-0.67l8.561,5.305C14.695,9.487,15,9.702,15,10.001z"}}]}},PypQ:function(e,t,n){"use strict";var a=n("ERkP"),i=n.n(a),r=n("2xV5"),s=n.n(r),o=n("MFEH"),d=n.n(o),c=n("VU+f"),l=n("dWle"),u=n("Eakc"),p=n("PPo7"),f=n("xqb7"),m=n("k/KV"),g=n("kQsd"),h=n("j/s1"),b=h.d.div.withConfig({displayName:"tiltShapestyle__ShapeWrapper",componentId:"ow40tx-0"})(["\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  z-index: 0;\n  pointer-events: none;\n\n  svg {\n    width: 100%;\n    height: auto;\n    display: block;\n  }\n  & ~ div {\n    z-index: 1;\n    position: relative;\n  }\n"]),x=function(e){var t=e.className,n=e.color,a=["tilt_shape"];return t&&a.push(t),i.a.createElement(b,{className:a.join(" ")},i.a.createElement("svg",{"data-name":"Layer 1",viewBox:"0 0 1920 184.16",fill:n||"#000"},i.a.createElement("path",{d:"M0,2.16s260.5-32,880,150c.16.05,54,14.62,80,15.08,31.06.55,80.88-15,81.06-15.08,603.5-176.84,879-150,879-150v182H0Z"})))},y=n("DRSL"),v=n.n(y),E=Object(h.e)(["\n  0% {\n\t\tbox-shadow: 0 0 0 3px rgba(255,65,108,0.3);\n\t\topacity: 1;\n\t\ttransform: scale3d(1, 1, 1);\n\t}\n\t100% {\n\t\tbox-shadow: 0 0 0 100px rgba(255,65,108,0);\n\t\topacity: 0;\n\t\ttransform: scale3d(1, 1, 1);\n\t}\n"]),w=h.d.section.withConfig({displayName:"bannerstyle__BannerWrapper",componentId:"ygifw5-0"})(["\n  padding: 150px 0 0 0;\n  background-image: url(",");\n  background-size: cover;\n  background-position: top center;\n  overflow: hidden;\n  @media (max-width: 575px) {\n    padding: 120px 0 0 0;\n  }\n\n  img {\n    max-width: 100%;\n    height: auto;\n    display: block;\n  }\n\n  .banner-shape {\n    z-index: 2;\n  }\n"],v.a),S=(h.d.div.withConfig({displayName:"bannerstyle__DiscountWrapper",componentId:"ygifw5-1"})(["\n  text-align: center;\n"]),h.d.div.withConfig({displayName:"bannerstyle__DiscountLabel",componentId:"ygifw5-2"})(["\n  font-family: 'Open Sans', sans-serif;\n  display: inline-block;\n  border-radius: 4em;\n  padding: 9px 22px;\n  margin-bottom: 22px;\n  background-color: rgba(255, 255, 255, 0.15);\n  @media (max-width: 575px) {\n    padding: 7px 10px;\n  }\n"]),h.d.div.withConfig({displayName:"bannerstyle__VideoModal",componentId:"ygifw5-3"})(["\n  display: inline-block;\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  &:before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    display: block;\n    // background: linear-gradient(\n    //   -139deg,\n    //   rgb(255, 65, 108) 0%,\n    //   rgb(255, 75, 43) 100%\n    // );\n    opacity: 0.2;\n    pointer-events: none;\n  }\n\n  img {\n    max-width: 100%;\n    height: auto;\n    display: block;\n  }\n"])),I=h.d.div.withConfig({displayName:"bannerstyle__PlayButton",componentId:"ygifw5-4"})(["\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #ff4553;\n  cursor: pointer;\n  outline: 0;\n  z-index: 2;\n  @media (max-width: 767px) {\n    width: 60px;\n    height: 60px;\n    svg {\n      width: 30px;\n    }\n  }\n  &:after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    display: block;\n    pointer-events: none;\n    top: 0;\n    left: 0;\n    border-radius: inherit;\n  }\n  &:focus {\n    &:after {\n      animation: "," 0.5s ease-out forwards;\n    }\n  }\n"],E),N=h.d.div.withConfig({displayName:"bannerstyle__VideoWrapper",componentId:"ygifw5-5"})(["\n  max-width: calc(100% - 30px);\n  width: 900px;\n  position: relative;\n  &:before {\n    content: '';\n    display: block;\n    padding-top: 56.25%;\n  }\n  iframe {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n"]),C=n("zuWF"),O=n.n(C),j=n("OM9D"),k=n("gZWR"),z=function(){return i.a.createElement(f.a,{className:"modalCloseBtn",variant:"fab",onClick:function(){return Object(c.b)()},icon:i.a.createElement("i",{className:"flaticon-plus-symbol"})})},W=function(){return i.a.createElement(N,null,i.a.createElement("iframe",{allow:"fullscreen; picture-in-picture",allowfullscreen:!0,src:"https://alugha.com/embed/web-player?color=%23fe4553&alugha=0&v=6d15e5be-d8c8-11ea-9674-5fa2dfdf0c4e"}))},_=function(e){var t=e.row,n=e.contentWrapper,a=(e.discountAmount,e.discountText,e.title),r=e.description,o=e.imageWrapper,h=e.buttonWrapper,b=(e.button,e.fillButton),y=i.a.useContext(k.a).handleLightbox;return i.a.createElement(w,{id:"banner_section"},i.a.createElement(x,{className:"banner-shape"}),i.a.createElement(g.a,null,i.a.createElement(l.a,t,i.a.createElement(l.a,n,i.a.createElement(p.a,Object.assign({},a,{content:"Accès Illimité aux contacts de l'industrie musicale"})),i.a.createElement(u.a,Object.assign({},r,{content:"Accès aux contacts de l'industrie musicale et les médias musique pour avoir les bonnes connexions pour booster votre carrière."})),i.a.createElement(l.a,h,i.a.createElement("a",{href:"#1"},i.a.createElement(f.a,Object.assign({},b,{title:"ACCÉDEZ MAINTENANT",onClick:function(){return y("signup")}}))))),i.a.createElement(l.a,o,i.a.createElement(d.a,{bottom:!0},i.a.createElement(S,null,i.a.createElement(m.a,{src:O.a,alt:"banner image"}),i.a.createElement(I,{tabIndex:"0",onClick:function(){Object(c.c)({config:{className:"video-modal",disableDragging:!0,width:"100%",height:"100%"},component:W,componentProps:{},closeComponent:z,closeOnClickOutside:!0})}},i.a.createElement(s.a,{icon:j.play,size:40}))))))))};_.defaultProps={row:{flexBox:!0,flexWrap:"wrap",alignItems:"center",justifyContent:"center"},contentWrapper:{width:["100%","100%","80%","55%","50%"],mb:"40px"},title:{fontSize:["24px","32px","40px","42px","46px"],fontWeight:"700",color:"#fff",letterSpacing:"-0.025em",mb:["20px","25px","25px","25px","25px"],lineHeight:"1.2",textAlign:"center"},description:{fontSize:["15px","16px","16px","16px","16px"],color:"#fff",lineHeight:"1.75",mb:"0",textAlign:"center"},discountAmount:{fontSize:["13px","14px","14px","14px","14px"],fontWeight:"700",color:"#fff",mb:0,as:"span",mr:"0.4em"},discountText:{fontSize:["13px","14px","14px","14px","14px"],fontWeight:"400",color:"#fff",mb:0,as:"span"},fillButton:{type:"button",fontSize:["13px","14px"],fontWeight:"600",borderRadius:"4px",p:["0px 15px","8px 22px"],colors:"secondaryWithBg",minWidth:["auto","150px"],height:["40px","46px"],minHeight:"auto"},buttonWrapper:{flexBox:!0,justifyContent:"center",mt:"35px"},button:{type:"button",fontSize:["13px","14px"],fontWeight:"600",borderRadius:"4px",p:["0px 15px","8px 22px"],color:"#fff",colors:"secondary",height:["40px","46px"],minHeight:"auto"}};t.a=_},"g0/m":function(e,t,n){"use strict";var a=n("Chfx"),i=n("ERkP"),r=n.n(i),s=n("dWle"),o=n("Eakc"),d=n("PPo7"),c=n("kQsd"),l=n("j/s1").d.section.withConfig({displayName:"foncstyle__SectionWrapper",componentId:"ow5mv7-0"})(["\n  padding: 75px 0 0 0;\n\n  .sectionBox {\n    // display: flex;\n    // flex-direction: column;\n    // align-items: center;\n  }\n\n  .image {\n    margin: 30px 0 30px 0;\n  }\n\n  .imagetext {\n  }\n\n  .textimage {\n    flex-direction: row-reverse;\n  }\n\n  .imagetext,\n  .textimage {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: max-content;\n    margin: 50px 0 10px 0;\n  }\n\n  .imagetext .text,\n  .textimage .text {\n    width: 50%;\n  }\n\n  .image {\n    height: min-content;\n    width: 45%;\n  }\n\n  @media (max-width: 980px) {\n    .imagetext,\n    .textimage {\n      flex-direction: column;\n\n      .image {\n        width: unset;\n      }\n\n      .text {\n        width: 100%;\n        text-align: center;\n      }\n    }\n  }\n"]),u=(n("BsmC"),n("7QsZ"),n("lyZT"),n("zjw1"),function(e){var t=e.secTitleWrapper,n=e.secText,i=e.secHeading,u=e.secDes,p=(e.topHeading,a.data);return r.a.createElement(l,null,r.a.createElement(c.a,null,r.a.createElement(s.a,Object.assign({className:"sectionBox"},t),r.a.createElement(o.a,Object.assign({},n,{content:"LA BASE DE CONTACTS MUSIQUE ULTIME"})),r.a.createElement("div",{className:"imagetext"},r.a.createElement("img",{className:"image",src:p.saasClassicJson.IMAGES_FONCTIONNEMENT.first.childImageSharp.fluid.src,alt:"fonctionnementImage"}),r.a.createElement("div",{className:"text"},r.a.createElement(d.a,Object.assign({},i,{content:"Contact Major"})),r.a.createElement(o.a,Object.assign({},u,{content:"Major Contacts est une puissante base de données de contact médias. Un annuaire essentiel des contacts de l'industrie musicale Française qui vous offre l’opportunité unique d’entrer en contact avec des directeurs artistiques, talents scouts et labels managers de France."})),r.a.createElement(o.a,Object.assign({},u,{content:"Il est utilisé par des artistes, des groupes, des managers, des producteurs, des musiciens et bien d’autres personnes, ne perdez pas de temps : soyez le prochain."})))),r.a.createElement("div",{className:"textimage"},r.a.createElement("img",{className:"image",src:p.saasClassicJson.IMAGES_FONCTIONNEMENT.second.childImageSharp.fluid.src,alt:"fonctionnementImage"}),r.a.createElement("div",{className:"text"},r.a.createElement(d.a,Object.assign({},i,{content:"9 artistes sur 10 n’arrivent pas à trouver les contacts clé de l’industrie musicale. En faites-vous partie ?"})),r.a.createElement(o.a,Object.assign({},u,{content:"Comment faire pour que mes chansons passent à la radio ? Que contient un accord d'enregistrement ? Où puis-je obtenir un financement ? Si vous avez des\r questions importantes sur l'industrie de la musique, ne cherchez pas plus loin que nos contacts."})),r.a.createElement(o.a,Object.assign({},u,{content:"Il existe des contacts gratuits en ligne qui soient obsolètes avec d'anciennes informations, ou qui ne vous fournissent qu'une liste partielle de contacts. Ces listes sont mises à jour annuellement ou semestriellement avec peu ou pas de changements du tout."})),r.a.createElement(o.a,Object.assign({},u,{content:"Saviez-vous qu’une personne sur trois changerait de poste dans ce segment ? L'industrie des médias ne s'arrête jamais, et avec les gens qui déménagent, prennent leur retraite et quittent l'industrie, il peut être difficile de suivre le rythme"})))),r.a.createElement("div",{className:"imagetext"},r.a.createElement("img",{className:"image",src:p.saasClassicJson.IMAGES_FONCTIONNEMENT.third.childImageSharp.fluid.src,alt:"fonctionnementImage"}),r.a.createElement("div",{className:"text"},r.a.createElement(d.a,Object.assign({},i,{content:"Le guide complet pour faire décoller votre carrière"})),r.a.createElement(o.a,Object.assign({},u,{content:"Chez Major Contacts nous avons passé d'innombrables années à rassembler les contacts les plus complexes de l'industrie de la musique. Aujourd’hui, nous avons une équipe de recherche dédiée à la mise à jour de notre fil d'actualité avec les derniers mouvements médiatiques. Le but étant de vous fournir les contacts les plus à jour, précis et les plus complets de l'industrie de la musique.À commencer par les grands labels de France comme Initial Artist Services, Roche Musique, Because Music, Idol et plus encore."})),r.a.createElement(o.a,Object.assign({},u,{content:"Des journalistes locaux aux diffuseurs nationaux, Major Contacts a le bon contact média pour votre histoire."})))),r.a.createElement("div",{className:"textimage"},r.a.createElement("img",{className:"image",src:p.saasClassicJson.IMAGES_FONCTIONNEMENT.fourth.childImageSharp.fluid.src,alt:"fonctionnementImage"}),r.a.createElement("div",{className:"text"},r.a.createElement(d.a,Object.assign({},i,{content:"L'annuaire essentiel des contacts de l'industrie musicale française que les artistes musicaux méritent"})),r.a.createElement(o.a,Object.assign({},u,{content:"Que vous soyez un label indépendant, un artiste, un chanteur, un musicien, un rappeur, un producteur, un manager, un éditeur, un ingénieur du son, un agent, une grande maison de disques, un distributeur ou un entrepreneur : De la réservation de concerts à l'envoi de démos à des labels de disques ou à la planification de votre propre sortie d’EP."})),r.a.createElement(o.a,Object.assign({},u,{content:"Il s'agit de contacts dans des maisons de disque, des sociétés de relations publiques, de nouveaux blogs et magazines musicaux, de DJs et de producteurs radio, de promoteurs de concerts établis, de managers, d'éditeurs de musique et d'agences de synchronisation, ainsi que d'organisateurs de festivals et d’événements."})))))))});u.defaultProps={secTitleWrapper:{mb:["30px","50px"]},secText:{as:"span",display:"block",textAlign:"center",fontSize:"14px",letterSpacing:"0.15em",fontWeight:"700",color:"#ff4362",mb:"12px"},topHeading:{fontSize:["20px","24px","36px","36px"],fontWeight:"700",color:"#fff",letterSpacing:"-0.025em",mb:"0",ml:"auto",mr:"auto",lineHeight:"1.12",width:"500px",maxWidth:"100%"},secHeading:{fontSize:["20px","24px","24px"],fontWeight:"700",color:"#fff",letterSpacing:"-0.025em",mt:"30px",mb:"20px",lineHeight:"1.12",maxWidth:"100%"},secDes:{fontSize:["14px","15px","16px"],color:"#ccc",lineHeight:"1.705",ml:"auto",mr:"auto",width:["700px"],maxWidth:"100%"}};t.a=u},lyZT:function(e,t,n){e.exports=n.p+"static/1-77e6f4258773c45960d6606cf9b78a01.jpg"},zjw1:function(e,t,n){e.exports=n.p+"static/2-8713dd07c1aacdc3a834b5ee28ac233f.jpg"},zuWF:function(e,t,n){e.exports=n.p+"static/banner-image-254dc6eb7dd8aea4892622101e96cc89.jpg"}}]);
//# sourceMappingURL=018ed0642bfaffa9c05ca891f9d5f7e0ec2eb270-1dd8140728210353a595.js.map