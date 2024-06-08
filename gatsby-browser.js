function initGTMOnEvent(event) {
    initGTM();
    event.currentTarget.removeEventListener(event.type, initGTMOnEvent);
}

function initGTM() {
    if (window.gtmDidInit) {
        return false;
    }

    window.gtmDidInit = true;

    let script = document.createElement('script');

    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${process.env.GATSBY_GTAG_MANAGER_ID}`;

    script.onload = function() {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            // ensure PageViews are always tracked
            event: 'gtm.js',
            'gtm.start': new Date().getTime(),
            'gtm.uniqueEventId': 0,
        });
    };

    document.head.appendChild(script);
}

exports.onClientEntry = function() {
    document.onreadystatechange = function() {
        if (document.readyState !== 'loading') setTimeout(initGTM, 1000);
    };

    document.addEventListener('scroll', initGTMOnEvent);
    document.addEventListener('mousemove', initGTMOnEvent);
    document.addEventListener('touchstart', initGTMOnEvent);
};