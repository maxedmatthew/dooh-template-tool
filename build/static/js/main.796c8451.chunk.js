(this["webpackJsonpdooh-template-tool"]=this["webpackJsonpdooh-template-tool"]||[]).push([[0],{27:function(e,t,n){"use strict";(function(e){var a=n(10),i=n(28),o=n.n(i);t.a=function(t,n){console.log("writePSD"),console.log(n);var i=Object(a.readPsd)(e.from(t.data),{skipLayerImageData:!1,skipCompositeImageData:!1,skipThumbnail:!1});"Frame"===n.currentCategory?(console.info("writePSD met Frame template"),i.children.splice(1,2)):"Product"===n.currentCategory?(console.info("writePSD met Product template"),i.children.splice(2,1),i.children.splice(0,1)):(console.info("writePSD met Message template"),i.children.splice(0,2));var s=n.chosenElements.filter((function(e){return e.selected}));console.log(s),console.log(i.children[0].children),s.forEach((function(e){console.log(e)}));var r=Object(a.writePsdBuffer)(i),c=new FormData;c.append("ori",JSON.stringify(r)),o.a.post("/writeNewFile",c,{}).then((function(e){console.log(e.statusText)})).catch((function(e){console.log(e)}))}}).call(this,n(14).Buffer)},29:function(e,t,n){e.exports=n(66)},34:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(25),s=n.n(o),r=(n(34),n(1)),c=n(2),l=n(4),m=n(3),p=n(5),d=(n(35),n(36),n(37),n(38),n(39),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).createStyle=function(e){if(n.props.curCat===e)return{backgroundColor:"#6A73D0",color:"#fff"}},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"categoryButtons col-md-6"},i.a.createElement("h3",null,"Choose DOOH category",i.a.createElement("div",{className:"categoryInfo"},i.a.createElement("i",{className:"flaticon-information"}),i.a.createElement("div",{className:"information"},i.a.createElement("span",{className:"rTriangle"}),i.a.createElement("h4",null,"Product"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis."),i.a.createElement("h4",{className:"extra-margin"},"Message"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis."),i.a.createElement("h4",{className:"extra-margin"},"Frame"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis.")))),i.a.createElement("button",{style:this.createStyle("Product"),onClick:this.props.changeCategory.bind(this,"Product")},"Product"),i.a.createElement("button",{style:this.createStyle("Message"),onClick:this.props.changeCategory.bind(this,"Message")},"Message"),i.a.createElement("button",{style:this.createStyle("Frame"),onClick:this.props.changeCategory.bind(this,"Frame")},"Frame"),i.a.createElement("p",{className:"warning"},this.props.curWarning))}}]),t}(a.Component)),u=(n(40),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).getStyle=function(e){if(n.props.previewMode===e)return{backgroundColor:"#6A73D0",color:"#fff"}},n.getRowStyle=function(){if(!0===n.props.anmChosen)return{backgroundColor:"#ffffff"}},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,"Preview of ",i.a.createElement("span",null,this.props.curCat.toLowerCase())," DOOH template"),i.a.createElement("div",{className:"previewBtnRow",style:this.getRowStyle()},i.a.createElement("button",{style:this.getStyle("Portrait"),onClick:this.props.changeCanvas.bind(this,"Portrait")},"Portrait (9:16)"),i.a.createElement("button",{style:this.getStyle("Landscape"),onClick:this.props.changeCanvas.bind(this,"Landscape")},"Landscape (16:9)"),i.a.createElement("button",{style:this.getStyle("Squared"),onClick:this.props.changeCanvas.bind(this,"Squared")},"Squared (1:1)")))}}]),t}(a.Component)),h=(n(41),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).getStyle=function(e){var t={display:n.props.isSelected.find((function(t){return t.element===e})).selected?"flex":"none"},a=n.props.elementChosen,i=n.props.isSelected.find((function(t){return t.element===e})).animation;return!0===a&&"Langzaam vergroten"===i&&(t.transform="scale(1.3)",t.transition="ease-in 7s"),!0===n.props.isSelected.find((function(t){return t.element===e})).mouseOn&&"backgroundvideo"!==e&&"background-image"!==e?(t.boxShadow="rgb(52, 174, 135) 0px 0px 20px 0px",t.background="#34ae87"):!0===n.props.isSelected.find((function(t){return t.element===e})).mouseOn&&"backgroundvideo"===e||!0===n.props.isSelected.find((function(t){return t.element===e})).mouseOn&&"background-image"===e||(t.boxShadow="none"),"Message"!==n.props.curCat||n.props.isSelected.find((function(e){return"subtitle"===e.element})).selected||"logo"!==e||"Portrait"!==n.props.previewMode?("Message"===n.props.curCat&&!n.props.isSelected.find((function(e){return"subtitle"===e.element})).selected&&"main-title"===e&&"Landscape"===n.props.previewMode||"Message"===n.props.curCat&&!n.props.isSelected.find((function(e){return"subtitle"===e.element})).selected&&"main-title"===e&&"Squared"===n.props.previewMode)&&(t.bottom="5%"):t.bottom="5%","Frame"!==n.props.curCat||n.props.isSelected.find((function(e){return"subtitle"===e.element})).selected||"main-title"!==e?"Frame"===n.props.curCat&&!n.props.isSelected.find((function(e){return"subtitle"===e.element})).selected&&"logo"===e&&"Portrait"===n.props.previewMode||"Frame"===n.props.curCat&&!n.props.isSelected.find((function(e){return"subtitle"===e.element})).selected&&"logo"===e&&"Landscape"===n.props.previewMode?t.transform="translateY(-60%)":"Frame"!==n.props.curCat||n.props.isSelected.find((function(e){return"subtitle"===e.element})).selected||"logo"!==e||"Squared"!==n.props.previewMode||(t.transform="translateY(-30%)"):t.transform="translateY(35%)",t},n.animationStyle=function(e){var t={};return"Geen animatie"!==n.props.isSelected.find((function(t){return t.element===e})).animation&&!0===n.props.elementChosen?t.display="flex":t.display="none",t},n.posAnimation=function(e){var t=n.props.elementChosen,a=n.props.isSelected.find((function(t){return t.element===e})).animation;return!0===t&&"Attention animatie - Flash"===a?"".concat(e," animated flash"):!0===t&&"Attention animatie - Shake"===a?"".concat(e," animated shake"):!0===t&&"Attention animatie - Pulse"===a?"".concat(e," animated pulse"):!0===t&&"Attention animatie - Tada"===a?"".concat(e," animated tada"):!0===t&&"Attention animatie - Heartbeat"===a?"".concat(e," animated heartBeat"):!0===t&&"Attention animatie - Flip"===a?"".concat(e," animated flip"):!0===t&&"Appear animatie - Bounce in"===a?"".concat(e," animated bounceIn"):!0===t&&"Appear animatie - Bounce in down"===a?"".concat(e," animated bounceInDown"):!0===t&&"Appear animatie - Bounce in left"===a?"".concat(e," animated bounceInLeft"):!0===t&&"Appear animatie - Bounce in right"===a?"".concat(e," animated bounceInRight"):!0===t&&"Appear animatie - Bounce in up"===a?"".concat(e," animated bounceInUp"):!0===t&&"Appear animatie - Fade in"===a?"".concat(e," animated fadeIn"):!0===t&&"Appear animatie - Fade in down"===a?"".concat(e," animated fadeInDown"):!0===t&&"Appear animatie - Fade in left"===a?"".concat(e," animated fadeInLeft"):!0===t&&"Appear animatie - Fade in right"===a?"".concat(e," animated fadeInRight"):!0===t&&"Appear animatie - Fade in up"===a?"".concat(e," animated fadeInUp"):!0===t&&"Appear animatie - Flip in X"===a?"".concat(e," animated flipInX"):!0===t&&"Appear animatie - Flip in Y"===a?"".concat(e," animated flipInY"):!0===t&&"Appear animatie - Slide in down"===a?"".concat(e," animated slideInDown"):!0===t&&"Appear animatie - Slide in left"===a?"".concat(e," animated slideInLeft"):!0===t&&"Appear animatie - Slide in right"===a?"".concat(e," animated slideInRight"):!0===t&&"Appear animatie - Slide in up"===a?"".concat(e," animated slideInUp"):!0===t&&"Appear animatie - Zoom in"===a?"".concat(e," animated zoomIn"):!0===t&&"Appear animatie - Jack in the box"===a?"".concat(e," animated jackInTheBox"):e},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.curCat,t=this.props.previewMode;return i.a.createElement("div",{className:"previewTemplate ".concat(t,"Prv ").concat(e)},i.a.createElement("div",{className:"innerElements"},i.a.createElement("div",{className:this.posAnimation("logo"),style:this.getStyle("logo")},i.a.createElement("span",null,"Logo"),i.a.createElement("img",{className:"selected",style:this.animationStyle("logo"),src:"https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/selected.png",alt:"check"})),i.a.createElement("div",{className:this.posAnimation("productimage"),style:this.getStyle("productimage")},i.a.createElement("span",null,"Product-image"),i.a.createElement("img",{className:"selected",style:this.animationStyle("productimage"),src:"https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/selected.png",alt:"check"})),i.a.createElement("div",{className:this.posAnimation("productvideo"),style:this.getStyle("productvideo")},i.a.createElement("span",null,"Product-video"),i.a.createElement("img",{className:"selected",style:this.animationStyle("productvideo"),src:"https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/selected.png",alt:"check"})),i.a.createElement("div",{className:this.posAnimation("main-title"),style:this.getStyle("main-title")},i.a.createElement("span",null,"Main title"),i.a.createElement("img",{className:"selected",style:this.animationStyle("main-title"),src:"https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/selected.png",alt:"check"})),i.a.createElement("div",{className:this.posAnimation("subtitle"),style:this.getStyle("subtitle")},i.a.createElement("span",null,"Subtitle"),i.a.createElement("img",{className:"selected",style:this.animationStyle("subtitle"),src:"https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/selected.png",alt:"check"})),i.a.createElement("div",{className:this.posAnimation("backgroundvideo"),style:this.getStyle("backgroundvideo")},i.a.createElement("span",{className:"bg-vid-span"},"Background-video"),i.a.createElement("img",{className:"selected",style:this.animationStyle("backgroundvideo"),src:"https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/selected.png",alt:"check"})),i.a.createElement("div",{className:this.posAnimation("background-image"),style:this.getStyle("background-image")},i.a.createElement("span",{className:"bg-vid-span"},"Background-image"),i.a.createElement("img",{className:"selected",style:this.animationStyle("background-image"),src:"https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/selected.png",alt:"check"})),i.a.createElement("div",{className:this.posAnimation("pancake-element"),style:this.getStyle("pancake-element")},i.a.createElement("span",null,"Pancake Element"),i.a.createElement("img",{className:"selected",style:this.animationStyle("pancake-element"),src:"https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/selected.png",alt:"check"}))))}}]),t}(a.Component)),g=(n(42),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"ElementSelection"},i.a.createElement("h3",null,"Choose your DOOH elements"),i.a.createElement("div",{className:"selectionWrap"},i.a.createElement("p",null,i.a.createElement("input",{type:"checkbox",checked:this.props.isSelected[0].selected,id:"logo",onChange:this.props.changeElement.bind(this,"logo")})," ",i.a.createElement("span",{onClick:this.props.changeElement.bind(this,"logo")},"Logo / Brandname")),i.a.createElement("p",null,i.a.createElement("input",{type:"checkbox",checked:this.props.isSelected[5].selected,id:"productvideo",onChange:this.props.changeElement.bind(this,"productvideo")})," ",i.a.createElement("span",{onClick:this.props.changeElement.bind(this,"productvideo")},"Productvideo")),i.a.createElement("p",null,i.a.createElement("input",{type:"checkbox",checked:this.props.isSelected[1].selected,id:"main-title",onChange:this.props.changeElement.bind(this,"main-title")})," ",i.a.createElement("span",{onClick:this.props.changeElement.bind(this,"main-title")},"Main title")),i.a.createElement("p",null,i.a.createElement("input",{type:"checkbox",checked:this.props.isSelected[3].selected,id:"productimage",onChange:this.props.changeElement.bind(this,"productimage")})," ",i.a.createElement("span",{onClick:this.props.changeElement.bind(this,"productimage")},"Productimage")),i.a.createElement("p",null,i.a.createElement("input",{type:"checkbox",checked:this.props.isSelected[2].selected,id:"subtitle",onChange:this.props.changeElement.bind(this,"subtitle")})," ",i.a.createElement("span",{onClick:this.props.changeElement.bind(this,"subtitle")},"Subtitle")),i.a.createElement("p",null,i.a.createElement("input",{type:"checkbox",checked:this.props.isSelected[4].selected,id:"backgroundvideo",onChange:this.props.changeElement.bind(this,"backgroundvideo")})," ",i.a.createElement("span",{onClick:this.props.changeElement.bind(this,"backgroundvideo")},"Background video")),i.a.createElement("p",null,i.a.createElement("input",{type:"checkbox",checked:this.props.isSelected[6].selected,id:"pancake-element",onChange:this.props.changeElement.bind(this,"pancake-element")})," ",i.a.createElement("span",{onClick:this.props.changeElement.bind(this,"pancake-element")},"Pancake element")),i.a.createElement("p",null,i.a.createElement("input",{type:"checkbox",checked:this.props.isSelected[7].selected,id:"background-image",onChange:this.props.changeElement.bind(this,"background-image")})," ",i.a.createElement("span",{onClick:this.props.changeElement.bind(this,"background-image")},"Background image"))))}}]),t}(a.Component)),A=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).standardAnimation=function(){if(0!==n.props.possibleAnimation.standardAnimation.length){var e=-1;return i.a.createElement("optgroup",{label:"Standard Animation"},n.props.possibleAnimation.standardAnimation.map((function(t){return e++,i.a.createElement("option",{value:n.props.possibleAnimation.standardAnimation[e],key:e}," ",n.props.possibleAnimation.standardAnimation[e]," ")})))}},n.appearAnimation=function(){if(0!==n.props.possibleAnimation.appearAnimation.length){var e=-1;return i.a.createElement("optgroup",{label:"Appear Animation"},n.props.possibleAnimation.appearAnimation.map((function(t){return e++,i.a.createElement("option",{value:n.props.possibleAnimation.appearAnimation[e],key:e}," ",n.props.possibleAnimation.appearAnimation[e]," ")})))}},n.attentionAnimation=function(){if(0!==n.props.possibleAnimation.attentionAnimation.length){var e=-1;return i.a.createElement("optgroup",{label:"Attention Animation"},n.props.possibleAnimation.attentionAnimation.map((function(t){return e++,i.a.createElement("option",{value:n.props.possibleAnimation.attentionAnimation[e],key:e}," ",n.props.possibleAnimation.attentionAnimation[e]," ")})))}},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"firstCaparalize",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},{key:"render",value:function(){return i.a.createElement("p",null,i.a.createElement("span",null,this.firstCaparalize(this.props.element.element)),i.a.createElement("select",{name:this.props.element.element,className:"selectFormAnimation",onChange:this.props.handleSubmit,defaultValue:this.props.element.animation,onMouseOver:this.props.mouseOnElement.bind(this,this.props.element.element),onMouseOut:this.props.mouseOffElement.bind(this,this.props.element.element)},this.standardAnimation(),this.appearAnimation(),this.attentionAnimation()))}}]),t}(a.Component),f=(n(43),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).loadElement=function(){n.props.curElements.map((function(e){return!0===e.selected?i.a.createElement(A,null):e}))},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"AnimationSelection"},i.a.createElement("h3",null,"Choose your animation"),this.props.curElements.map((function(t){return!0===t.selected?i.a.createElement(A,{key:t.id,element:t,possibleAnimation:t.possibleAnimation,handleSubmit:e.props.handleSubmit,mouseOnElement:e.props.animationElementOnHover,mouseOffElement:e.props.animationElementOffHover}):""})),i.a.createElement("p",{className:"checkWarning"},i.a.createElement("img",{className:"checkIcon",src:"https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/selected.png",alt:"check"})," = Animation selected"))}}]),t}(a.Component)),b=n(26),E=n.n(b),C=n(27),k=function(e){E.a.post("/readOriPsd",(function(t){return Object(C.a)(t,e)}))},v=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={currentCategory:"",currentButton:"Choose elements",currentBackButton:"",currentWarning:"",categoryChosen:!1,elementChosen:!1,animationChosen:!1,previewMode:"Portrait",chosenElements:[{id:1,element:"logo",selected:!1,mouseOn:!1,animation:"Geen animatie",possibleAnimation:{standardAnimation:["Geen animatie"],attentionAnimation:[],appearAnimation:["Appear animatie - Bounce in","Appear animatie - Bounce in down","Appear animatie - Bounce in left","Appear animatie - Bounce in right","Appear animatie - Bounce in up","Appear animatie - Fade in","Appear animatie - Fade in down","Appear animatie - Fade in left","Appear animatie - Fade in right","Appear animatie - Fade in up","Appear animatie - Flip in X","Appear animatie - Flip in Y","Appear animatie - Slide in down","Appear animatie - Slide in left","Appear animatie - Slide in right","Appear animatie - Slide in up","Appear animatie - Zoom in","Appear animatie - Jack in the box"]}},{id:2,element:"main-title",selected:!1,mouseOn:!1,animation:"Appear animatie - Flip in X",possibleAnimation:{standardAnimation:["Geen animatie","Veranderen content"],attentionAnimation:["Attention animatie - Flash","Attention animatie - Shake","Attention animatie - Pulse","Attention animatie - Tada","Attention animatie - Heartbeat","Attention animatie - Flip"],appearAnimation:["Appear animatie - Bounce in","Appear animatie - Bounce in down","Appear animatie - Bounce in left","Appear animatie - Bounce in right","Appear animatie - Bounce in up","Appear animatie - Fade in","Appear animatie - Fade in down","Appear animatie - Fade in left","Appear animatie - Fade in right","Appear animatie - Fade in up","Appear animatie - Flip in X","Appear animatie - Flip in Y","Appear animatie - Slide in down","Appear animatie - Slide in left","Appear animatie - Slide in right","Appear animatie - Slide in up","Appear animatie - Zoom in","Appear animatie - Jack in the box"]}},{id:3,element:"subtitle",selected:!1,mouseOn:!1,animation:"Appear animatie - Slide in up",possibleAnimation:{standardAnimation:["Geen animatie"],attentionAnimation:["Attention animatie - Flash","Attention animatie - Shake","Attention animatie - Pulse","Attention animatie - Tada","Attention animatie - Heartbeat","Attention animatie - Flip"],appearAnimation:["Appear animatie - Bounce in","Appear animatie - Bounce in down","Appear animatie - Bounce in left","Appear animatie - Bounce in right","Appear animatie - Bounce in up","Appear animatie - Fade in","Appear animatie - Fade in down","Appear animatie - Fade in left","Appear animatie - Fade in right","Appear animatie - Fade in up","Appear animatie - Flip in X","Appear animatie - Flip in Y","Appear animatie - Slide in down","Appear animatie - Slide in left","Appear animatie - Slide in right","Appear animatie - Slide in up","Appear animatie - Zoom in","Appear animatie - Jack in the box"]}},{id:4,element:"productimage",selected:!1,mouseOn:!1,animation:"Geen animatie",possibleAnimation:{standardAnimation:["Geen animatie"],attentionAnimation:["Attention animatie - Flash","Attention animatie - Shake","Attention animatie - Pulse","Attention animatie - Tada","Attention animatie - Heartbeat","Attention animatie - Flip"],appearAnimation:[]}},{id:5,element:"backgroundvideo",selected:!1,mouseOn:!1,animation:"Geen animatie",possibleAnimation:{standardAnimation:["Geen animatie","Langzaam vergroten","Veranderen content"],attentionAnimation:[],appearAnimation:[]}},{id:6,element:"productvideo",selected:!1,mouseOn:!1,animation:"Geen animatie",possibleAnimation:{standardAnimation:["Geen animatie"],attentionAnimation:["Attention animatie - Flash","Attention animatie - Shake","Attention animatie - Pulse","Attention animatie - Tada","Attention animatie - Heartbeat","Attention animatie - Flip"],appearAnimation:[]}},{id:7,element:"pancake-element",selected:!1,mouseOn:!1,animation:"Attention animatie - Pulse",possibleAnimation:{standardAnimation:["Geen animatie"],attentionAnimation:["Attention animatie - Flash","Attention animatie - Shake","Attention animatie - Pulse","Attention animatie - Tada","Attention animatie - Heartbeat","Attention animatie - Flip"],appearAnimation:["Appear animatie - Bounce in","Appear animatie - Bounce in down","Appear animatie - Bounce in left","Appear animatie - Bounce in right","Appear animatie - Bounce in up","Appear animatie - Fade in","Appear animatie - Fade in down","Appear animatie - Fade in left","Appear animatie - Fade in right","Appear animatie - Fade in up","Appear animatie - Flip in X","Appear animatie - Flip in Y","Appear animatie - Slide in down","Appear animatie - Slide in left","Appear animatie - Slide in right","Appear animatie - Slide in up","Appear animatie - Zoom in","Appear animatie - Jack in the box"]}},{id:8,element:"background-image",selected:!1,mouseOn:!1,animation:"Geen animatie",possibleAnimation:{standardAnimation:["Geen animatie","Langzaam vergroten","Veranderen content"],attentionAnimation:[],appearAnimation:[]}}]},n.changeCanvas=function(e){n.setState({previewMode:e})},n.changeCategory=function(e){n.setState({currentCategory:e}),"Product"===e||"Frame"===e?n.setState({chosenElements:n.state.chosenElements.map((function(e){return"productimage"!==e.element&&"logo"!==e.element&&"main-title"!==e.element&&"subtitle"!==e.element||(e.selected=!0),"backgroundvideo"!==e.element&&"background-image"!==e.element&&"pancake-element"!==e.element&&"productvideo"!==e.element||(e.selected=!1),e}))}):"Message"===e&&n.setState({chosenElements:n.state.chosenElements.map((function(e){return"backgroundvideo"!==e.element&&"logo"!==e.element&&"main-title"!==e.element&&"subtitle"!==e.element||(e.selected=!0),"productimage"!==e.element&&"background-image"!==e.element&&"pancake-element"!==e.element&&"productvideo"!==e.element||(e.selected=!1),e}))})},n.changeElement=function(e){n.setState({chosenElements:n.state.chosenElements.map((function(t){return t.element===e&&(t.selected=!t.selected),t}))});var t=n.state.chosenElements.find((function(e){return"productimage"===e.element})).selected,a=n.state.chosenElements.find((function(e){return"productvideo"===e.element})).selected,i=n.state.chosenElements.find((function(e){return"background-image"===e.element})).selected,o=n.state.chosenElements.find((function(e){return"backgroundvideo"===e.element})).selected;"productvideo"===e?!0===t&&n.setState({chosenElements:n.state.chosenElements.map((function(e){return"productimage"===e.element&&(e.selected=!e.selected),e}))}):"productimage"===e?!0===a&&n.setState({chosenElements:n.state.chosenElements.map((function(e){return"productvideo"===e.element&&(e.selected=!e.selected),e}))}):"backgroundvideo"===e?!0===i&&n.setState({chosenElements:n.state.chosenElements.map((function(e){return"background-image"===e.element&&(e.selected=!e.selected),e}))}):"background-image"===e&&!0===o&&n.setState({chosenElements:n.state.chosenElements.map((function(e){return"backgroundvideo"===e.element&&(e.selected=!e.selected),e}))})},n.changeAnimation=function(e){e.preventDefault();var t=e.target.name,a=e.target.value;n.setState({chosenElements:n.state.chosenElements.map((function(e){return e.element===t&&(e.animation=a),e}))}),console.log("De value van ".concat(t," is nu ").concat(a))},n.animationElementOnHover=function(e){n.setState({chosenElements:n.state.chosenElements.map((function(t){return t.element===e&&(t.mouseOn=!t.mouseOn,console.log(n.state.chosenElements.find((function(t){return t.element===e})).mouseOn)),t}))})},n.animationElementOffHover=function(e){n.setState({chosenElements:n.state.chosenElements.map((function(t){return t.element===e&&(t.mouseOn=!t.mouseOn,console.log(n.state.chosenElements.find((function(t){return t.element===e})).mouseOn)),t}))})},n.buttonAction=function(){var e=n.state.currentCategory;console.log("hoi"),!1===n.state.categoryChosen&&!1===n.state.elementChosen&&!1===n.state.animationChosen?(""!==e?n.setState({categoryChosen:!0,currentButton:"Choose animation",currentBackButton:"Back to category"}):""===n.state.currentWarning&&(n.setState({currentWarning:"First select a category"}),setTimeout((function(){n.setState({currentWarning:""})}),5e3)),console.log(n.state)):!0===n.state.categoryChosen&&!1===n.state.elementChosen&&!1===n.state.animationChosen?(n.setState({elementChosen:!0,currentButton:"See DOOH overview",currentBackButton:"Back to elements"}),console.log(n.state)):!0===n.state.categoryChosen&&!0===n.state.elementChosen&&!1===n.state.animationChosen&&(n.setState({animationChosen:!0,currentButton:"Export DOOH",currentBackButton:"Back to animation"}),console.log("Kijk je overview"))},n.exportAction=function(){console.log("export started"),console.log(n.state),k(n.state)},n.backBtnAction=function(){!1===n.state.categoryChosen&&!1===n.state.elementChosen&&!1===n.state.animationChosen||(!0===n.state.categoryChosen&&!1===n.state.elementChosen&&!1===n.state.animationChosen?(n.changeCategory(n.state.currentCategory),n.setState({categoryChosen:!1,currentButton:"Choose elements",currentBackButton:""})):!0===n.state.categoryChosen&&!0===n.state.elementChosen&&!1===n.state.animationChosen?n.setState({elementChosen:!1,currentButton:"Choose animation",currentBackButton:"Back to category"}):!0===n.state.categoryChosen&&!0===n.state.elementChosen&&!0===n.state.animationChosen&&n.setState({animationChosen:!1,currentButton:"See DOOH overview",currentBackButton:"Back to elements"}))},n.loadComponent=function(){return!1===n.state.categoryChosen&&!1===n.state.elementChosen&&!1===n.state.animationChosen?i.a.createElement(d,{changeCategory:n.changeCategory,curCat:n.state.currentCategory,curWarning:n.state.currentWarning}):!0===n.state.categoryChosen&&!1===n.state.elementChosen&&!1===n.state.animationChosen?i.a.createElement(g,{changeElement:n.changeElement,isSelected:n.state.chosenElements}):!0===n.state.categoryChosen&&!0===n.state.elementChosen&&!1===n.state.animationChosen?i.a.createElement(f,{curElements:n.state.chosenElements,handleSubmit:n.changeAnimation,animationElementOnHover:n.animationElementOnHover,animationElementOffHover:n.animationElementOffHover}):void(!0===n.state.categoryChosen&&!0===n.state.elementChosen&&n.state.animationChosen)},n.backBtnStyle=function(){return!0===n.state.categoryChosen?{display:"block"}:{display:"none"}},n.resetStateFunc=function(){n.setState({currentCategory:"",currentButton:"Choose elements",currentBackButton:"",categoryChosen:!1,elementChosen:!1,animationChosen:!1,previewMode:"Portrait",chosenElements:[{id:1,element:"logo",selected:!1,animation:"check"},{id:2,element:"main-title",selected:!1,animation:"check"},{id:3,element:"subtitle",selected:!1,animation:"check"},{id:4,element:"productimage",selected:!1,animation:"check"},{id:5,element:"backgroundvideo",selected:!1,animation:"check"},{id:6,element:"productvideo",selected:!1,animation:"check"},{id:7,element:"pancake-element",selected:!1,animation:"check"},{id:8,element:"background-image",selected:!1,animation:"check"}]}),console.log(n.state)},n.leftColClass=function(){return!0===n.state.animationChosen?"leftCol endStyleLeft":"col-md-6 leftCol"},n.rightColClass=function(){return!0===n.state.animationChosen?"col-md-12 rightCol endStyleRight":"col-md-6 rightCol"},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"overalApp"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:this.leftColClass()},i.a.createElement("img",{className:"logoGH",onClick:this.resetStateFunc,src:"https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/GH-logo-white_RGB.png",alt:"Logo Greenhouse"}),this.loadComponent(),i.a.createElement("button",{className:"nextBtn animated bounce",onClick:this.buttonAction},this.state.currentButton," ",i.a.createElement("i",{className:"flaticon-right"})),i.a.createElement("button",{className:"backBtn",style:this.backBtnStyle(),onClick:this.backBtnAction},i.a.createElement("i",{className:"flaticon-left-arrow-angle-big-gross-symbol"}),this.state.currentBackButton)),i.a.createElement("div",{className:this.rightColClass()},i.a.createElement("div",{className:"col-md-10 rightContent"},i.a.createElement(u,{changeCanvas:this.changeCanvas,curCat:this.state.currentCategory,previewMode:this.state.previewMode,anmChosen:this.state.animationChosen}),i.a.createElement(h,{curCat:this.state.currentCategory,previewMode:this.state.previewMode,isSelected:this.state.chosenElements,elementChosen:this.state.elementChosen}),i.a.createElement("button",{className:"exportBtn",style:this.state.animationChosen?{display:"block"}:{display:"none"},onClick:this.exportAction},"Export DOOH ",i.a.createElement("i",{className:"flaticon-right"})))))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.796c8451.chunk.js.map