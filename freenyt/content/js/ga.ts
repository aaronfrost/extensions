(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    (i[r] =
        i[r] ||
        function () {
            (i[r].q = i[r].q || []).push(arguments);
        }),
        // @ts-ignore
        (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
})(
    window,
    document,
    'script',
    'https://www.google-analytics.com/analytics.js',
    'ga',
);

window['ga']('create', 'G-WCTCRNGJ89', 'auto');

// Modifications:
// Disables file protocol checking.
window['ga']('set', 'checkProtocolTask', null);
// Set page, avoiding rejection due to chrome-extension protocol
window['ga']('send', 'pageview', '/popup');
