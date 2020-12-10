// function ValidateEmail()
// {
// var inputText= document.getElementById("exampleInputEmail1");
// var x ="";
//  var mobile = document.getElementById("exampleInputmobile1").value;

// // var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// // 	if(inputText.value.match(mailformat))
// // 		{
		
// // 		// alert("Valid email address!");
		
// // 		document.form1.text1.focus();
// // 		return true;	
		
// // 		}
// // 	else
// // 		{
// // 		// alert("You have entered an invalid email address!");
// // 		// document.form1.text1.focus();
// // 		return false;
// // 		}


function phonenumber()
{
var phone= document.getElementById("exampleInputmobile1");

//   var phoneno = /^\d{10}$/;
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(phone.value.match(phoneno))
        {
            var inputText= document.getElementById("exampleInputEmail1");
            var mailformat =  /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,9})+)$/;
            // var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            	if(inputText.value.match(mailformat))
            		{
                    
            		alert("Valid email address and phonenumber!");
                    
            		document.form1.text1.focus();
            		return true;	
                    
            		}
            	else
            		{
            		alert("You have entered an invalid email !");
            		// document.form1.text1.focus();
            		return false;
            		}
          
        }
  else
        {
        alert("You have entered an invalid phone number");
        return false;
        }
}

function checkpwd()
    {
    var inputText= document.getElementById("exampleInputPassword1").value; 
    var inputText2= document.getElementById("exampleInputPassword2").value;
      var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      x= re.test(inputText);
      if (inputText==inputText2)
      {
          return x;
      }
      else{
          alert("both passwords must be same");
          return false;
      }
    };
    

// function validateForm() 
// {
//     // Retrieving the values of form elements 
//     var name = document.getElementById("exampleInputname1").value;
//     var email = document.getElementById("exampleInputemail1").value;
//     var mobile = document.getElementById("exampleInputmobile1").value;
    
    
// 	// Defining error variables with a default value
//     var exampleInputname1 = exampleInputemail1 = exampleInput1mobile1 = true;
    
//     // Validate name
//     if(name == "")
//      {
//         printError("exampleInputname1", "Please enter your name");
//     } 
//     else 
//     {
//         var regex = /^[a-zA-Z\s]+$/;                
//         if(regex.test(name) === false) {
//             printError("exampleInputname1", "Please enter a valid name");
//         } 
//         else {
//             printError("exampleInputname1", "");
//             exampleInputlname1 = false;
//         }
//     }
    
//     // Validate email address
//     if(email == "") 
//     {
//         printError("exampleInputemail1", "Please enter your email address");
//     } 
//     else 
//     {
//         // Regular expression for basic email validation
//         var regex = /^\S+@\S+\.\S+$/;
//         if(regex.test(email) === false) {
//             printError("exampleInputemail1", "Please enter a valid email address");
//         } 
//         else{
//             printError("exampleInputemail1", "");
//             exampleInputemail1 = false;
//         }
//     }
    
//     // Validate mobile number
//     if(mobile == "") {
//         printError("exampleInput1mobile1", "Please enter your mobile number");
//     } 
//     else 
//     {
//         var regex = /^[1-9]\d{9}$/;
//         if(regex.test(mobile) === false) {
//             printError("exampleInput1mobile1", "Please enter a valid 10 digit mobile number");
//         } 
//         else
//         {
//             printError("exampleInput1mobile1", "");
//             exampleInput1mobile1 = false;
//         }
//     }
// }