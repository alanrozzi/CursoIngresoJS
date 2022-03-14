/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numeroIngresado;
	let respuesta; //var de control
	let maximo;
	let minimo;
	let banderaDelPrimerIngreso; //se inicializa
	
	respuesta=true;
	banderaDelPrimerIngreso=0;

	while(respuesta==true)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);


		if(numeroIngresado<minimo||banderaDelPrimerIngreso==0)
		{
			minimo=numeroIngresado;
		}
		if(numeroIngresado>maximo||banderaDelPrimerIngreso==0)
		{
			maximo=numeroIngresado;
			banderaDelPrimerIngreso=1; //cuando ingreso nuevo valor, el la condicion de bandera va a dar falso.
		}
		
		


		/*

		if(banderaDelPrimerIngreso==0)
		{
			minimo=numeroIngresado;
			maximo=numeroIngresado;

			banderaDelPrimerIngreso=1; //subo la bandera por tener el max y min relativo
		}
		else
		{
			if(numeroIngresado<minimo)
			{
				minimo=numeroIngresado;
			}

			if(numeroIngresado>maximo)
			{
				maximo=numeroIngresado;
			}
		}
		*/
		
		respuesta=confirm("Ingresa otro numero?");
	}

	txtIdMaximo.value=maximo;
	txtIdMinimo.value=minimo;
}//FIN DE LA FUNCIÓN

















































/*
// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}
	*/