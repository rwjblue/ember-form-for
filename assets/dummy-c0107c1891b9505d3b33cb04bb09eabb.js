"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,n,t,o,r){var f=void 0;n["default"].MODEL_FACTORY_INJECTIONS=!0,f=n["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:t["default"]}),(0,o["default"])(f,r["default"].modulePrefix),e["default"]=f}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,n,t){var o=t["default"].APP.name,r=t["default"].APP.version;e["default"]=n["default"].extend({version:r,name:o})}),define("dummy/components/form-controls/base-input",["exports","ember-form-for/components/form-controls/base-input"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-controls/button",["exports","ember-form-for/components/form-controls/button"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-controls/reset",["exports","ember-form-for/components/form-controls/reset"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-controls/submit",["exports","ember-form-for/components/form-controls/submit"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-errors",["exports","ember-form-for/components/form-errors"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-field",["exports","ember-form-for/components/form-field"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-fields/checkbox-field",["exports","ember-form-for/components/form-fields/checkbox-field"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-fields/color-field",["exports","ember-form-for/components/form-fields/color-field"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-fields/custom-field",["exports","ember-form-for/components/form-fields/custom-field"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-fields/date-field",["exports","ember-form-for/components/form-fields/date-field"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-fields/datetime-field",["exports","ember-form-for/components/form-fields/datetime-field"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-fields/datetime-local-field",["exports","ember-form-for/components/form-fields/datetime-local-field"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-fields/email-field",["exports","ember-form-for/components/form-fields/email-field"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-fields/file-field",["exports","ember-form-for/components/form-fields/file-field"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-fields/hidden-field",["exports","ember-form-for/components/form-fields/hidden-field"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-fields/month-field",["exports","ember-form-for/components/form-fields/month-field"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-fields/number-field",["exports","ember-form-for/components/form-fields/number-field"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-fields/password-field",["exports","ember-form-for/components/form-fields/password-field"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-fields/power-select-field",["exports","ember-form-for/components/form-fields/power-select-field"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-fields/radio-field",["exports","ember-form-for/components/form-fields/radio-field"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-fields/radio-group",["exports","ember-form-for/components/form-fields/radio-group"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-fields/range-field",["exports","ember-form-for/components/form-fields/range-field"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-fields/search-field",["exports","ember-form-for/components/form-fields/search-field"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-fields/select-field",["exports","ember-form-for/components/form-fields/select-field"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-fields/tel-field",["exports","ember-form-for/components/form-fields/tel-field"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-fields/text-field",["exports","ember-form-for/components/form-fields/text-field"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-fields/textarea-field",["exports","ember-form-for/components/form-fields/textarea-field"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-fields/time-field",["exports","ember-form-for/components/form-fields/time-field"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-fields/url-field",["exports","ember-form-for/components/form-fields/url-field"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-fields/week-field",["exports","ember-form-for/components/form-fields/week-field"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-for",["exports","ember-form-for/components/form-for"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-hint",["exports","ember-form-for/components/form-hint"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/form-label",["exports","ember-form-for/components/form-label"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/one-way-checkbox",["exports","ember-one-way-controls/components/one-way-checkbox"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/one-way-color",["exports","ember-one-way-controls/components/one-way-color"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/one-way-date",["exports","ember-one-way-controls/components/one-way-date"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/one-way-datetime-local",["exports","ember-one-way-controls/components/one-way-datetime-local"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/one-way-email",["exports","ember-one-way-controls/components/one-way-email"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/one-way-file",["exports","ember-one-way-controls/components/one-way-file"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/one-way-hidden",["exports","ember-one-way-controls/components/one-way-hidden"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/one-way-input",["exports","ember-one-way-controls/components/one-way-input"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/one-way-month",["exports","ember-one-way-controls/components/one-way-month"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/one-way-number",["exports","ember-one-way-controls/components/one-way-number"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/one-way-password",["exports","ember-one-way-controls/components/one-way-password"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/one-way-radio",["exports","ember-one-way-controls/components/one-way-radio"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/one-way-range",["exports","ember-one-way-controls/components/one-way-range"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/one-way-search",["exports","ember-one-way-controls/components/one-way-search"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/one-way-select/option",["exports","ember-one-way-controls/components/one-way-select/option"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/one-way-select",["exports","ember-one-way-controls/components/one-way-select"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/one-way-tel",["exports","ember-one-way-controls/components/one-way-tel"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/one-way-text",["exports","ember-one-way-controls/components/one-way-text"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/one-way-textarea",["exports","ember-one-way-controls/components/one-way-textarea"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/one-way-time",["exports","ember-one-way-controls/components/one-way-time"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/one-way-url",["exports","ember-one-way-controls/components/one-way-url"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/one-way-week",["exports","ember-one-way-controls/components/one-way-week"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/controllers/application",["exports","ember"],function(e,n){var t=n["default"].get,o=n["default"].set,r=n["default"].isEmpty;e["default"]=n["default"].Controller.extend({submit:function(){window.alert("Saved!")},reset:function(){o(this,"object",n["default"].Object.create({errors:{}}))},update:function(e,f,l){if(r(l)){var i=t(e,"errors."+f);void 0===i&&(i=n["default"].A(),o(e,"errors."+f,i)),i.pushObject({message:"can't be blank"})}o(e,f,l)},object:n["default"].Object.create({errors:{}})})}),define("dummy/controllers/array",["exports","ember"],function(e,n){e["default"]=n["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,n){e["default"]=n["default"].Controller}),define("dummy/helpers/contains",["exports","ember-form-for/helpers/contains"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}}),Object.defineProperty(e,"contains",{enumerable:!0,get:function(){return n.contains}})}),define("dummy/helpers/is-equal",["exports","ember-form-for/helpers/is-equal"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/helpers/one-way-select/contains",["exports","ember-one-way-controls/helpers/one-way-select/contains"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}}),Object.defineProperty(e,"contains",{enumerable:!0,get:function(){return n.contains}})}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,n,t){e["default"]={name:"App Version",initialize:(0,n["default"])(t["default"].APP.name,t["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,n){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",n["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,n,t){function o(){var e=arguments[1]||arguments[0];if(t["default"].exportApplicationGlobal!==!1){var o,r=t["default"].exportApplicationGlobal;o="string"==typeof r?r:n["default"].String.classify(t["default"].modulePrefix),window[o]||(window[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[o]}}))}}e.initialize=o,e["default"]={name:"export-application-global",initialize:o}}),define("dummy/initializers/form-for-initializer",["exports","ember","dummy/config/environment","ember-form-for/components/form-field","ember-form-for/components/form-controls/button","ember-form-for/components/form-controls/submit","ember-form-for/components/form-controls/reset"],function(e,n,t,o,r,f,l){function i(){var e=a(m,t["default"]["ember-form-for"]);o["default"].reopen({classNames:e.fieldClasses,classNameBindings:["hasErrors:"+e.fieldErrorClass],errorClasses:e.errorClasses,hintClasses:e.hintClasses,inputClasses:e.inputClasses,labelClasses:e.labelClasses}),r["default"].reopen({classNames:e.buttonClasses}),f["default"].reopen({classNames:e.submitClasses}),l["default"].reopen({classNames:e.resetClasses})}e.initialize=i;var a=n["default"].merge,m={buttonClasses:["form-button"],fieldClasses:["form-field"],fieldErrorClass:"form-field--has-errors",errorClasses:["form-field--errors"],hintClasses:["form-field--hint"],inputClasses:["form-field--control"],labelClasses:["form-field--label"],resetClasses:["form-button--reset"],submitClasses:["form-button--submit"]};e["default"]={name:"form-for-initializer",initialize:i}}),define("dummy/resolver",["exports","ember-resolver"],function(e,n){e["default"]=n["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,n,t){var o=n["default"].Router.extend({location:t["default"].locationType});o.map(function(){}),e["default"]=o}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.7.0-canary+78cea046",loc:{source:null,start:{line:3,column:0},end:{line:18,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createTextNode("  ");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n  ");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n  ");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n  ");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n  ");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n\n  ");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n  ");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n  ");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n\n  ");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n\n  ");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n  ");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var o=new Array(11);return o[0]=e.createMorphAt(n,1,1,t),o[1]=e.createMorphAt(n,3,3,t),o[2]=e.createMorphAt(n,5,5,t),o[3]=e.createMorphAt(n,7,7,t),o[4]=e.createMorphAt(n,9,9,t),o[5]=e.createMorphAt(n,11,11,t),o[6]=e.createMorphAt(n,13,13,t),o[7]=e.createMorphAt(n,15,15,t),o[8]=e.createMorphAt(n,17,17,t),o[9]=e.createMorphAt(n,19,19,t),o[10]=e.createMorphAt(n,21,21,t),o},statements:[["inline","log",[["get","object.errors",["loc",[null,[4,8],[4,21]]]]],[],["loc",[null,[4,2],[4,23]]]],["inline","f.text-field",["firstName"],[],["loc",[null,[5,2],[5,30]]]],["inline","f.text-field",["lastName"],[],["loc",[null,[6,2],[6,29]]]],["inline","f.select-field",["gender","unknown male female"],[],["loc",[null,[7,2],[7,51]]]],["inline","f.date-field",["birthDate"],[],["loc",[null,[8,2],[8,30]]]],["inline","f.email-field",["emailAddress"],[],["loc",[null,[10,2],[10,34]]]],["inline","f.text-field",["userName"],[],["loc",[null,[11,2],[11,29]]]],["inline","f.password-field",["password"],["hint","Must be at least 6 characters long"],["loc",[null,[12,2],[12,75]]]],["inline","f.checkbox-field",["terms"],["label","I agree to the Terms of Service"],["loc",[null,[14,2],[14,70]]]],["inline","f.reset",["Clear form"],[],["loc",[null,[16,2],[16,27]]]],["inline","f.submit",["Create account"],[],["loc",[null,[17,2],[17,31]]]]],locals:["f"],templates:[]}}();return{meta:{revision:"Ember@2.7.0-canary+78cea046",loc:{source:null,start:{line:1,column:0},end:{line:23,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createElement("h2");e.setAttribute(t,"id","title");var o=e.createTextNode("Welcome to Ember Form For");e.appendChild(t,o),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("a");e.setAttribute(t,"class","github-fork-ribbon"),e.setAttribute(t,"href","https://github.com/nathanhammond/ember-a11y"),e.setAttribute(t,"title","GitHub Repo");var o=e.createTextNode("GitHub Repo");e.appendChild(t,o),e.appendChild(n,t);var t=e.createTextNode("\n");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var o=new Array(2);return o[0]=e.createMorphAt(n,2,2,t),o[1]=e.createMorphAt(n,4,4,t),o},statements:[["block","form-for",[["get","object",["loc",[null,[3,12],[3,18]]]]],["update",["subexpr","action",[["get","update",["loc",[null,[3,34],[3,40]]]]],[],["loc",[null,[3,26],[3,41]]]],"reset",["subexpr","action",[["get","reset",["loc",[null,[3,56],[3,61]]]]],[],["loc",[null,[3,48],[3,62]]]],"submit",["subexpr","action",[["get","submit",["loc",[null,[3,78],[3,84]]]]],[],["loc",[null,[3,70],[3,85]]]]],0,null,["loc",[null,[3,0],[18,13]]]],["content","outlet",["loc",[null,[20,0],[20,10]]]]],locals:[],templates:[e]}}())}),define("dummy/config/environment",["ember"],function(e){var n="dummy";try{var t=n+"/config/environment",o=e["default"].$('meta[name="'+t+'"]').attr("content"),r=JSON.parse(unescape(o));return{"default":r}}catch(f){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-form-for",version:"2.0.0-alpha.1+db9d210c"});