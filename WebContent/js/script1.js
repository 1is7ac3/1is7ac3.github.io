$(window).on('load',function() {	
	$('.close').hide();
	$('#myModal').show('slow',function(){
		$(this).fadeOut(5000);
		modalImg.src=logo.src;
				
	});
	
});
$(document).ready(function(){
	$('#email').click(function(){
		$('#e').toggle('slow');
	});
	$('#whatsapp').click(function(){
			$('#w').toggle('slow');
	});
	
	$('#cajero').click(function(){
		$('.close').show();
	});
	$('.close').click(function(){
		$('#myModal').fadeOut(100);
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

