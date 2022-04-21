declare namespace TTAF {
    export const dev: boolean;
}

if (TTAF.dev !== true) {
    (window as any).LiveReload.shutDown();
} else {
    console.log('TiktokAF Dev Mode');
}
