(function(t){function e(e){for(var s,i,r=e[0],l=e[1],c=e[2],m=0,f=[];m<r.length;m++)i=r[m],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},o={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/InstabugLogin/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01f4":function(t,e,a){},"0544":function(t,e,a){t.exports=a.p+"img/microsoft.5bd0e45f.svg"},"0894":function(t,e,a){"use strict";a("7c62")},1644:function(t,e,a){t.exports=a.p+"img/lyft-full-logo.09bfa8e5.svg"},"16c9":function(t,e,a){t.exports=a.p+"img/crash-reporting.6af6ed44.svg"},"1b8f":function(t,e,a){t.exports=a.p+"img/asana-full-logo.e274e8ec.svg"},"29b6":function(t,e,a){t.exports=a.p+"img/overview.d7aab7d6.svg"},"37c3":function(t,e,a){t.exports=a.p+"img/bug-reporting.db4aeb5c.svg"},"387e":function(t,e,a){t.exports=a.p+"img/github.3335f618.svg"},4095:function(t,e,a){"use strict";a("b7c7")},"429e":function(t,e,a){},"54df":function(t,e,a){"use strict";a("01f4")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],i=(a("5c0b"),a("2877")),r={},l=Object(i["a"])(r,o,n,!1,null,null,null),c=l.exports,u=(a("b0c0"),a("8c4f")),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("img",{staticClass:"home__logo",attrs:{src:a("9b19"),alt:"logo"}}),s("span",{staticClass:"home__welcome"},[t._v("Welcome to "),s("strong",[t._v(t._s(t.email))])]),s("br"),s("button",{staticClass:"home__btn",on:{click:t.logout}},[t._v("Logout")])])},f=[],d={name:"Home",data:function(){return{email:""}},created:function(){this.email=window.localStorage.getItem("userEmail")},methods:{logout:function(){window.localStorage.removeItem("userEmail"),this.$router.push("/login")}}},p=d,g=(a("54df"),Object(i["a"])(p,m,f,!1,null,"a7aec14c",null)),v=g.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container login"},[s("div",[s("ImageSlider"),s("div",{staticClass:"right-col"},[s("img",{attrs:{src:a("9b19"),alt:"logo"}}),s("span",{staticClass:"instabug"},[t._v("Log in to Instabug")]),t._m(0),t._m(1),s("LoginForm"),s("Companies")],1)],1)])},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"social"},[s("a",{staticClass:"social__button google",attrs:{href:"/login"}},[s("span",[s("img",{staticClass:"social__button__img",attrs:{src:a("cebc"),alt:"google-icon"}})]),t._v(" Google ")]),s("a",{staticClass:"social__button github",attrs:{href:"/login"}},[s("img",{staticClass:"social__button__img",attrs:{src:a("387e"),alt:"github-icon"}}),t._v(" GitHub ")]),s("a",{staticClass:"social__button microsoft",attrs:{href:"/login"}},[s("img",{staticClass:"social__button__img",attrs:{src:a("0544"),alt:"microsoft-icon"}}),t._v(" Microsoft ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divider"},[a("span",{staticClass:"divider__title"},[t._v("OR")])])}],w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slider"},[a("img",{staticClass:"slider__img",attrs:{src:t.curImgSrc,alt:"product-img",draggable:"false"}}),a("p",{staticClass:"slider__txt"},[t._v(t._s(this.curText))]),a("div",t._l(3,(function(e,s){return a("span",{key:e,staticClass:"slider__dot",class:{active:s===t.currentIndex}})})),0)])},_=[],C={name:"ImageSlider",data:function(){return{imgs:[a("29b6"),a("37c3"),a("16c9")],labels:["Accelerate Your Entire Mobile Team Workflow","The Most Comprehensive Bug Reporting Tool for Mobile Apps","Secure Crash Reporting With Real-Time Alerts"],currentIndex:0,timer:null}},created:function(){var t=this;setInterval((function(){t.currentIndex=(t.currentIndex+1)%t.imgs.length}),2e3)},computed:{curImgSrc:function(){return this.imgs[this.currentIndex]},curText:function(){return this.labels[this.currentIndex]}}},x=C,P=(a("0894"),Object(i["a"])(x,w,_,!1,null,"1f34f0d1",null)),y=P.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[t.loginError?a("div",{staticClass:"login__error",attrs:{id:"incorrect_data"}},[a("span",{staticClass:"login__error__text"},[t._v(" Your email and/or password are correct ")])]):t._e(),a("label",{staticClass:"form__label email",attrs:{for:"email"}},[t._v("Work Email")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form__input",class:{invalid:!t.validEmail},attrs:{id:"email",type:"email",placeholder:"you@company.com"},domProps:{value:t.email},on:{blur:function(e){return t.validateEmail()},input:function(e){e.target.composing||(t.email=e.target.value)}}}),t.validEmail?t._e():a("span",{staticClass:"form__error",attrs:{id:"invalid_email"}},[t._v("Enter a valid email address")]),t.validEmail?t._e():a("br"),a("label",{staticClass:"form__label",attrs:{for:"password"}},[t._v("Password")]),a("router-link",{staticClass:"form__anchor",attrs:{to:"/login"}},[t._v(" Forget Password? ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form__input",class:{invalid:!t.validPassword},attrs:{id:"password",type:"password",placeholder:"8+ Characters"},domProps:{value:t.password},on:{input:[function(e){e.target.composing||(t.password=e.target.value)},t.validatePassword]}}),t.validPassword?t._e():a("span",{staticClass:"form__error"},[t._v("Password must be 6 characters or more")]),a("button",{staticClass:"form__button",attrs:{id:"submit",type:"submit",disabled:!(t.validEmail&&t.validPassword&&t.email&&t.password)}},[t._v(" Log In ")]),a("div",{staticClass:"form__options"},[a("span",{staticClass:"form__signup"},[t._v(" Don't have an account? "),a("router-link",{staticClass:"form__link",attrs:{to:"/login"}},[t._v(" Sign up ")])],1),a("router-link",{staticClass:"form__link form__right",attrs:{to:"/login"}},[a("span",[t._v(" Login via SSO ")])])],1)],1)},E=[],I=(a("caad"),a("2532"),a("7db0"),{data:function(){return{email:"",password:"",validEmail:!0,validPassword:!0,loginError:!1,validData:[{email:"mohamed@instabug.com",password:"P12345678"},{email:"mohamed1@instabug.com",password:"P12345678"},{email:"mohamed2@instabug.com",password:"P12345678"},{email:"mohamed3@instabug.com",password:"P12345678"},{email:"mohamed4@instabug.com",password:"P12345678"},{email:"mohamed5@instabug.com",password:"P12345678"},{email:"mohamed6@instabug.com",password:"P12345678"},{email:"mohamed7@instabug.com",password:"P12345678"}]}},methods:{validateEmail:function(){this.validEmail=!!/^\S+@\S+\.\S+$/.test(this.email)},validatePassword:function(){var t=this.email.substring(0,this.email.indexOf("@"));this.validPassword=!(this.password.includes(t)||!/[A-Z]/.test(this.password)||this.password.length<9||!/[0-9]/.test(this.password))},login:function(){var t=this,e=!!this.validData.find((function(e){return e.email===t.email&&e.password===t.password}));e?(localStorage.setItem("userEmail",this.email),this.$router.push("/")):this.loginError=!0}}}),L=I,k=(a("b42e"),Object(i["a"])(L,A,E,!1,null,"181e8e92",null)),T=k.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"companies"},[a("span",{staticClass:"companies__title"},[t._v("Trusted by the top companies")]),a("br"),a("div",{staticClass:"companies__container"},t._l(t.imgs,(function(t){return a("div",{key:t,staticClass:"companies__imgs"},[a("img",{staticClass:"companies__img",attrs:{src:t,alt:"logo"}})])})),0)])},N=[],S={name:"Companies",data:function(){return{imgs:[a("1644"),a("b8bd"),a("1b8f"),a("6f24"),a("7eb1")]}}},R=S,z=(a("4095"),Object(i["a"])(R,j,N,!1,null,"2d568738",null)),O=z.exports,M={name:"Login",components:{ImageSlider:y,LoginForm:T,Companies:O}},Z=M,D=(a("abcf"),Object(i["a"])(Z,b,h,!1,null,"2eb9756c",null)),F=D.exports,B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"notfound"},[s("img",{staticClass:"notfound__img",attrs:{src:a("d754"),alt:"notfound"}}),s("span",{staticClass:"notfound__title"},[t._v("404 - Page Not Found!")]),s("span",{staticClass:"notfound__txt"},[t._v("Sorry, that page doesn’t exist. What would you like to do?")])])}],H={name:"NotFound"},J=H,q=(a("f145"),Object(i["a"])(J,B,U,!1,null,"98d42d0a",null)),W=q.exports,V=function(){return!!localStorage.getItem("userEmail")};s["a"].use(u["a"]);var Y=[{path:"/",name:"Home",component:v,meta:{allowAnonymous:!1,title:"Home | Instabug"}},{path:"/login",name:"Login",component:F,meta:{allowAnonymous:!0,title:"Login | Instabug"}},{path:"/*",name:"NotFound",component:W,meta:{allowAnonymous:!0,title:"Not Found | Instabug"}}],X=new u["a"]({mode:"history",base:"/InstabugLogin/",routes:Y});X.beforeEach((function(t,e,a){"Login"==t.name&&V()?a({path:"/"}):t.meta.allowAnonymous||V()?a():a({path:"/login"})})),X.afterEach((function(t){s["a"].nextTick((function(){document.title=t.meta.title||"Instabug"}))}));var G=X;s["a"].config.productionTip=!1,new s["a"]({router:G,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"6f24":function(t,e,a){t.exports=a.p+"img/one-plus-logo.67a59c76.svg"},"7c62":function(t,e,a){},"7eb1":function(t,e,a){t.exports=a.p+"img/house-party-logo.12038bc2.svg"},8741:function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"img/logo.41934535.svg"},"9c0c":function(t,e,a){},abcf:function(t,e,a){"use strict";a("429e")},b42e:function(t,e,a){"use strict";a("8741")},b7c7:function(t,e,a){},b8bd:function(t,e,a){t.exports=a.p+"img/buzzfeed-full-logo.12ef97f9.svg"},cebc:function(t,e){t.exports="data:image/png;base64,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"},d501:function(t,e,a){},d754:function(t,e,a){t.exports=a.p+"img/not-found.3c31f830.jpg"},f145:function(t,e,a){"use strict";a("d501")}});
//# sourceMappingURL=app.eaed6775.js.map