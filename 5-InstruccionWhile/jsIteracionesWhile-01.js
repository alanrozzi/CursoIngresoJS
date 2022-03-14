/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/

function mostrar()
{
	let i; //variable de control
	i=1;

	while(i<11)
	{
		document.write(i+"<br>"); //<br>, da salto.

		i++; //aumenta en 1 hasta llegar a la condicion
	}
}









/*function mostrar()
{
	let i; //variable de control, se inicializa
	i=0; 

	while(i<10)
	{
		// i++; primero muestra el 1
		document.write(i+"<br>"); //	<br> salto de linea, sin eso muestra todo seguido.
		// i=i+1; //incremento de variable de control
		i++; // mismo de arriba, primero muestra el 0
	}
}

/*
--------------------

n1 = promtp(...)
n2 = promtp(...)
n3 = promtp(...)

suma = n1 + n2 + n3;

alert(suma)

---------------

	Las repeticiones se resuelve de otra manera, ya que si pide más números sería tedioso.

	Estructuras repetitivas: permiten repetir n cantidad de veces instrucciones, acota el código.

		while		parecido a if sintacticamente
		do while
		for

while(condicion)  
{
	sentencias		verdadero, se repite y vuelve a analizar la condicion.

	sentencia 		que cambie el valor de condición para terminar el bucle.
}
					falso

---------------

i=i+1 	modifica la variable

i+1 	solo le suma uno pero no modifica i
i++ 	(++) suma 1 a i

*/



while(isNaN(numero)==true)
{
	numero=prompt("Error! reingresa un numero");
	numero=parseInt(numero)
}






/*
pida 5 numeros
sumelos y calcule promedio
*/
/*
//inicializar contadores y acumuladores
//NO inicializar máximos y minimos

var numeroIngresado;
var contador; // cantidad de numeros para el while
var suma; //acumulador
var prmomedio;

contador=0 //se inicializa el contador para que comience a contar
suma=0

while(contador<5)
{
	console.log("Dentro del while");

	numeroIngresado=prompt("Ingrese num");
	numeroIngresado=parseInt(numeroIngresado);

	while(isNaN(numero)==true)
	{
		numeroIngresado=prompt("Ingrese num valido");
		numeroIngresado=parseInt(numeroIngresado);
	}

	contador++;
}

 */