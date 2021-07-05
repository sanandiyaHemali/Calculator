function mytimer()
{
	document.getElementById('time').innerHTML = i
	i--;
	if(i<0)
	{
		clearInterval(mt);
		document.getElementById('time_over').innerHTML = "Time Over"
	}
}

function add(n)
{
	a = document.getElementById("output");
	a.value = a.value + n ;
}
function op(d)
{
	temp1 = document.getElementById("output").value;
	document.getElementById("output").value = "" ;
	tempop = d ;
}
function calc()
{
	temp2 = document.getElementById("output") ;
	temp3 = temp2.value;

	if(tempop=="+")
	{
		temp2.value = parseFloat(temp1) + parseFloat(temp3) ;
	}
	if(tempop=="-")
	{
		temp2.value = parseFloat(temp1) - parseFloat(temp3) ;
	}
	if(tempop=="*")
	{
		temp2.value = parseFloat(temp1) * parseFloat(temp3) ;
	}
	if(tempop=="/")
	{
		temp2.value = parseFloat(temp1) / parseFloat(temp3) ;
	}

	ho = document.getElementById("history");
	ho.innerHTML = ho.innerHTML + "<br>" + temp1 + tempop + temp3 + "=" + temp2.value ;
}
function dot()
{
	a = document.getElementById("output");
	var n = a.value.indexOf(".");
	if(n==(-1))
	{
		a.value = a.value + '.' ;
	}
	else
	{
		a.value = a.value ;
	}

}
function plmi()
{
	a = document.getElementById("output");
	var m = a.value.indexOf("-");
	if(m==(-1))
	{
		a.value = '-' + a.value ;
	}
	else
	{
		a.value = a.value ;
	}
}
function removeLast()
{
	temp1 = document.getElementById("output").value;
	document.getElementById("output").value = temp1.substr(0,temp1.length-1)
}
function clearInput()
{
	document.getElementById("output").value = "";
}