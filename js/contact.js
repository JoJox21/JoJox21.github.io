const username = document.getElementById('username');
const form = document.getElementById('submit');
const password = document.getElementById('password');
const errorMsg = document.getElementById('errormsg');

// submit the form
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
})
// function to set an error message
console.log(form);
// function to set success
const setSuccess = (element) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    // set the success message to display through css
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
// function to set an error message
const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
 
    // set the message on the page through css
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

 const validateInputs =() =>{
    const usernameValue = username.value.trim().toLowerCase();
    const passwordValue = password.value.trim().toLowerCase();

    // if(usernameValue === ''){ //check if usernameValue is empty
    //     setError(username, 'Username is required');
    // }else{
    //     setSuccess(username);
    // }

    // if(passwordValue === ''){ //check if passwordValue is empty
    //     setError(password, 'Password is required');
    // // }else if(passwordValue.length <8){ //check if password is less than 8 characters
    // //     setError(password, 'Password must be at least 8 characters');
    // }else{
    //     setSuccess(password);
    // }

    if(usernameValue === "" || passwordValue === ""){
        errorMsg.innerHTML = "Please enter your login credentials."
    }

    else if((usernameValue === "ibineim" || usernameValue === "adikwund" || usernameValue === "hungevuaj" || usernameValue === "ohwojivwiogoroo" || usernameValue === "osadolore" || usernameValue === "dadanj") & passwordValue === "sterling123"){
        window.location ='/pages/auction-page-all-items.html'
    }
    else{
        errorMsg.innerHTML = "These credentials do not match our records."
        username.value = "";
        password.value = "";

        errorMsg.classList.add("shaking");

        setTimeout(function () {
            errorMsg.classList.remove("shaking");
        }, 2000);

    }
    
 }

// form.addEventListener('click', function(){

// })