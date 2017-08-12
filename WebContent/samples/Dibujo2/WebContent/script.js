function sketch(c) {
	intCanvas();
	c.background(255,255,255);
	window.addEventListener("resize",intCanvas);
	c.draw=function(){
		c.line(c.mouseX,c.mouseY,c.mouseX,c.mouseY);
	};

	function intCanvas(){
		var style=window.getComputedStyle(canvas1);
		canvasv.width=parseFloat(style.width.split('px')[0]);
		canvasv.height=parseFloat(style.height.split('px')[0]);
		c.size(canvasv.width,canvasv.height);
	}
}
var canvas1=document.getElementById('canvash1');
var lienzo=canvas1.getContext('2d');
var number1=document.getElementById('numberh1');
var number2=document.getElementById('numberh2');
var color='#FFD000';
class canvas{
	constructor(width,height,xi,yi){
		this.width=width;
		this.height=height;
		this.xi=xi;
		this.yi=yi;
		}
	}
var canvasv=new canvas(0,0,0,0);
var p=new Processing(canvas1,sketch);
var tecla={
	UP:38,DOWN:40,LEFT:37,RIGHT:39
};
var xi=canvasv.height/2;
var yi=canvasv.width/2;
document.addEventListener('keydown',DibujoFlechas);



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

function DibujoFlechas(result)
{
	var mov=number1.value;
	console.log(xi,yi);
	if(mov<1||mov>canvas1.width/2||mov=="")
	{
		mov=5;
	}else{mov=parseInt(number1.value);}
	switch(result.keyCode)
	{
		case tecla.DOWN:
			if(xi+mov>canvas1.height){
			alert("No puede salir del margen inferior.");
			}else{
			xf=xi+mov;
			yf=yi;
			DibujarLinea(color,yi,xi,yf,xf,number2.value);
			xi=xf;}
			break;
		case tecla.UP:
			if(xi-mov<0){
			alert("No puede salir del margen superior.");
			}else{
			xf=xi-mov;
			yf=yi;
			DibujarLinea(color,yi,xi,yf,xf,number2.value);
			xi=xf;}
			break;
		case tecla.LEFT:
			if(yi-mov<0){
			alert("No puede salir del margen izquierdo.");
			}else{
			xf=xi;
			yf=yi-mov;
			DibujarLinea(color,yi,xi,yf,xf,number2.value);
			yi=yf;}
			break;
		case tecla.RIGHT:
			if(yi+mov>canvas1.width){
			alert("No puede salir del margen derecho.");
			}else{
			yf=yi+mov;
			xf=xi;
			DibujarLinea(color,yi,xi,yf,xf,number2.value);
			yi=yf;}
			break;
	}
}
