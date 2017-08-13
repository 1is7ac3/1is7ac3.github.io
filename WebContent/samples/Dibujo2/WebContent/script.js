var canvas1=document.getElementById('canvash1');
var lienzo=canvas1.getContext('2d');
var number1=document.getElementById('numberh1');
var number2=document.getElementById('numberh2');
var colors='#FFD000';
class canvas{
	constructor(width,height,wl,yi){
		this.width=width;
		this.height=height;
		this.wl=wl;
		this.yi=yi;
		}
	}
var canvasv=new canvas(0,0,1,0);
var p=new Processing(canvas1,sketch);
var tecla={
	UP:38,DOWN:40,LEFT:37,RIGHT:39
};
var xi=canvasv.height/2;
var yi=canvasv.width/2;
document.addEventListener('keydown',DibujoFlechas);
/*p.draw=function(){
	console.log(p.width);
};
*/

function intCanvas(){
	var style=window.getComputedStyle(canvas1);
	canvasv.width=parseInt(style.width.split('px')[0]);
	canvasv.height=parseInt(style.height.split('px')[0]);
}
function DibujarLinea(colors,xi,yi,xf,yf)
{
	console.log(xi,yi,p);
	lienzo.beginPath();
	lienzo.lineWidth=canvasv.wl;
	lienzo.strokeStyle=colors;
	lienzo.moveTo(xi,yi);
	lienzo.lineTo(xf,yf);
	lienzo.stroke();
	lienzo.closePath();
}
function DibujoFlechas(result)
{
	var mov=number1.value;
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
			DibujarLinea(colors,yi,xi,yf,xf);
			xi=xf;}
			break;
		case tecla.UP:
			if(xi-mov<0){
			alert("No puede salir del margen superior.");
			}else{
			xf=xi-mov;
			yf=yi;
			DibujarLinea(colors,yi,xi,yf,xf);
			xi=xf;}
			break;
		case tecla.LEFT:
			if(yi-mov<0){
			alert("No puede salir del margen izquierdo.");
			}else{
			xf=xi;
			yf=yi-mov;
			DibujarLinea(colors,yi,xi,yf,xf);
			yi=yf;}
			break;
		case tecla.RIGHT:
			if(yi+mov>canvas1.width){
			alert("No puede salir del margen derecho.");
			}else{
			yf=yi+mov;
			xf=xi;
			DibujarLinea(colors,yi,xi,yf,xf);
			yi=yf;}
			break;
	}
}
function sketch(c) {
	intCanvas();
	window.addEventListener("resize",intCanvas);
	c.size(canvasv.width,canvasv.height);
	c.background(255,255,255);
	c.draw=function(){
		if(number2.value<5||number2.value=="")
		{
			canvasv.wl=5;
		}else{canvasv.wl=parseInt(number2.value);}
		c.strokeWeight(canvasv.wl);
		c.mouseDragged=function(){
			DibujarLinea(colors,c.pmouseX,c.pmouseY,c.mouseX,c.mouseY);
		};
	};
}