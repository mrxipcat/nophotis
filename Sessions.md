# Especificació web – Sessions i tarifes i formulari de sessions becades

Oct 31, 2026 · @Jordi Soler

## 1. Context i instruccions per a Claude Code

Cal afegir dues pàgines noves a la web de portfoli existent: **Sessions i tarifes** (`/sessions`) i **Inscripció a sessions becades** (`/sessions-becades`). La web actual només mostra galeries de fotos agrupades per temes, i això no s'ha de modificar.

Objectiu de negoci: el fotògraf treballa per afició i no busca ingressos. Les tarifes existeixen per comunicar el valor real de la feina. La sessió becada és la mateixa Sessió editorial d'autor (690 €) sense cost per a models seleccionades, amb places limitades i accés per candidatura. El to ha de ser professional, sobri i selectiu; mai promocional ni de "rebaixes".

**Abans de començar, Claude Code ha de:**

1. Inspeccionar el projecte i identificar el stack (generador estàtic, framework, CMS o HTML pla), l'estructura de rutes i el sistema d'estils.
2. Reutilitzar la tipografia, els colors, els components i el layout existents. Les pàgines noves han de semblar part de la mateixa web.
3. Comprovar si el projecte ja té alguna gestió de formularis o backend. Si no n'hi ha, proposar opcions (secció 4) i preguntar abans d'instal·lar res.
4. Comprovar si la web és multiidioma. Si ho és, crear l'estructura per a tots els idiomes amb el català com a original.
5. Presentar un pla breu dels fitxers que crearà o modificarà i esperar confirmació.

**No tocar:** les galeries, els textos actuals, les URL existents ni la configuració de desplegament, excepte el que s'indica en aquest document.

Idioma de tots els textos visibles: català. Els textos entre cometes d'aquest document són literals; el que va entre `[CLAUDÀTORS]` són dades pendents (secció 7).

## 2. Navegació

- **Menú principal:** afegir l'entrada "Sessions i tarifes" enllaçada a `/sessions`, després de les categories del portfoli. Mateix estil que la resta d'entrades.
- **Contacte:** enllaç "Contacte" al final del menú o al peu de pàgina, si encara no existeix. Porta a `mailto:[EMAIL]` o a la pàgina de contacte existent.
- **Bàner de convocatòria:** botó o franja destacada "Convocatòria oberta – Sessions becades" que enllaça a `/sessions-becades`. Es mostra a la portada (damunt de les galeries) i a `/sessions`.
  - Només apareix si `convocatoria.oberta = true` al fitxer de configuració (secció 5).
  - Si la convocatòria té data de tancament i ja ha passat, no es mostra encara que `oberta` sigui `true`.
  - Discret però visible: un sol element, sense animacions cridaneres ni comptes enrere.

## 3. Pàgina 1 – Sessions i tarifes (`/sessions`)

Ordre dels blocs, de dalt a baix: introducció, serveis, extres i reserva, sessions becades, contacte. Totes les dades de preus es llegeixen del fitxer de configuració; cap preu escrit directament a l'HTML.

### 3.1 Introducció

Títol: "Sessions i tarifes"

Text: "Retrat d'estudi amb direcció, il·luminació treballada i retoc imatge a imatge. Cada sessió es prepara amb tu i es lliura una selecció curada, no centenars de fotos."

Opcional: una foto del portfoli com a capçalera, escollida de les galeries existents.

### 3.2 Serveis

