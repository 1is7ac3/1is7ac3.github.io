$(document).ready(function(){
	$('#email').click(function(){
		$(this).effect('explode');
		$(this).after(contactos[0].number);
	});
});
var modal=document.getElementById('myModal');
var img1=document.getElementById('cajero');
var img2=document.getElementById('dibujo');
var modalImg=document.getElementById("img01");
var captionText=document.getElementById("caption");
var span=document.getElementsByClassName("close")[0];

class contacto{
	constructor(name,number,icon){
		this.name=name;
		this.number=number;
		this.icon=icon;
	}
}
var contactos=[];
var email=document.getElementById('email');
var whatsapp=document.getElementById('whatsapp');
contactos.push(new contacto(email,'isaac.qa13@gmail.com',email.innerHTML));
contactos.push(new contacto(whatsapp,'+58 416-2824229',whatsapp.innerHTML));
//email.onmouseover=function(){show(contactos[0].number,contactos[0].name);}
//email.onmouseout=function(){hide(contactos[0].name,contactos[0].icon);}
whatsapp.onmouseover=function(){show(contactos[1].number,contactos[1].name);}
whatsapp.onmouseout=function(){hide(contactos[1].name,contactos[1].icon);}

function show(number,name){
	name.innerHTML=number;
	name.style.cursor="text";
}
function hide(name,icon){
	name.innerHTML=icon;
}

img1.onclick=function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img2.onclick=function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
span.onclick=function() { 
    modal.style.display = "none";
}
