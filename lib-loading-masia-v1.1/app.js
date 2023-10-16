class LoadingScreen {
    constructor() {
        this.linkElement = document.createElement('link');
        this.loadingBackground = document.createElement('div');
        this.loadingLogo = document.createElement('img');
    }

    _createBackground() {
        this.loadingBackground.id = 'loading-background';
        let body = document.body;
        body.insertBefore(this.loadingBackground, body.firstChild);
    }
    
    createLogo(path) {
        this.loadingLogo.id = 'loading-logo';
        this.loadingLogo.src = path;
        let body = document.body;
        body.insertBefore(this.loadingLogo, body.firstChild);
    }

    setBorderRadiusLogo(borderRadius) {
        if (borderRadius === true) {
            this.loadingLogo.classList.add('border-radius');
        }
    }

    setAnimationLogo(animation) {
        this.loadingLogo.classList.add('animation-' + animation);
    }

    _addCSS(pathLib) {
        this.linkElement.rel = 'stylesheet';
        this.linkElement.href = pathLib + '/style.css';
        let head = document.head || document.getElementsByTagName('head')[0];
        head.appendChild(this.linkElement);
    }

    createLoading(pathLib) {
        this._addCSS(pathLib);
        this._createBackground();
    }

    stopLoading() {
        this.linkElement.remove()
        this.loadingBackground.remove()
        this.loadingLogo.remove()
    }
}