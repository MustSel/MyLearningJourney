// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("*** 2-EXPRESSION ****");

//+ ÖRNEK1:

//******************************************************* */

const tekVeyaCift = function (num) {
  let sonuc = "";
  if (num % 2 === 0) {
    sonuc = `${num} çifttir`;
  } else {
    sonuc = `${num} tektir.`;
  }
  return sonuc;
};

const bilgi = tekVeyaCift(5);
console.log(bilgi);
console.log(tekVeyaCift(4));

//* ÖRNEK2:
//********************************************** */

function usAlma(taban, us) {
  return taban ** us;
}

const usAl = function (taban, us) {
  return taban ** us;
};

const us = usAl(3, 4);
console.log(us);

//*  ÖRNEK3:
//****************************** */

let daireAlaniHesapla = function (r) {
  return Math.PI * r * r;
};

const r = Number(prompt("r:"));

const sonuc = daireAlaniHesapla(r);
console.log(` Dairenin alanı: ${sonuc}`);
