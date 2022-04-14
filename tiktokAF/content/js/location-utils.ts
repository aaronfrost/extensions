const fullScreenUrlRegex = /https:\/\/www\.tiktok\.com\/\@[^/]*\/video\//i;

let url = window.location.href;
let routeInterval;
let isFullScreen = false;

window.addEventListener('locationchangeoff', () => {
    clearInterval(routeInterval);
    routeInterval = undefined;
});
window.addEventListener('locationchangeon', () => {
    locationChangeOn();
});
window.addEventListener('locationchange', () => {
    onRouteLocationChange();
});

function locationChangeOn() {
    routeInterval = setInterval(() => {
        const currentUrl = window.location.href;
        if (currentUrl != url) {
            url = currentUrl;
            window.dispatchEvent(new Event('locationchange'));
        }
    }, 100);
}

function onRouteLocationChange() {
    const url = window.location.href;
    const match = url.match(fullScreenUrlRegex);

    if (
        match &&
        match.length &&
        document.querySelector('.tt-feed > .video-card-big.browse-mode')
    ) {
        window.dispatchEvent(new Event('ttfullscreen'));
        return true;
    }
    return false;
}
