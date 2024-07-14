let mediaNavDropdawn = document.querySelector('.media-nav-dropdawn')
let burger = document.querySelector('.toggle')

mediaNavDropdawn.style.display = 'none'

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    if(mediaNavDropdawn.style.display == 'none'){
        mediaNavDropdawn.style.display = 'grid'
    } else {
        mediaNavDropdawn.style.display = 'none'
    }
})

let tab = function() {
    let tabNav = document.querySelectorAll('.tabs-nav__item')
    let tabContent = document.querySelectorAll('.tabs-content')
    let tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectedTabTitle)

        function selectedTabTitle() {
            tabNav.forEach(item => {
                item.classList.remove('show')
            })
            this.classList.add('show')

            tabName = this.getAttribute('data-tab-name')
            selectTabContent(tabName)
        }

        function selectTabContent(tabName){
            tabContent.forEach(item => {
                item.classList.contains(tabName)? item.classList.add('show'): item.classList.remove('show')
            })
        }
    })
}

tab()

const sliderImgs = document.querySelectorAll('.slider-img')
const sliderLine = document.querySelector('.slider-line')
let btnPrev = document.querySelector('.slider-btn__prev')
let btnNext = document.querySelector('.slider-btn__next')

let sliderCount = 0
let sliderWidth

function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth
    sliderLine.style.width = sliderWidth * sliderImgs.length + 'px';
}

showSlide()

window.addEventListener('resize', showSlide)

function nextSlide() {
    sliderCount++

    if(sliderCount >= sliderImgs.length){
        sliderCount = 0
    }
    rollSlider()

}

function prevSlide() {
    sliderCount--

    if(sliderCount < 0){
        sliderCount = sliderImgs.length -1
    }
    rollSlider()
}

btnNext.addEventListener('click', nextSlide)
btnPrev.addEventListener('click', prevSlide)

function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px )`
}