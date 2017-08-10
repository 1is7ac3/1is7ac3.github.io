var modal=document.getElementById('myModal');
var text1=document.getElementById("text1");
var text2=document.getElementById('text2');
var text3=document.getElementById('text3');
var text4=document.getElementById('text4');
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
    modalImg.src="document/certificado_proccel.jpg";
    captionText.innerHTML="Certificado Proccel";
}
text2.onclick=function(){
	modal.style.display='block';
	modalImg.src='document/certificado_2.png';
	captionText.innerHTML='Certificado Activate';
}
text3.onclick=function(){
	modal.style.display='block';
	modalImg.src='document/certificado_3.png';
	captionText.innerHTML='Certificado Activate';
}
text4.onclick=function(){
	modal.style.display='block';
	modalImg.src='document/certificado_4.png';
	captionText.innerHTML='Certificado Platzi';
}
span.onclick = function() { 
    modal.style.display = "none";
}

