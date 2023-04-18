// const arrayData = [];

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
                var LS = JSON.parse(localStorage.getItem("users")) || [];
                var flag=false;

                for(var i=0; i< LS.length; i++){
                    if(LS[i].userEmail == email){
                        flag=true;
                    }
                }
                if(!flag){
                    var userData = {userName: name, userEmail: email, userPassword: password, userConfirmPassword: confirmPassword};
                    LS.push(userData);
                    localStorage.setItem("users" , JSON.stringify(LS));
                    alert("Registration Successful!");
                    document.getElementById("userName").value="";
                    document.getElementById("userEmail").value="";
                    document.getElementById("userPassword").value="";
                    document.getElementById("userConfirmPassword").value="";
                }
                else{
                    alert("Email Matches");
                }
            } else {
                console.log("Password do not Match");
            }
        } else {
            console.log("Enter 8 characters or more");
        }
    } else {
        console.log("All Fields are Mandatory");
    }

}



function getData(){
    console.log(JSON.parse(localStorage.getItem("users")));
}



function Validate(event){
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    

    var LS = JSON.parse(localStorage.getItem("users"));
    var flag=false;
    for(var i=0;i<LS.length;i++){
        if(LS[i].userEmail == email && LS[i].userPassword == password){
            flag=true;
        }
    }

    if(flag){
        alert("Login Successful");
    } else {
        alert("Credentials Failed");
    }

    
}


        console.log("Both Fields are Mandatory");
    }
}







// function MultipleUser(event){
//     event.preventDefault();

    
//     var name = document.getElementById("userName").value;
//     var email = document.getElementById("userEmail").value;
//     var password = document.getElementById("userPassword").value;
//     var confirmPassword = document.getElementById("userConfirmPassword").value;


//     if(name && email && password && confirmPassword){
//         if(password.length >= 8 && confirmPassword.length >= 8){
//             if(password==confirmPassword){
//                 var userData = {userName: name, userEmail:email, password: password, confirmPasssword: confirmPassword};
//                 arrayData.push(userData);
//                 localStorage.setItem("userInfo", JSON.stringify(arrayData));
                
//             } else {
//                 console.log("Password do not Match");
//             }
//         } else {
//             console.log("Enter 8 characters or more");
//         }
//     } else{
//         console.log("All Fields are Mandatory");
//     }

    

// }








