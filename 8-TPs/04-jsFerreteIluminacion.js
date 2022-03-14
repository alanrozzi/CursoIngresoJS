/*4.    Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.  Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.  Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.  Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.  Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.  Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

//REHECHO CON SWITCH

function CalcularPrecio () 
{
    var precioLampara;
    var cantidadLamparas;
    var precioBruto;
    var marca;
    var descuento;
    var recargo;
    var impuestos;
    var precioFinal;

    precioLampara=35;
    recargo=10;
    descuento=50; //se usa en default

    cantidadLamparas=document.getElementById("txtIdCantidad").value;
    cantidadLamparas=parseInt(cantidadLamparas);

    marca=document.getElementById("Marca").value;

    precioBruto=cantidadLamparas*precioLampara;

    switch(cantidadLamparas)
    {
        case 1:
        case 2:
            descuento=0;
        break;

        case 3:
            switch(marca)
            {
                case "ArgentinaLuz":
                    descuento=15;
                break;

                case "FelipeLamparas":
                    descuento=10;
                break;

                default:
                    descuento=5;
                break;
            }
        break;

        case 4:
            switch(marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento=25
                break;

                default:
                    descuento=20;
                break;
            }
        break;

        case 5:
            switch(marca)
            {
                case "ArgentinaLuz":
                    descuento=40;
                break;

                default:
                    descuento=30;
                break;
            }
        break;
        //no hace falta default ya que está inicializado en las variables.
    }
    
    precioFinal=precioBruto-(precioBruto*descuento/100);

    if(precioFinal>120)
    {
        impuestos=(precioBruto*recargo/100);
        precioFinal=precioFinal+impuestos;

        texto="Usted pago: $"+impuestos+" de IIBB.";
        alert(texto);

        document.getElementById("txtIdprecioDescuento").value=precioFinal;
    }
    else
    {
        document.getElementById("txtIdprecioDescuento").value=precioFinal;
    }

/*    //Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos e informar del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

    precioFinal=precioBruto-(precioBruto*descuento/100);

    if(precioFinal>120)
    {
        precioFinal=precioFinal+(precioBruto*recargo/100);
    }
    */
}



















/*

REHECHO POR MI (IF/ELSE)

function CalcularPrecio ()
{
    var cantidadLamparas;
    var precioLamparas;
    var descuento;
    var precioConDescuento;
    var precioConImpuestos;
    var precioBruto;
    var marca;
    var ingresosBrutos;
    var impuestos;
    var texto;

    precioLamparas=35;
    descuento=0;
    ingresosBrutos=10;

    cantidadLamparas=document.getElementById("txtIdCantidad").value;
    cantidadLamparas=parseInt(cantidadLamparas);

    marca=document.getElementById("Marca").value;

    if(cantidadLamparas>=6)
    {
        descuento=50;
    }
    else
    {
        if(cantidadLamparas==5)
        {
            if(marca=="ArgentinaLuz")
            {
                descuento=40;
            }
            else
            {
                descuento=30;
            }
        }
        else
        {
            if(cantidadLamparas==4)
            {
                if(marca=="ArgentinaLuz"||marca=="FelipeLamparas")
                {
                    descuento=25;
                }
                else
                {
                    descuento=20;
                }
            }
            else
            {
                if(cantidadLamparas==3)
                {
                    if(marca=="ArgentinaLuz")
                    {
                        descuento=15;
                    }
                    else
                    {
                        if(marca=="FelipeLamparas")
                        {
                            descuento=10;
                        }
                        else
                        {
                            descuento=5;
                        }
                    }
                }
            }
        }
    }

//Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos e informar del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
    precioBruto=cantidadLamparas*precioLamparas;
    precioConDescuento=precioBruto-(precioBruto*descuento/100);

    if(precioConDescuento>=120)
    {
        impuestos=precioConDescuento*ingresosBrutos/100;
        precioConImpuestos=precioConDescuento+impuestos;

        texto="Usted pago: $"+impuestos+" de IIBB.";
        alert(texto);

        document.getElementById("txtIdprecioDescuento").value=precioConImpuestos; //informa precio Impuesto
    }
    else
    {
        document.getElementById("txtIdprecioDescuento").value=precioConDescuento; //informa precio Descuento
    }
}


/*

HECHO EN CLASE

function CalcularPrecio () 
{
    var cantidadDeLamparas;
    var precioPorLampara;
    var descuento;
    var marca;
    var resultado;
    var precioFinal;
    var ingresosBrutos;
    var impuesto;
    var precioConImp;
    var texto;

    precioPorLampara=35;
    descuento=0
    ingresosBrutos=10;

    cantidadDeLamparas=document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas=parseInt(cantidadDeLamparas);
    marca=document.getElementById("Marca").value;
    
    resultado=cantidadDeLamparas*precioPorLampara;


    if(cantidadDeLamparas>5)
    {
        descuento=50;
    }
    else 
    {
        if(cantidadDeLamparas==5)
        {
            if(marca=="ArgentinaLuz")
            {
                descuento=40;
            }
            else
            {
                descuento=30;
            }
        }
        else 
        {
            if(cantidadDeLamparas==4)
            {
                if(marca=="ArgentinaLuz"||marca=="FelipeLamparas")
                {
                    descuento=25;
                }
                else
                {
                    descuento=20;
                }
            }
            else
            {
                if(cantidadDeLamparas==3)
                {
                    if (marca=="ArgentinaLuz")
                    {
                        descuento=15;
                    }
                    else
                    {
                        if(cantidadDeLamparas=="FelipeLamparas")
                        {
                            descuento=10;
                        }
                        else
                        {
                            descuento=5;
                        }
                    }
                }
            }
        }
    }

    precioFinal=resultado-(resultado*descuento/100);

    if(precioFinal>119)
    {
        impuesto=precioFinal*ingresosBrutos/100;

        texto="Usted pago $"+impuesto+" de IIBB.";
        alert(texto);

        precioConImp=precioFinal+impuesto;
        document.getElementById("txtIdprecioDescuento").value=precioConImp; //informa el precio con impuesto
    }
    else
    {
        document.getElementById("txtIdprecioDescuento").value=precioFinal; //informa el precio sin impuesto si no supera los 120
    }
}

 */
