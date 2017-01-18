
function clickFunc(){
	//alert("blah");
	var name;
	var pass;

	name = document.getElementById('userid').value;
	pass = document.getElementById('pass').value;

	//alert("hello");
	if(name=="123" && pass=="123")
	{
		alert("Login complete");
		window.location="admin.html";
	}
	else
	{
		document.getElementById('label1').innerHTML = "Incorrect user name or password";
	}
	//name = document.getElementById('textbox1').value; 
	//localStorage.setItem("names",name);
	

}