const btn = document.getElementById('menu-btn');
const cover = document.getElementById('cover');
const menu = document.getElementById('mobile-menu');


// btn.addEventListener('click', navToggle);
// document.addEventListener('scroll', scrollPage);

// function navToggle() {
//     btn.classList.toggle('open');
//     cover.classList.toggle('cover-show');
//     document.body.classList.toggle('stop-scrolling');
//     menu.classList.toggle('show-menu');
// }

var carouselItem = [
    {
        Image: 'img/81b1c8f5-6f56-49ec-b2de-5154b7b8cddb.jpg',
        title: 'slide 1',
        description: 'a nice slide'
    },
    {
        Image: 'img/9a0251a2-1a0e-4248-9495-198a5e4a614a.png',
        title: 'slide 1',
        description: 'a nice slide'
    },
    {
        Image: 'img/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg',
        title: 'slide 1',
        description: 'a nice slide'
    },
    {
        Image: 'img/udemmmm.jpg',
        title: 'slide 1',
        description: 'a nice slide'
    },
    {
        Image: 'img/9a0251a2-1a0e-4248-9495-198a5e4a614a.png',
        title: 'slide 1',
        description: 'a nice slide'
    }
]

 let currentImage = 0
function ShowSlide(SlideIndex) {
    const imageElement = document.querySelector('.carousel img')
    // const titleElement = document.querySelector('.carosel h2')
    // const descriptionElement = document.querySelector('.carosel p')

    if (SlideIndex >= carouselItem.length) {
        SlideIndex = 0
    }

        const slide = carouselItem[SlideIndex]
        imageElement.src = slide.Image

        currentImage = SlideIndex
}

ShowSlide(currentImage)
function nextSlide(){
    ShowSlide(++currentImage)
}

setInterval(nextSlide,4000);

//BTN, COVER, HAMBURGER
btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
    btn.classList.toggle('open');
    cover.classList.toggle('cover-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}