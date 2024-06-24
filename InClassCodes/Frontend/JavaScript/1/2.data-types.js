/* -------------------------------------------------------------------------- */
/*                                 DATA TYPES                                 */
/* -------------------------------------------------------------------------- */
//! bir değişkenin türünü görebilmek için typeof dan faydalanılır
x = 15.34;
console.log(typeof x);

/* -------------------------------------------------------------------------- */
//!                      PRIMITIVE DATA TYPES                                 */
/* -------------------------------------------------------------------------- */
// Tek bir değer tutabilen değişkenler
// Number,String,Null, Undefined,Boolean, BigInt

//! Number Data Type
// ondalıklı sayı,negatif yada pozitif sayı değerlerini tanımlandığı değişken türüdür.

yas = 40; 
sayi = 56.87;
console.log(yas); /* fsdfsdfsd */
sonuc = sayi * 5 + 6;
console.log(sonuc);

const pi = Math.PI;
console.log(pi);

//? Ondalıklı kısmı düzenlemek içinkullanılan yöntemler , aşağıdakiler ek olarak floor ve ceilde kullanılabilir
// round

let yuvarlanmisSonuc = Math.round(sonuc);
console.log("sonuc:", sonuc);
console.log(yuvarlanmisSonuc);

// trunc
let truncSonuc = Math.trunc(sonuc);
console.log(truncSonuc);

// virgülden sonra gelen ondalıklı kısımda kaç hane göstemesini istiyorsanız toFixed(sayı)

let fixedSonuc = sonuc.toFixed(2);
console.log(sonuc.toFixed(2));
console.log(fixedSonuc);

//!RANDOM metodu
// rastgele sayı üretmek için kullanılır
// 0-1 arasında bir sayı üretir
console.clear();
console.log(Math.round(Math.random() * 101));

console.log(Math.pow(5, 3)); // kuvvet alma
console.log(5 ** 3);
console.log(Math.sqrt(144)); // karekök
console.clear();

/* ----------------------------------------------*/

//! STRING DATA TYPE

ad= "George";

let str1 = "merhaba dünya";
let str2 = "merhaba dünya";
let str3 = `merhaba ${ad}`;
let str4 = new String("merhaba dunya")

console.log(typeof str4, str4);
console.log(str1);

console.clear();


//! BOOLEAN
// true ya da false değeri tutar.

let xa=0
console.log(Boolean(xa));