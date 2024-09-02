let mobileClosed = true;


function setBtOp() {
    document.getElementById('burgerButton').style.display = "none";
    document.getElementById('closeButton').style.display = "block";
}

function setBtCl() {
    document.getElementById('burgerButton').style.display = "block";
    document.getElementById('closeButton').style.display = "none";
}

function show_ban() {
    if (mobileClosed) {
        if (window.matchMedia("(max-width: 992px)").matches) {
            document.querySelectorAll('.fermerMobile').forEach(function (el) {
                el.style.display = "flex";
            });
            document.querySelector('body').style.overflow = "hidden";
            mobileClosed = false;
            setBtOp();
        }
    } else {
        if (window.matchMedia("(max-width: 992px)").matches) {
            document.querySelectorAll('.fermerMobile').forEach(function (el) {
                el.style.display = "none";
            });
            document.querySelector('body').style.overflow = "auto";
            mobileClosed = true;
            setBtCl()
        }
    }
}

window.onresize = function () {
    if (window.innerWidth > 992) {
        document.querySelectorAll('.fermerMobile').forEach(function (el) {
            el.style.display = "flex";
        });
        document.querySelector('body').style.overflow = "auto";
        mobileClosed = true;
        setBtCl()
    } else {
        if (window.matchMedia("(max-width: 992px)").matches) {
            document.querySelectorAll('.fermerMobile').forEach(function (el) {
                el.style.display = "none";
            });
            document.querySelector('body').style.overflow = "auto";
            setBtCl()
            mobileClosed = true;
        }

    }

};

