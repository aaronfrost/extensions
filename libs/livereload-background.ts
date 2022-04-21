/**
 * This code comes from here: https://github.com/xpl/crx-hotreload/blob/master/hot-reload.js
 * Read more here: https://medium.com/@xpl/hot-reloading-for-chrome-extensions-3da296916286
 *
 * If this doesn't work, consider webpack-livereload-plugin, already in package.json
 * https://www.npmjs.com/package/webpack-livereload-plugin
 * Will need to attach livereload.js into the content script, however, as it's not
 * possible to attach a script tag from background.js for security issues.
 */

/**
 * How to build your own LiveReload Plugin: https://github.com/livereload/livereload-js/blob/master/src/less.js
 */
import 'livereload-js';

// @ts-ignore
console.log(LiveReloadOptions);
console.log(`chrome.runtime.getPackageDirectoryEntry`, chrome.runtime.getPackageDirectoryEntry);
