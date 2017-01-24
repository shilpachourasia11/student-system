function addSub()
{	
	var a= document.getElementById("select1").value;
	var b= document.getElementById('subject').value;    
    
	//var key1;   



	var subjects=[];
	subjects.push(b);
	
	var aob =[ { "dep1" : a , "sub1" : b}];

	
	localStorage.setItem("subDet",JSON.stringify(aob));
	alert(localStorage.getItem("subDet"));

   	var sel = document.getElementById("select2");

	var details=JSON.parse(localStorage.getItem("subdet"));



	for(j=0;j<details.length;j++)
	{
		var option=document.createElement("option");
		if(details[j].dep1==a)
		{	alert("abc");

			option.textContent=details[j].sub1;
			sel.appendChild(option);
		}
		
	}


	/*

	var aob =[ { "dep1" : "" , "sub1" : ""}];
	var a= document.getElementById("select1").value;
	var b= document.getElementById('subject').value;  


	aob.dep1 = a;
	aob.sub1 = b;

	var t={};

	/*for(var i=0;i<dep.length;i++)
	{
		aob[i].dep1 = dep[i];
	}
	a//lert(aob);
	for(var i=0;i<deps.length; i++)
	{
		if(a==dep[i])
		{
			for(var j=0;j<subjects.length;j++)
			{
				aob[i].dep1.sub1[j]=subjects[j];
			}
		}
	}
	
	localStorage.setItem("subArray",aob);					
	
   	var sel = document.getElementById("select2");

 	for(var i=0; i<dep.length ; i++)
 	{
 		if(a==dep[i])
 		{
 			for(var j=0;j<subjects.length;j++)
 			{
 				var option = document.createElement("option");
 				//option.textContent = JSON.parse(localStorage.getItem(subArray));
 				option.textContent = aob[i].dep1.sub1[j];
 				sel.appendChild(option);
 			}	
 		}	 
 	}*/
}

/*function addTeach()
{
	var t=[{
		"tid" : "",
		"tsub": "",
	}]

	var a= document.getElementById()


}*/



function addSub()
{
	
	var sub = [];
	var ddl = document.getElementById('select1').value;
	var b= document.getElementById('subject').value;    
    if(ddl != 'undefined')
    {

    	if(b != 'undefined')
    	alert("b");
    	localStorage.clear();
    	sub.push(JSON.stringify(b));
    	localStorage.setItem("sub",sub[0]);
    	var storeddep = JSON.parse(localStorage.getItem("sub"));
    	var sel = document.getElementById("select2");
    	var option = document.createElement("option");
    	option.textContent = storeddep;
    	sel.appendChild(option);
    }

    else
    {
    	alert("eh!");
    }
}
