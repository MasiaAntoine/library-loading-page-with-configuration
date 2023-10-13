const linkElement = document.createElement('link');
const loadingBackground = document.createElement('div');
const loadingLogo = document.createElement('img');

function createBackground() {
    // Créez votre élément
    loadingBackground.id = 'loading-background';

    // Ajoutez à la page
    let body = document.body;
    body.insertBefore(loadingBackground, body.firstChild);
}

function createLogo(path, borderRadius, animation) {
    // Créez votre élément loadingLogo

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

    loadingLogo.classList.add('animation-' + animation);
}

function addCSS(pathLib) {
    // Créez un élément <link> pour la feuille de style

    linkElement.rel = 'stylesheet';
    linkElement.href = pathLib + '/style.css';

    // Récupérez la balise <head>
    let head = document.head || document.getElementsByTagName('head')[0];

    // Ajoutez l'élément <link> à la fin de la balise <head>
    head.appendChild(linkElement);
}

// La fonction mère du chargement
/**
 * chargement de votre loader
 * @param {*} config objet de configuration devant contenir icon.path, icon.borderRadius, icon.animation et pathLib
 */
function createLoading(config) {
    const path = (config && config.icon && config.icon.path) ? config.icon.path : "https://masia-antoine.fr/profil/resources/images/logo.png";
    const borderRadius = (config && config.icon && config.icon.borderRadius) ? config.icon.borderRadius : false;
    const animation = (config && config.icon && config.icon.animation) ? config.icon.animation : "rotate";
    const pathLib = (config && config.pathLib) ? config.pathLib : "/lib-loading-masia-v1.0"

    addCSS(pathLib);

    createLogo(path, borderRadius, animation);

    createBackground();
}

/**
 * Stop de votre loader
 */
function stopLoading() {
    linkElement.remove()
    loadingBackground.remove()
    loadingLogo.remove()
}