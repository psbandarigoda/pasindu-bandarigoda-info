(function () {
    var config = window.SEO_CONFIG || {};

    if (config.ga4MeasurementId) {
        var gaScript = document.createElement("script");
        gaScript.async = true;
        gaScript.src = "https://www.googletagmanager.com/gtag/js?id=" + config.ga4MeasurementId;
        document.head.appendChild(gaScript);

        window.dataLayer = window.dataLayer || [];
        function gtag() {
            window.dataLayer.push(arguments);
        }
        window.gtag = gtag;
        gtag("js", new Date());
        gtag("config", config.ga4MeasurementId, { anonymize_ip: true });
    }

    if (config.microsoftClarityId) {
        (function (c, l, a, r, i, t, y) {
            c[a] =
                c[a] ||
                function () {
                    (c[a].q = c[a].q || []).push(arguments);
                };
            t = l.createElement(r);
            t.async = 1;
            t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t, y);
        })(window, document, "clarity", "script", config.microsoftClarityId);
    }
})();
