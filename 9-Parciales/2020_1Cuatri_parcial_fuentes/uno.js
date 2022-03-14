/*
Debemos realizar la 
carga de 5(cinco) productos
de prevención de contagio,

de cada una debo 
obtener los siguientes datos:

- el tipo (validar "barbijo" , "jabón" o "alcohol") ,
- el precio (validar entre 100 y 300),
- la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
- la Marca
- el fabricante.


Se debe Informar al usuario lo siguiente:

a) Del más barato de los alcohol,
la cantidad de unidades
y el fabricante

b) Del tipo con mas unidades,
el promedio por compra

c) cuantas unidades de jabones hay en total

HECHO EN GRUPO

function mostrar()
{
  var productoIngresado;
  var precio;
  var unidades;
  var marca;
  var fabricante;
  var contador;
  var banderaAlcoholBarato;
  var precioAlcoholBarato;
  var unidadAlcoholBarato;
  var fabricanteAlcoholBarato;
  var contadorAlcohol;
  var acumuladorAlcohol;
  var acumuladorBarbijo;
  var acumuladorJabon;
  var contadorBarbijo;
  var contadorJabon;
  var promedio;
  var tipoMasVendido;

  banderaAlcoholBarato = 0;
  unidadAlcoholBarato = 0;
  contadorAlcohol = 0;
  acumuladorAlcohol = 0;
  acumuladorBarbijo = 0;
  acumuladorJabon = 0;
  contadorBarbijo=0;
  contadorJabon=0;

  contador = 0;

  while(contador < 5)
  {
  	productoIngresado = prompt("ingrese producto");

  	while(productoIngresado != "barbijo" && productoIngresado != "jabon" && productoIngresado != "alcohol")
  	{
  		productoIngresado = prompt("producto no valido");
  	}

  	precio = prompt("ingrese el valor del producto (entre 100 y 300)");
  	precio = parseInt(precio);

  	while(precio < 100 || precio > 300)
  	{
  		precio = prompt("Error, reingrese su valor");
  		precio = parseInt(precio);
  	}

  	unidades = prompt("ingrese cantidad de unidades");
  	unidades = parseInt(unidades);

  	while(unidades < 1 || unidades > 1000)
  	{
  		unidades = prompt(" error, reingrese cantidad de unidades");
  		unidades = parseInt(unidades);
  	}

  	marca = prompt("ingrese la marca del producto");
  	fabricante = prompt("ingrese el fabricante");

  	//a)

  	if(productoIngresado == "alcohol")
  	{
  		acumuladorAlcohol = acumuladorAlcohol + unidades;
  		contadorAlcohol++;

  		if(precio < precioAlcoholBarato || banderaAlcoholBarato == 0)
  		{
  			precioAlcoholBarato = precio;
  			unidadAlcoholBarato = unidades;
  			fabricanteAlcoholBarato = fabricante;
  			banderaAlcoholBarato = 1;

  		}

  	}
	else
	{
		if(productoIngresado=="barbijo")
		{
			acumuladorBarbijo+= unidades;
			contadorBarbijo++;
		}
		else
		{
			acumuladorJabon+=unidades;
			contadorJabon++;
		}

	}

  	contador++;

  }

  if(acumuladorAlcohol>acumuladorBarbijo && acumuladorAlcohol>acumuladorJabon)
  {
	tipoMasVendido = "alcohol";
	promedio = acumuladorAlcohol/contadorAlcohol;
  }
  else
  {
	  if(acumuladorBarbijo>acumuladorJabon)
	  {
		  tipoMasVendido= "barbijo";
		  promedio = acumuladorBarbijo/contadorBarbijo;
	  }
	  else
	  {
		  tipoMasVendido = "jabon";
		  promedio = acumuladorJabon/contadorJabon;
	  }
  }

  document.write("el alcohol mas barato sale " + precioAlcoholBarato + " y compro " + unidadAlcoholBarato + " unidades y el fabricante es " + fabricanteAlcoholBarato + "<br>");
  document.write("El promedio por compra de unidades es " + promedio + " del tipo con más unidades, que es " + tipoMasVendido + "<br>");
  document.write("La cantidad de unidades de jabon es "+ acumuladorJabon+"<br>");

}

*/

//RE HECHO POR MI
/*

Se debe Informar al usuario lo siguiente:

a) Del más barato de los alcohol,
la cantidad de unidades
y el fabricante

b) Del tipo con mas unidades,
el promedio por compra

c) cuantas unidades de jabones hay en total

*/

