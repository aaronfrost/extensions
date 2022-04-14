// This is code that will attempt to click next. May work in the fullscreen inside of a chrome extension. But... it doesn't work in the browser console, cause the click is not trusted or user initiated.

var nextBtn = document.querySelector('[data-e2e="arrow-right"]');
var fullScreenVideoWrapper = document.querySelector('[class*=DivBrowserModeContainer] [class*=DivVideoWrapper]');

function clickToNextVideo(){
    console.log('Trying to Click nextBtn');
    // nextBtn.click();
    // nextBtn.dispatchEvent(new Event('click'));
    var e = document.createElement('Events');
    e.initEvent('click', true, false);
    nextBtn.dispatchEvent(e);
}

console.log({nextBtn, fullScreenVideoWrapper});

nextBtn.addEventListener('DOMNodeInserted', clickToNextVideo);