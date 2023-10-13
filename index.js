createLoading({
    icon: {
        path: "https://jdedev.fr/images/logo-jdedev.png",
        borderRadius: false,
        animation: "rotateLeftAndRight"
    },
    pathLib: "/lib-loading-masia-v1.0"
})

setTimeout(() => {
    stopLoading()
}, 5000)