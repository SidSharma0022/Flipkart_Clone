let getUserData = JSON.parse(localStorage.getItem("usersdata")) || [];
console.log(getUserData);


function Signup() {
    let mobileNumber = document.getElementById("mobileNumber").value;


    let Mail = document.getElementById("mail").value;


    let passward = document.getElementById("pass").value;

    if (mobileNumber.length !== 10) {
        alert("Mobile Number should have 10 digits.");
    }
    else {
        let usersdata = {
            mobileNumber: mobileNumber,
            Mail: Mail,
            passward: passward,
        }



        // let users =[];
        let users = [...getUserData, usersdata];
        // users.push(data);
        localStorage.setItem("usersdata", JSON.stringify(users));
        
        window.location.href = "signin.html"
    }

}