Una targeta per servei (en mòbil, una sota l'altra). Cada targeta mostra: nom, durada, llista de què inclou i preu amb la menció "IVA inclòs".

| Servei | Durada | Què inclou | Preu |
| --- | --- | --- | --- |
| Retrat professional | 45 min | 1 look · selecció en directe · 3 imatges retocades | 150 € |
| Test + polas | 1 h 15 | 2 looks senzills + polas (cara i cos sencer, sense maquillatge) · 8 images de test retocades + 12 polas | 240 € |
| Sessió de retrat d'estudi | 1 h 30 | 2–3 looks · 2 esquemes de llum · 10 imatges retocades en color i B/N | 300 € |
| Book de model | 2 h | Polas (1 look) + book (3–4 looks) · 15 imatges retocades + 12 polas | 360 € |
| Sessió editorial d'autor | 3 h + preproducció | Reunió prèvia · moodboard · 20 imatges amb revelat d'alt nivell | 640 € |

La targeta "Sessió editorial d'autor" porta una nota petita: "Aquesta és la sessió que s'ofereix en format becat." amb enllaç a l'àncora `#becades`.

### 3.3 Extres i reserva

- Polas soles (actualització per a agència, sense sessió de test): 70 €

Text: "Per reservar una sessió cal una paga i senyal de 60 €, que es descompta del total. Cancel·lacions amb menys de 72 h: la paga i senyal no es retorna."

Botó: "Demana disponibilitat" → `mailto:[EMAIL]` (o pàgina de contacte existent).

### 3.4 Sessions becades (àncora `#becades`)

Bloc visualment diferenciat (fons o marc lleugerament diferent), però sobri.

Títol: "Sessions becades – Projectes d'autor"

Text:

"Cada temporada desenvolupo projectes fotogràfics propis i selecciono un nombre limitat de models per participar-hi. Les persones seleccionades reben una Sessió editorial d'autor completa, valorada en 640 €, becada al 100%."

"No és una sessió a mida: treballem sobre el concepte del projecte en curs, amb preproducció, direcció i retoc al mateix nivell que una sessió de pagament."

Dades destacades (llegides de configuració): "Places: 1 per mes" i, si hi ha convocatòria, el nom del projecte i la data de tancament.

**Condicions** (llista):

- Places limitades per projecte; la selecció es fa segons l'encaix amb el concepte, no per ordre d'arribada.
- Paga i senyal de 60 €, retornada íntegrament el dia de la sessió. Es perd si s'anul·la amb menys de 72 h o no es compareix.
- Lliurament de 15-20 imatges amb revelat d'alt nivell, seleccionades pel fotògraf.
- Crèdit obligatori en publicar les imatges (fotògraf i equip).
- Acord de cessió de drets d'imatge signat abans de la sessió.
- Les imatges poden formar part del portfoli del fotògraf i del projecte.

**Com funciona** (llista numerada):

1. Publicació de la convocatòria amb concepte i moodboard.
2. Candidatura a través del formulari.
3. Selecció i resposta a les persones escollides en un termini de 15 dies.
4. Confirmació per escrit amb el detall de la sessió i la paga i senyal.
5. Sessió, lliurament i retorn de la fiança.

Botó final, segons l'estat de la convocatòria:

- Oberta: "Presenta la teva candidatura" → `/sessions-becades`.
- Tancada: text "Ara mateix no hi ha cap convocatòria oberta. Les noves convocatòries s'anuncien a Instagram." + enllaç a `[INSTAGRAM]`. Sense botó al formulari.

### 3.5 Contacte

Línia final: "Dubtes? Escriu-me a \[EMAIL\]."

## 4. Pàgina 2 – Inscripció a sessions becades (`/sessions-becades`)

La pàgina presenta la convocatòria activa i recull candidatures. Si no hi ha convocatòria oberta, no mostra el formulari.

### 4.1 Capçalera de la convocatòria

- Títol: "Convocatòria: \[NOM DEL PROJECTE\]" (de configuració).
- Descripció del concepte (2–4 frases, de configuració).
- Moodboard: graella de 3–6 imatges de referència (rutes de configuració). Si no n'hi ha, s'amaga.
- Dades: places disponibles, dates previstes de sessió i data de tancament.
- Recordatori breu: "Sessió editorial d'autor valorada en 640 €, becada al 100% per a les persones seleccionades." + enllaç "Veure condicions" → `/sessions#becades`.

### 4.2 Camps del formulari

| Camp | Tipus | Obligatori | Validació / notes |
| --- | --- | --- | --- |
| Nom i cognoms | text | Sí | Mínim 3 caràcters |
| Nom artístic | text | No | — |
| Correu electrònic | email | Sí | Format vàlid |
| Telèfon | tel | Sí | Format espanyol o internacional |
| Data de naixement | date | Sí | Majoria d'edat obligatòria: si és menor de 18 anys, missatge "Les sessions becades són només per a persones majors d'edat." i no es permet l'enviament |
| Població | text | Sí | — |
| Instagram | text | Sí | Acceptar `@usuari` o URL |
| Web o book en línia | url | No | URL vàlida |
| Agència | text | No | Text d'ajuda: "Si en tens" |
| Alçada | número (cm) | Sí | 120–220 |
| Altres mesures o característiques | textarea | No | Màx. 300 caràcters |
| Experiència | select | Sí | Opcions: "Sense experiència", "Menys d'1 any", "1–3 anys", "Més de 3 anys" |
| Fotos recents | fitxers | Sí | 3 a 5 imatges JPG, PNG o WEBP, màx. 5 MB cadascuna; mínim una de cara i una de cos sencer, sense filtres |
| Per què t'interessa aquest projecte? | textarea | Sí | 50–800 caràcters |
| Disponibilitat | checkboxes | Sí | Dates o franges de configuració |
| Com has conegut la convocatòria? | select | No | Instagram, web, agència, recomanació, altres |

**Consentiments** (caselles no marcades per defecte):

- Obligatòria: "He llegit i accepto la \[política de privacitat\] i el tractament de les meves dades per gestionar aquesta candidatura." (enllaç a `[URL POLÍTICA DE PRIVACITAT]`).
- Obligatòria: "He llegit les condicions de les sessions becades."
- Opcional: "Vull rebre avisos de futures convocatòries."

Text informatiu sota el formulari: "Les fotos i dades només s'utilitzen per valorar la candidatura i s'esborren en un termini de 6 mesos si la candidatura no és seleccionada."

### 4.3 Enviament

Claude Code ha de comprovar què hi ha disponible al projecte i preguntar abans de triar. Opcions per ordre de preferència:

1. El sistema de formularis del hosting actual, si n'hi ha (per exemple, formularis natius de la plataforma de desplegament).
2. Un servei extern de formularis amb suport per a fitxers adjunts i enviament per correu.
3. Un endpoint propi senzill, només si el projecte ja té backend.

Requisits en tots els casos:

- Cada candidatura s'envia a nophotis@gmail.com amb les dades i les fotos adjuntes o enllaçades.
- Assumpte del correu: "Candidatura – \[NOM DEL PROJECTE\] – \[Nom de la persona\]".
- Protecció antispam amb camp ocult (honeypot) i, si el servei ho permet, un control invisible; evitar CAPTCHA visibles.
- Validació al navegador i, si hi ha backend, també al servidor.
- Cap clau o secret escrit al codi del client; usar variables d'entorn.

### 4.4 Després d'enviar

Missatge de confirmació a la mateixa pàgina (o pàgina `/sessions-becades/gracies`):

"Gràcies, hem rebut la teva candidatura. Revisaré totes les propostes quan es tanqui la convocatòria i respondré a les persones seleccionades en un termini de 15 dies."

Si el servei ho permet, enviar també un correu automàtic de confirmació a la candidata amb el mateix text.

En cas d'error d'enviament: "No s'ha pogut enviar la candidatura. Torna-ho a provar o escriu a \[EMAIL\]." Les dades introduïdes no s'han de perdre.

### 4.5 Convocatòria tancada

Si `convocatoria.oberta = false` o la data de tancament ha passat: es mostra només el text "Ara mateix no hi ha cap convocatòria oberta. Les noves convocatòries s'anuncien a Instagram.", l'enllaç a `[INSTAGRAM]` i un enllaç a `/sessions`. El formulari no es renderitza.

## 5. Dades editables

Preus, serveis i convocatòria han de viure en un únic fitxer de dades, perquè el fotògraf els pugui canviar sense tocar plantilles. Format segons el stack (JSON, YAML o el sistema de dades del framework); estructura orientativa:

```json
{
  "moneda": "EUR",
  "ivaInclos": true,
  "serveis": [
    { "id": "retrat-professional", "nom": "Retrat professional", "durada": "45 min", "inclou": ["1 look", "Selecció en directe", "3 imatges retocades"], "preu": 150 },
    { "id": "test-polas", "nom": "Test + polas", "durada": "1 h 15", "inclou": ["2 looks senzills", "Polas de cara i cos sencer, sense maquillatge", "8 imatges de test retocades + 15 polas"], "preu": 240 },
    { "id": "retrat-estudi", "nom": "Sessió de retrat d'estudi", "durada": "1 h 30", "inclou": ["2–3 looks", "2 esquemes de llum", "10 imatges retocades en color i B/N"], "preu": 300 },
    { "id": "book-model", "nom": "Book de model", "durada": "2 h", "inclou": ["Polas (1 look)", "Book (3–4 looks)", "15 imatges retocades + 15 polas"], "preu": 360 },
    { "id": "editorial-autor", "nom": "Sessió editorial d'autor", "durada": "3–4 h + preproducció", "inclou": ["Reunió prèvia", "Moodboard", "Maquillatge i perruqueria", "12 imatges amb revelat d'alt nivell"], "preu": 640, "becable": true }
  ],
  "extres": [
    { "nom": "Polas soles (actualització per a agència)", "preu": 70 }
  ],
  "reserva": { "pagaISenyal": 60, "cancelacioHores": 72 },
  "beca": { "placesPerMes": 1, "fianca": 60, "imatgesLliurades": "15-20", "terminiRespostaDies": 15 },
  "convocatoria": {
    "oberta": false,
    "nomProjecte": "[NOM DEL PROJECTE]",
    "descripcio": "[DESCRIPCIÓ DEL CONCEPTE]",
    "moodboard": [],
    "places": 1,
    "datesSessio": ["[DATA O FRANJA]"],
    "dataTancament": "AAAA-MM-DD"
  }
}
```

El valor de la sessió becada que apareix als textos (640 €) s'ha de llegir del servei amb `becable: true`, no escriure's a mà. Afegir al README del projecte una secció breu explicant com obrir o tancar una convocatòria editant aquest fitxer.

## 6. Requisits tècnics

- **Responsive:** mòbil primer. Targetes de serveis en una columna a mòbil i 2 o 3 columnes a escriptori. El formulari ha de ser còmode d'omplir al mòbil, inclosa la pujada de fotos des de la galeria.
- **Accessibilitat:** etiquetes `<label>` associades a cada camp, missatges d'error textuals al costat del camp, focus visible, contrast suficient i navegació completa amb teclat.
- **SEO:**
  - `/sessions` – títol "Sessions i tarifes – \[NOM DEL FOTÒGRAF\]", descripció "Retrat d'estudi, tests, book de model i sessions editorials a \[ZONA\]. Tarifes i sessions becades."
  - `/sessions-becades` – títol "Sessions becades – \[NOM DEL FOTÒGRAF\]", descripció "Convocatòries de projectes d'autor per a models. Places limitades."
  - Afegir les dues pàgines al sitemap si n'hi ha.
- **Rendiment:** imatges del moodboard optimitzades (WEBP, mida adequada, `loading="lazy"`).
- **Privacitat:** no afegir cap eina de seguiment nova. Les fotos rebudes no s'han de publicar en cap carpeta pública del lloc.

## 7. Criteris d'acceptació i dades pendents

**Criteris d'acceptació**

- [ ] El menú mostra "Sessions i tarifes" i porta a `/sessions`; les galeries funcionen igual que abans.
- [ ] `/sessions` mostra els 5 serveis, els extres i el bloc de becades amb les dades del fitxer de configuració.
- [ ] Canviar un preu al fitxer de configuració l'actualitza a totes les pàgines.
- [ ] Amb `convocatoria.oberta = true` i data vigent, apareixen el bàner i el formulari.
- [ ] Amb `oberta = false` o data passada, no hi ha bàner ni formulari i es mostra el missatge de convocatòria tancada.
- [ ] El formulari no s'envia si falta un camp obligatori, si la persona és menor d'edat o si les fotos no compleixen el format.
- [ ] Una candidatura de prova arriba a `[EMAIL DE RECEPCIÓ]` amb totes les dades i fotos.
- [ ] Les pàgines es veuen correctament en mòbil i escriptori i es poden fer servir amb teclat.

**Dades pendents d'omplir abans de passar el document a Claude Code**

| Marcador | Què cal posar-hi |
| --- | --- |
| `[NOM DEL FOTÒGRAF]` | Nom tal com apareix a la web |
| `[EMAIL]` | Correu de contacte públic |
| `[EMAIL DE RECEPCIÓ]` | Correu on arriben les candidatures (pot ser el mateix) |
| `[INSTAGRAM]` | URL del perfil |
| `[ZONA]` | Ciutat o àrea de l'estudi (per exemple, Garraf / Barcelona) |
| `[URL POLÍTICA DE PRIVACITAT]` | Pàgina existent o indicar que cal crear-la |
| `[NOM DEL PROJECTE]`, `[DESCRIPCIÓ DEL CONCEPTE]`, dates | Primera convocatòria, o deixar-la tancada |

Si la web no té política de privacitat, el formulari en necessita una abans de publicar-se, perquè recull dades personals i fotos. Claude Code pot preparar-ne un esborrany, però convindria que la revisís algú amb coneixement legal.
