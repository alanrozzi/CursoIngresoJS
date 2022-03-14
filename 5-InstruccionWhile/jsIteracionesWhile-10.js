/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. X
2-Suma de los positivos. X
3-Cantidad de positivos. X
4-Cantidad de negativos. X
5-Cantidad de ceros. X
6-Cantidad de números pares. X
7-Promedio de positivos. 
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). (entre contadores)
10-De los positivos el mas grande
11-De los negativos el más chico */
function mostrar()
{

	let numeroIngresado;
	let respuesta; //var de control
	let sumaNegativos;
	let sumaPositivos;
	let contadorNegativos;
	let contadorPositivos;
	let contadorCeros;
	let contadorPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferenciaPosNeg;
	//let banderaPositivo;
	//let banderaNegativo;
	let maximoPositivo;
	let minimoNegativo;

	
	respuesta=true;
	sumaNegativos=0;
	sumaPositivos=0;
	contadorPositivos=0;
	contadorNegativos=0;
	contadorCeros=0;
	contadorPares=0;
	//banderaPositivo=0;
	//banderaNegativo=0;

	while(respuesta==true)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado<0) //negativos
		{
			sumaNegativos+=numeroIngresado; //"+=" acumula el valor de la izquierda con el valor de la derecha
			
			contadorNegativos++;

			if(numeroIngresado<minimoNegativo||contadorNegativos==1) //contador sirve de bandera
			{
				minimoNegativo=numeroIngresado;
				//banderaNegativo=1;
			}
		}
		else
		{
			if(numeroIngresado>0) //positivos
			{
				sumaPositivos+=numeroIngresado;
				
				contadorPositivos++;

				if(numeroIngresado>maximoPositivo||contadorPositivos==1)
				{
					maximoPositivo=numeroIngresado;
					//banderaPositivo=1;
				}

			}
			else //ceros
			{
				
				contadorCeros++;
			}
		}

		if(numeroIngresado%2==0)
		{
			contadorPares++;
		}

		respuesta=confirm("Ingresa otro numero?");
	}

	diferenciaPosNeg=contadorPositivos/contadorNegativos;
	
	document.write("La suma de los negativos es: "+sumaNegativos+"<br>");
	document.write("La suma de los positivos es: "+sumaPositivos+"<br>");
	document.write("La cantidad de los positivos es: "+contadorPositivos+"<br>");
	document.write("La cantidad de los negativos es: "+contadorNegativos+"<br>");
	document.write("La cantidad de los ceros es: "+contadorCeros+"<br>");
	document.write("La cantidad de pares es: "+contadorPares+"<br>");
	
	
	if(contadorPositivos>0)
	{
		promedioPositivos=sumaPositivos/contadorPositivos;
		document.write("El promedio de los positivos es : "+promedioPositivos+"<br>");
	}
	else
	{
		document.write("No se puedo calcular el promedio de positivos <br>");
	}


	if(contadorNegativos>0)
	{
		productoNegativos=sumaNegativos/contadorNegativos;
		document.write("El promedio de los negativos es : "+promedioNegativos+"<br>");
	}
	else
	{
		document.write("No se puedo calcular el promedio de negativos <br>");
	}

	document.write("La direfencia entre la cantidad de positivos y negativos es : "+diferenciaPosNeg+"<br>");
	document.write("El maximo de los positivos es : "+maximoPositivo+"<br>");
	document.write("El minimo de los negativos es : "+minimoNegativo+"<br>");

}//FIN DE LA FUNCIÓN