//? String oluşturma yöntemleri

const str1 = "new String";
const str2 = "new string";
const deger = "merhaba";
const str3 = `new string ${deger}`; // backticksler ile template literal
const str4 = new String("new string");

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(typeof str4);
console.log("😂😁🫏👌");
console.log("094");

//! ESCAPE CHARACTERS

let metin = `Ömer/'in kalemi`;
let path = "c:\\Users\\kullanıcılar";
console.log(path); // users\kullanıcılar

//  \n new line => bir alt satıra geçilmesini sağlar
//  \t tab boşluğu verir (4 karakterlik boşluk)

const parag = "\tmerhaba cohort 16 sakinleri\ngününüz güzel geçsin";
console.log(parag);

// Unicode karakterleri için

console.log("\u2615");
console.log("\uD83C\uDF39");
console.log("\uD83D\uDCB2");
console.log("\u00A9");

console.log(`           Merhaba Cohort 16 sakinleri   🌹
 Gününüz güzel geçsin`);

/* ------------------------------------------------------------------------ */

//! STRINGS YAPISI VE INDEXLEME

let course = "Clarusway";
console.log(course);

console.log(course[2]);

// Stringsler primitive bir tür olduğu için parça olarak değiştirelemez
// İmmutable  -  not mutable
course[4] = "a"; // değişim yapılmaz
console.log(course);

course = "Clarusway Bootcamp"; // tamamını yeniden tanımlayabiliriz
console.log(course);

for (i = 0; i <= 17; i++) {
  console.log(course[i]);
}

//! STRING PROPERTY AND METHODS

//!  ***************STRING PROPERT(Özellikleri)*****************

//? Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir bu nedenle parantez açıp kapatmaya gerek yoktur.

//? length
//? prototype

console.log(course.length);

for (let i = 0; i < course.length; i++) {
  console.log(course[i]);
}

for (let i = course.length - 1; i >= 0; i--) {
  console.log(course[i]);
}

console.clear();

//! STRING METHODLARI

//? String Birleştirme

const name = "John";
const surname = "Due";
const job = "Developer";

// +

console.log(
  "Our customer's name:" + name + " surname:" + surname + " job:" + job
);
console.log(
  `our customer's name: ${name} surname:${surname} and his job:${job}`
);

const fullname = name.concat(surname);
console.log(fullname);

// toLowerCase()

console.log(fullname.toLowerCase());

// toUpperCase()

console.log(fullname.toUpperCase());

//! String Parçalama

// split parçaladığı bölümleri diziye çevirir.
// str.split(seperator) => seperator bir ayraç, "", " ", "," , "/"

let text = "Clarusway It Bootcamp";
console.log(text.split(""));
const splittedText = text.split(" ");
console.log(splittedText);
console.log(splittedText[2]);

for (i = splittedText.length - 1; i >= 0; i--) {
  console.log(splittedText[i]);
}

let months = "Jan / Feb / Mar / Apr / May";
console.log(months.split("/"));

let liste = "Harry Trump ;Fred Barney; Helen Rigby; Bill Abel ; Chris Hand";
console.log(liste.split(";"));
let yeniListe = liste.split(";");
console.log(yeniListe[2]);
console.clear();
//! Dikkat "Join" ve "Reverse" string methodu değildir ama splitle çok kullanılır!

let cumle = "Merhaba değerli kent sakinleri";
let yeniCumle = cumle.split(" ");
console.log(yeniCumle);
console.log(yeniCumle[2]);

// reverse tersten yazdırma - array methodu
// join -- array methodu
console.log(yeniCumle.reverse().join(" - "));
console.log(yeniCumle);


console.log(yeniCumle.join(" "));

//! Slice
//? String içinde bir bölümü almak için kullanılır. (immutable, kalıcı değişiklik olmaz)

// Slice (başlangıç index numarası, bitiş index numarası(bu numara dahil değildir.))

let atasozu = "Ağaç yaşken eğilir."
console.log(atasozu.slice(5,12));
console.log(atasozu.slice(7));

// tersten de erişim sağlanabilir : negatif değer kullanılır.

console.log(atasozu.slice(-6,-2));

//! substring(başlangıç index numarası, bitiş index numarası)
//slice farkı negati değer kullanılmaz

console.log(atasozu.substring(3,8));


//!  Stringde Değişiklik Yapma

let ozluSoz = "Tecrübe tarak gibidir ama hayat insana kel olduğu zaman verir."

console.log(ozluSoz.replace("kel", "saçlı"));  //? kalıcı değişiklik olmaz.
console.log(ozluSoz);

let variable = "kullanıcı adı"
let yeni = variable.replace(" ", "_")
console.log(yeni);

let yeniDeger = yeni.replace("ı", "i")
console.log(yeniDeger);

let yeniDeger2 = yeni.replaceAll("ı", "i")
console.log(yeniDeger2);


//! String içinde arama işlemleri

//? includes, indexOf, search, match() metodlarını kullanabiliriz.

//! includes() ...yı içeriyor mu -> true ya da false bir değer döndürür. caseSensitive (küçük büyük harf duyarlı) bir özelliktir.

console.log(`ozlusozde tarak kelimesi geçiyor mu: ${ozluSoz.includes("tarak")}` ); 

let url = "https://clarusway.com"
let msg = url.includes("https") ? "Bu site güvenilir." : "Bu site güvenilir değil."
console.log(msg);

let email = "helenclarusway.com"
let msg2 = email.includes("@") ? "Mail adresi geçerli" : "Mail adresi geçersiz"
console.log(msg2);


//! indexof (aranacak metin)
//? Bir karakter ya da karakter grubunun kaçıncı sırada olduğunu yani index numarasını verir.

console.log(email.indexOf(".com"));

//? Eğer o karakter yoksa olmadığını -1 değeri vererek gösterir. Büyük küçük harfe duyarlıdır. sadece ilk gördüğünün index numarasını verir.

console.log(email.indexOf("edu"));
msg3 = email.indexOf("edu") === -1 ? "Bu bir eğitim sitesi değildir." : "Bu bir eğitim sitesidir."
console.log(msg3);

//! search()

// bir string içindeki aranan elemanda ilk bulduğunun index numarasını yazar. Bulamazsa -1 döndürür.

let metin2 = "Clarusway it bootcamp IT.Clarusway develop you IT field"
console.log(metin2.search("IT"));
console.log(metin2.search("it"));

//? Regex - regular Expression
//?  / ile ifade edilir.
//? /g => global, bütün cümle içinde uygula
//? /i => case sensitive özelliğini kaldır. 

console.log(metin2.search(/IT/gi));
console.log(metin2.replace(/IT/gi, "communication"));


//! Match

//string içinde aranan metin bulunur ver bir dizi döndürür.
// Regex ifadeler de kullanılabilir.

let metin3 = "Bugün gerçekten çok güzel, hafif serin bugün"

console.log(metin3.match(/bugün/gi));

let yeniMetin = metin3.match(/bugün/gi)
console.log(yeniMetin);


let sentence1 = "            Clarusway      "
console.log(sentence1.trim());

let met = "Clarusway"
console.log(met.startsWith("c"));  // case sensitive

console.log(met.endsWith("y"));