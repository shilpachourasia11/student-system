function clickFunc(){
	//alert("blah");
	var name;
	var pass;

	var t = JSON.parse(localStorage.getItem("teach"));
	var hod = JSON.parse(localStorage.getItem("hod"));
	var student = JSON.parse(localStorage.getItem("students"));
 	//var hod = JSON.parse(localStorage.getItem("hod"));
	name = document.getElementById('userid').value;
	pass = document.getElementById('pass').value;

	if(	ifFieldEmpty(name,pass) == 0)
	{
		document.getElementById('errorLabel').innerHTML = "Please give full details";
	}
	else
	{
		document.getElementById('errorLabel').innerHTML = null;

		if(name=="123" && pass=="1")
		{
			alert("Login complete");
			window.location="admin.html";
		}

		for(var i=0;i<t.length;i++)
		{
			if(name==t[i].id)
			{
				if(pass==t[i].pass)
				{
					localStorage.setItem("loginIndex",JSON.stringify(i));
					alert("Login complete");
					window.location="teacher.html";
					break;
				} 
				else 
				{
					document.getElementById('errorLabel').innerHTML = "Incorrect password or username";
				}
			}
		}

		for(var i=0;i<hod.length;i++)
		{
			if(name==hod[i].idHod)
			{
				if(pass==hod[i].passHod)
				{
					localStorage.setItem("loginIndex",i);
					alert("Login complete");
					window.location="teacher.html";
					break;
				}
				else 
				{
					document.getElementById('errorLabel').innerHTML = "Incorrect password or username";
				}
			}
		}

		for(var i=0;i<student.length;i++)
		{
			if(name==student[i].sid)
			{
				if(pass==student[i].npass)
				{
					localStorage.setItem("loginIndex",i);
					alert("Login complete");
					window.location="student.html";
					break;
				}
				else 
				{
					document.getElementById('errorLabel').innerHTML = "Incorrect password or username";
				}
			}
		}

	}
}