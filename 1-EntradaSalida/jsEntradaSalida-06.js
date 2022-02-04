/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;
	var resultado;

	numero1=document.getElementById("txtIdNumeroUno").value; //para extraer elementos por ID
	numero1=parseInt(numero1); //convierte "11" en un numero entero (11)

	numero2=document.getElementById("txtIdNumeroDos").value; //hay que pasar los datos enteros (parseInt), cambia el valor a entero/numero
	numero2=parseInt(numero2);

	resultado=numero1+numero2;
	
	alert("El numero es "+resultado);
}

/*
Si se ingresa una palabra en vez de número, sale "NaN" (Not a Number)
Si se ingresa "55hola", transforma solo la parte numérica y lo otro lo descarta, el parseInt, recorre la cadena
y convierte solo los números
Si se ingresa "hola55", vuelve a aparecer NaN, ya que empieza con una letra y no un número, no reconoce el número
y no puede hacerlo.
*/