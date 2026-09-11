// Tipus de mosaic disponibles per a la galeria. Cada pàgina tria el seu
// assignant `window.MOSAIC_TYPE` a l'<script> inline abans de carregar
// aquest fitxer (vegeu index.html, beauty/, outdoor/ i zoom/). Si no es
// defineix, s'utilitza MOSAIC_DEFAULT. L'estil de cada tipus viu a
// style.css sota `.mosaic-<tipus>`.
const MOSAIC_TYPES = ['justified', 'columns', 'modular'];
const MOSAIC_DEFAULT = 'justified';

const imageLists = {
    "Homepage": [
"201808_Yellow.jpg",
"202302_Green.jpg",
"202304_Blue.jpg",
"202312_Orange.jpg",
"202407_Red.jpg",
"202504_Maroon.jpg",
"202505_Black.jpg",
"202506_Blond.jpg",
"202506_DarkBlue.jpg",
"202507_Dark.jpg",
"202509_BWhite.jpg",
"202603_R-DSC08696ES.jpg",
"202605_R-DSC03046CES.jpg",
"202607_R-DSC06705IES.jpg"
],

    "Landscapes": [
"199411_CliffOfMoher.jpg",
"200308_EUA_Calico.jpg",
"200308_EUA_GoldenGate2.jpg",
"200308_EUA_GoldenGate3.jpg",
"200308_EUA_GranCanyon1.jpg",
"200308_EUA_GranCanyon2.jpg",
"201408_Cantabric.jpg",
"201503_Lloret.jpg",
"201808_Eivissa Platja De Comte.jpg",
"201808_Eivissa.jpg",
"201904_Tamariu.jpg",
"202006_Menorca 2.jpg",
"202006_Menorca 3.jpg",
"202006_Menorca.jpg",
"202008_Asturies.jpg",
"202108_Cadiz.jpg",
"202302_R-DSC_7828S.jpg",
"202302_R-DSC10910S.jpg",
"202308_Fecamp.jpg",
"202309_Cami de Ronda a Lloret.jpg",
"202312_Cala Roca Grossa 1.jpg",
"202312_Cala Roca Grossa 2.jpg",
"202312_Cala Roca Grossa 3.jpg",
"202403_Suissa_3.jpg",
"202503_Lofoten 5.jpg",
"202503_Norway_1.jpg",
"202503_Norway_2.jpg",
"202508_Cala Roca Grossa de nit.jpg",
"202511_R-DSC04141S.jpg",
"202511_R-DSC04175S.jpg"
],

    "Studio": [
"202502_R-DSC04205ES.jpg",
"202502_R-DSC04398ES.jpg",
"202503_Charlie 1.jpg",
"202503_Charlie 2.jpg",
"202503_Charlie 3.jpg",
"202503_Charlie 4.jpg",
"202503_Charlie 5.jpg",
"202503_Vika 1.jpg",
"202503_Vika 2.jpg",
"202503_Vika 3.jpg",
"202503_Vika 4.jpg",
"202504_Fery 1.jpg",
"202504_Fery 3.jpg",
"202504_Fery 4.jpg",
"202504_Fery 5.jpg",
"202504_Fery 6.jpg",
"202504_Fery 7.jpg",
"202505_Andrea 1.jpg",
"202505_Andrea 2.jpg",
"202505_Andrea 5.jpg",
"202505_Andrea 6.jpg",
"202505_Andrea 7.jpg",
"202505_Jelena 1.jpg",
"202505_Jelena 2.jpg",
"202505_Jelena 3.jpg",
"202505_Jelena 5.jpg",
"202505_Jelena 6.jpg",
"202505_Jelena 7.jpg",
"202505_Jelena 8.jpg",
"202506_Mary 1.jpg",
"202506_Mary 2.jpg",
"202506_Mary 3.jpg",
"202506_Mary 4.jpg",
"202506_Mary 5.jpg",
"202507_Carlota 2.jpg",
"202507_Carol 1.jpg",
"202507_Carol 2.jpg",
"202507_R-DSC08052ES.jpg",
"202507_Sofia 1.jpg",
"202508_DSC09506BIES.jpg",
"202508_DSC09697IES.jpg",
"202508_Enya 2.jpg",
"202508_Eva 3.jpg",
"202508_Eva 7.jpg",
"202508_Eva 8.jpg",
"202508_Evgenia 1.jpg",
"202508_Evgenia 3.jpg",
"202509_Julia 2.jpg",
"202509_Julia 4.jpg",
"202509_Paula 1.jpg",
"202509_Paula 3.jpg",
"202509_Paula 4.jpg",
"202510_Elena 2.jpg",
"202510_R-DSC02623ES.jpg",
"202511_Judith 1.jpg",
"202511_Judith 2.jpg",
"202511_R-DSC04376ES.jpg",
"202511_R-DSC04419CES.jpg",
"202602_R-DSC05004ES.jpg",
"202602_R-DSC05455ES.jpg",
"202602_R-DSC05460ES.jpg",
"202602_R-DSC05730BES.jpg",
"202602_R-DSC05854BES.jpg",
"202602_R-DSC05950BES.jpg",
"202602_R-DSC06133BES.jpg",
"202602_R-DSC06154BES.jpg",
"202602_R-DSC06661ES.jpg",
"202602_R-DSC06704IES.jpg",
"202603_R-DSC08399ES.jpg",
"202603_R-DSC08581ES.jpg",
"202604_R-DSC00673BES.jpg",
"202604_R-DSC00807ES.jpg",
"202604_R-DSC00835BES.jpg",
"202604_R-DSC00967ES.jpg",
"202604_R-DSC01217ES.jpg",
"202604_R-DSC01400ES.jpg",
"202604_R-DSC01531ES.jpg",
"202604_R-DSC01531IES.jpg",
"202604_R-DSC01640IES.jpg",
"202604_R-DSC09899ES.jpg",
"202604_R-DSC09974ES.jpg",
"202605_R-DSC01854ES.jpg",
"202605_R-DSC03046CES.jpg",
"202605_R-DSC03143ES.jpg",
"202605_R-DSC03206S.jpg",
"202605_R-DSC03431ES.jpg",
"202605_R-DSC03468ES.jpg",
"202605_R-DSC03705EAS.jpg",
"202605_R-DSC03787EAS.jpg",
"202605_R-DSC03970IEAS.jpg",
"202607_R-DSC06689ES.jpg",
"202607_R-DSC06705IES.jpg",
"202607_R-DSC06708IES.jpg",
"202607_R-DSC06818ES.jpg",
"202607_R-DSC06836IES.jpg",
"202607_R-DSC07529ES.jpg",
"202607_R-DSC07792ES.jpg",
"202607_R-DSC09066ES.jpg"
],

    "BlackWhite": [
"202503_Vika 5.jpg",
"202503_Vika 6.jpg",
"202504_Fery 2.jpg",
"202505_Andrea 3.jpg",
"202505_Andrea 4.jpg",
"202505_Jelena 12.jpg",
"202505_Jelena 4.jpg",
"202506_Mary 6.jpg",
"202506_Mary 7.jpg",
"202507_Carlota 1.jpg",
"202507_Carlota 3.jpg",
"202507_R-guillemES.jpg",
"202507_Sofia 2.jpg",
"202507_Sofia 3.jpg",
"202508_DSC09811IES.jpg",
"202508_Enya 1.jpg",
"202508_Enya 3.jpg",
"202508_Enya 4.jpg",
"202508_Eva 1.jpg",
"202508_Eva 2.jpg",
"202508_Eva 4.jpg",
"202508_Eva 5.jpg",
"202508_Eva 6.jpg",
"202508_Evgenia 2.jpg",
"202508_Evgenia 4.jpg",
"202508_Evgenia 5.jpg",
"202509_Julia 1.jpg",
"202509_Julia 3.jpg",
"202509_Paula 2.jpg",
"202510_Elena 1.jpg",
"202510_Elena 3.jpg",
"202510_R-DSC02767ES.jpg",
"202511_R-DSC04268ES.jpg",
"202511_R-DSC04429ES.jpg",
"202602_R-DSC05389ES.jpg",
"202603_R-DSC07224S.jpg",
"202603_R-DSC07451ES.jpg",
"202603_R-DSC07582ES.jpg",
"202603_R-DSC07747S.jpg",
"202603_R-DSC08158ES.jpg",
"202603_R-DSC08565ES.jpg",
"202603_R-DSC08653ES.jpg",
"202603_R-DSC08696ES.jpg",
"202603_R-DSC08851ES.jpg",
"202603_R-DSC08928ES.jpg",
"202603_R-DSC08976ES.jpg",
"202604_R-DSC09691ES.jpg",
"202604_R-DSC10052ES.jpg",
"202604_R-DSC10077S.jpg",
"202605_R-DSC03202S.jpg",
"202605_R-DSC03207S.jpg",
"202607_R-DSC06334ES.jpg",
"202607_R-DSC07428ES.jpg",
"202607_R-DSC07935IES.jpg",
"202607_R-DSC07979ES.jpg",
"202607_R-DSC08698BES.jpg",
"202607_R-DSC08851ES26.jpg",
"202607_R-DSC09084ES.jpg"
],

    "StudioOutdoor": [
"201306_Monster.jpg",
"202506_Jelena 10.jpg",
"202506_Jelena 11.jpg",
"202506_Jelena 13.jpg",
"202506_Jelena 9.jpg",
"202606_R-DSC04434ES.jpg",
"202606_R-DSC04517ES.jpg",
"202606_R-DSC04828IES.jpg",
"202606_R-DSC04897ES.jpg",
"202606_R-DSC04924ES.jpg",
"202606_R-DSC04935ES.jpg",
"202606_R-DSC05107ES.jpg",
"202607_R-DSC09392ES.jpg",
"202607_R-DSC09439ES.jpg",
"202607_R-DSC09489ES.jpg",
"202608_R-DSC00541IES.jpg",
"202608_R-DSC00774IES.jpg",
"202608_R-DSC01031IES.jpg",
"202608_R-DSC04533IES.jpg",
"202608_R-DSC04609IES.jpg",
"202608_R-DSC04672IES.jpg",
"202608_R-DSC04984IES.jpg",
"202608_R-DSC05099IES.jpg",
"202608_R-DSC05258IES.jpg",
"202608_R-DSC05458IES.jpg"
],

    "Anonymous": [
"202507_Dark.jpg",
"202507_DSC07618IES.jpg",
"202605_R-DSC01897ES.jpg"
],

    "Urban": [
"198808_Autopista.jpg",
"200308_EUA_GoldenGate1.jpg",
"200308_EUA_Manhatan.jpg",
"201512_Belgium_2.jpg",
"201512_Belgium_3.jpg",
"201601_Belgica_1.jpg",
"201711_Rome.jpg",
"201805_Napols.jpg",
"202509_Tallin 1.jpg",
"202509_Tallin 10.jpg",
"202509_Tallin 11.jpg",
"202509_Tallin 2.jpg",
"202509_Tallin 3.jpg",
"202509_Tallin 4.jpg",
"202509_Tallin 5.jpg",
"202509_Tallin 6.jpg",
"202509_Tallin 7.jpg",
"202509_Tallin 8.jpg",
"202509_Tallin 9.jpg"
],

    "Sky": [
"202302_Aurora at Iceland.jpg",
"202302_R-Aurora01-9243-9249S.jpg",
"202302_R-Aurora08-8960-8966S.jpg",
"202302_R-VAurora08-0367S.jpg",
"202302_R-VAurora09-0456S.jpg",
"202406_Palla nit.jpg",
"202407_AvioLluna.jpg",
"202407_ErmitaSantQuircdeDurro.jpg",
"202503_Aurora at Tromso.jpg",
"202503_Aurora_3.jpg",
"202506_Milky Way from Ulldeter.jpg",
"202506_R-DSC05632ES.jpg",
"202508_R-DSC00167ES.jpg",
"202508_R-DSC00193BES.jpg",
"202508_R-DSC08840ES.jpg",
"202605_R-DSC04172ES.jpg",
"202605_R-DSC04191ES.jpg",
"202607_R-DSC05880S.jpg",
"202608_DSC03134S.jpg",
"202608_DSC03426S.jpg",
"202608_R-DSC08223S.jpg",
"202608_R-IMG_1336S.jpg"
],

    "Aerial": [
"202308_Holand from plane.jpg"
],

    "Macro": [
"202505_R-Maduixa_visitant.JPG",
"202505_R-Maduixa.JPG",
"202607_R-DSC05976S.jpg",
"202607_R-DSC05991ES.jpg",
"202609_R-IMG_1630S.jpg",
"202609_R-IMG_1631S.jpg"
],

    "Travel": [
"201208_Lanzarote_1.jpg",
"201208_Lanzarote_2.jpg",
"201905_Petra_1.jpg",
"201905_Petra_2.jpg",
"201905_Wadirum_1.jpg",
"201905_Wadirum_2.jpg",
"201905_Wadirum_3.jpg",
"202206_Plugia.jpg",
"202302_R-2023-02-10_18-39-26_800S.jpg",
"202302_R-2023-02-10_19-01-11_900S.jpg",
"202302_R-2023-02-12_15-56-59_400S.jpg",
"202302_R-2023-02-12_16-48-38_800S.jpg",
"202302_R-DSC_8011S.jpg",
"202302_R-DSC_8032S.jpg",
"202302_R-DSC_8440S.jpg",
"202302_R-DSC_8498S.jpg",
"202302_R-DSC_9616S.jpg",
"202302_R-DSC_9645S.jpg",
"202302_R-Islandia03-8327-8330S.jpg",
"202302_R-Islandia08-8467-8470S.jpg",
"202402_LofotenBlue.jpg",
"202403_Suissa_1.jpg",
"202403_Suissa_2.jpg",
"202503_Lofoten 1.jpg",
"202503_Lofoten 2.jpg",
"202503_Lofoten 3.jpg",
"202503_Lofoten 4.jpg"
],

    "Lifestyle": [
"199309_R-PokerBNS.jpg",
"201808_Yellow.jpg",
"202302_R-DSC_9455S.jpg",
"202308_Nao Victoria a Amsterdam.jpg",
"202308_Nao Victoria Sunset.jpg",
"202403_Suissa_4.jpg",
"202407_BaixadaFalles_1.jpg",
"202407_BaixadaFalles_2.jpg",
"202407_Red.jpg",
"202503_Linx a Norway.jpg",
"202511_R-DSC03973S.jpg",
"202511_R-DSC04045S.jpg",
"202511_R-DSC04070S.jpg",
"202512_Rontu.jpg",
"202602_R-DSC06245S.jpg",
"202602_R-DSC06307S.jpg",
"202607_R-DSC05905S.jpg",
"202608_R-DSC05764S.jpg"
],

    "History": [
"202604_R-DSC09077S.jpg",
"202604_R-DSC09082S.jpg",
"202604_R-DSC09160ES.jpg",
"202604_R-DSC09175S.jpg",
"202604_R-DSC09177S.jpg",
"202604_R-DSC09201ES.jpg",
"202604_R-DSC09233ES.jpg",
"202604_R-DSC09244S.jpg",
"202604_R-DSC09250ES.jpg",
"202604_R-DSC09251S.jpg",
"202604_R-DSC09257S.jpg"
]
};




