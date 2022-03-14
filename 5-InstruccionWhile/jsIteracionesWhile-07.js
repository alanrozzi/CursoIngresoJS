function mostrar()
{
	let respuesta;
	let alturaIngresada;
	let edadIngresada;
	let temperaturaIngresada;
	let generoIngresado;
	let notaIngresada;
	let porcentajeDesaprobados;

	let contadorMujeres;
	let contadorHombres;
	let contadorNobinario;
	let contadorConFiebre;
	let contadorSinFiebre;
	let contadorAprobados;
	let contadorDesaprobados;

	let acumuladorEdadHombres;
	let acumuladorEdadMujeres;
	let acumuladorEdadNobinario;

	let promedioEdadHombres;
	let promedioEdadMujeres;
	let promedioEdadNobinario;

	let banderaMujerAlta;
	let banderaPrimerAprobado;
	let banderaTemperaturaMaxima;
	let banderaNBJoven;
	let temperaturaMaxima;
	let edadTemperaturaMaxima;
	let nombreTemperaturaMaxima;
	let edadMasJoven;
	let alturaNbJoven;
	let notaNbJoven;
	let alturaMujerMaxima;
	let nombreMujerAlta;
	let nombrePrimerHombreBajo;

	contadorMujeres=0;
	contadorHombres=0;
	contadorNobinario=0;
	contadorConFiebre=0;
	contadorSinFiebre=0;
	contadorAprobados=0;
	contadorDesaprobados=0;
	contadorTotales=0;

	acumuladorEdadHombres=0;
	acumuladorEdadMujeres=0;
	acumuladorEdadNobinario=0;

	promedioEdadHombres=0;
	promedioEdadMujeres=0;
	promedioEdadNobinario=0;

	banderaPrimerAprobado=0;
	banderaTemperaturaMaxima=0;
	banderaNBJoven=0;
	banderaMujerAlta=0;
	respuesta=true

	while(respuesta)
	{
		//6
		nombreIngresado=prompt("Ingrese el nombre del alumno");

		//1
		alturaIngresada=prompt("Ingrese la altura en cm");
		alturaIngresada=parseInt(alturaIngresada);
		//validar
		while(alturaIngresada<1||alturaIngresada>249)
		{
			alturaIngresada=prompt("Reingrese la altura");
			alturaIngresada=parseInt(alturaIngresada);
		}

		//2
		edadIngresada=prompt("Ingrese la edad");
		edadIngresada=parseInt(edadIngresada);
		//validar
		while(edadIngresada<16)
		{
			edadIngresada=prompt("Reingrese la edad");
			edadIngresada=parseInt(edadIngresada);
		}

		//3
		temperaturaIngresada=prompt("Ingrese la temperatura");
		temperaturaIngresada=parseFloat(temperaturaIngresada);
		//validar
		while(temperaturaIngresada<30||temperaturaIngresada>50)
		{
			temperaturaIngresada=prompt("Reingrese la temperatura");
			temperaturaIngresada=parseFloat(temperaturaIngresada);
		}

		//4
		generoIngresado=prompt("Ingrese el genero del alumno, (f, m o nb)").toLowerCase();
		//validar

		while(generoIngresado!="f"&&generoIngresado!="m"&&generoIngresado!="nb")
		{
			generoIngresado=prompt("Reingrese el genero del alumno, (f, m o nb)").toLowerCase();
		}

		//5
		notaIngresada=prompt("Ingrese la nota");
		notaIngresada=parseInt(notaIngresada);
		//validar
		while(notaIngresada<0||notaIngresada>10)
		{
			notaIngresada=prompt("Reingrese la nota");
			notaIngresada=parseInt(notaIngresada);
		}

		//PRIMERA PARTE

		/*a)Cuántas mujeres hay, dentro del punto C.
		if(generoIngresado=="f")
		{
			contadorMujeres++;
		}
		*/

		//b)Cuántos con fiebre y cuantos sin fiebre.
		if(temperaturaIngresada>38)
		{
			contadorConFiebre++;
		}
		else
		{
			contadorSinFiebre++;
		}

		//c)el promedio de edad por sexo:, tenes que separar los sexos, sumar sus edades y dividirla por la cantidad de edades que ingresaron
		
		switch(generoIngresado)
		{
			case "m":
				acumuladorEdadHombres=acumuladorEdadHombres+edadIngresada;
				contadorHombres++;

				//i)el nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado.

				if(alturaIngresada<160&&notaIngresada<4&&banderaPrimerHombreDesaprobado==0)
				{
					nombrePrimerHombreBajo=nombreIngresado;

					banderaPrimerHombreDesaprobado=1;
				}

			break;

			case "f":
				acumuladorEdadMujeres=acumuladorEdadMujeres+edadIngresada;
				contadorMujeres++;

				//g)el nombre de la mujer más alta de las que aprobó
				if((alturaIngresada>alturaMujerMaxima&&notaIngresada>4)||banderaMujerAlta==0)
				{
					alturaMujerMaxima=alturaIngresada;
					nombreMujerAlta=nombreIngresado;
					
					banderaMujerAlta=1;
				}
			break;

			default:
				acumuladorEdadNobinario=acumuladorEdadNobinario+edadIngresada;
				contadorNobinario++;

				//f)la altura y nota  del no binario mas joven

				if(edadIngresada<edadMasJoven||banderaNBJoven==0)
				{
					edadMasJoven=edadIngresada;
					alturaNbJoven=alturaIngresada;
					notaNbJoven=notaIngresada;

					banderaNBJoven=1;
				}
			break;
		}

		//d)el primer alumno aprobado, bandera de primer alumno aprobado, && nota es mayor
		if(banderaPrimerAprobado==0&&notaIngresada>4)
		{
			nombrePrimerAprobado=nombreIngresado;
			banderaPrimerAprobado=1;
		}

		//e)el nombre y edad de la máxima temperatura registrada
		if(temperaturaIngresada>temperaturaMaxima||banderaTemperaturaMaxima==0)
		{
			temperaturaMaxima=temperaturaIngresada;
			edadTemperaturaMaxima=edadIngresada;
			nombreTemperaturaMaxima=nombreIngresado;

			banderaTemperaturaMaxima=1;
		}

		if(notaIngresada>4)
		{
			contadorAprobados++;
		}
		else
		{
			contadorDesaprobados++;
		}

		respuesta=confirm("Desea ingresar otro alumno?");
	}

	promedioEdadHombres=acumuladorEdadHombres/contadorHombres;
	promedioEdadMujeres=acumuladorEdadMujeres/contadorMujeres;
	promedioEdadNobinario=acumuladorEdadNobinario/contadorNobinario;

	//h)el porcentaje de  personas que desaprobaron sobre el total
	contadorTotales=contadorAprobados+contadorDesaprobados
	porcentajeDesaprobados=(contadorDesaprobados*100)/contadorTotales;

	if(contadorMujeres!=0)
	{
		document.write("Hay "+contadorMujeres+" cantidad de mujeres. <br>");
	}
	else
	{
		document.write("No hay mujeres. <br>");
	}

	document.write("Hay "+contadorConFiebre+" con fiebre y "+contadorSinFiebre+" sin fiebre. <br>");
	document.write("Promedio Hombres: "+promedioEdadHombres+" <br>");
	document.write("Promedio Mujeres: "+promedioEdadMujeres+" <br>");
	document.write("Promedio No binaries: "+promedioEdadNobinario+" <br>");
	document.write("Primer alumno aprobado: "+nombrePrimerAprobado+" <br>");
	document.write("Nombre: "+nombreTemperaturaMaxima+" y edad: "+edadTemperaturaMaxima+" de temperatura maxima. <br>");
	document.write("Altura: "+alturaNbJoven+" y nota: "+notaNbJoven+" del no binarie mas joven. <br>");
	document.write("Nombre: "+nombreMujerAlta+" de la mujer mas alta y aprobada. <br>");
	document.write("¨Porcentaje de desaprobados: "+porcentajeDesaprobados+" <br>");
	if(nombrePrimerHombreBajo!=0)
	{
		document.write("Nombre: "+nombrePrimerHombreBajo+" del primer hombre bajo y desaprobado. <br>");
	}
	else
	{
		document.write("No hay hombres bajos desaprobados. <br>");
	}

}











































