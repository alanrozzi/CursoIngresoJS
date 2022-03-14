//Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
//"EXCELENTE" para notas igual a 9 o 10,
//"APROBÓ" para notas mayores a 4,
//"Vamos, la proxima se puede" para notas menores a 4

function mostrar()
{
	var nota;
	var maximo;
	var minimo;
	var mensaje;

	maximo=10;
	minimo=1;
	mensaje="Vamos, la proxima se puede";

	nota=Math.floor(Math.random()*(maximo+1-minimo))+minimo;

	if(nota>8)
	{
		mensaje="EXCELENTE";
	}
	else
	{
		if(nota>3)
		{
			mensaje="APROBÓ";
		}
	}

	alert(mensaje+": "+nota);
}

/*Código anterior, hecho solo

var nota;

	nota=Math.floor(Math.random() * 10) + 1;

	if(nota<4)
	{
		alert("Vamos, la proxima se puede");
	}
	else
	{
		if(nota>8)
		{
			alert("EXCELENTE");
		}
		else
		{
			alert("APROBÓ");
		}
	}

*/