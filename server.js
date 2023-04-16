const arrayData = [];

function Register(event){
    event.preventDefault();
    var name = document.getElementById("userName").value;
    // console.log(name);

    var email = document.getElementById("userEmail").value;
    // console.log(email);

    var password = document.getElementById("userPassword").value;
    // console.log(password);

    var confirmPassword = document.getElementById("userConfirmPassword").value;
    // console.log(confirmPassword);


    if(name && email && password && confirmPassword){
        if(password.length >= 8 && confirmPassword.length >= 8){
            if(password==confirmPassword){
                var userData = {userName: name, userEmail:email, password: password, confirmPasssword: confirmPassword};
            // console.log(userData);
                localStorage.setItem("userx", JSON.stringify(userData));
                // console.log(userData);
                // console.log(JSON.stringify(userData));
            } else {
                console.log("Password do not Match");
            }
        } else {
            console.log("Enter 8 characters or more");
        }
    } else{
        console.log("All Fields are Mandatory");
    }

}

function getData(){
    console.log(JSON.parse(localStorage.getItem("userx")));
}


function MultipleUser(event){
    event.preventDefault();

    
    var name = document.getElementById("userName").value;
    var email = document.getElementById("userEmail").value;
    var password = document.getElementById("userPassword").value;
    var confirmPassword = document.getElementById("userConfirmPassword").value;


    if(name && email && password && confirmPassword){
        if(password.length >= 8 && confirmPassword.length >= 8){
            if(password==confirmPassword){
                var userData = {userName: name, userEmail:email, password: password, confirmPasssword: confirmPassword};
                // localStorage.setItem("userx", JSON.stringify(userData));
                arrayData.push(userData);
                // console.log(arrayData.length);
                localStorage.setItem("userInfo", JSON.stringify(arrayData));
                
            } else {
                console.log("Password do not Match");
            }
        } else {
            console.log("Enter 8 characters or more");
        }
    } else{
        console.log("All Fields are Mandatory");
    }

    

}








