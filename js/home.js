var userName = document.getElementById('name')
var logOut = document.getElementById('logOut')
let icon = document.getElementById('icon')
let wel = JSON.parse(localStorage.getItem('name'))
logOut.addEventListener('click', function () {
    window.location = "./index.html"
})
userName.innerHTML = 'Hi ' + wel
logOut.addEventListener('mouseenter', function (e) {
    icon.classList.replace('fa-face-smile', 'fa-face-frown')
})
logOut.addEventListener('mouseleave', function (e) {
    icon.classList.replace('fa-face-frown', 'fa-face-smile')
})