export class ExtensionPlugin {
    constructor(private window) {}

    reload(path, options) {
        chrome.runtime.sendMessage({ action: 'reload_extension', path, options });
        setTimeout(() => {
            (window as any).document.location.reload();
        }, 100);
        return false;
    }

    analyze() {
        return {
            disable: !!(this.window.less && this.window.less.refresh),
        };
    }
}

// @ts-ignore
ExtensionPlugin.identifier = 'ext';
// @ts-ignore
ExtensionPlugin.version = '1.0';
(window as any).LiveReload.addPlugin(ExtensionPlugin);
(window as any).LiveReload.options.pluginOrder = 'ext';
