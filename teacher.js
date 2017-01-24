function editPD()
{
	document.getElementById("name").removeAttribute('readonly');
	document.getElementById("age").removeAttribute('readonly');
	document.getElementById("gender").removeAttribute('readonly');
}


function savePD()
{
	var teacher = JSON.parse(localStorage.getItem("teach"));
	var index = JSON.parse(localStorage.getItem("loginIndex"));
	var age = document.getElementById("age").value;
	var name = document.getElementById("name").value;
	var gender = document.getElementById("gender").value;

	if(	genderInputCheck(gender) != 0)
	{
		document.getElementById('errorLabel').innerHTML = "Gender value incorrect";
		return;
	}
	else
	{
		document.getElementById('errorLabel').innerHTML = null;
	}

	var teacherPersonalTemp = [];
	
	teacherPersonalTemp = JSON.parse(localStorage.getItem("teacherPersonal"));

	if(teacherPersonalTemp == null)
	{
		teacherPersonalTemp = [];
	}

	var dataTemp = {
		"id1" : teacher[index].id,
		"name1" : name,
		"gender1" : gender,
		"age1" : age,
		"pass1" : teacher[index].pass
	};

	teacherPersonalTemp.push(dataTemp);

	localStorage.setItem("teacherPersonal",JSON.stringify(teacherPersonalTemp));

	document.getElementById("name").readOnly=true;
	document.getElementById("age").readOnly=true;
	document.getElementById("gender").readOnly=true;
}

function editQD()
{
	document.getElementById("master").removeAttribute('readonly');
	document.getElementById("bachelor").removeAttribute('readonly');
	document.getElementById("higher").removeAttribute('readonly');
	document.getElementById("second").removeAttribute('readonly');
	// /document.getElementById("des").removeAttribute('readonly');
}

function saveQD()
{
	var teacherQual = [];
	var index = localStorage.getItem("loginIndex");
	var master = document.getElementById("master").value;
	var bachelor = document.getElementById("bachelor").value;
	var higher = document.getElementById("higher").value;
	var second = document.getElementById("second").value;

	teacherQual = JSON.parse(localStorage.getItem("teacherQual"));
	
	var teacher = JSON.parse(localStorage.getItem("teach"));
	
	if(teacherQual == null)
	{
		teacherQual = [];
	}

	teacherQual.push({
		"id1" : teacher[index].id,
		"master1" : master,
		"bachelor1" : bachelor,
		"higher1" : higher,
		"second1" : second		
	});

	localStorage.setItem("teacherQual",JSON.stringify(teacherQual));
	document.getElementById("master").readOnly=true;
	document.getElementById("bachelor").readOnly=true;
	document.getElementById("higher").readOnly=true;
	document.getElementById("second").readOnly=true;
	//document.getElementById("des").readOnly=true;
}

function addStudents(){
	var teacher = JSON.parse(localStorage.getItem("teach"));
	var hod = JSON.parse(localStorage.getItem("hod"));

	var index = localStorage.getItem("loginIndex");

	for(var i = 0; i<hod.length; i++)
	{
		if(hod[index].idHod== hod[i].idHod)
		{
			document.getElementById("studentDiv").style.visibility = "visible";
		}
	}	

}

function addStu()
{
	var id = document.getElementById("sid").value;
	var name = document.getElementById("sname").value;
	var pass = document.getElementById("spass").value;
	var index = localStorage.getItem("loginIndex");
	var teacher = JSON.parse(localStorage.getItem("teach"));


	studTemp = JSON.parse(localStorage.getItem("students"));
	var stud = [];

	if(studTemp != null)
	{
		stud = studTemp ;
	}

	stud.push(
	{
		sid : id,
		sname : name,
		npass : pass,
		sdep : teacher[index].dept
	})

	localStorage.setItem("students",JSON.stringify(stud));
}

function logout()
{
	window.location = "sms.html";
}