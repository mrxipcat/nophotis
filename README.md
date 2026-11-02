# nophotis
Web NoPhotis

## Sessions i tarifes i sessions becades

Tot és text pla dins de l'HTML; no hi ha cap fitxer de dades.

**Idiomes** – cada pàgina té tres versions a la mateixa carpeta: `index.html` (català, l'original), `es.html` (castellà) i `en.html` (anglès). `idioma.js` porta automàticament a la versió de l'idioma del navegador (si no és català, castellà ni anglès, a l'anglès) i recorda l'idioma triat amb el selector CAT · ES · EN de dalt a la dreta. **Qualsevol canvi de text o de preu s'ha de fer a les tres versions.**

**Canviar preus o serveis** – edita directament `sessions/index.html` (i `es.html` i `en.html`). Cada fitxer també té els serveis i preus al bloc `<script type="application/ld+json">` del principi, que és el que llegeix Google: actualitza'l igual. El valor de la sessió becada (640 €) també surt al text del bloc de becades i a `sessions-becades/index.html`; si canvia, actualitza'l als dos llocs.

**Obrir una convocatòria** – cerca `CONVOCATÒRIA` als fitxers i segueix el comentari de cada lloc:

- `index.html`, `beauty/index.html` i les tres versions de `sessions/`: treu `hidden` del bàner.
- `sessions/` (les tres versions): al bloc de becades, mostra el nom del projecte i el botó "Presenta la teva candidatura", i amaga el paràgraf de convocatòria tancada.
- `sessions-becades/` (les tres versions): amaga la secció de convocatòria tancada i mostra la de sota. Omple el nom del projecte (també a l'assumpte del correu), la descripció, les places, les dates, les franges de disponibilitat de la llista de dades i el moodboard (de 3 a 6 imatges WEBP amb `loading="lazy"`).

**Tancar-la** – fes el mateix a la inversa. No es tanca sola: s'ha de fer a mà.

**Com arriben les candidatures** – no hi ha formulari: `sessions-becades/index.html` explica que s'envien per correu a sessions@nophotis.com i llista les dades i fotos que cal incloure.

## Indexació a Google

- `robots.txt` permet indexar-ho tot i indica on és `sitemap.xml`.
- `sitemap.xml` llista totes les pàgines; les de sessions inclouen les tres versions d'idioma (`hreflang`). Si s'afegeix una pàgina nova, cal afegir-la aquí i actualitzar `lastmod`.
- `idioma.js` no redirigeix els cercadors, perquè puguin indexar cada versió per separat.
