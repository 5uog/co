/*===== popup tab =====*/
// jquery.magnific-popup.min.js
$(function (){
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        midClick: true, // to open the link in new tab
        removalDelay: 200,
        closeOnBgClick: true, // nothing changes
        enableEscapeKey: true, // nothing changes
    });
});
