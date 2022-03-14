function mostrar()
{
	var hora;
	var mensaje;

	hora=document.getElementById("txtIdHora").value;
	hora=parseInt(hora);
	
	if(hora>=0&&hora<25)
	{
		switch(hora)
		{
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
				mensaje="Es de mañana.";
			break;

			default:
				mensaje="Son las "+hora;
			break;
		}
	}
	else
	{
		mensaje="No es una hora válida";
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN