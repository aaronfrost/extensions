declare namespace AFEXT {
    export const dev: boolean;
}

if (AFEXT.dev !== true) {
    (window as any).LiveReload.shutDown();
} else {
    console.log('TiktokAF Dev Mode');
}
