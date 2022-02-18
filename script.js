let button = document.getElementById("collapse")
let sidebar = document.getElementById("sidebar")

button.addEventListener("click", e => {
    sidebar.classList.toggle("hidden")
})