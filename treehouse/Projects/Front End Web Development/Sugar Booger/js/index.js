var names=["Ultimate Reese\'s Cupcake",
           "Peanut Butter Hi-Hat Cupcakes",
           "Chocolate Cookies and Cream Cupcakes",
           "Caramel Brownies",
           "Peanut Butter Cholcolate chip Brownies",
           "Sinckers Brownies",
           "Cookies and Cream Cookies",
           "Double Chocolate Cookies",
           "Mint Chip Oreos"];
function print(message) {
  document.write(message);
}
var html1 =`<li>
  <p>
  </p>
  <img id="myImg" src="img/The Ultimate Reese's Cupcake.jpg"`;
var html2 = `alt="">
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="modal-header">
        <span class="close">&times;</span>
        <h2>Modal Header</h2>
      </div>
      <div class="modal-body">
        <img src="img/The Ultmiate Reese's Cupcake.jpg"`;
var html3 = `alt="" id="img01">
        <p>Some text in the Modal Body</p>
        <p>Some other text...</p>
      </div>
      <div class="modal-footer">
        <h3>Modal Footer</h3>
      </div>
    </div>
  </div>
</li>`;
var html = html1+html2+html3;
print(html);
