/*
Debemos lograr tomar un dato por 'ID' (valor o etiqueta que se identifica)
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
txtIdNombre*/
function mostrar()
{
	var nombreIngresado;
	
	//nombreIngresado=document.getElementById('txtIdNombre').value //funciona en todo navegador

	//si se saca el 'value' (valor especifico del textbox) por error muestra '[object HTMLInputElement]', por lo que 'value' muestra valores, cantidades de caracteres, color, fondo o fuente, por lo que no colocarlo muestra todo lo que representa el textbox
	
	nombreIngresado=txtIdNombre.value; //valido y mas corto para Chrome y Micro Edge.
	nombreIngresado=document.getElementById("txtIdNombre").value;


	alert(nombreIngresado);

}


