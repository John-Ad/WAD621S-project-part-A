let mobileNavShow = false;
function mobileShowNavbar() {
    if (mobileNavShow) {
        mobileNavShow = false;
        document.getElementById("navbar-items").style.display = "flex";
    } else {
        mobileNavShow = true;
        document.getElementById("navbar-items").style.display = "none";
    }
}