document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');
    const grid = document.querySelector('.grid');
    const fullImageView = document.getElementById('full-image-view');
    const fullImage = document.getElementById('full-image');
    const imageName = document.getElementById('image-name');
    const prevImageButton = document.getElementById('prev-image');
    const nextImageButton = document.getElementById('next-image');
/*
    const aboutLink = document.getElementById('about-link');
    const aboutSection = document.getElementById('about');
    const aboutContent = document.getElementById('about-content');
*/
    const fullImageContainer = document.getElementById('full-image-container');

    const mosaicType = MOSAIC_TYPES.includes(window.MOSAIC_TYPE) ? window.MOSAIC_TYPE : MOSAIC_DEFAULT;
    document.body.classList.add(`mosaic-${mosaicType}`);

    let currentSection = window.DEFAULT_SECTION || 'Homepage';
    let images = [];
    let currentImageIndex = 0;

    function loadImages(section) {
        currentSection = section;
        grid.innerHTML = '';
        images = [];
        fullImageView.style.display = 'none';
        loadImagesFromList(section);
        updateActiveMenuLink(section);
    }

    // Remarca al menú l'enllaç de la secció que s'està mostrant
    function updateActiveMenuLink(section) {
        document.querySelectorAll('nav a[data-section]').forEach(link => {
            link.classList.toggle('active', link.dataset.section === section);
        });
    }


