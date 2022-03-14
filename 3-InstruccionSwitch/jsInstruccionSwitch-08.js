function mostrar()
{
	var destino;
	var mensaje;

	destino=document.getElementById("txtIdDestino").value;
	
	switch(destino)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje="Hace FRIO";
		break;

		default:
			mensaje="Hace CALOR";
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN