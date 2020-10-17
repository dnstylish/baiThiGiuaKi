Vue.use(VueAwesomeSwiper)

const ready = callback => {
    if (document.readyState !== 'loading') callback()
    else document.addEventListener('DOMContentLoaded', callback)
};

ready(() => {
    document.addEventListener('scroll', () => {
        stickHeader()
        // mobileMenuClick()
    })
})

function stickHeader() {
    const body = document.querySelector('body')
    const react = body.getBoundingClientRect()
    const height = window.innerHeight
    if (Math.abs(react.top) >= height / 2) {
        body.classList.add('fixed-header')
    } else {
        body.classList.remove('fixed-header')
    }
}

/*function mobileMenuClick() {
    const links = document.querySelectorAll(".mobile-menu-wrap ._has_childs")
    links.map((link) => {
        console.log(link)
        link.addEventListener('click', ($event) => {
            console.log('ok')
            $event.preventDefault()
            console.log(link)
        })
    })
}*/
