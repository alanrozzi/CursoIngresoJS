//Al ingresar una edad solo debemos informar si la persona NO es adolescente.

function mostrar()
{
	var edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if(!(edad>12&&edad<17)) //"!", hace la negación, lo contrario de lo anterior, sin cambiar los signos.
	{
		alert("La persona NO es adolescente.");
	}
	else
	{
		alert("??");	
	}

	/*
	Forma anterior:

	if(edad<12||edad>17)
	{
		alert("La persona NO es adolescente.");
	}

	*/
}