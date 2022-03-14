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

			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
				mensaje="Es de tarde.";
			break;

			default:
				mensaje="Es de noche.";
			break;
		}
	}
	else
	{
		mensaje="No es una hora válida";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN