const btn = document.getElementById("login-submit").addEventListener('click', function () {

    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);   

    //set user password:
    const userField = document.getElementById('user-pass');
    const userPassword = userField.value;

// check email and password:
    if (userEmail == "abc@gmail.com" && userPassword == "123") {
        window.location.href = "banking.html"
         
        // console.log("valid");
    }
    
})
