import './location-utils';
import { scrollToNext } from './scrollToNext';

window.dispatchEvent(new Event('locationchangeon'));
window.dispatchEvent(new Event('locationchange'));

console.log('hello2' + Date.now());

window.addEventListener('ttfullscreen', () => {
    scrollToNext();
});
