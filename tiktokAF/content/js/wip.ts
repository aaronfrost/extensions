export const selector = {
    fullScreenModeContainer: '[class*=DivBrowserModeContainer] [class*=DivVideoWrapper]',
    regularModeContainer: '[class*=DivBodyContainer] [class*=DivMainContainer] [class*=DivVideoPlayerContainer]',
};

addMode0();
addMode1();

function addMode0() {
    return addModeListener('TTMode0', mode0Listener);
}
function addMode1() {
    return addModeListener('TTMode1', mode1Listener);
}
function addModeListener(mode, listener) {
    console.log('Add Mode Listener', mode);
    window.addEventListener(mode, listener, false);
    const un = () => window.removeEventListener(mode, listener, false);
    return un;
}
function mode0Listener() {
    console.log('Turn on Mode0 Listener');
    let currVideo = 0;
    const btn = createNextBtn();
    goToVideo(currVideo);
    function goToVideo(num) {
        console.log('Go To Video', num);
        const regularModeContainer = document.querySelectorAll('[data-e2e="recommend-list-item-container"]');
        const curVid = regularModeContainer[num];
        curVid.scrollIntoView({ behavior: 'smooth' });
        curVid.classList.add('ttaf-cur');
        curVid.querySelector('[class*=DivActionItemContainer]').append(btn);
        btn.addEventListener('click', goToNext);
        let video;
        const int = setInterval(() => {
            video = curVid.querySelector('video');
            if (!video) {
                return;
            }
            clearInterval(int);
            video.addEventListener('ended', onEnded);
        }, 10);
        function onEnded() {
            video.removeEventListener('ended', onEnded);
            btn.removeEventListener('click', goToNext);
            curVid.classList.remove('ttaf-cur');
            video.volume = 0;
            goToVideo(++currVideo);
        }

        function goToNext() {
            btn.removeEventListener('click', goToNext);
            video.removeEventListener('ended', onEnded);
            goToVideo(++currVideo);
        }
    }
}
function mode0Action() {
    console.log('Video Ended, should go to next');
}

function mode1Listener() {
    console.log('Turn on Mode1 Listener');
    const regularModeContainer = document.querySelector(selector.fullScreenModeContainer);
    regularModeContainer.removeEventListener('DOMNodeInserted', mode0Action);
    regularModeContainer.removeEventListener('DOMNodeInserted', mode1Action);
    regularModeContainer.addEventListener('DOMNodeInserted', mode1Action);
}

function mode1Action() {
    console.log('Video Ended, should go to next');
    // document.querySelector('[data-e2e="arrow-right"]').click();
    document.querySelector('div#app');
}

function createNextBtn() {
    const actionContainer = document.querySelector('[class*=DivActionItemContainer]');
    // @ts-ignore
    const btnClass = actionContainer.childNodes[0].getAttribute('class');
    // @ts-ignore
    const txtClass = actionContainer.childNodes[0].querySelector('strong').getAttribute('class');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('class', btnClass);
    const txt = document.createElement('strong');
    txt.classList.add();
    txt.setAttribute('class', txtClass);
    txt.innerText = 'Next';
    btn.append(txt);
    return btn;
}
