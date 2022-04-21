import './location-utils';
import '../../../libs/live-reload-content';
import { scrollToNext } from './scrollToNext';
import './detectMode';

// @ts-ignore
window.LiveReloadOptions = {
    isChromeExtension: true,
    host: 'localhost',
};

window.dispatchEvent(new Event('locationchangeon'));
window.dispatchEvent(new Event('locationchange'));

window.addEventListener('ttfullscreen', () => {
    scrollToNext();
});
