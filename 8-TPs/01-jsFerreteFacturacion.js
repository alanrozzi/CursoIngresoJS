/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos, sumarlos  y mostrar precio final (más IVA 21%).

txtIdPrecioUno
txtIdPrecioDos
txtIdPrecioTres
*/

function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var texto;

	precio1=document.getElementById("txtIdPrecioUno").value;
		precio1=parseFloat(precio1);

	precio2=document.getElementById("txtIdPrecioDos").value;
		precio2=parseFloat(precio2);

	precio3=document.getElementById("txtIdPrecioTres").value;
		precio3=parseFloat(precio3);

	suma=(precio1+precio2+precio3);
	texto="El precio total es de $"+suma+".";

	alert(texto);
}

function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var promedio;
	var texto;

	precio1=document.getElementById("txtIdPrecioUno").value;
		precio1=parseFloat(precio1);

	precio2=document.getElementById("txtIdPrecioDos").value;
		precio2=parseFloat(precio2);

	precio3=document.getElementById("txtIdPrecioTres").value;
		precio3=parseFloat(precio3);

	suma=(precio1+precio2+precio3);
	promedio=(suma/3);
	promedio=Math.round(promedio);
	
	texto="El promedio del precio total es de $"+promedio+".";
	alert(texto);
}

function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var total;
	var texto;
	var iva;

	precio1=document.getElementById("txtIdPrecioUno").value;
		precio1=parseInt(precio1);

	precio2=document.getElementById("txtIdPrecioDos").value;
		precio2=parseInt(precio2);

	precio3=document.getElementById("txtIdPrecioTres").value;
		precio3=parseInt(precio3);

	iva= 21/100;
	suma=(precio1+precio2+precio3);
	total=suma+(suma*iva);

	texto="El precio total junto con IVA es de $"+total+"."
	alert(texto);
}