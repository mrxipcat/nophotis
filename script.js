document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');
    const grid = document.querySelector('.grid');
    const fullImageView = document.getElementById('full-image-view');
    const fullImage = document.getElementById('full-image');
    const imageName = document.getElementById('image-name');
    const prevImageButton = document.getElementById('prev-image');
    const nextImageButton = document.getElementById('next-image');
    const aboutLink = document.getElementById('about-link');
    const aboutSection = document.getElementById('about');
    const aboutContent = document.getElementById('about-content');

    let currentSection = 'Retrat'; // Secció per defecte
    let images = [];
    let currentImageIndex = 0;

    // Funció per carregar imatges d'una secció
    function loadImages(section) {
        currentSection = section;
        grid.innerHTML = ''; // Netejar el grid
        images = []; // Buidar l'array d'imatges
        fetchImages(section);
    }

    // Funció per obtenir la llista d'imatges del servidor
    function fetchImages(section) {
        const imagePath = `img/${section}/`;
        fetch(imagePath) // Intenta carregar un fitxer "index.html" a la carpeta
            .then(response => {
                if (!response.ok) {
                    throw new Error(`No s'ha trobat la carpeta: ${section}. Assegura't que existeix i conté un index.html.`);
                }
                // Si troba un index.html, no fem res, ja que l'important és carregar les imatges directament
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                // Carreguem les imatges directament, independentment de si hi ha un index.html
                loadImagesFromDirectory(imagePath);
            });
    }

    function loadImagesFromDirectory(imagePath) {
        // Aquesta funció simula la lectura dels fitxers jpg directament (en un entorn real, necessitaries una API al servidor)
        // Com que no podem llistar els fitxers del directori directament al client,
        // farem una petició per a cada possible nom de fitxer i gestionarem els errors.

        const maxImages = 100; // Màxim d'imatges per evitar bucles infinits
        let loadedImages = 0;

        for (let i = 1; i <= maxImages; i++) {
            const imageUrl = `${imagePath}foto${i}.jpg`; // Nomenclatura simple per a les imatges
            const img = new Image();
            img.src = imageUrl;

            img.onload = () => {
                images.push(imageUrl);
                addImageToGrid(imageUrl);
                loadedImages++;
                if (loadedImages === 1) {
                    // Mostrar la primera imatge per defecte
                    showFullImage(0);
                }
            };

            img.onerror = () => {
                // Si no es troba la imatge, simplement ignorem l'error i continuem
                console.log(`Imatge no trobada: ${imageUrl}`);
            };
        }
    }

    // Funció per afegir una imatge al grid
    function addImageToGrid(imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = imageUrl.split('/').pop().split('.')[0];
        img.addEventListener('click', () => showFullImage(images.indexOf(imageUrl)));
        grid.appendChild(img);
    }

    // Funció per mostrar la imatge a pantalla completa
    function showFullImage(index) {
        currentImageIndex = index;
        fullImage.src = images[index];
        imageName.textContent = images[index].split('/').pop().split('.')[0];
        fullImageView.style.display = 'block';
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

    // Event listeners per a la navegació
    prevImageButton.addEventListener('click', showPreviousImage);
    nextImageButton.addEventListener('click', showNextImage);

    // Event listener per tancar la vista a pantalla completa al fer clic a la pantalla
    fullImageView.addEventListener('click', (event) => {
        if (event.target === fullImageView) {
            fullImageView.style.display = 'none';
        }
    });

    // Event listeners per a la navegació amb tecles
    document.addEventListener('keydown', function (event) {
        if (fullImageView.style.display === 'block') {
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
            aboutSection.style.display = 'none'; // Ocultar la secció "Sobre l'Autor"
            gallery.style.display = 'block';     // Mostrar la galeria
        });
    });

    // Event listener per mostrar la secció "Sobre l'Autor"
    aboutLink.addEventListener('click', function (event) {
        event.preventDefault();
        gallery.style.display = 'none'; // Ocultar la galeria
        aboutSection.style.display = 'block'; // Mostrar la secció "Sobre l'Autor"
        loadAboutContent();
    });

    // Funció per carregar el contingut de "about.txt"
    function loadAboutContent() {
        fetch('about.txt')
            .then(response => response.text())
            .then(data => {
                aboutContent.textContent = data;
            })
            .catch(error => {
                console.error('Error al carregar about.txt:', error);
                aboutContent.textContent = 'No s\'ha pogut carregar la informació sobre l\'autor.';
            });
    }

    // Carregar la secció per defecte al carregar la pàgina
    loadImages(currentSection);
});

