/*
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la emperatura
en Centígrados con un mensaje concatenado.
(ej.: " 32 Fahrenheit son 0 centígrados").
*/
function FahrenheitCentigrados () 
{
	var fahren;
	var centi;
	var texto;

	fahren=document.getElementById("txtIdTemperatura").value;
		fahren=parseFloat(fahren);

	centi=(fahren-32)*(5/9);
	centi=Math.round(centi);

	texto=fahren+" Fahrenheit son "+centi+" centígrados.";
	alert(texto);

}

/*
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit
(ej.: "0  centígrados son 32 Fahrenheit ").
*/
function CentigradosFahrenheit () 
{
	var fahren;
	var centi;
	var texto;

	centi=document.getElementById("txtIdTemperatura").value;
		centi=parseFloat(centi); // parseFloat(), convierte cadena en número flotante (decimales).

	fahren=(centi*9/5)+(32);
	fahren=Math.round(fahren); // redondea según el decimal,
	
	texto=centi+" centígrados son "+fahren+" Fahrenheit.";
	alert(texto);
}