function loadImagesFromList(section) {

    const imagePath = `${window.IMG_BASE || 'img/'}${section}/`;
    const imageList = imageLists[section];

    if (imageList && imageList.length > 0) { // Verifica si la llista existeix i no està buida

        // Barregem l'array imageList utilitzant l'algoritme Fisher-Yates shuffle
        for (let i = imageList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [imageList[i], imageList[j]] = [imageList[j], imageList[i]];
        }


        imageList.forEach((imageFile, index) => {
            imageUrl = imagePath + imageFile;
	    images.push(imageUrl);
            addImageToGrid(imageUrl, index);
        });
    } else {
        // Si la categoria no existeix o no té imatges, mostra un missatge
        grid.textContent = '< No photos right now >';
        console.warn('Categoria no trobada o sense imatges:', section);
    }
}



    // Funció per afegir una imatge al grid
    function addImageToGrid(imageUrl, index) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = imageUrl.split('/').pop().split('.')[0];
        img.addEventListener('click', () => showFullImage(images.indexOf(imageUrl)));
        img.addEventListener('load', () => applyMasonryLayout(gridItem, img, index));

        const imageNameGrid = document.createElement('div');
        imageNameGrid.classList.add('image-name-grid');
        imageNameGrid.textContent = imageUrl.split('/').pop().split('.')[0];

        gridItem.appendChild(img);
        gridItem.appendChild(imageNameGrid);
        grid.appendChild(gridItem);
    }

    // Mosaic 'modular' (vegeu MOSAIC_TYPES): l'amplada de cada cel·la (grid-column)
    // es tria segons l'orientació real de la foto -perquè les panoràmiques
    // guanyin columnes i les verticals no s'estirin en excés- i l'alçada
    // (grid-row-end) es calcula a partir de l'alçada renderitzada resultant,
    // per no retallar ni deixar marge. Cada 8 posicions, dues fotos reben
    // una columna extra com a punt focal.
    const MASONRY_ROW_HEIGHT = 10;
    const MASONRY_ROW_GAP = 10;
    const MASONRY_FOCAL_STRIDE = 8;
    const MASONRY_FOCAL_OFFSETS = [0, 4];
    const MASONRY_WIDE_RATIO = 1.15;

    function getMasonryColumnCount() {
        const columnCount = window.getComputedStyle(grid).gridTemplateColumns.split(' ').filter(Boolean).length;
        return columnCount || 1;
    }

    function computeMasonryColumnSpan(ratio, isFocal) {
        let span = ratio > MASONRY_WIDE_RATIO ? 2 : 1;
        if (isFocal) span += 1;
        return Math.min(span, getMasonryColumnCount());
    }

    function applyMasonryRowSpan(item, img) {
        requestAnimationFrame(() => {
            const rowSpan = Math.ceil(
                (img.getBoundingClientRect().height + MASONRY_ROW_GAP) /
                (MASONRY_ROW_HEIGHT + MASONRY_ROW_GAP)
            );
            item.style.gridRowEnd = `span ${rowSpan}`;
        });
    }

    function applyMasonryLayout(item, img, index) {
        if (mosaicType !== 'modular') return;

        const ratio = img.naturalWidth / img.naturalHeight;
        const isFocal = MASONRY_FOCAL_OFFSETS.includes(index % MASONRY_FOCAL_STRIDE);
        item.dataset.ratio = ratio;
        item.dataset.focal = isFocal ? '1' : '0';

        item.style.gridColumn = `span ${computeMasonryColumnSpan(ratio, isFocal)}`;
        applyMasonryRowSpan(item, img);
    }

    function resizeAllMasonryItems() {
        if (mosaicType !== 'modular') return;
        document.querySelectorAll('.grid-item').forEach(item => {
            const img = item.querySelector('img');
            if (!img || !img.complete || !img.naturalWidth) return;

            const ratio = parseFloat(item.dataset.ratio);
            const isFocal = item.dataset.focal === '1';
            item.style.gridColumn = `span ${computeMasonryColumnSpan(ratio, isFocal)}`;
            applyMasonryRowSpan(item, img);
        });
    }

    let masonryResizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(masonryResizeTimeout);
        masonryResizeTimeout = setTimeout(resizeAllMasonryItems, 150);
    });

    // Funció per mostrar la imatge a pantalla completa
    function showFullImage(index) {
        currentImageIndex = index;
        fullImage.src = images[index];
        imageName.textContent = images[index].split('/').pop().split('.')[0];
        fullImageView.style.display = 'flex';
    }

    // Funció per mostrar la imatge anterior
    function showPreviousImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showFullImage(currentImageIndex);
    }

    // Funció per mostrar la imatge següent
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showFullImage(currentImageIndex);
    }

    // Funció per tancar la vista en gran
    function closeFullImageView() {
        fullImageView.style.display = 'none';
    }

    // Event listeners per a la navegació
    prevImageButton.addEventListener('click', showPreviousImage);
    nextImageButton.addEventListener('click', showNextImage);

    // Event listener per tancar la vista a pantalla completa al fer clic a la pantalla
    fullImageView.addEventListener('click', (event) => {
        if (event.target === fullImageView) { 
            closeFullImageView();
        } 
    });

    // Event listener per a la tecla ESC
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeFullImageView();
        }
        if (fullImageView.style.display === 'flex') {
            if (event.key === 'ArrowLeft') {
                showPreviousImage();
            } else if (event.key === 'ArrowRight') {
                showNextImage();
            }
        }
    });

    // Event listeners per als enllaços de navegació
    document.querySelectorAll('nav a[data-section]').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const section = this.dataset.section;
            loadImages(section);
        });
    });

    // El logo actua com a "homepage": mostra la secció Homepage
    // (només present a la pàgina principal; a les subpàgines de grup el logo
    // és un enllaç normal cap a la home)
    const logoHome = document.getElementById('logo-home');
    if (logoHome) {
        logoHome.addEventListener('click', function (event) {
            event.preventDefault();
            loadImages('Homepage');
        });
    }

    // Carregar la secció per defecte al carregar la pàgina
    loadImages(currentSection);

    // Swipe functionality
    let touchStartX = 0;
    let touchEndX = 0;

    fullImageView.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0].screenX;
    }, false);

    fullImageView.addEventListener('touchend', (event) => {
        touchEndX = event.changedTouches[0].screenX;

        const swipeDistanceX = touchEndX - touchStartX;
        const swipeThreshold = 50; 

        if (swipeDistanceX > swipeThreshold) {
            showPreviousImage();
        }

        if (swipeDistanceX < -swipeThreshold) {
            showNextImage();
        }
    }, false);
});



