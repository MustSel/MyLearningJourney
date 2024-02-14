console.log("** NEW OPERATORS **");

//* =============================================
//*  DESTRUCTURING (OBJECT)
//* =============================================

const product = {
  id: "12345",
  brand: "Apple",
  type: "smart phone",
  price: 3000,
};

console.log(product.price);
let proPrice = product.price;
console.log(proPrice);
proPrice += 100;
console.log(proPrice);

//?square bracket
const proId = product["id"];
console.log(proId);

//? Destructuring

let { id, price } = product;
console.log("ID:", id);

price += 500;
console.log("price:", price);

// product.price = price
// console.log(product);

const { type } = product;
console.log("Type:", type);

//? key'ler isim değişikliği : ile yapılabilir.
const { id: pro1Id, price: pro1Price } = product;
console.log(pro1Id, pro1Price);

//? destr ile tek satırda bir çok objenin key'i değişken haline getirebilir.
// const {id, brand, price, type} = product

//?NESTED DESTR

const insanlar = {
  kisi1: {
    kimlikNo: "1234567890",
    adi: "Ahmet",
    soyadi: "Can",
    meslek: "Mimar",
    maas: 30000,
  },
  kisi2: {
    kimlikNo: "44234567890",
    adi: "Canan",
    soyadi: "Can",
    meslek: "Sosyal Gelişim Uzmanı",
    maas: 25000,
  },
};

console.log(insanlar.kisi2.meslek);
console.log(insanlar["kisi2"]["meslek"]);

// //? level 1 destr.
// const  {kisi1,kisi2 } = insanlar
// console.log(kisi1);

// //?level 2 destr.
// const {adi, maas} = kisi1
// console.log(adi, maas);

// const {adi,meslek} = insanlar.kisi1
// console.log(adi, meslek);

//? iki seviyeli dest.

const {
  kisi1: { adi, meslek },
  kisi2: { adi: kisi2Ad, meslek: kisi2Meslek },
} = insanlar;

console.log(adi, meslek);
console.log(kisi2Ad, kisi2Meslek);

//* Example
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "John",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];
console.log("************");

team.forEach((person) => {
  console.log("Name:", person.name);
  console.log("Surname:", person.surname);
  console.log("Job:", person["job"]);
  console.log("Age:", person["age"]);
  console.log("************");
});

console.log("************");

team.forEach((person) => {
  const { name, surname, job, age } = person;
  console.log("Name:", name);
  console.log("Surname:", surname);
  console.log("Job:", job);
  console.log("Age:", age);
  console.log("************");
});

console.log("************");

team.forEach(({ name, surname, job, age }) => {
  console.log("Name:", name);
  console.log("Surname:", surname);
  console.log("Job:", job);
  console.log("Age:", age);
  console.log("************");
});


//! ----- FUNCTIONLAR DESTRUC. KULLANIMI

const objGoster = function () {
    return {
        name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
    }
}

let {name, surname, job, age} = objGoster()
age = 26
console.log(name, surname);
console.log("Age:", ++age);

//? FUNCTION PARAMETRESI

const data = {
    id:"123",
    desc: "This is top secret info",
    createdTime: "1900"
}

const printData = (data) => {
    console.log(data);
    console.log(`${data.id} - ${data.desc} -${data.createdTime}`);
}

const printDataDetrAir = ({id,desc,createdTime}) => {
    console.log(`${id} - ${desc} -${createdTime}`);
}

const printDataDetr = (data) => {
    const {id,desc,createdTime} = data
    console.log(`${id} - ${desc} -${createdTime}`);
}

printData(data)
printDataDetr(data)
printDataDetrAir(data)

//* =============================================
//*  DESTRUCTURING (ARRAY)
//* =============================================

const people = ["ali", "veli", "canan", "can"]
let ali = people[0]
ali = "john"
console.log(people);

const [kisi1, kisi2, ,kisi4] = people
console.log(kisi1, kisi2, kisi4);


//* ==============================================
//*  REST (...)
//* =============================================

