/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var resto;

	dividendo=document.getElementById("txtIdNumeroDividendo").value; 
	dividendo=parseInt(dividendo);

	divisor=document.getElementById("txtIdNumeroDivisor").value;
	divisor=parseInt(divisor);

	resto=dividendo%divisor;
	
	alert("El resto es "+resto);
}

/*
120 % 2 -> da el resto de la división, que es 0
117 $ 16 -> resto 5, no es lo mismo que el cociente (resultado de la división)
con ctrl+D, se buscan todas las mismas variables*/