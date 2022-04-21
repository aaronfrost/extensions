// @ts-ignore
if (TTAF.dev !== true) {
} else {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === 'reload_extension') {
            chrome.runtime.reload();
        }
    });
}
