/**
 * This code comes from here: https://github.com/xpl/crx-hotreload/blob/master/hot-reload.js
 * Read more here: https://medium.com/@xpl/hot-reloading-for-chrome-extensions-3da296916286
 *
 * If this doesn't work, consider webpack-livereload-plugin, already in package.json
 * https://www.npmjs.com/package/webpack-livereload-plugin
 * Will need to attach livereload.js into the content script, however, as it's not
 * possible to attach a script tag from background.js for security issues.
 */
declare var chrome: any;

const filesInDirectory = (dir) =>
    new Promise((resolve) =>
        dir.createReader().readEntries((entries) =>
            Promise.all(
                entries
                    .filter((e) => e.name[0] !== '.')
                    .map((e) =>
                        e.isDirectory
                            ? filesInDirectory(e)
                            : new Promise((resolve) => e.file(resolve)),
                    ),
            )
                .then((files) => [].concat(...files))
                .then(resolve),
        ),
    );

const timestampForFilesInDirectory = (dir) =>
    filesInDirectory(dir).then((files: any[]) =>
        files.map((f) => f.name + f.lastModifiedDate).join(),
    );

const watchChanges = (dir, lastTimestamp?) => {
    timestampForFilesInDirectory(dir).then((timestamp) => {
        if (!lastTimestamp || lastTimestamp === timestamp) {
            setTimeout(() => watchChanges(dir, timestamp), 1000); // retry after 1s
        } else {
            chrome.runtime.reload();
        }
    });
};

chrome.management.getSelf((self) => {
    if (self.installType === 'development') {
        chrome.runtime.getPackageDirectoryEntry((dir) => watchChanges(dir));
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
            // NB: see https://github.com/xpl/crx-hotreload/issues/5
            if (tabs[0]) {
                chrome.tabs.reload(tabs[0].id);
            }
        });
    }
});
