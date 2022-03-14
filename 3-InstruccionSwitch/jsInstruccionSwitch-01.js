/*
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/function mostrar()
{
	var mes;
	var mensaje;

	mes=document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
			mensaje="que comiences bien el año!!!.";
		break;

		case "Marzo":
			mensaje="a clases!!!.";
		break;

		case "Julio":
			mensaje="se vienen las vacaciones!!!.";
		break;

		case "Diciembre":
			mensaje="Felices fiesta!!!.";
		break;

		default:
			mensaje="Es el mes "+mes;
		break;
	}

	alert(mensaje);



}//FIN DE LA FUNCIÓN