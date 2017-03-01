var names=["The Ultimate Reese\'s Cupcake",
           "Peanut Butter Hi-Hat Cupcakes",
           "Chocolate Cookies and Cream Cupcakes",
           "Caramel Brownies",
           "Peanut Butter Chocolate chip Brownies",
           "Sinckers Brownies",
           "Cookies and Cream Cookies",
           "Double Chocolate Cookies",
           "Mint Chip Oreos"];
function print(message) {
  document.write(message);
}
var html0=`
<li>
  <p>`
var html1 =`
  </P>
    <img id="myImg" src="img/`;
var html2 = `" alt="">
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="modal-header">
        <span class="close">&times;</span>
        <h2>Modal Header</h2>
      </div>
      <div class="modal-body">
        <img src="img/`;
var html3 = `" alt="" id="img01">
        <p>Some text in the Modal Body</p>
        <p>Some other text...</p>
      </div>
      <div class="modal-footer">
        <h3>Modal Footer</h3>
      </div>
    </div>
  </div>
</li>`;
var html;
var i;
for(i=0;i<=8;i++){
  html = html0+names[i]+html1+names[i]+".jpg"+html2+names[i]+".jpg"+html3;
  print(html);
};
