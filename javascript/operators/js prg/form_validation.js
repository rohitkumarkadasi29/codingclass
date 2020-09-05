var form = document.getElementById("form")
var firstname = document.getElementById("firstname")
var lastname = document.getElementById("lastname")
var email = document.getElementById("email")
var password1 = document.getElementById("password1")
var password2 = document.getElementById("password2")


function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input)
    } else{
        showError(input,"email is not Valid")
    }

}

function showError(input, mesage) {

    const formControlValues = input.parentElement;
    formControlValues.className = 'form-control error'
    const small = formControlValues.querySelector('small')
    small.innerText = mesage;

}

function showSuccess(input) {
    const formControlValues = input.parentElement;
    formControlValues.className = 'form-control success'
    // const small = formControlValues.querySelector('small')
    // small.innerText = "";

}

function checkRequired(inputArrayList) {

    let isRequired = false;
    inputArrayList.forEach(input => {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`)
            isRequired = true

        } else {
            showSuccess(input)
        }
    })
    return isRequired;


}


function getFieldName(input) {
    return input.id.charAt(0) + input.id.slice(1)

}

function signHandler(e) {
    e.preventDefault();

    if (!checkRequired([firstname, lastname, email, password1, password2])) {
        checkEmail(email)
    };

}

form.addEventListener('submit', signHandler)