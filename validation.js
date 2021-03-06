function ifFieldEmpty(name, pass)
{
	if(name == "" || pass == "")
	{
		return 0;
	}
}

function passwordLengthCheck(pass)
{
	if(pass.length <6)
	{
		return 0;
	}
}

function lengthCheck(name)
{
	if(name.length < 2)
	{
		return 0;
	}
}

function genderInputCheck(gender)
{
	if(gender == 'm' || gender == 'f')
	{
		return 0;
	}
}

function phoneInputCheck(phone)
{
	if(phone.length < 10)
	{
		return 0;
	}
}

function checkFodDuplicatesDepartments(checkVar)
{	

   	var storeddep = JSON.parse(localStorage.getItem("dept"));

   	if(storeddep == null)
   	{
   		return 1;
   	}
   	for(var i = 0; i < storeddep.length ; i++)
   	{
   		if(storeddep[i].dep == checkVar)
   		{
   			return 0;
   		}
   	}
   	return 1;
}


function checkFodDuplicatesSubjects(checkVar , key1)
{
   	var storedSubject = JSON.parse(localStorage.getItem("dept"));

   	if(storedSubject == null)
   	{
   		return 1;
   	}

   	for(var i = 0; i < storedSubject[key1].subject.length ; i++)
   	{
   		if(storedSubject[key1].subject[i] == checkVar)
   		{
   			return 0;
   		}
   	}
   	return 1;
}


function checkFodDuplicatesTeachers(checkVar)
{
   	var storedTeacher = JSON.parse(localStorage.getItem("teach"));

   	 if(storedTeacher == null)
   	{
   		return 1;
   	}

   	for(var i = 0; i < storedTeacher.length ; i++)
   	{
   		if(storedTeacher[i].id == checkVar)
   		{
   			return 0;
   		}
   	}
   	return 1;
}


function checkFodDuplicatesHOD(checkVar)
{
   	var storedTeacher = JSON.parse(localStorage.getItem("teach"));

   	 if(storedTeacher == null)
   	{
   		return 1;
   	}

   	for(var i = 0; i < storedTeacher.length ; i++)
   	{
   		if(storedTeacher[i].id == checkVar)
   		{
   			return 0;
   		}
   	}
   	return 1;
}

function checkFodDuplicatesStudents(checkVar)
{
      var storedStudents = JSON.parse(localStorage.getItem("students"));

      if(storedStudents == null)
      {
         return 1;
      }

      for(var i = 0; i < storedStudents.length ; i++)
      {
         if(storedStudents[i].sid == checkVar)
         {
            return 0;
         }
      }
      return 1;
}

function onlyText(checkVar)
{
   if(/^[a-zA-Z]+$/.test(checkVar))
   {
      return 1;
   } 
   else
   {
      return 0;
   }
}