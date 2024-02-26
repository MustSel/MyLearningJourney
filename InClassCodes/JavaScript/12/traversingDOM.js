console.log("**** TRAVERSING DOM ****")

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde traverse
//*----------------------------------------------
//! parentElement, parentNode
const h2 = document.getElementById("add-new-item")

console.log(h2.parentNode);
console.log(h2.parentElement); //? section.add-item (htmle kadar çıkılabilir.)
console.log(h2.parentNode.parentNode.parentNode); //? body (document'e kadar çıkılabilir.)


const htmlLi = document.querySelector("ul li:nth-child(1")
console.log(htmlLi);

console.log(htmlLi.parentNode.parentNode);  //? section.item-list

console.log(htmlLi.closest("section.item-list"));  //? section.item-list
console.log(htmlLi.closest("section.add-item"));  //? null

console.log(htmlLi.closest("main").querySelector("section"));


//* 2- Asagi Yonde traverse
//*----------------------------------------------
//? Children, firstElementChild, lastElementChild

const section = document.querySelector("section.add-item")
console.log(section);

console.log(section.firstElementChild); //? h2
console.log(section.firstChild);  //? text yazı içeren html elementlerinin yazısına erişir.


//* 3- Yatay Yonde traverse
//*----------------------------------------------
//! nextElementSibling ,previousElementSibling
