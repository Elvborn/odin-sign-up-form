const form = document.querySelector("#sign-up-form");
const btn = document.querySelector("button");
const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#password-confirm");
const passError = document.querySelector(".pass-error");

function isPassValid(){
    if(pass1.value !== pass2.value){
        pass2.setCustomValidity("Passwords do not match!");
        pass1.setCustomValidity("Passwords do not match!");
        passError.textContent = "* Passwords do not match!";

        console.log("Mismatch!");

        return false;
    }    

    pass1.setCustomValidity("");
    pass2.setCustomValidity("");
    passError.textContent = "";

    return true;
}

btn.addEventListener("click", (event) => {    
    event.preventDefault();

    if(isPassValid())
        form.submit();
});