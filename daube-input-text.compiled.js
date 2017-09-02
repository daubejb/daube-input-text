"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),template=document.createElement("template");template.innerHTML='\n\n  <style>\n\n    :host {\n      font-size: 1rem;\n      display: block;\n      font-size: 1rem;\n      font-family: Helvetica, Verdana, sans-serif;\n      color: rgba(0,0,0,0.87);\n      margin: 0;\n      padding: 0;\n    }\n\n    :host([hidden]) {\n      display: none;\n    }\n\n    /* State - idle + empty **************************/\n\n    #daubeinputdiv {\n      margin: 2rem 0;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-flex-direction: column;\n      flex-direction: column;\n      position: relative;\n      max-width: 45rem;\n      height: 3.2rem;\n    }\n\n    input {\n      background-color: rgba(0,0,0,0);\n      position: absolute;\n      bottom: 0rem;\n      padding: 0.4rem 0 0.4rem 0;\n      margin-top: 1.5rem;\n      border: none;\n      border-bottom: 1px solid rgba(0,0,0,0.42);\n      width: 100%;\n      font-size: 1rem;\n      color: rgba(0,0,0,0.87);\n    }\n\n    label {\n      position: absolute;\n      font-size: 0.95rem;\n      top: 0rem;\n      background-color: rgba(0,0,0,0);\n      color: rgba(0,0,0,0.54);\n      pointer-events: none;\n    }\n\n    /* State - hover ********************************/\n\n    input:hover {\n      border-bottom: 2px solid rgba(0,0,0,0.87);\n    }\n\n    input:hover ~ label {\n      color: #237d32;\n    }\n\n    input:disabled:hover ~ label {\n      color: rgba(0,0,0,0.25);\n    }\n\n    /* State - focus ********************************/\n\n    input:focus {\n      outline:none;\n      background: rgba(0,0,0,0.05);\n    }\n\n    input:focus ~ label {\n      color: #237d32;\n    }\n\n    /* State - focus ********************************/\n\n    input:focus {\n      border-bottom: 2px solid #237d32;\n      color: rgba(0,0,0,0.87);\n    }\n\n    input:valid {\n      color: rgba(0,0,0,0.87);\n    }\n\n    /* State - disabled *****************************/\n\n    input:disabled {\n      border-bottom: 1px dashed rgba(0,0,0,0.42);\n      color: rgba(0,0,0,0.25);\n    }\n\n    input:disabled ~ label {\n      color: rgba(0,0,0,0.25);\n    }\n\n    /* TODO State - error ***************************/\n\n    /* NEVER USE PLACEHOLDERS ***********************/\n    ::-webkit-input-placeholder { color: rgba(0,0,0,0); } /* Chrome/Opera/Safari */\n    ::-moz-placeholder { color: rgba(0,0,0,0); } /* Firefox 19+ */\n    :-ms-input-placeholder { color: rgba(0,0,0,0); } /* IE 10+ */\n    :-moz-placeholder { color: rgba(0,0,0,0); } /* Firefox 18- */\n\n  </style>\n\n  <div id="daubeinputdiv">\n    <input type="text"/>\n    <label></label>\n  </div>\n\n',window.ShadyCSS&&ShadyCSS.prepareTemplate(template,"daube-input-text");var DaubeInputText=function(e){function t(){_classCallCheck(this,t);var e=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.attachShadow({mode:"open"}),e.shadowRoot.appendChild(template.content.cloneNode(!0)),e}return _inherits(t,HTMLElement),_createClass(t,[{key:"attributeChangedCallback",value:function(e,t,n){switch(e){case"disabled":this.toggleDisabled(),console.log("disabled changed");break;case"required":this.toggleRequired(),console.log("required changed");break;case"name":this.processName(),console.log("name changed");break;case"label":this.processLabel(),console.log("label changed")}}},{key:"name",get:function(){return this._name},set:function(e){this._name!==e&&(this._name=e,this.setAttribute("name",e))}},{key:"label",get:function(){return this._label},set:function(e){this._label!==e&&(e?this.setAttribute("label",e):this.removeAttribute("label"))}},{key:"disabled",get:function(){return this.hasAttribute("disabled")},set:function(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled")}},{key:"required",get:function(){return this.hasAttribute("required")},set:function(e){e?this.setAttribute("required",""):this.removeAttribute("required")}}],[{key:"observedAttributes",get:function(){return["label","disabled","name","required"]}}]),_createClass(t,[{key:"connectedCallback",value:function(){window.ShadyCSS&&ShadyCSS.styleElement(this)}},{key:"getLabel",value:function(){return this.shadowRoot.querySelector("label")}},{key:"getInput",value:function(){return this.shadowRoot.querySelector("input")}},{key:"toggleDisabled",value:function(){var e=this.getLabel(),t=this.getInput();this.disabled?(e.setAttribute("disabled",""),t.setAttribute("disabled","")):(e.removeAttribute("disabled"),t.removeAttribute("disabled"))}},{key:"toggleRequired",value:function(){var e=this.getInput();this.required?e.setAttribute("required",""):e.removeAttribute("required")}},{key:"toggleAutocomplete",value:function(){var e=this.getInput();this.autocomplete?e.setAttribute("autocomplete","yes"):e.removeAttribute("autocomplete")}},{key:"processName",value:function(){var e=this.getInput();this.hasAttribute("name")?e.setAttribute("name",this.getAttribute("name")):e.removeAttribute("name")}},{key:"processLabel",value:function(){this.getLabel().innerHTML=this.getAttribute("label")}}]),t}();customElements.define("daube-input-text",DaubeInputText);