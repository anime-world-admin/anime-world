(this.webpackJsonpanime_world=this.webpackJsonpanime_world||[]).push([[4],{129:function(t,e,n){t.exports={iconInput:"IconInput__AIQDh1L"}},130:function(t,e,n){"use strict";var o=n(12),a=n(13),i=n(18),s=n(16),r=n(15),c=n(1),p=n.n(c),u=n(129),l=n.n(u),h=n(131),d=n.n(h),m=n(5),b=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).onKeyPress=a.onKeyPress.bind(Object(i.a)(a)),a.onPaste=a.onPaste.bind(Object(i.a)(a)),a.updateValue=a.updateValue.bind(Object(i.a)(a)),a}return Object(a.a)(n,[{key:"updateValue",value:function(t){this.props.onInput&&this.props.onInput(-1!==t.target.type.indexOf("file")?t.target.files:t.target.value)}},{key:"onKeyPress",value:function(t){this.props.onKeyPress&&this.props.onKeyPress(t)}},{key:"onPaste",value:function(t){this.updateValue(t),this.props.onPaste&&this.props.onPaste(t)}},{key:"render",value:function(){return Object(m.jsx)("input",{value:this.props.value,onInput:this.updateValue,onKeyUp:this.onKeyPress,className:"".concat(d.a.input," ").concat(this.props.className||""),placeholder:this.props.placeHolder,type:this.props.type||"text",autoComplete:"true",accept:this.props.accept||"*",multiple:this.props.multiple||!1,onPaste:this.onPaste})}}]),n}(p.a.Component),j=n(33),f=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).updateValue=a.updateValue.bind(Object(i.a)(a)),a}return Object(a.a)(n,[{key:"updateValue",value:function(t){this.props.onInput&&this.props.onInput(t)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"".concat(l.a.iconInput," ").concat(this.props.className||""),children:[Object(m.jsx)(b,{onInput:this.updateValue,placeHolder:this.props.placeHolder,type:this.props.type,value:this.props.value,accept:this.props.accept,multiple:this.props.multiple,onKeyPress:this.props.onKeyPress,onPaste:this.props.onPaste}),Object(m.jsx)(j.a,{faw:!0,icon:this.props.icon,onClick:this.props.onIconClick})]})}}]),n}(p.a.Component);e.a=f},131:function(t,e,n){t.exports={input:"Input__3PNbOY4"}},133:function(t,e,n){"use strict";var o=n(30),a=n(12),i=n(13),s=n(18),r=n(16),c=n(15),p=n(1),u=n.n(p),l=n(137),h=n.n(l),d=n(130),m=n(64),b=n(138),j=n.n(b),f=n(5),O=function(t){Object(r.a)(n,t);var e=Object(c.a)(n);function n(t){var o;return Object(a.a)(this,n),(o=e.call(this,t)).onClick=o.onClick.bind(Object(s.a)(o)),o}return Object(i.a)(n,[{key:"onClick",value:function(){this.props.onClick&&this.props.onClick()}},{key:"render",value:function(){return Object(f.jsx)("button",{onClick:this.onClick,className:"".concat(j.a.button," ").concat(this.props.className||""," ").concat(void 0===this.props.ripple||this.props.ripple?j.a.ripple:""),children:this.props.title})}}]),n}(u.a.Component),v=n(129),C=n.n(v),y=n(33),g=n(139),_=n.n(g),k=function(t){Object(r.a)(n,t);var e=Object(c.a)(n);function n(t){var o;return Object(a.a)(this,n),(o=e.call(this,t)).state={value:o.props.value||""},o.onKeyUp=o.onKeyUp.bind(Object(s.a)(o)),o.updateValue=o.updateValue.bind(Object(s.a)(o)),o}return Object(i.a)(n,[{key:"onKeyUp",value:function(t){this.props.onKeyUp&&this.props.onKeyUp(t)}},{key:"updateValue",value:function(t){var e=this;this.setState({value:t.target.value},(function(){e.props.onInput&&e.props.onInput(e.state.value)}))}},{key:"componentDidUpdate",value:function(){this.state.value!==this.props.value&&this.setState({value:this.props.value})}},{key:"render",value:function(){return Object(f.jsx)("textarea",Object(o.a)(Object(o.a)({},this.props),{},{className:"".concat(_.a.container," ").concat(this.props.className||""),placeholder:this.props.placeHolder||"Enter the value",onInput:this.updateValue,onKeyUp:this.onKeyUp}))}}]),n}(u.a.Component),w=function(t){Object(r.a)(n,t);var e=Object(c.a)(n);function n(t){var o;return Object(a.a)(this,n),(o=e.call(this,t)).updateValue=o.updateValue.bind(Object(s.a)(o)),o}return Object(i.a)(n,[{key:"updateValue",value:function(t){this.props.onInput&&this.props.onInput(t)}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"".concat(C.a.iconInput," ").concat(this.props.className||""),children:[Object(f.jsx)(k,{onInput:this.updateValue,placeHolder:this.props.placeHolder,value:this.props.value,onKeyUp:this.props.onKeyUp,onPaste:this.props.onPaste}),Object(f.jsx)(y.a,{faw:!0,icon:this.props.icon,onClick:this.props.onIconClick})]})}}]),n}(u.a.Component),x=function(t){Object(r.a)(n,t);var e=Object(c.a)(n);function n(t){var o;return Object(a.a)(this,n),(o=e.call(this,t)).titleComponent=Object(m.a)((function(t){return Object(f.jsx)("div",{className:h.a.title,children:t.title})})),o.onFormSubmit=o.onFormSubmit.bind(Object(s.a)(o)),o.onFormConfirm=o.onFormConfirm.bind(Object(s.a)(o)),o.onFormCancel=o.onFormCancel.bind(Object(s.a)(o)),o}return Object(i.a)(n,[{key:"onFormSubmit",value:function(t){return t.preventDefault(),!1}},{key:"onFormConfirm",value:function(){this.props.onSubmit&&this.props.onSubmit()}},{key:"onFormCancel",value:function(){this.props.onCancel&&this.props.onCancel()}},{key:"render",value:function(){return Object(f.jsxs)("div",{id:this.props.id,className:h.a.formContainer,children:[Object(f.jsxs)("div",{className:h.a.head,children:[Object(f.jsx)(this.titleComponent,{toolTipText:this.props.hint||this.props.title,title:this.props.title,position:"bottom",className:h.a.toolTip}),Object(f.jsx)("div",{className:h.a.miniTitle,children:this.props.miniTitle})]}),Object(f.jsxs)("form",{className:h.a.form,onSubmit:this.onFormSubmit,action:"#",children:[Object(f.jsxs)("div",{className:h.a.inputContainer,children:[(this.props.inputs||[]).map((function(t,e){return t.textArea?Object(p.createElement)(w,Object(o.a)(Object(o.a)({},t),{},{key:e})):Object(p.createElement)(d.a,Object(o.a)(Object(o.a)({},t),{},{key:e}))})),this.props.children]}),Object(f.jsxs)("div",{className:h.a.buttonContainer,children:[Object(f.jsx)(O,{title:"Submit",onClick:this.onFormConfirm}),Object(f.jsx)(O,{title:"Cancel",onClick:this.onFormCancel})]})]})]})}}]),n}(u.a.Component);e.a=x},134:function(t,e,n){"use strict";var o=n(30),a=n(12),i=n(13),s=n(16),r=n(15),c=n(1),p=n.n(c),u=n(135),l=n.n(u),h=n(5);e.a=function(t){return function(e){Object(s.a)(c,e);var n=Object(r.a)(c);function c(){return Object(a.a)(this,c),n.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"".concat(l.a.card," ").concat(l.a.modal," ").concat(this.props.active||void 0===this.props.active?l.a.activeModal:""," ").concat(this.props.className||""),children:Object(h.jsx)(t,Object(o.a)({},this.props))})}}]),c}(p.a.Component)}},135:function(t,e,n){t.exports={card:"Card__33D4Shx",modal:"Card__2kPs4X_",slideDown:"Card__2QxgUdY",activeModal:"Card__3lkHveD",slideUp:"Card__dl7YjV2"}},136:function(t,e,n){t.exports={authContainer:"Auth__1LIm1wG",authSelector:"Auth__3gX8USA",active:"Auth__2v41g0e",loginForm:"Auth__1EEbC98",signupForm:"Auth__2rFB_ST",formContainer:"Auth__2wMAFnu"}},137:function(t,e,n){t.exports={formContainer:"Form__lz0NI3P",head:"Form__1DAWWXZ",toolTip:"Form__Q90Qetd",title:"Form__lNS_YJ3",miniTitle:"Form__2qwZvGP",form:"Form__2TM1NoK",inputContainer:"Form__2PdQ0Zm",buttonContainer:"Form__KKQJEvD"}},138:function(t,e,n){t.exports={button:"Button__3QF_kfq",ripple:"Button__1ELLtUC"}},139:function(t,e,n){t.exports={container:"TextArea__17smsUJ"}},140:function(t,e,n){"use strict";var o=n(30),a=n(12),i=n(13),s=n(18),r=n(16),c=n(15),p=n(1),u=n.n(p),l=n(66),h=n(141),d=n.n(h),m=n(5),b=function(t){Object(r.a)(n,t);var e=Object(c.a)(n);function n(t){var o;return Object(a.a)(this,n),(o=e.call(this,t)).state={showComponentA:!0},o.properties=o.props.properties||{},o.componentA=o.props.componentA||null,o.componentB=o.props.componentB||null,o.onFormSwitch=o.onFormSwitch.bind(Object(s.a)(o)),o.toggleComponent=o.toggleComponent.bind(Object(s.a)(o)),o}return Object(i.a)(n,[{key:"onFormSwitch",value:function(t){}},{key:"toggleComponent",value:function(){var t=this;this.setState({showComponentA:!this.state.showComponentA},(function(){t.onFormSwitch(t.state.showComponentA)}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"".concat(d.a.container," ").concat(this.props.className||""),children:[Object(m.jsxs)("div",{className:d.a.selectionContainer,children:[Object(m.jsx)("span",{className:this.state.showComponentA?d.a.active:"",children:this.properties.aTitle}),Object(m.jsx)(l.a,{value:!this.state.showComponentA,onToggle:this.toggleComponent}),Object(m.jsx)("span",{className:this.state.showComponentA?"":d.a.active,children:this.properties.bTitle})]}),this.state.showComponentA?this.componentA?Object(m.jsx)(this.componentA,Object(o.a)({},this.properties.componentA)):null:this.componentB?Object(m.jsx)(this.componentB,Object(o.a)({},this.properties.componentB)):null,this.props.children||null]})}}]),n}(u.a.Component);e.a=b},141:function(t,e,n){t.exports={container:"DualPage__Ljh9MKf",selectionContainer:"DualPage__2Mg8zjc",active:"DualPage__2HGN9cZ"}},153:function(t,e,n){"use strict";n.r(e);var o=n(12),a=n(13),i=n(18),s=n(16),r=n(15),c=n(134),p=n(1),u=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={email:"",password:"",formSubmitted:!1},a.updateEmail=a.updateEmail.bind(Object(i.a)(a)),a.updatePassword=a.updatePassword.bind(Object(i.a)(a)),a.updateFormSubmissionStatus=a.updateFormSubmissionStatus.bind(Object(i.a)(a)),a}return Object(a.a)(n,[{key:"updateEmail",value:function(t){this.setState({email:t.toLowerCase()})}},{key:"updatePassword",value:function(t){this.setState({password:t})}},{key:"updateFormSubmissionStatus",value:function(t){this.setState({formSubmitted:t})}}]),n}(n.n(p).a.Component),l=n(136),h=n.n(l),d=n(133),m=n(17),b=n(52),j=n(65),f=n(20),O=n(14),v=n(42),C=n(11),y=n(5),g=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).login=a.login.bind(Object(i.a)(a)),a.cancel=a.cancel.bind(Object(i.a)(a)),a}return Object(a.a)(n,[{key:"cancel",value:function(){this.updateEmail(""),this.updatePassword("")}},{key:"login",value:function(){var t=this;this.state.email&&this.state.password&&(this.props.toggleLoader(!0),v.a.signInWithEmailAndPassword(this.state.email,this.state.password).then((function(e){t.props.updateAdminPrivilege(t.state.email,t.state.password),t.props.updateCurrentUser(new j.a(e)),t.updateFormSubmissionStatus(!0)})).catch((function(e){t.props.addNotification(Math.random(),{notification:e.message,title:e.code.split("/").reverse()[0]})})).finally((function(){t.props.toggleLoader(!1)})))}},{key:"render",value:function(){return this.state.formSubmitted?Object(y.jsx)(O.a,{to:C.e.main(this.props.hash,C.c[0].id)}):Object(y.jsx)(d.a,{id:h.a.loginForm,title:"\u3088\u3046\u3053\u305d",hint:"Welcome",miniTitle:"Sign in to your account",onSubmit:this.login,onCancel:this.cancel,inputs:[{icon:"fa-user",placeHolder:"Email",value:this.state.email,onInput:this.updateEmail},{icon:"fa-key",placeHolder:"Password",value:this.state.password,onInput:this.updatePassword,type:"password"}]})}}]),n}(u);var _=Object(f.b)((function(t){return{hash:t.user.userHash}}),(function(t){return{addNotification:function(e,n){return t(Object(m.a)(e,n))},updateAdminPrivilege:function(e,n){return t(Object(b.a)(e,n))},updateCurrentUser:function(e){return t(Object(b.b)(e))},toggleLoader:function(e){return t(Object(m.d)(e))}}}))(g),k=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).signup=a.signup.bind(Object(i.a)(a)),a.cancel=a.cancel.bind(Object(i.a)(a)),a}return Object(a.a)(n,[{key:"cancel",value:function(){this.updateEmail(""),this.updatePassword("")}},{key:"signup",value:function(){var t=this;this.state.email&&this.state.password&&(this.props.toggleLoader(!0),v.a.createUserWithEmailAndPassword(this.state.email,this.state.password).then((function(e){t.props.updateCurrentUser(new j.a(e)),t.updateFormSubmissionStatus(!0)})).catch((function(e){var n=Math.random();t.props.addNotification(n,{title:e.code.split("/").reverse()[0],notification:e.message,id:n})})).finally((function(){t.props.toggleLoader(!1)})))}},{key:"render",value:function(){return Object(y.jsx)(d.a,{id:h.a.signupForm,title:"\u5bb6\u65cf\u306b\u52a0\u308f\u308b",miniTitle:"Join the Animeverse",hint:"Join the family",onSubmit:this.signup,onCancel:this.cancel,inputs:[{placeHolder:"Email",onInput:this.updateEmail,value:this.state.email,icon:"fa-user"},{placeHolder:"Password",onInput:this.updatePassword,icon:"fa-key",value:this.state.password,type:"password"}]})}}]),n}(u);var w=Object(f.b)(null,(function(t){return{addNotification:function(e,n){return t(Object(m.a)(e,n))},updateCurrentUser:function(e){return t(Object(b.b)(e))},toggleLoader:function(e){return t(Object(m.d)(e))}}}))(k),x=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).componentA=Object(c.a)(_),a.componentB=Object(c.a)(w),a.properties={aTitle:"Login",bTitle:"Signup",componentA:{className:h.a.formContainer,active:a.state.showingComponentA},componentB:{className:h.a.formContainer,active:!a.state.showingComponentA}},a.getLogoColor=a.getLogoColor.bind(Object(i.a)(a)),a.props.updateLogoColor(a.getLogoColor()),a}return Object(a.a)(n,[{key:"getLogoColor",value:function(){return this.state.showComponentA?C.d.saiyanGod:C.d.saiyanUltra}},{key:"onFormSwitch",value:function(t){this.props.updateLogoColor(this.getLogoColor())}}]),n}(n(140).a);e.default=Object(f.b)(null,(function(t){return{updateLogoColor:function(e){return t(Object(m.h)(e))}}}))(x)}}]);