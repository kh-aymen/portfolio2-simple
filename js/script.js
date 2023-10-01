let header = document.querySelector('header')
let menuIcon = document.querySelector('#menu-icon')
let navbarResponsive = document.querySelector('.navbar_responsive')
let closeNavbar = document.querySelectorAll('.closeNavbar')

AOS.init()

window.onscroll = () => {

    let scrollValue = scrollY
    if (scrollValue > 20) {
        header.style.backgroundColor = '#323946'
    } else {
        header.style.backgroundColor = 'transparent'
    }
}

menuIcon.addEventListener('click', () => {
    navbarResponsive.classList.toggle('show')
})


for (let i = 0; i < closeNavbar.length; i++) {
    closeNavbar[i].addEventListener('click', () => {
        navbarResponsive.classList.remove('show')
    })
}