/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numeroIngresado;
	let sumaPositivos;
	let productoNegativos;
	let respuesta;

	sumaPositivos=0;
	productoNegativos=1;
	respuesta=true;

	while(respuesta==true)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado>=0)
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
		}
		else
		{
			productoNegativos=productoNegativos*numeroIngresado;
		}

		respuesta=confirm("Ingresa otro numero?");

	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=productoNegativos;


}//FIN DE LA FUNCIÓN










/*
var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;
	*/