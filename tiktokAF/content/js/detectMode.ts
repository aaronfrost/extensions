export const selector = {
    fullScreenModeContainer: '[class*=DivBrowserModeContainer] [class*=DivVideoWrapper]',
    regularModeContainer: '[class*=DivBodyContainer] [class*=DivMainContainer]',
};
export enum Modes {
    regular,
    fullscreen,
    other,
}

let previousMode = null;
detectMode();
function detectMode() {
    let mode = Modes.regular;
    let fsContainer = document.querySelector(selector.fullScreenModeContainer);
    let regContainer = document.querySelector(selector.regularModeContainer);

    // Set current mode
    if (fsContainer) {
        mode = Modes.fullscreen;
    } else if (!regContainer) {
        mode = Modes.other;
    }

    // If currentMode != previousMode, tell everyone
    if (previousMode !== mode) {
        console.log('Changes Mode: ', mode);
        window.dispatchEvent(new Event(`TTMode${mode}`));
    }

    previousMode = mode;

    setTimeout(detectMode, 500);
}
