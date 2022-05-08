function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
   
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    
    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        seterror("name", "Length of name at least 5");
        returnval = false;
    }

    if (name.length == 0){
        seterror("name", "enter a name!");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length>25){
        seterror("email", "Email length is too long");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "Phone number must be 10 digits");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6){

        
        seterror("pass", "Password should be atleast 6 characters long!");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "Password and Confirm password must be same");
        returnval = false;
    }

    

    return returnval;
}

function validlogin(){
    var returnval = true;
    var email = document.forms['Form2']["email"].value;
    var password = document.forms['Form2']["pass"].value;

    if (email!="xyz@viit.ac.in" && password != "1234567"){
        seterror("password", "*invalid credentials");
        returnval = false;
    }

   return returnval;
}
