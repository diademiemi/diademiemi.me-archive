let button = document.getElementById("collapse")
let sidebar = document.getElementsByClassName("sidebar")[0]
let body = document.getElementById("body")



window.onload = () => {
    if (window.innerHeight > window.innerWidth) {
        body.style.setProperty("--hide", `calc(-${sidebar.clientWidth}px + 2rem)`)
        body.classList.toggle("contracted")
    }
}

button.addEventListener("click", e => {
    body.style.setProperty("--hide", `calc(-${sidebar.clientWidth}px + 2rem)`)
    body.classList.toggle("contracted")
})
