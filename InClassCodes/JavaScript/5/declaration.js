// ? ===========================
// ?        FUNCTIONS
// ? ============================

console.log("** 1 - FUNC DECLARATION **")

//* ORNEK1:
//*******************************/
selamla()

//? Fonksiyonun tanimlanmasi (hoisted)
//? Paramatresiz (Dısarıdan bir deger almıyor)
function selamla() {
  console.log("Selam Cohort16")
}

selamla() //? Invoke (Call)
selamla()

//? Parametreli Func.
function selamVer(cohort, ders) {
  console.log(`Merhaba ${cohort} - ${ders} `)
}

selamVer("Cohort16", "Javascript")
selamVer("Cohort15", "CSS")

//? Ornek

function topla(s1, s2) {
  console.log("Toplam:", s1 + s2)
}

const num1 = +prompt("S1:")
const num2 = +prompt("S2:")
topla(num2, num1)
