class Loader {
    constructor() {
        this.init();
    }

    init() {
        this.createCSSLink();
        this.createLoaderContainer();
        this.createLoader();
        this.removeLoaderOnLoad();
    }

    createCSSLink() {
        const linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.type = "text/css";
        linkElement.href = "./loader-lib/style.css";
        document.head.appendChild(linkElement);
    }

    createLoaderContainer() {
        const loaderContainer = document.createElement("div");
        loaderContainer.classList.add("loaderContainer");
        this.loaderContainer = loaderContainer;
        document.body.appendChild(loaderContainer);
    }

    createLoader() {
        const loader = document.createElement("div");
        loader.classList.add("loader");
        this.loader = loader;
        this.loaderContainer.appendChild(loader);

        const loaderBackground = document.createElement("div");
        loaderBackground.classList.add("loaderBackground");
        this.loaderBackground = loaderBackground;
        this.loaderContainer.appendChild(loaderBackground);
    }



    //! Container
    setContainerBackgroundImage(imagePath) { if (imagePath) {this.loaderBackground.style.backgroundImage = `url(${imagePath})`;}}
    setContainerBackgroundColor(color) { if (color) {this.loaderBackground.style.backgroundColor = color;}}
    setContainerBackgroundBlur(blueIntensity) { if (blueIntensity) {this.loaderBackground.style.filter = `blur(${blueIntensity})`;}}

    //! Loader
    setLoaderSize(height, width = 500) {
        if (height) {this.loader.style.height = height;}
        if (width) {this.loader.style.width = width;}
    }
    setRadius(radius) { if (radius) {this.loader.style.borderRadius = radius;} }
    setLoaderBackgroundImage(imagePath) { if (imagePath) {this.loader.style.backgroundImage = `url(${imagePath})`;}}
    setLoaderBackgroundColor(color) { if (color) {this.loader.style.backgroundColor = color;}}

    setLoaderBorderWidth(width) { if (width) {this.loader.style.borderWidth = width;} }
    setLoaderBorderColor(color) { if (color) {this.loader.style.borderColor = color;} }
    setLoaderBorderStyle(style) { if (style) {this.loader.style.borderStyle = style;} }

    setLoaderAnimationsDuration(duration) { if (duration) {this.loader.style.animationDuration = duration;} }

    setLoaderAnimations(classes) {
        if(typeof classes == "object") {
            for (const classe of classes) {
                this.loader.classList.add("animation-"+classe[0]);
                document.querySelectorAll(".animation-"+classe[0]).forEach(function(element) {
                    element.style.animationDuration = classe[1];
                });
            }
        }
    }

    removeLoaderOnLoad() {
        document.addEventListener("DOMContentLoaded", () => {
            const loaderElement = document.querySelector(".loader");
            if (loaderElement) {
                window.addEventListener("load", function() {
                    // loaderElement.remove();
                });
            }
        });
    }

    resetBodyMargin(value) {
        if (value === true) {
            document.body.classList.add("resetBodyMargin");
        }
    }
}
