var number1=document.getElementById('numberh1');
var button1=document.getElementById('buttonh1');
var p1=document.getElementById('ph2');
var cajero=0;
class billete{
	constructor(valor ,cantidad)
	{
		this.valor=valor
		this.cantidad=cantidad
	}
}
caja=[];
caja.push(new billete(500,10));
caja.push(new billete(100,10));
caja.push(new billete(50,15));
caja.push(new billete(20,10));
caja.push(new billete(10,50));
caja.push(new billete(5,10));
retirar=button1.addEventListener('click',retiroEfectivo);
function cajaDisponible(caja)
{
	var disponible=0;
	for (dispo of caja)
	{
		disponible=(dispo.valor*dispo.cantidad)+disponible;
	}
	return disponible;
}
function retiroEfectivo()
{
	cajero=cajaDisponible(caja);
	var b=parseInt(number1.value);
	if (b<10||b>cajero||b%5!=0)
	{
		p1.innerHTML='Cajero no pudo procesar retiro <br/>';
	}else {
		var i=0;
		while(b!=0)
		{
			billetes=Math.floor(b/caja[i].valor);
			if (billetes>caja[i].cantidad)
			{
				billetes=caja[i].cantidad;
			}else{
				billetes=billetes;		
			}
			b=b-(billetes*caja[i].valor);
			caja[i].cantidad=caja[i].cantidad-billetes;
			if (billetes>0){
				p1.innerHTML=p1.innerHTML+billetes+' Billetes de: '+caja[i].valor+'<br/>';
			}
			i++;		
		}
	cajero=cajaDisponible(caja);
	}
}
