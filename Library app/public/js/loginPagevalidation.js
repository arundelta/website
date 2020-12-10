// function validateForm()
// {
// var inputText= document.getElementById("username");
// var inputpwd= document.getElementById("password");

// if(inputText.value=='admin')
// 	{
// 		if(inputpwd.value=='12345')
// 		{
// 			alert("Valid email address!");
// 			// window.location.href = "http://google.com";
// 			// window.open("./todolist.html", "_self");
// 			// return true;
// 		}
// 		else
// 		{
// 			alert("InValid Password");
// 			// return false;

// 		}
// 	}
// 	else
// 	{
// 		alert("InValid username");
// 		document.form1.text1.focus();
// 		// return false;

// 	}
// }   

function validateForm()
{
var inputText= document.getElementById("username");
var inputpwd= document.getElementById("password");
var x="";

if(inputText.value=='admin' && inputpwd.value=='12345')
	{
	
	
			alert("Valid login credentials");
			x=1;
			// document.form1.text1.focus();
			// window.location.href = "http://google.com";
			// window.open("./todolist.html", "_self");
			return true;
	
	}
	else
	{
		alert("Check Username and Password");
		x=0;
		return false;
		// document.form1.text1.focus();
		// return false;

	}
myDisplayer(x);
}  
 
function myDisplayer(y)
{
if(y.value==1)

{	
alert("success");
console.log(y);
	window.location.href = "http://google.com";
}
	
}