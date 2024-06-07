let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];

function Signin() {
    let mobile = document.getElementById("Mobile").value;
    let password = document.getElementById("Pass").value;

    // Validation for mobile number
    if (mobile.length === 0) {
        alert("Enter Mobile Number");
        return;
    } else if (mobile.length !== 10) {
        alert("Mobile number should be of 10 digits");
        return;
    }

    let userFound = false;

    // Iterate through the users data
    for (let i = 0; i < getUsersdata.length; i++) {
        if (mobile == getUsersdata[i].mobile) {
            userFound = true;
            if (password == getUsersdata[i].password) {
                alert("Sign in Successful");
                window.location.href = "index.html";
                return; // Exit the function after successful sign-in
            } else {
                alert("Invalid Password");
                return; // Exit the function if the password is incorrect
            }
        }
    }

    // If no user is found
    if (!userFound) {
        alert("User is Not registered, Sign up to Continue");
        window.location.href = "signup.html";
    }
}
