function addDep()
{
	
    var dep = [];
    //alert("yay");
    var a= document.getElementById('department').value;
    dep.push(JSON.stringify(a));
    //alert(dep);

    localStorage.setItem("dept",dep[0]);
    var storeddep = JSON.parse(localStorage.getItem("dept"));
    alert(storeddep);
	
	var sel = document.getElementById("select1");
    var option = document.createElement("option");
    option.textContent = storeddep;
    sel.appendChild(option);
    return false ;
}

