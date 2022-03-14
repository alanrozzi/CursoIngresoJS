//REHECHO POR MI

/*
	precioFinal=precioCobrado+(precioCobrado*aumento/100)-(precioCobrado*descuento/100);
	
	precioFinal=precioCobrado*porcentaje (cuenta anterior general)
		0.9 -> descuento del 10%
		1.1 -> aumento del 10%
*/

function mostrar()
{
	var precioBase;
	var precioFinal;
	var porcentaje;
	var estacion;
	var destino;
	var texto;

	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;

	precioBase=15000;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					porcentaje=1.2;
				break;

				case "Mar del plata":
					porcentaje=0.8;
				break;

				default:
					porcentaje=0.9;
				break;
			}
		break;

		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					porcentaje=0.8;
				break;

				case "Mar del plata":
					porcentaje=1.2;
				break;

				default:
					porcentaje=1.1;
				break;
			}
		break;

		default:
			switch(destino)
			{
				case "Cordoba":
					porcentaje=1;
				break;

				default:
					porcentaje=1.1;
				break;
			}
		break;
	}

	precioFinal=precioBase*porcentaje;

	texto="El destino es: "+destino+", en temporada "+estacion+" y su costo total es: $"+precioFinal+".";

	alert(texto);
}
































/*
 CLASE
function mostrar()
{
	var estacionIngresada=txtIdEstacion.value;
	var destino;
	var precioCobrado;
	var porcentaje;
	var precioFinal;
	var texto;

	destino=document.getElementById("txtIdDestino").value; //crossplataform, crosstime

	precioCobrado=15000;
	//aumento=0;
	//descuento=0;

	switch(estacionIngresada)
	{
		//En Invierno: Bariloche tiene un aumento del 20%, Cataratas y Cordoba tiene un descuento del 10% y Mar del plata tiene un descuento del 20%.
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					porcentaje=1.2;
				break;
				
				case "Mar del plata":
					porcentaje=0.8;
				break;

				default:
					porcentaje=0.9;
				break;
			}
		break;
		//En Verano: Bariloche tiene un descuento del 20%, Cataratas y Cordoba tiene un aumento del 10% y Mar del plata tiene un aumento del 20%.
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					porcentaje=0.8;
				break;

				case "Mar del plata":
					porcentaje=1.2;
				break;

				case "Cordoba": //default
				case "Cataratas":
					porcentaje=1.1;
				break;
			}
		break;
		//En Otoño y Primavera: Bariloche tiene un aumento del 10%, Cataratas tiene un aumento del 10%, Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento.
		default:
			switch(destino)
			{
				case "Cordoba":
					porcentaje=1; //sin porcentaje.
				break;

				default:
					porcentaje=1.1;
				break;
			}
		break;
	}

	precioFinal=precioCobrado*porcentaje;
	
	texto="El destino es: "+destino+", en temporada "+estacionIngresada+" y su costo total es: $"+precioFinal+".";

	alert(texto);
}

/*
	precioFinal=precioCobrado+(precioCobrado*aumento/100)-(precioCobrado*descuento/100);
	
	precioFinal=precioCobrado*porcentaje (cuenta anterior general)
		0.9 -> descuento del 10%
		1.1 -> aumento del 10%
*/