function mostrar()
{
	let i;
	let tipoProducto;
	let precioProducto;
	let unidades;
	let marca;
	let fabricante;
	let tipoProductoMasVendido;
	let promedio;

	let acumuladorAlcohol;
	let acumuladorBarbijo;
	let acumuladorJabon;
	let contadorAlcohol;
	let contadorBarbijos;
	let contadorJabon;

	let precioAlcoholBarato;
	let banderaAlcoholBarato;
	let unidadAlcoholBarato;
	let fabricanteAlcoholBarato;

	acumuladorAlcohol=0;
	acumuladorBarbijo=0;
	acumuladorJabon=0;
	contadorAlcohol=0;
	contadorBarbijos=0;
	contadorJabon=0;

	banderaAlcoholBarato=0;
	precioAlcoholBarato=0;
	unidadAlcoholBarato=0;
	tipoProductoMasVendido=0;
	promedio=0;
	fabricanteAlcoholBarato=0;

	i=0;

	while(i<5)
	{

		tipoProducto=prompt("Ingrese el tipo de producto (barbijo , jabón o alcohol)").toLowerCase();
		while(tipoProducto!="barbijo"&&tipoProducto!="jabon"&&tipoProducto!="alcohol")
  		{
  			tipoProducto=prompt("ERROR, reingrese producto.").toLowerCase();
  		}

  		precioProducto=prompt("Ingrese el precio del producto");
  		precioProducto=parseInt(precioProducto);
		while(precioProducto<100||precioProducto>300)
  		{
  			precioProducto=prompt("ERROR, Reingrese el precio del producto");
  			precioProducto=parseInt(precioProducto);
  		}

  		unidades=prompt("Ingrese la cantidad de unidades del producto");
  		unidades=parseInt(unidades);
		while(unidades<1||unidades>1000)
  		{
  			unidades=prompt("ERROR, Reingrese la cantidad de unidades del producto");
  			unidades=parseInt(unidades);
  		}

  		marca=prompt("Ingrese la marca del producto");
  		fabricante=prompt("Ingrese el fabricante del producto");

  		//a) Del más barato de los alcohol,la cantidad de unidades y el fabricante
  		if(tipoProducto=="alcohol")
  		{
  			acumuladorAlcohol+=unidades; //suma las unidades de alcohol que se ingresaron
  			contadorAlcohol++

  			if(precioProducto<precioAlcoholBarato||banderaAlcoholBarato==0) //para saber el alcohol más barato
  			{
  				precioAlcoholBarato=precioProducto;
  				unidadAlcoholBarato=unidades;
  				fabricanteAlcoholBarato=fabricante;

  				banderaAlcoholBarato=1;
  			}
  		}
  		else
  		{
  			if(tipoProducto=="barbijo")
  			{
  				acumuladorBarbijo+=unidades;
  				contadorBarbijos++;
  			}
  			else
  			{
  				acumuladorJabon+=unidades;
  				contadorJabon++
  			}
  		}
		i++;
	}

	if(acumuladorAlcohol>acumuladorBarbijo&&acumuladorAlcohol>acumuladorJabon)
	{
		tipoProductoMasVendido="alcohol";
		promedio=acumuladorAlcohol/contadorAlcohol;
	}
	else
	{
		if(acumuladorBarbijo>contadorJabon)
		{
			tipoProductoMasVendido="barbijo";
			promedio=acumuladorBarbijo/contadorBarbijos;
		}
		else
		{
			tipoProductoMasVendido="jabon";
			promedio=acumuladorJabon/contadorJabon;
		}
	}
/*

Se debe Informar al usuario lo siguiente:

a) Del más barato de los alcohol,
la cantidad de unidades
y el fabricante

b) Del tipo con mas unidades,
el promedio por compra

c) cuantas unidades de jabones hay en total

*/
	document.write("El alcohol más barato cuesta: "+precioAlcoholBarato+". La cantidad es: "+unidadAlcoholBarato+ " y su fabricante es: "+fabricanteAlcoholBarato+"<br>");
	document.write("El producto con más unidades es: "+tipoProductoMasVendido+". Y el promedio de compra es de: "+promedio+"<br>");
	document.write("La cantidad total de jabones es de: "+acumuladorJabon+"<br>");

}