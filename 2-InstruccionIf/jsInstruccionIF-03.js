//Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
function mostrar()
{
	var edad;
	var mensaje; //para guardar el dato de la persona

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	mensaje="La persona es menor de edad"; //tira este mensaje si es falso el if.

	if(edad>=18)
	{
		alert("La persona es mayor de edad");	
	}
 	
 	alert(mensaje);

/* Otra forma de hacerlo sin la vaiable "mensaje":
---------------------------

	else
	{
		alert("Usted es menor de edad");
	}
	
---------------------------

	if(edad<18)
		{
			alert("Usted es menor de edad");		sin hacerlo con "else"
		}
	*/
}