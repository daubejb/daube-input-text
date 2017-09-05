const template = document.createElement('template');

template.innerHTML = `

  <style>

    :host {
      font-size: 1rem;
      display: block;
      font-size: 1rem;
      font-family: Helvetica, Verdana, sans-serif;
      color: rgba(0,0,0,0.87);
      margin: 0;
      padding: 0;
    }

    :host([hidden]) {
      display: none;
    }

    /* State - idle + empty **************************/

    #daubeinputdiv {
      margin: 2rem 0;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: column;
      flex-direction: column;
      position: relative;
      max-width: 45rem;
      height: 3.2rem;
    }

    input {
      background-color: rgba(0,0,0,0);
      position: absolute;
      bottom: 0rem;
      padding: 0.4rem 0 0.4rem 0;
      margin-top: 1.5rem;
      border: none;
      border-bottom: 1px solid rgba(0,0,0,0.42);
      width: 100%;
      font-size: 1rem;
      color: rgba(0,0,0,0.87);
    }

    label {
      position: absolute;
      font-size: 0.95rem;
      top: 0rem;
      background-color: rgba(0,0,0,0);
      color: rgba(0,0,0,0.54);
      pointer-events: none;
    }

    /* State - hover ********************************/

    input:hover {
      border-bottom: 2px solid rgba(0,0,0,0.87);
    }

    input:hover ~ label {
      color: #237d32;
    }

    input:disabled:hover ~ label {
      color: rgba(0,0,0,0.25);
    }

    /* State - focus ********************************/

    input:focus {
      outline:none;
      background: rgba(0,0,0,0.05);
    }

    input:focus ~ label {
      color: #237d32;
    }

    /* State - focus ********************************/

    input:focus {
      border-bottom: 2px solid #237d32;
      color: rgba(0,0,0,0.87);
    }

    input:valid {
      color: rgba(0,0,0,0.87);
    }

    /* State - disabled *****************************/

    input:disabled {
      border-bottom: 1px dashed rgba(0,0,0,0.42);
      color: rgba(0,0,0,0.25);
    }

    input:disabled ~ label {
      color: rgba(0,0,0,0.25);
    }

    /* TODO State - error ***************************/

    /* NEVER USE PLACEHOLDERS ***********************/
    ::-webkit-input-placeholder { color: rgba(0,0,0,0); } /* Chrome/Opera/Safari */
    ::-moz-placeholder { color: rgba(0,0,0,0); } /* Firefox 19+ */
    :-ms-input-placeholder { color: rgba(0,0,0,0); } /* IE 10+ */
    :-moz-placeholder { color: rgba(0,0,0,0); } /* Firefox 18- */

  </style>

  <div id="daubeinputdiv">
    <input type="text"></input>
    <label></label>
  </div>

`

if (window.ShadyCSS) {
  ShadyCSS.prepareTemplate(template, 'daube-input-text');
}

class DaubeInputText extends HTMLElement {
  static get observedAttributes() {
    //TODO - implement autocomplete
    //TODO - implement autofocus
    //TODO - implement form
    //TODO - implement inputmode
    //TODO - implement pattern
    //TODO - implement value
    //TODO - implement Helper text
    return ['label', 'disabled', 'name', 'required', 'value'];
  }

  get value() {
    return this._value;
  }

  set value(v) {
    if (this._value === v) return;
    this._value = v;
    this.setAttribute('value', v);
  }

  get name() {
    return this._name;
  }

  set name(v) {
    if (this._name === v) return;
    this._name = v;
    this.setAttribute('name', v);
  }

  get label() {
    return this._label;
  }

  set label(v) {
    if (this._label === v) return;
    if (v) {
      this.setAttribute('label', v);
    } else {
      this.removeAttribute('label');
    }
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  set disabled(v) {
    if (v) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }

  get required() {
    return this.hasAttribute('required');
  }

  set required(v) {
    if (v) {
      this.setAttribute('required', '');
    } else {
      this.removeAttribute('required');
    }
  }

  attributeChangedCallback (name, oldValue, newValue) {
    const hasValue = newValue !== null;
    switch (name) {
      case 'disabled':
        this.toggleDisabled();
        console.log('disabled changed');
        break;

      case 'required':
        this.toggleRequired();
        console.log('required changed');
        break;

      case 'name':
        this.processName();
        console.log('name changed');
        break;

      case 'label':
        this.processLabel();
        console.log('label changed');
        break;

      case 'value':
        this.processValue();
        console.log('value changed');
        break;
    }
  }

  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    if (window.ShadyCSS) {
      ShadyCSS.styleElement(this);
    }
  }

  getLabel() {
    return this.shadowRoot.querySelector('label');
  }

  getInput() {
    return this.shadowRoot.querySelector('input');
  }

  toggleDisabled() {
    var label = this.getLabel();
    var input = this.getInput();

    if (this.disabled) {
      label.setAttribute('disabled', '');
      input.setAttribute('disabled', '');
    } else {
      label.removeAttribute('disabled');
      input.removeAttribute('disabled');
    }
  }

  toggleRequired() {
    var input = this.getInput();

    if (this.required) {
      input.setAttribute('required', '');
    } else {
      input.removeAttribute('required');
    }
  }

  processName() {
    var input = this.getInput();

    if (!this.hasAttribute('name')) {
      input.removeAttribute('name');
    } else {
    input.setAttribute('name', this.getAttribute('name'));
    }
  }

  processLabel() {
    var label = this.getLabel();
    label.innerHTML = this.getAttribute('label')
  }

  processValue() {
    var input = this.getInput();

    if (!this.hasAttribute('value')) {
      input.removeAttribute('value');
    } else {
    input.setAttribute('value', this.getAttribute('value'));
    }
  }

} // Class CustomElement

customElements.define("daube-input-text", DaubeInputText);