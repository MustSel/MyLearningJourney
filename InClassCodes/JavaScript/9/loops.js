//* ================================================
//*                 For lopp
//* ================================================
console.log("**** LOOPS IN ARRAYS ****");

//? Ornek

const maaslar = [50000, 35000, 120000, 44000]

let sum = 0

for(let i = 0; i<maaslar.length; i++) {
    sum += maaslar[i]
    console.log(i, sum);
}

console.log("Sum:", sum);

//? --------------------Ornek---------------
//? notlar dizisindeki notların 50'den küçük olanları ve büyük olanları 2 ayrı diziye kaydediniz.

const notlar = [50, 45, 67, 100, 10]

const ellidenKucukNotlar = []
const ellidenBuyukNotlar = []

for(let i =0; i<notlar.length; i++) {
    if(notlar[i] < 50) {
        ellidenKucukNotlar.push(notlar[i])
    } else {
        ellidenBuyukNotlar.push(notlar[i])
    }

}

console.log(notlar);
console.log(ellidenBuyukNotlar);
console.log(ellidenKucukNotlar);

//? --------------------FOR IN---------------
const sayilar = [50000, 35000, 120000, 44000]
let total = 0
for(let i in sayilar ) {
    total += sayilar[i]
}
console.log("AVG:", total/sayilar.length);


const nots = [88,94,62,35,48,25,73]
const gecenler = []
const kalanlar = []

for (let i in nots) {
    if(nots[i] < 45){
        kalanlar.push(nots[i])
    }else {
        gecenler.push(nots[i])
    }
}

console.log(nots);
console.log(kalanlar);
console.log(gecenler);

//?---------------------FOR OF-----------------
const students = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"]

const strArrayUpperCase = (students) => {
    let upperCasedArray = []

    for(let student of students) {
       upperCasedArray.push(student.toUpperCase()) 
        
    }
    return upperCasedArray
}

const myArray = strArrayUpperCase(students)
console.log(myArray);





//*-------------------------------------------------------
//* SORU: ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyon yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------


