let button = document.getElementById("collapse")
let sidebar = document.getElementsByClassName("sidebar")[0]
let body = document.getElementById("body")

if (/Mobi|Android/i.test(navigator.userAgent)) {
    body.style.setProperty("--hide", `calc(-${sidebar.clientWidth}px + 2rem)`)
    body.classList.add("contracted")
}

button.addEventListener("click", e => {
    body.style.setProperty("--hide", `calc(-${sidebar.clientWidth}px + 2rem)`)
    body.classList.toggle("contracted")
})