var modal=document.getElementById('myModal');
var text1=document.getElementById("text1");
var text2=document.getElementById('text2');
var text3=document.getElementById('text3');
var text4=document.getElementById('text4');
var text5=document.getElementById('text5');
var text6=document.getElementById('text6');
var text7=document.getElementById('text7');
var text8=document.getElementById('text8');
var text9=document.getElementById('text9');
var text10=document.getElementById('text10');
var text11=document.getElementById('text11');
var text12=document.getElementById('text12');
var text13=document.getElementById('text13');
var modalImg=document.getElementById("img01");
var captionText=document.getElementById("caption");
var span=document.getElementsByClassName("close")[0];
var foto=document.getElementById("foto");

foto.onclick=function(){
    modal.style.display="block";
    modalImg.src=this.src;
    captionText.innerHTML=this.alt;
}
text1.onclick=function(){
    modal.style.display="block";
    modalImg.src="images/certificates/certificado_proccel.jpg";
    captionText.innerHTML="Certificado Proccel";
}
text2.onclick=function(){
	modal.style.display='block';
	modalImg.src='images/certificates/certificado_2.jpg';
	captionText.innerHTML='Certificado Activate';
}
text3.onclick=function(){
	modal.style.display='block';
	modalImg.src='images/certificates/certificado_3.jpg';
	captionText.innerHTML='Certificado Activate';
}
text4.onclick=function(){
	modal.style.display='block';
	modalImg.src='images/certificates/diploma-programacion-basica.jpg';
	captionText.innerHTML='Certificado Platzi';
}
text5.onclick=function(){
	modal.style.display='block';
	modalImg.src='images/certificates/diploma-carrera-seguridad-informatica.jpg';
	captionText.innerHTML='Certificado Platzi Seguridad Informatica';
}
text6.onclick=function(){
	modal.style.display='block';
	modalImg.src='images/certificates/diploma-python.jpg';
	captionText.innerHTML='Certificado Platzi Python';
}
text7.onclick=function(){
	modal.style.display='block';
	modalImg.src='images/certificates/diploma-algoritmos.jpg';
	captionText.innerHTML='Certificado Platzi Algoritmos';
}
text8.onclick=function(){
	modal.style.display='block';
	modalImg.src='images/certificates/diploma-git-github.jpg';
	captionText.innerHTML='Certificado Platzi Git Github';
}
text9.onclick=function(){
	modal.style.display='block';
	modalImg.src='images/certificates/diploma-linux.jpg';
	captionText.innerHTML='Certificado Platzi Servidores';
}
text10.onclick=function(){
	modal.style.display='block';
	modalImg.src='images/certificates/diploma-pentesting.jpg';
	captionText.innerHTML='Certificado Platzi Pentesting';
}
text11.onclick=function(){
	modal.style.display='block';
	modalImg.src='images/certificates/diploma-linux-2015.jpg';
	captionText.innerHTML='Certificado Platzi Linux';
}
text12.onclick=function(){
	modal.style.display='block';
	modalImg.src='images/certificates/diploma-bitcoin.jpg';
	captionText.innerHTML='Certificado Platzi Bitcoin';
}
text13.onclick=function(){
	modal.style.display='block';
	modalImg.src='images/certificates/diploma-ingenieria.jpg';
	captionText.innerHTML='Certificado Platzi Ingenieria';
}
span.onclick = function() { 
    modal.style.display = "none";
}

