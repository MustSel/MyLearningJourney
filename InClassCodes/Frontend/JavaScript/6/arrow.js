// ? ===============================================
// ?            FUNCTIONS
// ? ===============================================

console.log("*** ARROW ***");

//? Arrow func tanimlanması

const mesajVer = () => console.log("JS is a browser language");

//? İnvoke
mesajVer();

//? Örnek
const kareAl = (x) => x * x;
console.log(kareAl(3));

//? Örnek
// const yasHesapla = (yil) => new Date().getFullYear() - yil;

// const yil = Number(prompt("Doğum Yılınızı Giriniz:"));
// console.log(`Yaşınız ${yasHesapla(yil)}'dır`);

//? Örnek
const measjVer1 = () => {
  console.log("Süslü arrow");
};

measjVer1();

//? Örnek

const kareAl1 = (x) => {
  return x * x;
};

console.log(kareAl1(4));

//? Örnek

const tekVeyaCift = (num) => {
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

//* ORNEK: Bir fonksiyon içerisinde başka fonksiyonlar cagrilabilir.
//* (Hesap Makinesi)
//********************************************** */

const topla = (s1, s2) => s1 + s2;
const carp = (s1, s2) => s1 * s2;
const bol = (s1, s2) => s1 / s2;
const cikar = (s1, s2) => s1 - s2;

const hesapla = (num1, num2, op) => {
  let sonuc = "";
  switch (op) {
    case "+":
      sonuc = topla(num1, num2);
      break;
    case "-":
      sonuc = cikar(num1, num2);
      break;
    case "*":
      sonuc = carp(num1, num2);
      break;
    case "/":
      sonuc = bol(num1, num2);
      break;
    default:
      alert("Yanlış işlem");
      break;
  }
  return sonuc;
};

// const num1 = +prompt("1. sayıyı girin");
// const op = prompt("İşlemi giriniz: +,-,*,/");
// const num2 = +prompt("2. sayıyı girin");

// const sonuc = hesapla(num1, num2, op);
// console.log(`${num1} ${op} ${num2} = ${sonuc}`);


