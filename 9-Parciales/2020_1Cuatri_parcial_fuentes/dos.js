/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera: X
Tipo validad("arena";"cal";"cemento") X
Cantidad de bolsas, X
Precio por bolsa (más de cero ), X

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar. 
a)
El importe total a pagar , bruto sin descuento y...
b)
el importe total a pagar con descuento(solo si corresponde)
d)
Informar el tipo con mas cantidad de bolsas.    
f)
El tipo mas caro
*/

function mostrar()
{
    let respuesta;

    let producto;
    let cantidadBolsas;
    let precioProducto;
    let precioProductoBruto;

    let importeTotal;

    importeTotal=0

    respuesta="si"

    while(respuesta=="si")
    {
        producto=prompt("Ingrese el producto de la bolsa. (cal, cemento o arena)").toLowerCase();
        while(producto!="cal"&&producto!="arena"&&producto!="cemento")
        {
            producto=prompt("ERROR Reingrese el producto de la bolsa. (cal, cemento o arena)");
        }

        cantidadBolsas=prompt("Ingrese la cantidad de bolsas.");
        cantidadBolsas=parseInt(cantidadBolsas);
        while(cantidadBolsas<0)
        {
            cantidadBolsas=prompt("ERROR Reingrese la cantidad.");
            cantidadBolsas=parseInt(cantidadBolsas);
        }

        precioProducto=prompt("Ingrese el precio de la bolsa.");
        precioProducto=parseInt(precioProducto);
        while(precioProducto<1)
        {
            precioProducto=prompt("ERROR Reingrese el precio de la bolsa.");
            precioProducto=parseInt(precioProducto);
        }

        //El importe total a pagar , bruto sin descuento

        precioBruto=(precioProducto*cantidadBolsas);
        importeTotal=importeTotal+precioBruto

        if(producto)



        respuesta=confirm("Ingresa otro producto?");
    }
}







































/*

function mostrar()
{


    while(respuesta == true)    // == true no es necesario,
    {


        switch(productoIngresado)
          {
              case "cal":
                bolsasDeCal = bolsasDeCal + cantidadDeBolsas;
                precioCal = precioPorBolsa * bolsasDeCal;
              break;
              case "cemento":
                bolsasDeCemento = bolsasDeCemento + cantidadDeBolsas;
                precioCemento = precioPorBolsa * bolsasDeCemento;
              break; 
              case "arena":
                bolsasDeArena = bolsasDeArena + cantidadDeBolsas;
                precioArena = precioPorBolsa * bolsasDeArena;
              break;
          }
        
         
        acumuladorDeBolsas = acumuladorDeBolsas + cantidadDeBolsas;
        
        respuesta = confirm("¿Desea Ingresar otro producto?" );

    }

    if(acumuladorDeBolsas > 30)
    {
        descuento = 0.75;
 
    }
    else
    {
      if(cantidadDeBolsas > 10)
      {
        descuento = 0.85;
      }
    }
    
    if(bolsasDeArena > bolsasDeCal && bolsasDeArena > bolsasDeCemento)
    {
      tipoMayorCantidadBolsas = "Arena";     
    }
    else
    {
        if(bolsasDeCal > bolsasDeCemento)
        {
          tipoMayorCantidadBolsas = "Cal";
        }
        else
        {
          tipoMayorCantidadBolsas = "cemento";
        }
    }

    if(precioArena > precioCal && precioArena > precioCemento)
    {
      tipoMayorPrecio = "Arena";
    }
    else
    {
      if(precioCal > precioCemento)
      {
      tipoMayorPrecio = "Cal";
      }
      else
      {
        tipoMayorPrecio = "Cemento";
      }
    }
    

    totalDescontado = totalBruto * descuento;

    document.write("Importe bruto total: " + totalBruto + "$" + "<br>");
    if(descuento != 1)
    {
      document.write("El total con descuento es de: " + totalDescontado + "$" + "<br>");
    }
    document.write("El tipo con mayor cantidad de bolsas es: " + tipoMayorCantidadBolsas + "<br>");
    document.write("El tipo de bolsa mas caro es: " + tipoMayorPrecio + "$" + "<br>");
        

}
*/