/*
Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/

function mostrar()
{
	var estacion;
	var destino;
	var texto;

	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					texto=", se viaja."
				break;

				default:
					texto=", no se viaja."
				break;
			}
		break;

		case "Verano":
			switch(destino)
			{
				case "Mar del plata":
				case "Cataratas":
					texto=", se viaja.";
				break;

				default:
					texto=", no se viaja."
				break;
			}
		break;

		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					texto=", no se viaja."
				break;

				default:
					texto=", se viaja."
				break;
			}
		break;

		default:
			texto=", se viaja."
		break;
	}

	texto="En "+destino+texto;
	alert(texto);

}