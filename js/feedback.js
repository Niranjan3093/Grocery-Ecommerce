// form validation
function formValidation() {
  var fname = document.forms["myForm"]["fname"].value;
  var lname = document.forms["myForm"]["lname"].value;
  var number = document.forms["myForm"]["number"].value;
  var email = document.forms["myForm"]["email"].value;
  var address = document.forms["myForm"]["address"].value;
  var subject = document.forms["myForm"]["subject"].value;
  var message = document.forms["myForm"]["message"].value;

 
  if(fname=="")
    {
      alert("Enter your name");
      document.myForm.fname.focus();
     
      return false;
    }
    if(lname=="")
      {
        alert("Enter your name");
        document.myForm.lname.focus();
        return false;
      }
  

  else if (number == "" || number.length != 10) {
    if (number == "") {
      alert("Enter a phone number");
      document.myForm.number.focus();
      return false;
    }
    else if(number.length!=10)
      {
        alert("invaild number");
        document.myForm.number.focus();
        return false;
      }
  }
  else if (email == "" || !/^[a-zA-Z0-9._]+@iic\.edu\.np$/.test(email)) {
    if (email == "") {
      alert("Email field is empty")
      document.myForm.email.focus();
      return false;
    }
    else if (!/^[a-zA-Z0-9._]+@iic\.edu\.np$/.test(email)) {
      alert("please enter a valid email address(only accept @iic.edu.np)");
      document.myForm.email.focus();
      return false;
    }

  }
  else if (address == "") {
    alert("Enter your address");
    document.myForm.address.focus();
    return false;
  }
  else if (message == "") {
    alert("Enter your's feedback !");
    document.myForm.message.focus();
    return false;
  }
  else if(subject=="")
    {
      alert("Please fill out the subject fields");
      document.myForm.subject.focus();
      return false;
    }
  else {

    alert("Thank You " + fname + " for your's feedback.");
    return true;

  }

}
