class ButtonCount extends HTMLElement {
    constructor() {
        super();
        const element = document.createElement('template');
        element.innerHTML = `<button class="button-count">Times Clicked: 0</button>`;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(element.content.cloneNode(true));

        let number = 0;
        let button = this.shadowRoot.firstElementChild;
        button.addEventListener('click', () => {
            number += 1;
            button.textContent = `Times Clicked: ${number}`;
        });
    }
}
customElements.define("button-count", ButtonCount);