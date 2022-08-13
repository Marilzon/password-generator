const newPassword = document.querySelector("#newPassword")
const inputWidthSelector = document.querySelector("#input-width-selector")
const generatorButton = document.querySelector(".generator-button")
const optionField = document.querySelector(".option-field")

function createNumberOptions() {
    let selector = []
    for (i = 1; i <= 100; i++) {
        selector.push(`<option class='option-field' value='${i}'>${i}</option>`)
    }

    for (option in selector) {
        inputWidthSelector.innerHTML += selector[option]
    }
}
createNumberOptions()

function onChangePasswordWidthOption() {
    let setValue = inputWidthSelector.value
    return setValue
}

inputWidthSelector.addEventListener("change", onChangePasswordWidthOption)

function generatePassword() {
    let password = ""

    newPassword.innerHTML = ""

    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let simbolsset = "@#$%¨&*()_-+=§+-*,:;/>,<!\"'?"
    let numbersset = "1234567890"
    let charModelsToPassword = charset.concat(simbolsset, numbersset)

    for (char in charModelsToPassword) {
        password += charModelsToPassword
            .charAt(Math.floor(Math.random() * charModelsToPassword.length))
    }

    password = password.substring(0, onChangePasswordWidthOption())

    let passwordResult = document.createTextNode(password)
    return newPassword.appendChild(passwordResult)
}
