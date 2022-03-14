function mostrar()
{
	var edad;
	var nombre;
	var mensaje;
	var texto;
	var estadoCivil;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	
	estadoCivil=document.getElementById("estadoCivil").value;

	nombre=prompt("Ingrese su nombre.");

	if(edad<13)
	{
		mensaje="Feliz día. ";

		if(nombre=="Ricardo")
		{
			mensaje=mensaje+"Muy chiquito para ese nombre. ";
		}
	}
	else
	{
		if(edad<18)
		{
			mensaje="Usted es adolescente. ";

			if(edad==17)
			{
				mensaje=mensaje+"¡¡¡Último año!!! ";
			}
			
			if(nombre=="Violeta")
			{
				mensaje=mensaje+"¡¡Como un color!! ";
			}

			if(estadoCivil=="Divorciado")
			{
				mensaje=mensaje+"Toda una vida por delante.";
			}
		}
		else
		{
			mensaje="Tenés edad de laburar. ";

			if(edad==33)
			{
				mensaje=mensaje+"Como Cristo. ";
			}
			else
			{
				if(edad==88)
				{
					mensaje=mensaje+"Lindo número. ";
				}
				else
				{
					if(edad>59)
					{
						mensaje=mensaje+"A jubilarse. ";

						if(nombre=="Alfredo")
						{
							mensaje=mensaje+"Como el de QUEEN. ";
						}
					}
				}
			}
			
			if(estadoCivil=="Soltero")
			{
				mensaje=mensaje+"A salir. ";
			}
		}
		if(estadoCivil=="Casado")
		{
			mensaje=mensaje+"Casada quiere casa. ";
		}
	}

	if(edad%2==0)
	{
		texto=mensaje+"¡¡Sos par!!.";
    }
    else
    {
    	texto=mensaje;
    }
	
	alert(texto);
}


/*
{
	var edad;
	var estadoCivil;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	estadoCivil=document.getElementById("estadoCivil").value;

	if(estadoCivil!="Soltero"&&edad<18)
	{
		alert("Es muy pequeño para NO ser soltero")
	}

}//FIN DE LA FUNCIÓN
*/