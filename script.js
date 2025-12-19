const imageLists = {
    "Colors": [
	"Black.jpg",
	"Blond.jpg",
	"Blue.jpg",
	"Dark.jpg",
	"DarkBlue.jpg",
	"Green.jpg",
	"BWhite.jpg",
	"Orange.jpg",
	"Red.jpg",
	"Yellow.jpg"
    ],

    "Landscapes": [
"Asturies.jpg",
"Cala Roca Grossa 1.jpg",
"Cala Roca Grossa 2.jpg",
"Cala Roca Grossa 3.jpg",
"Cala Roca Grossa de nit.jpg",
"Cami de Ronda a Lloret.jpg",
"Eivissa Platja De Comte.jpg",
"Eivissa.jpg",
"Fecamp.jpg",
"Linx a Norway.jpg",
"Lloret.jpg",
"Lofoten 1.jpg",
"Lofoten 2.jpg",
"Lofoten 3.jpg",
"Lofoten 4.jpg",
"Lofoten 5.jpg",
"Menorca 2.jpg",
"Menorca.jpg",
"Nao Victoria a Amsterdam.jpg",
"Nao Victoria Sunset.jpg",
"Plugia.jpg",
"BaixadaFalles_1.jpg",
"BaixadaFalles_2.jpg",
"Cadiz.jpg",
"Cantabric.jpg",
"CliffOfMoher.jpg",
"EUA_Calico.jpg",
"EUA_GoldenGate2.jpg",
"EUA_GoldenGate3.jpg",
"EUA_GranCanyon1.jpg",
"EUA_GranCanyon2.jpg",
"Lanzarote_1.jpg",
"Lanzarote_2.jpg",
"LofotenBlue.jpg",
"Menorca 3.jpg",
"Norway_1.jpg",
"Norway_2.jpg",
"Petra_1.jpg",
"Petra_2.jpg",
"Suissa_1.jpg",
"Suissa_2.jpg",
"Suissa_3.jpg",
"Suissa_4.jpg",
"Wadirum_1.jpg",
"Wadirum_2.jpg",
"Wadirum_3.jpg",
"Tamariu.jpg"
    ],

    "Studio": [
"Andrea 1.jpg",
"Andrea 2.jpg",
"Andrea 5.jpg",
"Andrea 6.jpg",
"Andrea 7.jpg",
"Carlota 2.jpg",
"Charlie 1.jpg",
"Charlie 2.jpg",
"Charlie 3.jpg",
"Charlie 4.jpg",
"Charlie 5.jpg",
"Elena 2.jpg",
"Enya 2.jpg",
"Eva 3.jpg",
"Eva 7.jpg",
"Eva 8.jpg",
"Evgenia 1.jpg",
"Evgenia 3.jpg",
"Fery 1.jpg",
"Fery 3.jpg",
"Fery 4.jpg",
"Fery 5.jpg",
"Fery 6.jpg",
"Fery 7.jpg",
"Jelena 1.jpg",
"Jelena 10.jpg",
"Jelena 11.jpg",
"Jelena 13.jpg",
"Jelena 2.jpg",
"Jelena 3.jpg",
"Jelena 5.jpg",
"Jelena 6.jpg",
"Jelena 7.jpg",
"Jelena 8.jpg",
"Jelena 9.jpg",
"Julia 2.jpg",
"Julia 4.jpg",
"Mary 1.jpg",
"Mary 2.jpg",
"Mary 3.jpg",
"Mary 4.jpg",
"Mary 5.jpg",
"Paula 1.jpg",
"Paula 3.jpg",
"Paula 4.jpg",
"Sofia 1.jpg",
"Vika 1.jpg",
"Vika 2.jpg",
"Vika 3.jpg",
"Vika 4.jpg",
"Carol 1.jpg",
"Carol 2.jpg",
"Judith 1.jpg",
"Judith 2.jpg",
"Monster.jpg",
"Rontu.jpg"
],

    "BlackWhite": [
"Andrea 3.jpg",
"Andrea 4.jpg",
"Carlota 1.jpg",
"Carlota 3.jpg",
"Elena 1.jpg",
"Elena 3.jpg",
"Enya 1.jpg",
"Enya 3.jpg",
"Enya 4.jpg",
"Eva 1.jpg",
"Eva 2.jpg",
"Eva 4.jpg",
"Eva 5.jpg",
"Eva 6.jpg",
"Evgenia 2.jpg",
"Evgenia 4.jpg",
"Evgenia 5.jpg",
"Fery 2.jpg",
"Jelena 4.jpg",
"Jelena 12.jpg",
"Julia 1.jpg",
"Julia 3.jpg",
"Mary 6.jpg",
"Mary 7.jpg",
"Paula 2.jpg",
"Sofia 2.jpg",
"Sofia 3.jpg",
"Vika 5.jpg",
"Vika 6.jpg"
],

    "Urban": [
"Tallin 1.jpg",
"Tallin 10.jpg",
"Tallin 11.jpg",
"Tallin 2.jpg",
"Tallin 3.jpg",
"Tallin 4.jpg",
"Tallin 5.jpg",
"Tallin 6.jpg",
"Tallin 7.jpg",
"Tallin 8.jpg",
"Tallin 9.jpg",
"Belgica_1.jpg",
"Belgium_2.jpg",
"Belgium_3.jpg",
"EUA_Manhatan.jpg",
"Napols.jpg",
"Rome.jpg",
"EUA_GoldenGate1.jpg",
"Autopista.jpg"
],

    "Sky": [
"Aurora at Iceland.jpg",
"Milky Way from Ulldeter.jpg",
"Aurora_3.jpg",
"AvioLluna.jpg",
"ErmitaSantQuircdeDurro.jpg",
"Aurora at Tromso.jpg",
"Palla nit.jpg"
],

    "Aerial": [
"Holand from plane.jpg"
],

    "Macro": [
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

    let currentSection = 'Colors';
    let images = [];
    let currentImageIndex = 0;

    function loadImages(section) {
        currentSection = section;
        grid.innerHTML = '';
        images = [];
        fullImageView.style.display = 'none';
        loadImagesFromList(section);
    }


function loadImagesFromList(section) {

    const imagePath = `img/${section}/`;
    const imageList = imageLists[section];

    if (imageList && imageList.length > 0) { // Verifica si la llista existeix i no està buida

        // Barregem l'array imageList utilitzant l'algoritme Fisher-Yates shuffle
        for (let i = imageList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [imageList[i], imageList[j]] = [imageList[j], imageList[i]];
        }


        imageList.forEach(imageFile => {
            imageUrl = imagePath + imageFile;
	    images.push(imageUrl);
            addImageToGrid(imageUrl);
        });
    } else {
        // Si la categoria no existeix o no té imatges, mostra un missatge
        grid.textContent = '< No photos right now >';
        console.warn('Categoria no trobada o sense imatges:', category);
    }
}



    // Funció per afegir una imatge al grid
    function addImageToGrid(imageUrl) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = imageUrl.split('/').pop().split('.')[0];
        img.addEventListener('click', () => showFullImage(images.indexOf(imageUrl)));

        const imageNameGrid = document.createElement('div');
        imageNameGrid.classList.add('image-name-grid');
        imageNameGrid.textContent = imageUrl.split('/').pop().split('.')[0];

        gridItem.appendChild(img);
        gridItem.appendChild(imageNameGrid);
        grid.appendChild(gridItem);
    }

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
            aboutSection.style.display = 'none';
            gallery.style.display = 'block';
        });
    });

/*
    // Event listener per mostrar la secció "Sobre l'Autor"
    aboutLink.addEventListener('click', function (event) {
        event.preventDefault();
        gallery.style.display = 'none';
        fullImageView.style.display = 'none';
        aboutSection.style.display = 'block';
    });
*/

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



