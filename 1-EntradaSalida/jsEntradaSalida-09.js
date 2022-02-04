/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;

	sueldo=document.getElementById("txtIdSueldo").value;
	sueldo=parseInt(sueldo);

	resultado=sueldo+(sueldo/100*10); //10 = porcentaje a aumentar del sueldo, puede cambiarse.
	/*
		Otras maneras de obtener el mismo resultado:
		resultado=sueldo+(sueldo*0.1);
		resultado=sueldo*1.1;
	*/
	document.getElementById("txtIdResultado").value=resultado; //para mostrar en el cuadro de texto el sueldo aumentado
}