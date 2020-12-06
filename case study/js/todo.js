
function getdata()
{

var xhttp = new XMLHttpRequest();

    // Initiate request.
    xhttp.onreadystatechange = function()
    {
       if (xhttp.readyState == 4 && xhttp.status==200)
         {	
        var mydata = JSON.parse(xhttp.response);
        document.getElementById('display').innerHTML = mydata[0][title];
        }
   
     };
     xhttp.open("GET", "todos.json", true);  // get json file.
     xhttp.send();
    
}