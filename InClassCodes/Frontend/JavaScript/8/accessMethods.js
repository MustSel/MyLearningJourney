//? DİZİ ERİŞİM METOTLARI

console.log("******** ACCESS ******");

const numbers = [3, 5, 2, "4", "beş", "four", 3, "4", "beş", "1", 3, "beş"];

//* includes
//*---------------------------------------------

console.log(numbers.includes("4")); //? true
console.log(numbers.includes("44")); //? false
console.log(numbers.includes("BEŞ".toLowerCase())); //? true
console.log(numbers.includes("four", 6));

//* indexOf(), lastIndexOf();
//*------------------------------------------------
//* ilk eşlenen indeksi döndürür. Bulamazsa -1 döndürür.

console.log(numbers.indexOf("beş"));
console.log(numbers.lastIndexOf("beş"));
console.log(numbers.indexOf("beş", 5));
console.log(numbers.indexOf("beşlik"));

//* join()

const joinedArray = numbers.join("-");
console.log(joinedArray);
console.log(numbers);

//* toString()

console.log(numbers.toString());

//*concat()
//*--------------------------------------
const message = ["The weather", "is", "very", "nice"];
const time = new Date().toDateString();
console.log(time, message);

const concatedArray = message.concat(4, time, "JS");
console.log(concatedArray);



console.log(concatedArray.reverse().join(" "));
