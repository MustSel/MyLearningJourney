console.log("***** SELECTORS *****")

//*===========================================
//*            GETELEMENTBYID()
//*===========================================
console.log(document.getElementById("add-new-item"));
document.getElementById("add-new-item").style.color = "blue"
document.getElementById("add-new-item").style.backgroundColor = "orange"

const headerText = document.getElementById("add-new-item")
console.log(headerText);
headerText.style.border = "2px solid red"
headerText.style = "font-family: tahoma; font-size: 30px" //? css vari erişim
const addBtn = document.getElementById("btn")
console.log(addBtn);
addBtn.style.backgroundColor = "red"


//? HTML ELEMENTLERİNİN İÇERİKLERİ OKUMA VE DEĞİŞTİRME

const htmlLi = document.getElementById("html-li")
//? Bir text elementinin içeriği  "textContent", "innerText", "innerHTML" ile değiştirilebilir.

console.log(htmlLi.textContent);
htmlLi.textContent = "HTML5"

document.getElementById("js-li").innerText ="JS"
document.getElementById("js-li").innerText ="<h2>JS</h2>"

//? html kodlarıyla stillendirme hatta script dahi yazılabilir ama güvenlik açığına sebebiyet verir. tercih edilmez.
document.getElementById("react-li").innerHTML = "React JS"
document.getElementById("react-li").innerHTML = "<h2>React JS</h2>"

//! input'ların değerinin okunması-yazılması
const myInput = document.getElementById("input")
console.log(myInput.value);

addBtn.value = "Submit"

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

const allLi = document.getElementsByTagName("li")
console.log(allLi);  //? HTML Collection




//? HTML collectiondaki her bir elemente indisleme ile erişişebilir.
console.log(allLi[2].textContent);
allLi[2].textContent = "JS"



//? Toplu bir şekilde erişim için for yapıları kullanılabilir

for ( let li of allLi) {
    console.log(li.textContent);
}

//! array-like grubunda direk array metotları kullanılamaz.

// allLi.forEach((li) => console.log(li))  

//? Çözüm olarak array-like grubu array'e çevrilebilir.

//? spread
const arrAllLi = [...allLi]
console.log(arrAllLi);
arrAllLi.forEach((li) => (li.style.color = "fuchsia"))

//? array.from()

console.log(Array.from(allLi));
Array.from(allLi).map((li) => (li.style.backgroundColor = "green"))






//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

const myList = document.getElementsByClassName("list")
console.log(myList);  //? HTML Collection


myList[0].innerText = "HTML Dersleri"

//? Ornek
document.getElementsByClassName("item-list")[0].style.color = "hotpink"


//* ========================================
//*              QUERYSELECTOR()
//* ========================================

//! Query selector ile id, tag, class seçilebilir.
//! bu seçici akışta gördüğü ilk elemanı seçer.

//? id almak için (#)
console.log(document.querySelector("#btn"));

//? class almak için (.)
console.log(document.querySelector(".item-list"));

//? tag almak için
console.log(document.querySelector("li"));  //? ilk gördüğü elemanı seçer

//? CSS selectörleri querrySelector ile kullanılabilir.

const myH3 = document.querySelector("main section.item-list h3")
console.log(myH3);


const react = document.querySelector("ul li:nth-child(4)")
console.log(react);
react.style.backgroundColor = "gray"
//* ========================================
//*              QUERYSELECTORALL()
//* ========================================

const liste = document.querySelectorAll(".item-list .list")
console.log(liste);  //? NodeList type döndürür.

//* querySelectorAll bir nodelist döndürür. NodeList dahili olarak forEach metodunu barındırır. Ama istenirse spread veya Array.from() ile yine Array'e dönüşüm yapılabilir.

liste.forEach((li) => console.log(li.innerText))