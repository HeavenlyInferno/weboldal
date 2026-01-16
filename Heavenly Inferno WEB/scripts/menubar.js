window.onload = function () {
    const menubar = document.getElementById('menubar')
    if (!navbar) {
        console.error("*menubar* nem található.")
        return
    }

    this.fetch('./partials/menubar.html')
    .then(res => res.text())
    .then(res => {
        navbar.innerHTML = res})
}