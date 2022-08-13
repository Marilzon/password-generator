const passwordWidth = document.querySelector('#password-width')
const newPassword = document.querySelector('#newPassword')

function generatePassword() {
    newPassword.innerHTML = ""

    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let simbolsset = "@#$%¨&*()_-+=§+-*,:;/>,<!\"'?"
    let numbersset = "1234567890"

    let charModelsToPassword = charset.concat(simbolsset, numbersset)

    if (passwordWidth.value === '') {
        alert('Digite o tamanho de sua senha!')
        return
    }

    if (passwordWidth.value < 1) {
        alert('Tamanho da senha precisar ser maior que 0!')
        return
    }

    if (passwordWidth.value > 36) {
        alert('Limite de tamanho excedido!')
        return
    }

    let password = ""

    for (char in charModelsToPassword) {
        password += charModelsToPassword
            .charAt(Math.floor(Math.random() * charModelsToPassword.length))
    }

    password = password.substring(0, passwordWidth.value)

    let passwordResult = document.createTextNode(password)
    return newPassword.appendChild(passwordResult)
}
