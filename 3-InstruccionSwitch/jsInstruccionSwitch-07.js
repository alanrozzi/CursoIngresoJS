function mostrar()
{
	var destino;
	var mensaje;

	destino=document.getElementById("txtIdDestino").value;
	
	switch(destino)
	{
		case "Bariloche":
			mensaje="Se encuentra al Oeste";
		break;

		case "Cataratas":
			mensaje="Se encuentra al Norte";
		break;

		case "Mar del plata":
			mensaje="Se encuentra al Este";
		break;

		case "Ushuaia":
			mensaje="Se encuentra al Sur";
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN