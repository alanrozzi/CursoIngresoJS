/*Ejercicio 2
Se debe llevar a cabo el registro de los ingresos a la guardia, los mismos se dividen en tres grupos:
clínica,  pediátrica y traumatológica . Se pide el ingreso del nombre del paciente, la edad y el tipo de
atención (anteriormente mencionado). Al momento de la recepción se solicita el tipo de prestación 
(prepaga - obra social - sin prestación). El valor de la consulta es de $1800, en caso de contar con 
prepaga la cobertura es del 100%, para obra social es del 80%.
se precisa saber:
La cantidad de pacientes de cada grupo.
Total de dinero que deberán reintegrar las obras sociales.
Total de dinero recaudado en total
Qué tipo de atención es la más requerida (clínica, pediatría o traumatológica).


*/
















































/*
Ejercicio 3
Una agencia de autos nos contrata para generarle un software que permita el ingreso de sus autos, sin limite de ingresos, al comenzar la carga de datos debemos pedir:
⦁	Marca.
⦁	El Peso en kg. del auto que ingresa (tiene que estar entre 917 y 3900).
⦁	El importe del auto en pesos (mayor a 600000).
⦁	Validar que tipo de auto es sedan o coupé.
Debemos informar:
⦁	Mostrar el promedio total del importe de todos los autos que ingresaron.
⦁	Mostrar La marca y el importe del auto más liviano que sea sedan.
⦁	El auto mas pesado que sea coupé

function mostrar()
{
	let respuesta;
	let marca;
	let peso;
	let importe;
	let tipo;
	let promedioTotalImporte;
	let marcaLiviano;
	let importeLiviano;
	let banderaLiviano;
	let autoMasLiviano;
	let autoMasPesado;
	let banderaPesado;

	let acumuladorImporte;
	let contadorAutos;

	contadorAutos=0;
	acumuladorImporte=0;

	banderaLiviano=0;
	banderaPesado=0;

	respuesta=true;

	while(respuesta==true)
	{
		marca=prompt("Ingrese la marca");

		peso=prompt("Ingrese el peso del auto");
		peso=parseFloat(peso);
		while(peso<917||peso>3900)
		{
			peso=prompt("Reingrese el peso del auto");
			peso=parseFloat(peso);
		}

		importe=prompt("Ingrese el importe en pesos");
		importe=parseInt(importe);
		while(importe<600000)
		{
			importe=prompt("Reingrese el importe en pesos");
			importe=parseInt(importe);
		}

		tipo=prompt("Ingrese el tipo, Sedan o Coupé").toLowerCase();
		while(tipo!="sedan"&&tipo!="coupé")
		{
			tipo=prompt("Reingrese el tipo, Sedan o Coupé").toLowerCase();
		}

		if(tipo=="sedan")
		{
			if(peso<autoMasLiviano||banderaLiviano==0)
			{
				autoMasLiviano=peso;
				marcaLiviano=marca;
				importeLiviano=importe;

				banderaLiviano=1;
			}
		}
		else
		{	
			if(peso>autoMasPesado||banderaPesado==0)
			{
				autoMasPesado=peso;

				banderaPesado=1;
			}
		}

		acumuladorImporte+=importe;
		contadorAutos++;

		respuesta=confirm("Ingresa otro auto?");
	}

	promedioTotalImporte=acumuladorImporte/contadorAutos;

	document.write("El promedio total es: "+promedioTotalImporte+"<br>");
	document.write("El Sedán más liviano es: "+marcaLiviano+" y el importe "+importeLiviano+"<br>");
	document.write("El Sedán mas pesado tiene: "+autoMasPesado+" kg<br>");
}























/*
Rozzi Ortuvia Martina Micaela (Alan David) DIV Z
Ejercicio E/S 01
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	var prod1;
	var prod2;
	var prod3;

	var precio1;
	var precio2;
	var precio3;
	
	var precioBruto;

	var promedio;

	var iva;
	var precioIva

	var descuento;
	var precioDesc;
	var texto;

	prod1=prompt("Ingrese el nombre del primer producto");
	precio1=prompt("Ingrese el valor del primer producto");
	precio1=parseFloat(precio1);
	
	prod2=prompt("Ingrese el nombre del segundo producto");
	precio2=prompt("Ingrese el valor del segundo producto");
	precio2=parseFloat(precio2);

	prod3=prompt("Ingrese el nombre del tercer producto");
	precio3=prompt("Ingrese el valor del tercer producto");
	precio3=parseFloat(precio3);

	descuento=prompt("Ingrese el valor del descuento a aplicar");
	descuento=parseInt(descuento);

	precioBruto=(precio1+precio2+precio3);

	promedio=(precioBruto/3);
	promedio=Math.round(promedio);

	iva=21/100;
	precioIva=precioBruto+(precioBruto*iva);

	descuento=descuento/100;
	precioDesc=precioBruto-(precioBruto*descuento);
	

	texto="El precio de "+prod1+" es "+precio1+", el de "+prod2+" es "+precio2+" y el de "+prod3+" es "+precio3+". El precio bruto total es de: "+precioBruto+". El promedio de estos productos es de: "+promedio+". El precio con 21% IVA es de "+precioIva+". ";
	alert(texto);
}