// nav toggle & animation
var navToggle = new TimelineMax({paused: true});

navToggle.to(".nav-open", 0.8, {
     y: 6,
     rotation: 45,
     ease: Expo.easeInOut
});

navToggle.to(".nav-close", 0.8, {
     y: -6,
     rotation: -45,
     ease: Expo.easeInOut,
     delay: -0.8
});

navToggle.to(".nav", 2, {
     top: "0%",
     ease: Expo.easeInOut,
     delay: -2
});

navToggle.staggerFrom(".nav ul li", 2, {
     x: -200,
     opacity: 0,
     ease:Expo.easeOut
}, 0.3);

navToggle.reverse();
$(document).on("click", ".toggle-btn", function() {
     navToggle.reversed(!navToggle.reversed());
});

$(document).on("click", "a", function() {
     navToggle.reversed(!navToggle.reversed());
});