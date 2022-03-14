/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/

function mostrar()
{
	let clave;

	clave=prompt("Ingrese la clave.");

	while(clave!="utn750")
	{
		clave=prompt("ERROR, ingrese nuevamente.");
	}
	
}//FIN DE LA FUNCIÓN


/*
var claveIngresada;
	
	claveIngresada = prompt("ingrese el número clave."); //pide por primera vez

	while(claveIngresada!="utn750")
	{
		claveIngresada = prompt("Error, reingrese la clave."); //pide de nuevo si es erronea.
	}

	*/