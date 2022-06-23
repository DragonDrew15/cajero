var Username = document.getElementById('username');
var Password = document.getElementById('password');
var ErrorMessage = document.getElementById('errorMessage');

function sendFormulary(){
    console.log("Enviando Formulario...");
    

    var ErrorMessages = [];

    if (Username.value === null || Username.value === '') {
        ErrorMessages.push('Ingresa tu Nombre de Usuario');
        ErrorMessage.hidden = false;
    }

    if (Password.value === null || Password.value === '') {
        ErrorMessages.push('Ingresa tu Contraseña');
        ErrorMessage.hidden = false;
    }

    if (ErrorMessages.length === 0) {
        ErrorMessage.hidden = true;       
    }

    ErrorMessage.innerHTML = ErrorMessages.join(' e ');

    return false;
}