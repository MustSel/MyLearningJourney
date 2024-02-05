function foto() {
  var wonFoto = document.getElementById("won");
  wonFoto.style.display = "block";
}
function yazi() {
  var wonYazi = document.getElementById("wonp");
  wonYazi.style.display = "block";
  let sayi = `Sayı:${random}`
  document.getElementById("sayi").innerHTML = sayi
}

function foto2() {
  var lostFoto = document.getElementById("lost");
  lostFoto.style.display = "block";
}
function yazi2() {
  var lostYazi = document.getElementById("lostp");
  lostYazi.style.display = "block";
  let sayi = `Sayı:${random}`
  document.getElementById("sayi").innerHTML = sayi
}

let random = Math.floor(Math.random() * 100);
console.log(random);
alert("Bul Beni Oyununa Hoşgeldin!");
let hak = +prompt("Kaç kere denemek istersin?");

for (i = 0; i < hak; hak--) {
  let kulSayi = +prompt("0-100 arası bir sayı gir bakalım!");
  if (kulSayi === random) {
    // alert("Vay canına! Beni buldun Tebrikler!");
    yazi();
    foto();
    break;
  } else if (hak === 1) {
    // alert("Olmadı beceremedin");
    yazi2();
    foto2();
    break;
  } else {
    kulSayi < random
      ? alert(
          `Olmadı be! Daha büyük bir sayı girmelisin. ${hak - 1} hakkın kaldı.`
        )
      : alert(
          `Olmadı be! Daha küçük bir sayı girmelisin. ${hak - 1} hakkın kaldı.`
        );
    console.log(hak);
  }
}
