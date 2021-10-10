import selector from './domain-video-selector';

const FAST_SPEED = 7;
const NORMAL_SPEED = 1;
const PLAYER_SELECTOR = selector;
const MAIN_KEY_CODE = 'KeyA';

let fasting = false;

window.addEventListener('keydown', PFA_DefaultListener);
window.addEventListener('keyup', PFA_DefaultListener);

function PFA_DefaultListener(e) {
    if (e.code != MAIN_KEY_CODE) {
        return;
    }

    if (e.type == 'keydown') {
        PFA_keydown(e);
    } else {
        PFA_keyup(e);
    }
}

function PFA_keydown(e: KeyboardEvent) {
    // Don't store player. YTTV replaces the player sometimes, so we gotta select it JIT
    const player: HTMLVideoElement = document.querySelector(PLAYER_SELECTOR);

    if (fasting) return;
    fasting = true;
    player.playbackRate = FAST_SPEED;
}
function PFA_keyup(e: KeyboardEvent) {
    const player: HTMLVideoElement = document.querySelector(PLAYER_SELECTOR);

    fasting = false;
    player.playbackRate = NORMAL_SPEED;
}
