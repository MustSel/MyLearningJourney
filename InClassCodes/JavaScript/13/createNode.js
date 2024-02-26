console.log("**** CREATE NODE ****")

const newLi = document.createElement("li")
const textLi = document.createTextNode("Go")
newLi.appendChild(textLi)
document.querySelector("ul").appendChild(newLi)
console.log(newLi);

//? element.before() ya da element.after() ile istediğimiz elementin öncesi veya sonrasına ekleyebiliriz.


//? 2. bir li oluşturalım

const newLi2 = document.createElement("li")
newLi2.textContent = "C++"

document.querySelector("ul li:nth-child(4)").before(newLi,newLi2)

//* ID, CLASS ATAMA

//? 1- element.attribute = "yeni deger"
//? yazma
newLi.className = "list bold text-success bg-warning"
newLi.id = "new-li"
newLi.name = "new"

//? okuma
console.log(newLi.className);

//? 2- setAttribute(atr, "deger") getAttribute("atr")

newLi2.setAttribute("class", "list red bold")
newLi2.setAttribute("id", "new-li2")

console.log(newLi2.getAttribute("id"));
console.log(newLi2.getAttribute("class"));

//? 3- Yöntem (classList)

newLi.classList.add("border", "border-danger", "border-3")

newLi.classList.remove("bold", "text-success")

console.log(newLi2.classList.contains("red"));

newLi.classList.toggle("red")
newLi2.classList.toggle("red")

