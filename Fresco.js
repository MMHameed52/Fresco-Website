var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // index of the first image 
const interval = 3000; // duration(speed) of the slide

function changeSlide(n) {
    // Hide all images and deactivate all dots
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity = 0;
        dots[i].classList.remove('active');
    }

    // Update currentImg index
    currentImg = (n + imgs.length) % imgs.length;

    // Show the current image and activate the corresponding dot
    imgs[currentImg].style.opacity = 1;
    dots[currentImg].classList.add('active');
}

// Automatically change slide at specified interval
setInterval(function() {
    changeSlide(currentImg + 1);
}, interval);

