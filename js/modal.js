// Get the modal
var modal = document.getElementById('myModal');


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function print(message) {
  document.write(message);
}
var i
var html1 = '<script>var img'
var html2 = ` = document.getElementById('myImg`
var html3 = `');
img`
var html4 = `.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}</script>`
for(i=0;i<9;i++){
  print(html1+i+html2+i+html3+i+html4);
}
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
