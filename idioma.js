// Versions per idioma de /sessions i /sessions-becades.
// Cada carpeta té index.html (català), es.html i en.html. Aquest script es
// carrega al <head> de totes les versions i, si cal, porta a la que toca:
//  1. l'idioma triat abans amb el selector (CAT · ES · EN), si n'hi ha;
//  2. si no, el primer idioma del navegador que sigui català, castellà o
//     anglès (gallec i basc van al castellà);
//  3. si cap no hi coincideix, l'anglès.

(function () {
    var PAGINES = { ca: 'index.html', es: 'es.html', en: 'en.html' };
    var actual = document.documentElement.lang;

    // Els cercadors no es redirigeixen: han de poder indexar cada versió
    // (les troben pels enllaços hreflang i pel sitemap.xml).
    var esRobot = /bot|crawl|spider|slurp|google|bing|yandex|baidu|duckduck|facebookexternalhit|lighthouse/i.test(navigator.userAgent);

    function idiomaNavegador() {
        var llista = navigator.languages || [navigator.language || ''];
        for (var i = 0; i < llista.length; i++) {
            var codi = (llista[i] || '').toLowerCase().slice(0, 2);
            if (codi === 'ca' || codi === 'es' || codi === 'en') return codi;
            if (codi === 'gl' || codi === 'eu') return 'es';
        }
        return 'en';
    }

    var desat = null;
    try {
        desat = localStorage.getItem('idioma');
    } catch (e) {}

    var desitjat = PAGINES[desat] ? desat : idiomaNavegador();
    if (!esRobot && desitjat !== actual) {
        location.replace(PAGINES[desitjat] + location.search + location.hash);
        return;
    }

    // En triar un idioma amb el selector, es recorda per a la resta de visites
    document.addEventListener('click', function (e) {
        var enllac = e.target.closest && e.target.closest('[data-idioma]');
        if (!enllac) return;
        try {
            localStorage.setItem('idioma', enllac.getAttribute('data-idioma'));
        } catch (err) {}
    });
})();
