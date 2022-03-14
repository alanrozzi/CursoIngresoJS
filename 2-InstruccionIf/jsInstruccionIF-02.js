function mostrar()
{
	//Al ingresar una edad debemos informar solo si la persona es mayor de edad
	var edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if(edad>=18)	// >=, no al reves.
	{
		alert("Usted es mayor de edad");	
	}
}