function validate(){
    var fnameNode=document.getElementById("fname");
    var fname=fnameNode.value;
    var regexpress1=/^[a-zA-Z ]{2,100}$/;

    var lnameNode=document.getElementById("lname");
    var lname=lnameNode.value;
    var regexpress2=/^[a-zA-Z ]{2,100}$/;

    var mailNode=document.getElementById("email");
    var mail=mailNode.value;
    var regexpress3=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var mobileNode=document.getElementById("mobile");
    var mobile=mobileNode.value;
    var regexpress4=/^[6-9][0-9]{9}$/;

    if(!(regexpress1.test(fname))){
        alert("Invalid First Name");
       
        document.getElementById("fname").focus();
        return false;
    }
    else if(!(regexpress2.test(lname))){
        alert("Invalid Last Name");
        
        document.getElementById("lname").focus();
        return false;
    }
    else if(!(regexpress3.test(mail))){
            alert("Invalid Email Address");
            
            document.getElementById("mail").focus();
            return false;
        }
    else if(!(regexpress4.test(mobile))){
            alert("Invalid Mobile Number");
            document.getElementById("mobile").focus();
            return false;
        }    
    else{
        alert("Form Sub");
    }

}