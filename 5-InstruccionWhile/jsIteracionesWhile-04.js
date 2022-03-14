/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;

	numero=prompt("Ingrese un número entre 0 y 9.");
	numero=parseInt(numero);

	while(isNaN(numero)==true||numero<0||numero>9)
	{
		numero=prompt("Error! reingresa un numero entre 0 y 9");
		numero=parseInt(numero);
	}

	txtIdNumero.value=numero;
	
}//FIN DE LA FUNCIÓN




































/*
var numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	numeroIngresado=parseInt(numeroIngresado);

	while(numeroIngresado<0||numeroIngresado>9)
	{
		numeroIngresado = prompt("Reingrese su número.");
		numeroIngresado=parseInt(numeroIngresado);
	}

	document.getElementById("txtIdNumero").value=numeroIngresado;

*/