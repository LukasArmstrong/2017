var names=["The Ultimate Reese\'s Cupcake",
           "Peanut Butter Hi-Hat Cupcakes",
           "Chocolate Cookies and Cream Cupcakes",
           "Caramel Brownies",
           "Peanut Butter Chocolate Chip Brownies",
           "Sinckers Brownies",
           "Cookies and Cream Cookies",
           "Double Chocolate Cookies",
           "Mint Chip Oreos"];
var headers=["How did I choose this?",
            "",
            "",
            "What Challenges did I face?/What did I learn?",
            "",
            "",
            "How am I going to apply this?"];
var description=["kinda already in progress",
                 "",
                 "",
                `-HTML, CSS, JS are unforgiving
-Design is hard
-Don't be afraid to ask for help
-Don't get ahead of yourself`,
                "",
                "",
                `-Future Web Development
-Future coding experience`];
function print(message) {
  document.write(message);
}
var gen1=`
  <li>
    <p>`
var gen2=`
    </P>
    <img id="myImg`
var test=`" src="img/`;
var gen3= `" alt="">
    <div id="myModal" class="modal">
      <!-- Modal content -->
        <div class="modal-content">
          <div class="modal-header">
            <span class="close">&times;</span>
            <h4>`;
var gen4=`</h4>
          </div>
          <div class="modal-body">
            <img src="img/`;
var gen5= `" alt="" id="img01">
            <h3>`;
var gen6=`</h3>
          </div>
        </div>
      </li>
`;
var div= '</div>';
var html;
var i;
var html2;
var html3;
var cakes=`<div class="cakes col">
  <h2 class="H2">Cakes and Cupcakes</h2>
`
var brownies=`<div class="Brownies col">
  <h2 class="H2">Brownies</h2>
`
var cookies=`<div class="Cookies col">
  <h2 class="H2">Cookies</h2>
`;
print(cakes);
for(i=0;i<3;i++){
  html1 = gen1+names[i]+gen2+i+test+names[i]+".jpg"+gen3+headers[i]+gen4+names[i]+".jpg"+gen5+description[i]+gen6;
  print(html1);
};
print(div);
print(brownies);
for(i=3;i<6;i++){
  html2 = gen1+names[i]+gen2+i+test+names[i]+".jpg"+gen3+headers[i]+gen4+names[i]+".jpg"+gen5+description[i]+gen6;
  print(html2);
};
print(div);
print(cookies);``
for(i=6;i<9;i++){
  html3 = gen1+names[i]+gen2+i+test+names[i]+".jpg"+gen3+headers[i]+gen4+names[i]+".jpg"+gen5+description[i]+gen6;
  print(html3);
};
print(div);
