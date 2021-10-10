const FAST_SPEED = 7;
const NORMAL_SPEED = 1;
const PLAYER_SELECTOR = 'video.html5-main-video';
const MAIN_KEY_CODE = 'KeyA';

let fasting = false;
window.addEventListener('keydown', PFA_Listener);
window.addEventListener('keyup', PFA_Listener);

function PFA_Listener(e) {
    if (e.code != MAIN_KEY_CODE) {
        return;
    }

    if (e.type == 'keydown') {
        PFA_keydown(e);
    } else {
        PFA_keyup(e);
    }
}

function PFA_keydown(e) {
    // Don't store player. YTTV replaces the player sometimes, so we gotta select it JIT
    const player: HTMLVideoElement = document.querySelector(PLAYER_SELECTOR);

    if (fasting) return;
    fasting = true;
    player.playbackRate = FAST_SPEED;
}
function PFA_keyup(e) {
    const player: HTMLVideoElement = document.querySelector(PLAYER_SELECTOR);

    fasting = false;
    player.playbackRate = NORMAL_SPEED;
}
