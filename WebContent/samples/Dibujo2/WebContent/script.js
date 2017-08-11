var canvas1=document.getElementById('canvash1');
var lienzo=canvas1.getContext('2d');
var ancho=canvas1.width;
var alto=canvas1.height;
var number1=document.getElementById('numberh1');
var number2=document.getElementById('numberh2');
var yi=ancho/2;
var xi=alto/2;
var color='#FFD000';
var tecla={
	UP:38,DOWN:40,LEFT:37,RIGHT:39
};
document.addEventListener('keydown',DibujoFlechas);
canvas1.addEventListener('mousedown',DibujoMouse);
function DibujarLinea(color,xi,yi,xf,yf,number2)
{
	
	if(number2<1||number2=="")
	{
		anchoLinea=1;
	}else{var anchoLinea=parseInt(number2);}
	lienzo.beginPath();
	lienzo.lineWidth=anchoLinea;
	lienzo.strokeStyle=color;
	lienzo.moveTo(xi,yi);
	lienzo.lineTo(xf,yf);
	lienzo.stroke();
	lienzo.closePath();
}
function DibujoMouse(result)
{
	
	var rest=canvas1.getBoundingClientRect();
	x=result.x-rest.x;
	y=result.y-rest.y;
	console.log(x,y,rest);
	canvas1.addEventListener('mouseup',FinLinea);
	function FinLinea(result)
	{
		xf=result.x-rest.x;
		yf=result.y-rest.y;
		console.log(xf,yf,rest);
		DibujarLinea(color,x,y,xf,yf,number2.value);
	}
}
function DibujoFlechas(result)
{
	var mov=number1.value;
	if(mov<1||mov>ancho/2||mov=="")
	{
		mov=5;
	}else{mov=parseInt(number1.value);}
	switch(result.keyCode)
	{
		case tecla.DOWN:
			if(xi+mov>alto){
			alert("No puede salir del margen.");
			}else{
			xf=xi+mov;
			yf=yi;
			DibujarLinea(color,yi,xi,yf,xf,number2.value);
			xi=xf;}
			break;
		case tecla.UP:
			if(xi-mov<0){
			alert("No puede salir del margen.");
			}else{
			xf=xi-mov;
			yf=yi;
			DibujarLinea(color,yi,xi,yf,xf,number2.value);
			xi=xf;}
			break;
		case tecla.LEFT:
			if(yi-mov<0){
			alert("No puede salir del margen.");
			}else{
			xf=xi;
			yf=yi-mov;
			DibujarLinea(color,yi,xi,yf,xf,number2.value);
			yi=yf;}
			break;
		case tecla.RIGHT:
			if(yi+mov>ancho){
			alert("No puede salir del margen.");
			}else{
			yf=yi+mov;
			xf=xi;
			DibujarLinea(color,yi,xi,yf,xf,number2.value);
			yi=yf;}
			break;
	}
}