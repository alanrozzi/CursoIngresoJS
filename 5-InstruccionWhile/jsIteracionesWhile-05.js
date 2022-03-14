/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let genero;
	let generoValidado;

	genero=prompt("Ingrese su género: f, m o otro").toLowerCase();

	while(genero!="f"&&genero!="m"&&genero!="otro")
	{
		genero=prompt("ERROR. Reingrese su género: f, m u otro").toLowerCase();
	}

	switch(genero)
	{
		case "f":
			generoValidado="Femenino";
		break;

		case "m":
			generoValidado="Masculino";
		break;

		default:
			generoValidado="Otro";
		break;
	}

	txtIdSexo.value=generoValidado;
}




















































/*
	var genero;
	var generoValidado;

	genero = prompt("ingrese f ó m");

	while(genero!="f"&&genero!="m") // se tienen que cumplir las dos, no solo una
	{
		genero = prompt("No existís. Reingrasá.");
	}
	document.getElementById("txtIdSexo").value=genero;

	if(genero=="f")
	{
		generoValidado="Femenino";
	}
	else
	{
		generoValidado="Masculino";
	}

	document.getElementById("txtIdSexo").value=generoValidado;
	*/