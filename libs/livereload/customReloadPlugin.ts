export class ExtensionPlugin {
    public static identifier: string = 'ext';
    public static version: string = '1.0';
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
