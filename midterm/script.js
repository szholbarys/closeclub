var emailError = document.getElementById('email-error');

function validateEmail(){
    var email = document.getElementById('contact-email').value;
    if(email.length == 0){
        emailError.innerHTML = 'email is required!'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'enter correct email, please'
        return false;
    }
    emailError.innerHTML = '<i class = "fas fa-check-circle"></i>';
    return true;
}