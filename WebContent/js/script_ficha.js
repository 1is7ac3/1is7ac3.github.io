var modal = document.getElementById('myModal');
var text = document.getElementsByClassName("text")[0];
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];
var foto=document.getElementById("foto");
console.log(span);
console.log(text);
foto.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
text.onclick = function(){
    modal.style.display = "block";
    modalImg.src = "document/certificado_proccel.jpg";
    captionText.innerHTML = "Certificado Proccel";
}
span.onclick = function() { 
    modal.style.display = "none";
}

