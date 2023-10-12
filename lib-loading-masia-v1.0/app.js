let pathLib = "lib-loading-masia-v1.0/";

function fetchJSONData() {
    // Retourne une promesse qui résoudra les données JSON
    return fetch(pathLib + 'config.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('La réponse n\'est pas OK');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors du chargement du fichier JSON :', error);
        });
}

function createBackground() {
    // Créez votre élément
    let loadingBackground = document.createElement('div');
    loadingBackground.id = 'loading-background';

    // Ajoutez à la page
    let body = document.body;
    body.insertBefore(loadingBackground, body.firstChild);
}

function createLogo(path, borderRadius, animation) {
    // Créez votre élément loadingLogo
    let loadingLogo = document.createElement('img');
    loadingLogo.id = 'loading-logo';

    // Définissez la source de loadingLogo avec l'URL de l'icône du JSON
    loadingLogo.src = path;

    // Ajoutez loadingLogo à la page
    let body = document.body;
    body.insertBefore(loadingLogo, body.firstChild);

    // Vérifiez la valeur de borderRadius
    if (borderRadius === true) {
        // Si borderRadius est true, ajoutez la classe border-radius au logo
        loadingLogo.classList.add('border-radius');
    }

    loadingLogo.classList.add('animation-'+animation);
}

function addCSS() {
    // Créez un élément <link> pour la feuille de style
    let linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = pathLib+'style.css';

    // Récupérez la balise <head>
    let head = document.head || document.getElementsByTagName('head')[0];

    // Ajoutez l'élément <link> à la fin de la balise <head>
    head.appendChild(linkElement);
}

// La fonction mère du chargement
fetchJSONData()
    .then(data => {
        let path = data.loading.icon.path;
        let borderRadius = data.loading.icon.borderRadius;
        let animation = data.loading.icon.animation;
        
        addCSS(pathLib);

        createLogo(path, borderRadius, animation);

        createBackground();
    }
);