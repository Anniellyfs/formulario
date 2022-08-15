const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById( "email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")

form.addEventListener("submit", (e) =>{
    e.preventDefault();
});

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if(usernameValue == ""){
        setErrorFor(username, "O nome de usuário é obrigatório.");
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    //add a mensagem de erro

    //ass a classe de erro
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    //add a classe de success
    
}