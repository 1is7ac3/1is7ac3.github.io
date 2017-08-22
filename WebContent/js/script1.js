$(window).on('load',function() {	
	$('.close').hide();
	$('#myModal').show('fast',function(){
		$(this).fadeOut(5000);
		$('#img01').attr('src',$('#logo').attr('src'));
	});
});
$(document).ready(function(){
	console.log($('#logo').attr('src'));
	$('#email').click(function(){
		$('#e').toggle('slow');
	});
	$('#whatsapp').click(function(){
			$('#w').toggle('slow');
	});
	
	$('#cajero').click(function(){
		$('.close').show();
		$('#myModal').show('slow');
		$('#img01').attr('src',this.src);
	});
	$('#dibujo').click(function(){
		$('.close').show();
		$('#myModal').show('slow');
		$('#img01').attr('src',this.src);
	});
	$('.close').click(function(){
		$('#myModal').fadeOut(1000);
	});
});


