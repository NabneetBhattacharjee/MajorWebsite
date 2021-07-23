function validateForm() 
{
	var x = document.forms["myform"]["name"].value;
	if (x == "") 
	{
	alert("Name must be filled out");
	return false;
	}
	var y = document.forms["myform"]["aff"].value;
	if (y == "") 
	{
	alert("Affiliation must be filled out");
	return false;
	}
	var z = document.forms["myform"]["email"].value;
	if (z == "") 
	{
	alert("E-mail must be filled out");
	return false;
	}
	var a = document.forms["myform"]["country"].value;
	if (a == "") {
	alert("Country must be filled out");
	return false;
	}
	var b = document.forms["myform"]["phone"].value;
	if (b == "") {
	alert("Phone number must be filled out");
	return false;
	}
	var c = document.forms["myform"]["checkbox"].checked;
	if (c == "") {
	alert("Box must be checked");
	return false;
	}
	if(x!="" && y!="" && z!="" && a!="" && b!="" && c!="")
	{
		if(confirm("Do you want to continue?"))
		{
			alert("Congratulations. You have successfully signed up for SSBC 2019.\nYou will be notified of the resulta via phone and e-mail.");
		}
	}
}