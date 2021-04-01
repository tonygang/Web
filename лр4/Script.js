function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var passid2 = document.registration.passid2;
var age = document.registration.age;
var date = document.registration.date
if(userid_validation(uid,5,12))
{
if(passid_validation(passid,7,12))
{
if(passid2_validation(passid,passid2))
{
if(age_validation(age))
{
}
}
}
}
return false;
}
function userid_validation(uid,mx,my)
	{
		var uid_len = uid.value.length;
		if (uid_len == 0 || uid_len>= my || uid_len<mx)
		{
			alert("User Id should not be empty / length be between "+mx+" to "+my);			
			uid.style.border = "2px solid red";
			return false;
		}
		uid.style.border = "1px solid black";
		return true;
	}
function passid_validation(passid,mx,my)
	{	
	var passid_len = passid.value.length;
	if (passid_len == 0 ||passid_len>= my || passid_len<mx)
		{
		alert("Password should not be empty / length be between "+mx+" to "+my);
		passid.style.border = "2px solid red";
		return false;
		}
	passid.style.border = "1px solid black";
	return true;
	}
function passid2_validation(passid,passid2)
	{
		
	var passid_len = passid.value.length;

	if (passid.value != passid2.value)
		{
		alert("Passwords are not equal");
		passid2.style.border = "2px solid red";
		return false;
		}
	passid2.style.border = "1px solid black";
	return true;
	}
function age_validation(age)
	{
		alert("sdfasdfasdfasdf");
		
		if (age < 0)
		{
			alert("Number is not integer");
			uid.style.border = "2px solid red";
			return false;
		}
		uid.style.border = "1px solid black";
		return true;
	}
