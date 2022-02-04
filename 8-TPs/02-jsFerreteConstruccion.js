/*2. Para el departamento de Construcción:
A. mostrar la cantidad de alambre a comprar si se ingresara el largo
y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.

IDs:
txtIdLargo
txtIdAncho
txtIdRadio
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;
	var alambres;
	var texto;
	var total;

	largo=document.getElementById("txtIdLargo").value;
		largo=parseFloat(largo); //toma los decimales
	
	ancho=document.getElementById("txtIdAncho").value;
		ancho=parseFloat(ancho);

	perimetro=(2*largo)+(2*ancho);
	alambres=3;
	total=perimetro*alambres;

	texto="La cantidad de alambre necesario es de "+total+" metros.";
	alert(texto);
}


/*B. mostrar la cantidad de alambre a comprar si se ingresara el radio de
un terreno circular y se debe alambra con tres hilos de alambre.*/
function Circulo () 
{
	var radio;
	var perimetro;
	var alambres;
	var texto;
	var total;
	
	radio=document.getElementById("txtIdRadio").value;
		radio=parseFloat(radio);

	perimetro=Math.PI*2*radio; //Math.PI = número PI, sin redondear
	perimetro=Math.round(perimetro); //Math.round = redondea
	alambres=3;
	total=perimetro*alambres;

	texto="La cantidad de alambre necesario es de "+total+" metros.";	
	alert(texto);
}


/*C. Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento
y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las
medidas que ingresan del terreno rectangular.*/
function Materiales () 
{
	var largo;
	var ancho;
	var bolsaCal;
	var bolsaCemento;
	var calTot;
	var cementoTot;
	var area;
	var texto;

	largo=document.getElementById("txtIdLargo").value;
		largo=parseFloat(largo);
	
	ancho=document.getElementById("txtIdAncho").value;
		ancho=parseFloat(ancho);
	
	bolsaCal=3;
	bolsaCemento=2;
	
	area=(largo*ancho);
	area=Math.round(area);
	
	calTot=(area*bolsaCal);
	cementoTot=(area*bolsaCemento);
	
	texto="Para un contrapiso de "+largo+"m x "+ancho+"m ("+area+" m²), se necesitan "+calTot+" bolsas de cal y "+cementoTot+" bolsas de cemento.";
	alert(texto);
}