/*--------------------------------------------------------Sign In Modal--------------------------------------------------------*/
/**/
    // Get Id Of Modal
var modal = document.getElementById("myModal");

// Get Id of Button
var btn = document.getElementById("myBtn");
//When the user clicks the Sign In button, a Modal window will open
btn.onclick = function() {
  modal.style.display = "block";
}
// Get id form button CLose
var close= document.getElementById("myBtnClose");
close.onclick = function() {
    modal.style.display = "none"; 
}
// When the user clicks anywhere outside, the Modal window will close
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/*--------------------------------------------------------Test Sign In--------------------------------------------------------*/
function sign_in(){
    var flag = true;
    var email= document.getElementById('myEmail').value;
    var check_email=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var password = document.getElementById('myPass').value;
    var check_pass = /^([a-zA-Z0-9]{4,20})$/;
    if(!check_email.test(email)){
        window.alert("You have entered the wrong email. Please enter it again!");
        flag = false;
    }
    if(!check_pass.test(password)){
        window.alert("Password must be 4-20 chars. Please enter it again!");
        flag = false;
    }
    if(flag == true){
        window.alert("Logged In Successfully");
        modal.style.display="none";
    }
    return false;
}
/*--------------------------------------------------------Test Products--------------------------------------------------------*/
function products(){
    var flag = true;
    var firstname = document.getElementById('firstName').value;
    var lastname = document.getElementById('lastName').value;
    var emailmy = document.getElementById('email_my').value;
    var tell = document.getElementById('myPhone').value;
    var test_firstname = /^([a-zA-Z\s]{2,10})$/;
    var test_lastname = /^([a-zA-Z\s]{2,10})$/;
    var chek_email=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var test_tell = /^([0-9]{10,12})$/;
        if(!test_firstname.test(firstname)){
            alert('You have entered the wrong firstname. Please enter it again!');
            flag = false;
        }
        if(!test_lastname.test(lastname)){
            alert('You have entered the wrong lastname. Please enter it again!');
            flag = false;
        }
        if(!chek_email.test(emailmy)){
            alert('You have entered the wrong email. Please enter it again!');
            flag = false;
        }
        if(!test_tell.test(tell)){
            alert('Phone must be 10-12 digits. Please enter it again!');
            flag = false;
        }
        if(flag == true){
            alert('Submit Successful Information');
            // modal.style.display="none";
            return true;
        } 
        return false;
}

/*--------------------------------------------------------Test Support--------------------------------------------------------*/
function support(){
    var flag = true;
    var my_fullname = document.getElementById('YourName').value;
    var test_fullname = /^([a-zA-Z\s]){2,15}$/;
    var my_phone = document.getElementById('myNumber').value;
    var test_phone = /^([0-9]{10,12})$/;
    var email = document.getElementById('emEmail').value;
    var test_email = /^([a-zA-Z0-9_\.\-]+)\@([a-zA-Z0-9\-])+\.([a-zA-Z0-9]{2,4})+$/; 
        if(!test_fullname.test(my_fullname)){
            alert('You have entered the wrong name. Please enter it again!');
            flag = false;
        }
        if(!test_email.test(email)){
            alert('You have entered the wrong email. Please enter it again!');
            flag = false;
        }
        if(!test_phone.test(my_phone)){
            alert('Phone must be 10-12 digits. Please enter it again!');
            flag = false;
        }
        if (flag == true)
        {	
            alert("Submit Successful Information");
            // modal.style.display="none";
            return true;
        }
        return false;    
}
/*---------------------------------------------------------Test Register--------------------------------------------------------*/
function register(){
    var flag = true;
    var myfullname = document.getElementById('fullnamemy').value;
    var myphone = document.getElementById('numbermy').value;
    var emailme = document.getElementById('emailmy').value;
    var passme = document.getElementById('passwordmy').value;
    var tetpass = /^([a-zA-Z0-9]{4,20})+$/;
    var tetfullname = /^([a-zA-Z\s]){2,15}$/;
    var tetphone = /^([0-9]{10,12})$/;
    var tetemail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!tetfullname.test(myfullname)){
            alert('You have entered the wrong name. Please enter it again!');
            flag = false;
        }
        if(!tetphone.test(myphone)){
            alert('Phone must be 10-12 digits. Please enter it again!');
            flag = false;
        }
        if(!tetemail.test(emailme)){
            alert('You have entered the wrong email. Please enter it again!');
            flag = false;
        }
        if(!tetpass.test(passme)){
            alert('Password must be 4-20 chars. Please enter it again!');
            flag = false;
        }
        if(flag == true){
            alert('Create Account Success');
            // modal.style.display='none';
            return true;
        }
        return false;   
}
