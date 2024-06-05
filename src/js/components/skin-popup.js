// noinspection JSUnusedGlobalSymbols

/**
 * Popup.
 *
 * Required attributes:
 *
 *   - id
 *
 * Optional attributes:
 *   - data-type: tooltip, menu (default)
 */
export class SkinPopup extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        if (!this.hasAttribute('id')) {
            console.log('Unable to create skin-popup: ID does not exist'); // TODO: Check if debug
            return;
        }

        const contents = this.innerHTML;

        if (typeof this.dataset.type === "undefined") {
            this.dataset.type = "menu";
        }

        let innerHtml = contents;

        if (this.dataset.type === "tooltip") {

            this.setAttribute("role", "tooltip");
            innerHtml += '<skin-popup-arrow></skin-popup-arrow>';

        } else { // "menu", default
            this.setAttribute("role", "menu");
            this.setAttribute("tabindex", "0");
        }

        this.innerHTML = innerHtml;

    }
}

customElements.define('skin-popup', SkinPopup);