/*
Debemos lograr tomar un nombre con 'prompt', permite un cuadro de texto para escribir, devuelve un valor.
Se debe crear una variable para guardar el dato de 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado; //lowerCamelCase
	
	nombreIngresado=prompt("Ingrese su nombre");

	alert(nombreIngresado);
}

