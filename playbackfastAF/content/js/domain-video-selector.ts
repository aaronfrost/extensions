const DOMAIN_SELECTORS = {
    '//.{1,4}netflix.com.*': '[data-uia="video-canvas"] video',
    '//tv.youtube.com.*': 'video.html5-main-video',
};
const href: string = window.location.href;
let selector;

Object.keys(DOMAIN_SELECTORS).forEach((key) => {
    const re = new RegExp(key);
    if (href.match(re)) {
        selector = DOMAIN_SELECTORS[key];
    }
});

export default selector;
