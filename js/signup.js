var nameInput = document.getElementById('name')
var emailInput = document.getElementById('email')
var passwordInput = document.getElementById('password')
var note = document.getElementById('note')
var btn = document.getElementById('btn')
var userInfo = []
if (localStorage.getItem("userData") !== null) {
    userInfo = JSON.parse(localStorage.getItem("userData"));
}
function userSite() {
    let user = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    };
    if (nameInput.value == '' || emailInput.value == '' || passwordInput.value == '') {
        nameInput.classList.add('is-invalid')
        emailInput.classList.add('is-invalid')
        passwordInput.classList.add('is-invalid')
        note.innerHTML = "All inputs is required"
    } else if (validationSite(nameInput) && validationSite(emailInput) && validationSite(passwordInput)) {
        if (check() == true) {
            note.innerHTML = "email already exists"
            emailInput.classList.add('is-invalid')
            nameInput.classList.remove('is-invalid')
            passwordInput.classList.remove('is-invalid')
        } else {
            userInfo.push(user)
            localStorage.setItem('userData', JSON.stringify(userInfo))
            window.location = "./index.html"
        }
    }
    check()
}
btn.addEventListener('click', userSite)
document.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
        userSite()
    }
})
function check() {
    for (let i = 0; i < userInfo.length; i++) {

        if (emailInput.value == userInfo[i].email) {
            return true;
        }
    }
}
function validationSite(element) {
    var text = element.value;
    var regex = {
        name: /^\w{3,}$/,
        email: /^\w{3,}\.{0,1}\w{0,}@\w{0,}(\.com)$/,
        password: /^.{3,}$/
    }
    if (regex[element.id].test(text) == true) {
        element.classList.add('is-valid')
        element.classList.remove('is-invalid')
        return true;
    } else {
        element.classList.add('is-invalid')
        element.classList.remove('is-valid')
        note.innerHTML = "Invalid Data"
    }
}