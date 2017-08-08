/**
 * 
 */
var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];
var email=document.getElementById('email');
var whatsapp=document.getElementById('whatsapp');

whatsapp.onmouseover=function()
{
	whatsapp.innerHTML='+58 416-2824229';
	whatsapp.style.background="#F1B702";
	whatsapp.style.cursor="text";
	whatsapp.style.borderRadius="5px";
	whatsapp.style.color="#000000";
}
whatsapp.onmouseout=function(){
	whatsapp.innerHTML='<img class="contacto" src="WebContent/icons/whatsapp.svg"/>';
	whatsapp.style.cursor="pointer";
	whatsapp.style.background="#F1B702";
}
email.onmouseover=function()
{
	email.style.background="#F1B702";
	email.style.color="#000000";
	email.style.cursor="text";
	email.style.borderRadius="5px";
	email.innerHTML='isaac.qa13@gmail.com';
}
email.onmouseout=function(){
	email.innerHTML='<img class="contacto" src="WebContent/icons/gmail.png"/>';
	email.style.background="#F1B702";
	email.style.cursor="pointer";
}
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
span.onclick = function() { 
    modal.style.display = "none";
}
