import {arrow, autoUpdate, computePosition, flip, offset, shift} from "@floating-ui/dom";

/**
 * Hide popup.
 *
 * @param el
 */
export function hide(el) {

    el.removeAttribute("data-popup-visible");
    el.style.display = "hidden";
    el.style.opacity = "0";

}

/**
 * Show popup.
 *
 * @param referenceEl
 * @param floatingEl
 * @param config
 *
 * For valid placements, see:
 * https://floating-ui.com/docs/computePosition#placement
 */
export function show(referenceEl, floatingEl, config = {}) {

    const defaultConfig = {
        unique: false,
        placement: "bottom",
        offset: {
            mainAxis: 0, // top
            crossAxis: 0 // left
        },
        shift: {},
        flip: {}
    };

    config = {...defaultConfig, ...config};

    if (config.unique === true) {
        this.hideAllVisible();
    }

    const cleanup = autoUpdate(referenceEl, floatingEl, () => {

        computePosition(referenceEl, floatingEl, {
            middleware: [
                shift(config.shift),
                offset(config.offset),
                flip(config.flip),
            ],
            placement: config.placement
        }).then(({x, y}) => {

            Object.assign(floatingEl.style, {
                left: `${x}px`,
                top: `${y}px`,
            });

            floatingEl.setAttribute("data-popup-visible", "true");
            floatingEl.style.display = "block";
            floatingEl.style.opacity = "1";

            // TODO: autoUpdate?
            // See: https://floating-ui.com/docs/computePosition#anchoring

        });

    });

}

export function isVisible(el) {
    return el.getAttribute("data-popup-visible") === "true";
}

/**
 * Hide all visible popups.
 */
export function hideAllVisible() {

    const visiblePopups = document.querySelectorAll("[data-popup-visible]");

    visiblePopups.forEach(popup => {

        if (this.isVisible(popup)) {
            this.hide(popup);
        }

    });

}