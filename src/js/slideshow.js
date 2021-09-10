var slideIndex = 0;

function showSlide(changeVal) {

    let slides = document.getElementsByClassName("slide");

    slideIndex += changeVal;

    console.log(slides.length);

    if (slides.length > 0) {
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }

        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex].style.display = "block";
    }

}

showSlide(0);