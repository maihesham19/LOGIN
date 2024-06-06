var emailInput = document.getElementById('email')
var passwordInput = document.getElementById('password')
var note = document.getElementById('note')
var btn = document.getElementById('btn')
var data = JSON.parse(localStorage.getItem("userData"))
function userSite() {
    if (emailInput.value == '' || passwordInput == '') {
        emailInput.classList.add('is-invalid')
        passwordInput.classList.add('is-invalid')
        note.innerHTML = "All inputs is required"
    } else {
        for (let i = 0; i < data.length; i++) {
            if (emailInput.value == data[i].email && passwordInput.value == data[i].password) {
                window.location = "./home.html"
                localStorage.setItem('name', JSON.stringify(data[i].name))
            } else {
                note.innerHTML = "incorrect email or password"
            }

        }
    }
}
btn.addEventListener('click', userSite)
document.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
        userSite()
    }
})