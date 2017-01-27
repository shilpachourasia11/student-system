function editDetails()
{
	document.getElementById("name").removeAttribute('readonly');
	document.getElementById("age").removeAttribute('readonly');
	document.getElementById("gender").removeAttribute('readonly');
	document.getElementById("number").removeAttribute('readonly');
}

function saveDetails()
{
	var student = JSON.parse(localStorage.getItem("students"));
	var studentDetails = [];
	var index = localStorage.getItem("loginIndex");
	var age = document.getElementById("age").value;
	var name = document.getElementById("name").value;
	var gender = document.getElementById("gender").value;
	var number = document.getElementById("number").value;
	
	studentDetails = JSON.parse(localStorage.getItem("studentDetails"));

	if(	genderInputCheck(gender) != 0)
	{
		document.getElementById('errorLabel').innerHTML = "Gender value incorrect";
		return;
	}
	else
	{
		document.getElementById('errorLabel').innerHTML = null;
	}

	if(	phoneInputCheck(number) == 0)
	{
		document.getElementById('errorLabel').innerHTML = "Invalid phone number";
		return;
	}
	else
	{
		document.getElementById('errorLabel').innerHTML = null;
	}
	if(onlyText(name)==0)
	{
		document.getElementById('errorLabel').innerHTML = "Name cannot have numbers in it";
		return;
	}
	else
	{
		document.getElementById('errorLabel').innerHTML = null;
	}

	if( studentDetails == null)
	{
		studentDetails = [];
	}

	studentDetails.push({
		"id1" : student[index].id,
		"name1" : name,
		"gender1" : gender,
		"age1" : age,
		"number1" : number,
		"dept1" : student[index].sdeps
	});

	localStorage.setItem("studentDetails",JSON.stringify(studentDetails));

	document.getElementById("name").readOnly=true;
	document.getElementById("age").readOnly=true;
	document.getElementById("gender").readOnly=true;
	document.getElementById("number").readOnly=true;

}

function logout()
{
	window.location = "sms.html";
}