//? REST operatörü kullanıcı tarafından girilen değerleri dizi içerisinde konumlandırır. .eşitli kullanım alanları vardır.

//! 1- Bir dizi veya object'deki bazi değerlerden geri kalanlarını ayrı dizi ya da objelere kopyalanmasını sağlayabilir.

//? REST: Array
const araclar = ["Kamyon", "Tır", "Kamyonet", "Araba", "Minibüs"]

const [arac1, arac2, arac3, ...binekAraclar] = araclar
console.log(arac1,arac2,arac3);
console.log(binekAraclar);

//? REST: Object

const person = {
    name2: "Hazel",
    surname2: "Nut",
    job2: "team lead",
    age2: 40,
}

const {age2, ...geriKalanlar} = person
console.log(geriKalanlar);

//! 2- Bir fonksiyonun argümanlarını diziye çevirmek için kullanılabilir.

const topla = (a,b) => a + b
console.log(topla(1,5,2,7,9));

const toplam = (...sayilar) => {
    return sayilar.reduce((a,b) => a+b)
}
console.log(toplam(1,5,2,7,9))

//?REST (...) ile non-iterable olan sayıları iterable hale (diziye) çevirmiş olduk.




//* =============================================
//*  SPREAD (...)
//* =============================================

//? Spread operatörü ise iterables olan bir elemanı bireysel değerler haline getirir.

const ucanAraclar = ["helicopter", "drone", "ucak", "fuze"]
const karaAraclari = ["araba", "bisiklet", "marti"]

const tasitlar = [ucanAraclar, karaAraclari]  //? nested
console.log(tasitlar);

const flatTasitlar = [...ucanAraclar, ...karaAraclari]
console.log(flatTasitlar);

//?  Ornek

const cumle = "Uzun ince bir yoldayım"

const cumleDizisi = [...cumle]
console.log(cumleDizisi);


//? Ornek:
//? Spread ile bir iterable(array) olanı, non-iterable'a çevrilebilir.

const numbers = [1,3,4,5]
console.log(Math.max(...numbers));


//? nested
const sahislar = {
    sahis1: {
      name: "Can",
      surname: "Canan",
      dob: "1990",
      job: "developer",
      salary: "140000",
      drivingLicense: true,
    },
    sahis2: {
      name: "John",
      surname: "Sweet",
      dob: "1990",
      job: "tester",
      salary: "110000",
      drivingLicense: false,
    },
    sahis3: {
      name: "Steve",
      surname: "Job",
      dob: "2000",
      job: "developer",
      salary: "90000",
      drivingLicense: true,
    },
  }

  //? Javascript'de objeler default olarak iterable değildir. Ama for in ve for of döngüleri ile itere edilebilirler.

  //? Pbjelerin key ve value'larını okumak için built-in metotlar vardır.
  //? Bu metotlar aslında objelerin key ve/veya value'ları bir dizi olarak döndürür.

  //! FOR-IN
//* for (key in object) {
//*   code block to be executed
//* }

for(let s in sahislar) {
    console.log(s);
    console.log(sahislar[s]); //! square bracket (her bir objeyi getirir.)
    console.log(sahislar[s].salary); //! square bracket (her bir maasşı getirir.)
}

//? Kullanışlı Object Metotları

console.log(Object.keys(sahislar));  //? objenin key'leri array olarak döner.
console.log(Object.values(sahislar));  //? objenin value'lari array olarak döner.
console.log(Object.values(sahislar.sahis2));  //? objenin value'lari array olarak döner.

console.log(Object.entries(sahislar)); //? objenin key-value çiftini array olarak döner.

console.log(Object.entries(sahislar.sahis1));

//! FOR - OF
//* for(let x of iterable) {
//*    code block to be executed
//*} 


for (let key of Object.keys(sahislar)) {
    // console.log(key);
    console.log(sahislar[key].salary); //! square bracket
}

console.log("*********");

for (let v of Object.values(sahislar)) {
    console.log(v.salary);
}