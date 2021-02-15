document.querySelector('.btn').onclick = clicked;
var righta = 0;
var falsea = 0;
document.querySelector('.right').innerHTML = righta;
document.querySelector('.wrong').innerHTML = falsea;

function clicked(){
  var name = prompt("Ismingiz Nima ?");
  var age = prompt("Salom " + name + " Yoshingiz Nechida ?");
  var year = prompt(2021 - age + " inchi yilmisiz ?");
  var q1 = prompt("5 + 5 = ?");
  if (q1 == 10) {
    alert("To'g'ri Javob Berdingiz, Davom Eting!");
    righta++;
    document.querySelector(".right").innerHTML ++;
  } else {
    alert("Noto'g'ri Javob Berdingiz");
    falsea++;
    document.querySelector(".wrong").innerHTML ++;
  }

  var q2 = prompt("10 - 5 = ?");
  if (q2 == 5) {
    alert("To'g'ri Javob Berdingiz, Davom Eting!");
    righta++;
    document.querySelector(".right").innerHTML ++;
  } else {
    alert("Noto'g'ri Javob Berdingiz");
    falsea++;
    document.querySelector(".wrong").innerHTML ++;
  }

  var q3 = prompt("5 * 5 = ?");
  if (q3 == 25) {
    alert("To'g'ri Javob Berdingiz, Davom Eting!");
    righta++;
    document.querySelector(".right").innerHTML ++;
  } else {
    alert("Noto'g'ri Javob Berdingiz");
    falsea++;
    document.querySelector(".wrong").innerHTML ++;
  }

  var q4 = prompt("10 / 2 = ?");
  if (q4 == 5) {
    alert("To'g'ri Javob Berdingiz, Davom Eting!");
    righta++;
    document.querySelector(".right").innerHTML ++;
  } else {
    alert("Noto'g'ri Javob Berdingiz");
    falsea++;
    document.querySelector(".wrong").innerHTML ++;
  }

  alert(
    "To'g'ri Javoblar: " +
      righta +
      "ta;" +
      " Noto'g'ri Javoblar: " +
      falsea +
      "ta;"
  );
}
