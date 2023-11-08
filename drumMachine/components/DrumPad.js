export class DrumPad extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.getElementById("template-drumpad");
    const content = template.content.cloneNode(true);
    this.appendChild(content);
  }
}

customElements.define("drum-pad", DrumPad);
