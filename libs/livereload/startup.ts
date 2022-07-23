import * as CustomEvents from 'livereload-js/src/customevents';
import { LiveReload } from 'livereload-js/src/livereload';
import { ExtensionPlugin } from './customReloadPlugin';

(window as any).LiveReloadOptions = {
    host: 'localhost',
    port: 35729,
    pluginOrder: 'ext', // comma separated string, not an array. Underlying lib splits to an array.
};

const liveReload = new LiveReload(window);
for (const k in window) {
    if (k.match(/^LiveReloadPlugin/)) {
        liveReload.addPlugin(window[k]);
    }
}

liveReload.addPlugin(ExtensionPlugin);
liveReload.on('connect', () => CustomEvents.fire(document, 'LiveReloadConnect'));
liveReload.on('disconnect', () => CustomEvents.fire(document, 'LiveReloadDisconnect'));
CustomEvents.bind(document, 'LiveReloadShutDown', () => liveReload.shutDown());