/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
IDS:
txtIdSuma
txtIdPromedio

function mostrar()
{
	let numeroIngresado;
	let respuesta; //var de control
	let acumulador;
	let contador;
	let promedio;

	acumulador=0; //suma los num
	contador=0; //cantidad de num/iteracion
	respuesta=true
	//respuesta="si"; //para que entre la primera vez al while, si se desconose la cantidad de iteraciones que van a usar, para prompt

	while(respuesta==true)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		acumulador=acumulador+numeroIngresado;

		contador++;
		respuesta=confirm("Ingresa otro numero?");

	}

	promedio=acumulador/contador;

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;
}


/*respuesta=confirm("Ingresa otr numero? si/no").toLowerCase(); //le permite "aceptar" (true) o "cancelar" (false), parecido al "prompt"

entonces-->

while(respuesta==true)


---------------------------------------------------------------------------------------


 EJERCICIO DEL SABADO
function mostrar()
{
	var nombreIng;
	var alturaIng;
	var edadIng;
	var temperaturaIng;
	var generoIng;
	var notaIng;
	var promedioAltura;
	var cantPersonas;
	var cantAprobados;

	var acumulador;
	var contador;

	contador=0;
	acumulador=0;

	while(contador<5)
	{
		nombreIng=prompt("Ingrese el nombre de quien cursa.");

		//---------------------------------------------

		alturaIng=prompt("Ingrese su altura en centímetros");
		alturaIng=parseInt(alturaIng);
		
			while(alturaIng<0||alturaIng>250)
			{
				alturaIng=prompt("No es una altura válida, reingrese.");
				alturaIng=parseInt(alturaIng);
			}

		//---------------------------------------------

		edadIng=prompt("Ingrese su edad.");
		edadIng=parseInt(edadIng);

			while(isNaN(edadIng)==true||edadIng<17)
			{
				edadIng=prompt("No es una edad válida, reingrese.");
				edadIng=parseInt(edadIng);
			}

		//---------------------------------------------
		
		temperaturaIng=prompt("Ingrese su temperatura corporal en °C.");
		temperaturaIng=parseFloat(temperaturaIng);

			while(isNaN(temperaturaIng)==true)
			{
				temperaturaIng=prompt("No es una temperatura válida, reingrese.");
				temperaturaIng=parseFloat(temperaturaIng);
			}

		//---------------------------------------------
		
		generoIng=prompt("Ingrese su género. (f, m ó nb)");
		generoIng=generoIng.toLocaleLowerCase();

			while(generoIng!="f"&&generoIng!="m"&&generoIng!="nb")
			{
				generoIng=prompt("No es un género válido ¿?, reingrese.");
				generoIng=generoIng.toLocaleLowerCase();
			}

		//---------------------------------------------
		
		notaIng=prompt("Ingrese su nota.");

			while(notaIng<1||notaIng>10)
			{
				notaIng=prompt("No es una nota válida, reingrese.");
			}

		contador++;
	}



	
}


/*
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN*/