// anime.min.js, tweenmax.min.js
// preloader animation
var textWrapper = document.querySelector(".preloader-title");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /([^\x00-\x80]|\w)/g,"<span class='letter'>$&</span>"
);

anime.timeline().add({
    targets: ".preloader-title .letter",
    translateX: [0, -140],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1200,
    delay: function(el, i) {
        return 700 + 50 * i;
    }
});

TweenMax.to(".loader", 2.2, {
    delay: 2,
    top: "-100%",
    ease: Expo.easeInOut
});

TweenMax.to(".data", 2.2, {
    delay: 2,
    top: "-100%",
    ease: Expo.easeInOut
})