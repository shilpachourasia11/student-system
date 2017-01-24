var dep = [];
function addDep()
{
    //alert("yay");
    var dept1= document.getElementById('department').value;
   	
   	if(	ifFieldEmpty(dept1) == 0)
	{
		document.getElementById('errorLabel').innerHTML = "Can not leave this block empty";
		return;
	}
	else
	{
		document.getElementById('errorLabel').innerHTML = null;
	}

	if(	lengthCheck(dept1) == 0)
	{
		document.getElementById('errorLabel').innerHTML = "Department name must have characters more than 1 ";
		return;
	}
	else
	{
		document.getElementById('errorLabel').innerHTML = null;
	}


    /*if(dept1 != 'undefined')
    {*/
    	dep.push({
    		"dep" : dept1,
    		"subject" : []
    	});
    	localStorage.setItem("dept",JSON.stringify(dep));
   		var storeddep = JSON.parse(localStorage.getItem("dept"));
    	var sel = document.getElementById("select1");
    	var option = document.createElement("option");
    	option.textContent = storeddep[storeddep.length - 1].dep;
    	sel.appendChild(option);
    	//d++;
    	alert("Department added");
 /*   }
    else
    {
    	alert("eh!");
    }*/
 }

function addSub()
{	
	var department = document.getElementById("select1").value;
	var sub = document.getElementById("subject").value;

	if(	ifFieldEmpty(sub) == 0)
	{
		document.getElementById('errorLabel').innerHTML = "Can not leave this block empty";
		return;
	}
	else
	{
		document.getElementById('errorLabel').innerHTML = null;
	}


	var key1;

	for(var i=0;i<dep.length;i++)
	{
		if(department==dep[i].dep)
		{
			key1=i;
			break;
		}
	}
	dep[key1].subject.push(sub);
	
	localStorage.setItem("dept",JSON.stringify(dep)); // din not add stringify because it gave erros 

	alert("Subjects Added");

	//dep[0].subject.push(sub); kaam kar rha hai
	//alert(dep[0].subject); kaam kar rha hai
}


function shoSub()
{
	//alert("shosub");
	var sel = document.getElementById("select2"); 
	//alert(storeddep.dep[0]);
	var i;
    for(i = sel.options.length - 1 ; i >= 0 ; i--)
    {
        sel.remove(i);
    }
	var department = document.getElementById("select1").value;
	var storeddep =localStorage.getItem("dept");
	for(var i=0;i<Object.keys(dep).length;i++)
	{
		if(department==dep[i].dep)
		{
			for(var j=0;j<dep[i].subject.length;j++)
   			{
    			var option = document.createElement("option");
    			option.textContent = dep[i].subject[j];
    			sel.appendChild(option);
    		}
    		alert("Subjects added");
    		break;
		}
	}
}


function addTeach()
{

	alert("adding teachers");
	var department = document.getElementById("select1").value;
	var sub = document.getElementById("select2").value;
	var tid = document.getElementById("id").value;
	var tpas = document.getElementById("pass").value;

	if(	ifFieldEmpty(tid , tpas) == 0)
	{
		document.getElementById('errorLabel').innerHTML = "Can not leave this block empty";
		return;
	}
	else
	{
		document.getElementById('errorLabel').innerHTML = null;
	}

	// var teachers = [] ;
	var teachTemp = [];
	teachTemp = JSON.parse(localStorage.getItem("teach"));

	if(teachTemp == null)
	{
		teachTemp = [];
	}

	if(	passwordLengthCheck(tpas) == 0)
	{
		document.getElementById('errorLabel').innerHTML = "Password must be more than six characters";
		return;
	}
	else
	{
		document.getElementById('errorLabel').innerHTML = null;
	}

	mydata = {
		"id" : tid,
		"subj" : sub,
		"pass" : tpas,
		"dept" : department
	};

	teachTemp.push(mydata);
	
	localStorage.setItem("teach",JSON.stringify(teachTemp));
	alert("Teacher ID and Pass Added");
}


function shoTeach()
{
	alert("Showing teachers");
	var sel = document.getElementById("select3"); 

	for(var i = sel.options.length - 1 ; i >= 0 ; i--)
    {
        sel.remove(i);
    }	

	var department = document.getElementById("select1").value;
	var sub = document.getElementById("select2").value;

	var t =JSON.parse(localStorage.getItem("teach"));
	
	for(var i=0 ; i<Object.keys(t).length; i++)
	{
		if(t[i].dept == department && t[i].subj== sub)
		{
			var option = document.createElement("option");
    		option.textContent = t[i].id;
    		sel.appendChild(option);
		}
	}

}

function addHOD()
{
	/*var hod = localStorage.getItem("hod");*/
	var department = document.getElementById("select1").value;
	var sub = document.getElementById("select2").value;
	var teacher = document.getElementById("select3").value;
	var hodid = document.getElementById("hodid").value;
	var hodpass = document.getElementById("hodpass").value;

	var hod = [];

	if(	ifFieldEmpty(hodid , hodpass) == 0)
	{
		document.getElementById('errorLabel').innerHTML = "Can not leave this block empty";
		return;
	}
	else
	{
		document.getElementById('errorLabel').innerHTML = null;
	}

	if(	passwordLengthCheck(hodpass) == 0)
	{
		document.getElementById('errorLabel').innerHTML = "Password must be more than six characters";
		return;
	}
	else
	{
		document.getElementById('errorLabel').innerHTML = null;
	}

	hod.push({
		"idTeacher" : teacher.id1,
		"idHod" : hodid,
		"passHod" : hodpass,
		"deptHod" : department
	});

	localStorage.setItem("hod",JSON.stringify(hod));
}

function logout()
{
	window.location = "sms.html";
}