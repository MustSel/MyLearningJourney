//! Ornek1
console.log("*** CONDITIONS ***");
// const num1 = Number(prompt("Bir sayı giriniz:"));
const num1 = 5;
// const num2 = 5;
// console.log(num1, typeof num1);
// console.log("Toplam:", num1 + num2);

if (num1 < 0) {
  console.log("Girilen sayı negatiftir!");
} else if (num1 > 0) {
  console.log("Girilen sayı pozitiftir.");
} else {
  console.log("Girilen sayı 0'a eşittir");
}

//! Ornek: 3 sayının en büyüğü

const sayi1 = 8;
const sayi2 = 9;
const sayi3 = 6;

//?1 yontem built-in fonksiyon yardımıyla
// const enBuyuk = Math.max(sayi1, sayi2, sayi3)
// console.log("En buyuk:", enBuyuk);

//? 2. Yontem (nested if)

// if (sayi1 > sayi2) {
//     if (sayi1 > sayi3) {
//         console.log("Enbuyuk:", sayi1);
//     }
// }
// if (sayi2 > sayi1) {
//     if (sayi2 > sayi3) {
//         console.log("Enbuyuk:", sayi2);
//     }
// }
// if (sayi3 > sayi1) {
//     if (sayi3 > sayi2) {
//         console.log("Enbuyuk:", sayi3);
//     }
// }

//? 3. Yontem (logic operatörler)

if (sayi1 > sayi2 && sayi1 > sayi3) {
  console.log("Enbuyuk:", sayi1);
} else if (sayi2 > sayi1 && sayi2 > sayi3) {
  console.log("Enbuyuk:", sayi2);
} else if (sayi3 > sayi1 && sayi3 > sayi2) {
  console.log("Enbuyuk:", sayi3);
} /* else { */
//     console.log("yanlış sayı formatı");
// }

//?4. Yontem
let enBuyuk = sayi1;

if (sayi2 > enBuyuk) {
  enBuyuk = sayi2;
}
if (sayi3 > enBuyuk) {
  enBuyuk = sayi3;
}
console.log("En buyuk:", enBuyuk);

const calismaSuresi = 10;
let maas = 30000;

calismaSuresi >= 10 ? (maas = maas * 1.5) : "";

console.log(maas);

const g = 5;
const h = 10;
if ((g + h) % g && h < 15) {
  console.log("ikiside doğru");
} else {
  console.log("en az biri yanlış");
}

// Quiz
// if ((21 % 6 && 14 % 2) || !false) {
//   console.log("hello");
// } else if ("3" + 4 > 33) {
//   console.log("ch16");
// } else {
//   console.log("world");
// }


//! SWITCH CASE

let s1 = +prompt("ilk sayıyı giriniz:")
let s2 = +prompt("ikinci sayıyı giriniz")
let islem = prompt("Yapmak istediğiniz işlemi seçiniz :(+,-,*,/) ")

let sonuc = 0; 

switch (islem){
  
  case "+":
    sonuc = s1 + s2
    break;
  case "-":
    sonuc = s1 - s2
    break;
  case "*":
    sonuc = s1 * s2
    break;
  case "/":
    sonuc = s1 / s2
    break;
    default:
      alert("yanlış işlem")
      break
}
console.log(`sonuç: ${sonuc.toFixed(2)}`);