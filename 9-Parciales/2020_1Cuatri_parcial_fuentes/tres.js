/*
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan 

nombre , 
edad, 
sexo("f" o "m") y 
estado civil("soltero", "casado" o "viudo")y 
temperatura corporal.

a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

function mostrar()
{
	let respuesta;
	let nombre;
	let edad;
	let genero;
	let temperaturaCorporal;
	let estadoCivil;

	let temperaturaMinima;
	let temperaturaMaxima;
	let banderaTemperatura;

	let nombreTempMax;
	let contadorViudos;
	let contadorHombres;
	let contadorTerceraEdad;
	let contadorHombresSolteros;
	let acumuladorEdadHombresSolteros;
	let promedioEdad;

	temperaturaMinima=0;
	temperaturaMaxima=0;
	banderaTemperatura=0;
	promedioEdad=0;

	contadorViudos=0;
	contadorHombres=0;
	contadorTerceraEdad=0;
	contadorHombresSolteros=0;
	acumuladorEdadHombresSolteros=0;

	respuesta=true;

	while(respuesta==true)
	{
		nombre=prompt("Ingrese el nombre del pasajero");

		edad=prompt("Ingrese la edad del pasajero.");
		edad=parseInt(edad);
		while(edad<1)
		{
			edad=prompt("ERROR Reingrese la edad del pasajero.");
			edad=parseInt(edad);
		}

		//sexo("f" o "m")
		genero=prompt("Ingrese su género: f o m").toLowerCase();
		while(genero!="f"&&genero!="m")
		{
			genero=prompt("ERROR. Reingrese su género: f o m").toLowerCase();
		}

		//estado civil("soltero", "casado" o "viudo")
		estadoCivil=prompt("Ingrese el estado civil del pasajero, (soltero, casado o viudo)").toLowerCase();
		while(estadoCivil!="soltero"&&estadoCivil!="casado"&&estadoCivil!="viudo")
		{
			estadoCivil=prompt("Reingrese el estado civil (soltero, casado o viudo)").toLowerCase();
		}

		temperaturaCorporal=prompt("Ingrese la temperatura corporal del pasajero.");
		temperaturaCorporal=parseFloat(temperaturaCorporal);
		while(temperaturaCorporal<30&&temperaturaCorporal>45)
		{
			temperaturaCorporal=prompt("Reingrese la temperatura corporal.");
			temperaturaCorporal=parseFloat(temperaturaCorporal);
		}

		//a) El nombre de la persona con mas temperatura.
		if(temperaturaCorporal<temperaturaMinima||banderaTemperatura==0)
		{
			temperaturaMinima=temperaturaCorporal;
		}
		if(temperaturaCorporal>temperaturaMaxima||banderaTemperatura==0)
		{
			temperaturaMaxima=temperaturaCorporal;
			nombreTempMax=nombre;
			banderaTemperatura=1;
		}

		//b) Cuantos mayores de edad estan viudos
		if(estadoCivil=="viudo"&&edad>17)
		{
			contadorViudos++;
		}

		//c) La cantidad de hombres que hay solteros o viudos.

		if(genero=="m"&&(estadoCivil=="viudo"||estadoCivil=="soltero"))
		{
			contadorHombres++;
		}

		//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura

		if(temperaturaCorporal>37&&edad>60)
		{
			contadorTerceraEdad++;
		}
		//e) El promedio de edad entre los hombres solteros.

		if(genero=="m"&&estadoCivil=="soltero")
		{
			acumuladorEdadHombresSolteros=acumuladorEdadHombresSolteros+edad;
			contadorHombresSolteros++;

			promedioEdad=acumuladorEdadHombresSolteros/contadorHombresSolteros;
		}
		respuesta=confirm("Desea ingresar otro pasajero?");
	}
/*a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
	 document.write("El nombre de la persona con mas temperatura es: "+nombreTempMax+"<br>");
	 document.write("Cuantos mayores de edad estan viudos es: "+contadorViudos+"<br>");
	 document.write("La cantidad de hombres que hay solteros o viudos es: "+contadorHombres+"<br>");
	 document.write("cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura: "+contadorViudos+"<br>");
	 document.write("El promedio de edad entre los hombres solteros: "+contadorViudos+"<br>");
	 (cambiar xd)
}
