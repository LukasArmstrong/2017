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
var gen1=`>
  <li>
    <p>`
var gen2=`
    </P>
    <img id="myImg" src="img/`;
var gen3= `" alt="">
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <div class="modal-header">
          <span class="close">&times;</span>
          <h2>Modal Header</h2>
        </div>
        <div class="modal-body">
          <img src="img/`;
var gen4= `" alt="" id="img01">
          <p>Some text in the Modal Body</p>
          <p>Some other text...</p>
        </div>
        <div class="modal-footer">
          <h3>Modal Footer</h3>
        </div>
      </div>
    </div>
  </li>
</div>
`;
var html;
var i;
var html2;
var html3;
var cakes=`<div class="cakes col">
  <h2>Cakes and Cupcakes</h2>
`
var brownies=`<div class="Brownies col">
  <h3>Brownies</h3>
`
var cookies=`<div class="Cookies col">
  <h4>Cookies</h4>
`
for(i=0;i<=2;i++){
  html1 = cakes+gen1+names[i]+gen2+names[i]+".jpg"+gen3+names[i]+".jpg"+gen4;
  print(html);
};
for(i=3;i<=5;i++){
  html2 = brownies+gen1+names[i]+gen2+names[i]+".jpg"+gen3+names[i]+".jpg"+gen4;
  print(html);
};
for(i=6;i<=8;i++){
  html3 = cookies+gen1+names[i]+gen2+names[i]+".jpg"+gen3+names[i]+".jpg"+gen4;
  print(html);
};
