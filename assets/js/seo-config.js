window.SEO_CONFIG = {
    siteUrl: "https://www.pasindubandarigoda.com",
    siteName: "Pasindu Bandarigoda",
    personName: "Pasindu Bandarigoda",
    organizationName: "nZO Innovations",
    defaultOgImage: "https://www.pasindubandarigoda.com/assets/images/MY%20images/ps-bandarigoda-profile-001.png",
    // Paste your IDs below, then deploy
    ga4MeasurementId: "",
    microsoftClarityId: "",
    googleSiteVerification: "",
    bingSiteVerification: "",
};

(function () {
    var config = window.SEO_CONFIG;
    if (!config) {
        return;
    }

    var head = document.head;
    if (config.googleSiteVerification) {
        var googleMeta = document.createElement("meta");
        googleMeta.name = "google-site-verification";
        googleMeta.content = config.googleSiteVerification;
        head.appendChild(googleMeta);
    }
    if (config.bingSiteVerification) {
        var bingMeta = document.createElement("meta");
        bingMeta.name = "msvalidate.01";
        bingMeta.content = config.bingSiteVerification;
        head.appendChild(bingMeta);
    }
})();
