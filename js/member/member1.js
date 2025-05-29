// loader page
var loader = document.getElementById("loader");

setTimeout(function () {
  loader.style.top = "-100%";
}, 5000)



// hide and show function for personal information
function toggleHide() {
  let btn = document.getElementById("btn");
  let contact_info = document.getElementById("contact-info");
  if (contact_info.style.display != "none") {
    contact_info.style.display = "none";
  } else {
    contact_info.style.display = "block";
  }
}



// Contact form valitation

function validate() {
  var fname = document.forms["myForm"]["fname"].value;
  var lname = document.forms["myForm"]["lname"].value;
  var number = document.forms["myForm"]["number"].value;

  var subject = document.forms["myForm"]["subject"].value;
  var email = document.forms["myForm"]["email"].value;
  var message = document.forms["myForm"]["message"].value;
 
  var emailValidation=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (fname == "" || lname==""  || email == "" ||number==""|| subject == "" || message == "") {
    alert("Empty fields are present!!! Please enter the values....");
    return false;
  }
  else if(fname=="")
    {
      alert("Empty fields in first name.");
      document.myForm.fname.focus();
      return false;
    }
  else if(lname=="")
    {
      alert("Enter field in last name");
      document.myForm.last.focus();
      return false;
    }
  else if(subject=="")
    {
      alert("Please fill out the subject fields");
      document.myForm.subject.focus();
      return false;
    }
  else if (number!=10 || number=="") 
  {
    if(number=="")
      {
        alert("please !Enter your number");
        document.myForm.number.focus();
        return false;
      }
    else if(number!=10)
      {
        alert("Please enter a valid 10-digit phone number.");
        document.myForm.number.focus();
        return false;
      }
  }
  else if ( email=="" || !emailValidation.test(email)) 
    {
    alert("please enter a valid email address");
    document.myForm.email.focus();
    return false;
    }
  else 
  {
    alert("Thank You!" +fname+"I will be reach out soon.");
    return true;
  }
}
// prevents its default behavior
form.addEventListener('submit', (e) => 
{
  e.preventDefault();
}
)



//cllick able  button for eduction and contact page
document.getElementById("contactBtn").addEventListener("click", function () {
  document.getElementById("formSection").style.display = "block";
  document.getElementById("formSection").style.width = "650px";
  // document.getElementsByClassName("personal-info").style.background = "red";
  document.getElementById("edEpBackground").style.display = "none";

});

document.getElementById("educationBtn").addEventListener("click", function () {
  document.getElementById("formSection").style.display = "none";
  document.getElementById("edEpBackground").style.display = "block";
  document.getElementById("formSection").style.width = "650px";
});
