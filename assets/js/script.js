// togle
const nvbrNav = document.querySelector('.nvbr-nav')

// klik
document.querySelector ('#menu').onclick = () =>{
    nvbrNav.classList.toggle('active');
};

// klik luar side
const hamburger = document.querySelector ('#menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !nvbrNav.contains(e.target)) {
        nvbrNav.classList.remove('active');
    }
});


// swiper