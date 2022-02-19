let button = document.getElementById("collapse")
let body = document.getElementById("body")

if (/Mobi|Android/i.test(navigator.userAgent)) {
    body.classList.add("contracted")
}
button.addEventListener("click", e => {
    body.classList.toggle("contracted")
})