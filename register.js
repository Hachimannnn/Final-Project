function validateForm() {
    const first_name = document.getElementById('user-first');
    const re_password = document.getElementById('user-repassword');
    const user_name = document.querySelector('#user-last');
    const user_password = document.querySelector('#user-password');
    const user_email = document.querySelector('#user-email');

    if (first_name.value == '' || user_name.value == "") {
        alert("Name must be filled!");
    }
    else if (user_email.value == '') {
        alert("Email must be filled!");
    }
    else if (user_password.value == '') {
        alert("Password must be filled!");
    }
    else if (user_password.value != re_password.value) {
        alert("Password does not match!");
    }
    else {
        const userData = {
            password: user_password.value,
            email: user_email.value,
        };
        localStorage.setItem(user_name.value, JSON.stringify(userData));
        
        location.replace('login.html');
    }
}
