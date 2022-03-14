/*
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
*/
function mostrar()
{
	var edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if(edad==15)
	{
		alert("Niña bonita");
	}
}

/*
 "0", siempre false; otro número que no sea cero es true.

	var verdadero
	var falso

	verdadero=true
	falso=false

	alert(verdadero&&verdadero); //true, solo cuando ambos son verdadero
	alert(verdadero||falso); //true, cuando al menos uno es verdadero
*/
