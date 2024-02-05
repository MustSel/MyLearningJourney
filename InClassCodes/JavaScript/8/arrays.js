// ? ARRAYS (DİZİLER)

console.log("****** ARRAYS ******");

//* Dizi tanımlama
//* ---------------------------------

//! Square bracket (Array Literal)
const names = ["Ahmet", "İsmet", "Saffet", "Can", true, 5, ["ali", 2, false], 6.5];
console.log(names);
console.log("uzunluk:", names.length);
console.log(typeof names);  //* object

//* Diziden Veri Okuma-Yazma (indisleme)
//* -------------------------------------

console.log(names[3]);
console.log(names[4]);
console.log(names[6][1]);

//? Dizinin son elemanını bir değişkene saklayalım

// const lastElement = names[7]  //?hard-code. element eklenirse değişir yanlış olur.
const lastElement = names[names.length-1]
console.log(lastElement);
names[4] = "Veli"
console.log(names);
names[5]++
console.log(names);

//! arrays.js:30 Uncaught TypeError: Assignment to constant variable.
// names = [4,6,7] 

//! 2. Yöntem (Object Constructor)

const programmingLangs = new Array("GO", "Js", "Java")
console.log(programmingLangs);


//! 3.Yöntem (Array.of())

const sayilar = Array.of(4,5)
console.log(sayilar);



//?   DİZİYİ DEĞİŞTİREN (MUTATOR) METHODLAR

const cars = ["BMW", "MERCEDES", "AUDI", "TOGG", "ANADOL", "DEVRIM"]

cars[cars.length] = "Şahin"
console.log(cars);

//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayısını döndürür.
const el = cars.push("Kartal")
console.log(cars, el);

//* pop() son elemanı siler ve sildiği elemanı döndürür
const deletedCar = cars.pop()
console.log(cars,deletedCar);

//* shift(), dizinin 0. indeksteki elemanını siler ve silinen elemanı döndürür.
const bmw = cars.shift()
console.log(bmw, cars);

//* unshift(), dizinin 0. indeksine parametre olarak aldığı elemanı ekler ve dizinin son eleman sayısını döndürür.
const newEl = cars.unshift("Toros")
console.log(cars, newEl);

//* splice()
//? 1. parametre: eklenecek index numarası
//? 2. parametre: 0 ise araya ekleme, 1 ise üzerine yazma
//? 3. parametre: yeni eklenecek veri

cars.splice(1,0,"Volvo")
console.log(cars);

cars.splice(1, 1, "Porsche")
console.log(cars);

cars.splice(4,0, "Serçe", "Tofaş")
console.log(cars);


//* reverse()
const reversedCars = cars.reverse()
console.log(cars);
console.log(reversedCars);

//* sort()
cars.sort()
console.log(cars);
cars.sort().reverse()
console.log(cars);


const numbers = [3,2,22,6,1,11,9,3]

numbers.sort((a,b) => a-b) //? asc küçükten büyüğe
numbers.sort((a,b) => b-a) //? dsc büyükten büyüğe
console.log(numbers);


//* fill ()

const degerler = [2,1,4,33,7,9,22]
degerler.fill(0)
// for(i=0; i< degerler.length; i++) {
//     degerler[i] = 55
// }

degerler.fill(77,3) //? 1.parametre: deger, 2. start index
degerler.fill(88,3,5) //? 3.parametre: stop(dahil değil)
console.log(degerler);