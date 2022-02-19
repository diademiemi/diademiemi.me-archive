let button = document.getElementById("collapse")
let body = document.getElementById("body")

button.addEventListener("click", e => {
    body.classList.toggle("contracted")
})