$(window).on('load',function() {
	$('#myModal').show(function(){
		
		modalImg.src=logo.src;
		
	});
	
});
$(document).ready(function(){
	$('#myModal').hide();
	$('#logo').hide();
	$('#email').click(function(){
		$('#e').toggle('slow');
	});
	$('#whatsapp').click(function(){
			$('#w').toggle('slow');
	});
});
var modal=document.getElementById('myModal');
var logo=document.getElementById('logo');
var img1=document.getElementById('cajero');
var img2=document.getElementById('dibujo');
var modalImg=document.getElementById("img01");
var captionText=document.getElementById("caption");
var span=document.getElementsByClassName("close")[0];

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
