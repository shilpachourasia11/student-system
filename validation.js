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
