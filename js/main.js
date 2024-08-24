let mobileClosed = true;

function show_ban() {
    if (mobileClosed) {

        if (window.matchMedia("(max-width: 992px)").matches) {
            document.querySelectorAll('.fermerMobile').forEach(function (el) {
                el.style.display = "flex";
            });
            document.querySelector('body').style.overflow = "hidden";
            mobileClosed = false;
        }
    } else {
        if (window.matchMedia("(max-width: 992px)").matches) {
            document.querySelectorAll('.fermerMobile').forEach(function (el) {
                el.style.display = "none";
            });
            document.querySelector('body').style.overflow = "auto";
            mobileClosed = true;
        }
    }
}
window.onresize = function(event) {
    if (window.innerWidth > 992) {
        document.querySelectorAll('.fermerMobile').forEach(function (el) {
            el.style.display = "flex";
        });
        document.querySelector('body').style.overflow = "auto";
        mobileClosed = true;
    } else {
        if (window.matchMedia("(max-width: 992px)").matches) {
            document.querySelectorAll('.fermerMobile').forEach(function (el) {
                el.style.display = "none";
            });
            document.querySelector('body').style.overflow = "auto";
            mobileClosed = true;
        }

    }

};