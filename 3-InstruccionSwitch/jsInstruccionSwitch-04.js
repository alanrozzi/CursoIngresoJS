function mostrar()
{
	var mes;
	var mensaje;

	mes=document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Febrero":
			mensaje="Este mes tiene 28 días.";
		break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje="Este mes tiene 30 días.";
		break;

		default:
			mensaje="Este mes tiene 31 días.";
		break;
	}
	alert(mensaje);
}