//* ======================================================
//*             FOREACH METHOD
//* ======================================================

console.log("****ITERATION*****");

const sayilar = [4,5,1,4,6,9]

sayilar.forEach( (a) => console.log(a))

console.log("************");

//? alternatif

sayilar.forEach(yazdir)

function yazdir(x) {
    console.log(x);
}
//? 2 parametreli foreach
sayilar.forEach((x,i) => console.log("Değer:", x, "sıra:", i ))

//? toplam
let toplam=0
sayilar.forEach((item) => toplam += item)

console.log(toplam);

//? 3 parametreli foreach

const nots= [40,50,10,40,60,90,]

nots.forEach( (not, indis, array) => (array[indis] = Math.round(not * 1.1)) )
console.log(nots);

//! forEach return yapmaz!  (void function)
console.log(nots.forEach((x) => x * x));  //? undefined
const deneme = nots.forEach((x) => x*x)
console.log(deneme);  //? undefined


//* ===================================================================
//*                     MAP METHOD
//* ===================================================================

//? Örnek

const names = ["Mustafa", "Murat", "ali", "veli", "Mustafa", "Ayşe", "canan"]

const copiedNames = names.map( (name) => name.toLowerCase() ); 
console.log(copiedNames);
console.log(names);

//?-------------------  ÖRNEK ----------------------------
//? tlPrices dizisindeki rakamların Euro ve dolar karşılıklarını hesaplatarak yeni dizilere kaydedelim.

const euro = 32.97
const dolar = 30.5
const sterlin = 38.61

const iPhoneTL = [90000, 75000, 60000, 40000, 30000]

const iPhoneDolar = iPhoneTL.map( (p) => Math.round(p/dolar) )
const iPhoneEuro = iPhoneTL.map( (p) => Number((p/euro).toFixed(1)) )
const iPhoneSterlin = iPhoneTL.map( (p) => Math.trunc( p/sterlin) )
console.log(iPhoneDolar);
console.log(iPhoneEuro);
console.log(iPhoneSterlin);


//* ===================================================================
//*                     FILTER METHOD
//* ===================================================================

//?-------------------  ÖRNEK ----------------------------

const maaslar = [90000, 75000, 60000, 40000, 30000]

const ortalamaMaaslar = maaslar.filter( (m) => m > 50000)
const dusukMaaslar = maaslar.filter( (m) => 30000 <= m && m < 50000 )
console.log(ortalamaMaaslar);
console.log(dusukMaaslar);

const modifiyeMaaslar = maaslar.filter( (m) => 30000 <= m && m < 50000 ).map( (x) => x * 1.5 )  
console.log(modifiyeMaaslar);


//* ===================================================================
//*                     REDUCE
//* ===================================================================

let numberlar = [40000,30000,20000,100000]
const sumNumber = numberlar.reduce((a,b) => a+b)
console.log("Toplam:", sumNumber);

