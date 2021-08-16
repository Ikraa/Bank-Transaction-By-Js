const button = document.getElementById('login-submit').addEventListener('click', function () {
    const mailUser = document.getElementById('user-email');
    email = mailUser.value;
    // console.log(mailUser.value);

    const passUser = document.getElementById('user-pass');
    password = passUser.value;
    // console.log(passUser.value);

    if (email == "hello@gmail.com" && password == "124") {
        // console.log("valid");
        window.location.href = "banking.html";
    }
    else {

        const errorMassage = document.getElementById('error-Msg');
        errorMassage.style.display = "block";
    }

})