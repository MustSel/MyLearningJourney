console.log("*****Objects******");

//? Arraylerde ilişkisel veriler

const ogrİsim =["ahmet","ismet","saffet"]
const ogrSoyisim=["yılmaz","can","baki"]
const ogrAdres = ["kadıköy","şeebinkarahisar","seferihisar"]

console.log(`${ogrİsim[0]} - ${ogrSoyisim[0]} - ${ogrAdres[0]}`);

//! 3 farklı yöntem ile Object oluşturulabilir

//* -------------------------------------------------------------
//* 1- Object literal (En çok tercih edilen yöntem)
//* -------------------------------------------------------------

const kisi = {
    isim: "Ahmet",//ilk yazılan key :'den sonrası value
    soyİsim: "Yılmaz",
    kimlikNo: "123123341112",
    maas: 70000,
    ehliyet: true,
    diller: ["english", "arabic", "urartuca"],
    notlar: {mat101: "AA", tur101: "BB", ECE101: "AA"},
    dogumTarihi:1990,
    yasHesapla: function (){
        return new Date().getFullYear() - this.dogumTarihi
    }
  };
  console.log(kisi);
//?  . notayonu ile erişim
  console.log(kisi.isim);
  console.log(kisi.maas);
  console.log(kisi.diller[2]);


//? Square bracket ile erişim

console.log(kisi["kimlikNo"]);
console.log(kisi.kimlikNo);
console.log(kisi["notlar"]["tur101"]);


kisi.diller=["türkçe-ingilizce"]
console.log(kisi);

kisi.kilo=80