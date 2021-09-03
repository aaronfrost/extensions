const appSelector = '#app';
const container1Selector = `${appSelector} > *`;
const container2Selector = `${container1Selector} > *`;

main();
function main() {
    // @ts-ignore
    const Polipop = window.Polipop;
    // @ts-ignore
    var polipop = new Polipop('site-content', {
        layout: 'popups',
        insert: 'before',
        pool: 5,
        life: 4000,
        closer: false,
        effect: 'slide',
        progressbar: true,
    });

    // Popup
    const puSelector = '#gateway-content';
    let notified = false;

    const int = setInterval(() => {
        const container = document.querySelector(container1Selector);
        const container2 = document.querySelector(container2Selector);

        // // Remove Popup
        const pu = container.querySelector(puSelector);

        if (pu && pu != null && !notified) {
            console.log('\n\n\n\n\nRMOVED AD!!!!\n\n\n\n\n');
            notified = true;
            polipop.add({
                content:
                    'Free New York Times blocked the NYT paywall for you. Cheers!!!.',
                title: 'Free New York Times',
                type: 'info',
            });
        }
    }, 1000);
}
