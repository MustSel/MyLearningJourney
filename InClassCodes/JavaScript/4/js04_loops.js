// let i = 0;
// let mult = 5;
// while (i < 3) {
//  let mult = mult * i;
//   i++;
// }
// console.log(`The answer is: ${mult}`);

// for (let i = 1; i <= 100; i++) {
//   const sayi = prompt(`${i}. sayi`);
//   console.log(sayi);
// }

//? 50 kişinin notunu girerek ortalamasını hesaplama
// let sum = 0;
// let i = 0;
// for (i; i < 5; i++) {
//   const grade = Number(prompt(`${i + 1}. notu giriniz.`));
//   sum += grade;
//   console.log(sum);
// }
// console.log(i);
// console.log(`AVG:${sum / i}`);

//? geri yönde değişim

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

//? aralık verme

let n1 = 15;
let n2 = 25;
let sum = 0;

if (n1 > n2) {
  console.log("n2 should be bigger than n1");
} else {
  for (let i = n1; i <= n2; i++) {
    sum += i;
  }
  console.log("SUM:", sum);
}

// if (n1 > n2) {
//   console.log("n2 should be bigger than n1");
// } else {
//   for (n1; n1 <= n2; n1++) {
//     sum += n1;
//   }
//   console.log("SUM:", sum);
// }

//? break--continue

for (let i = 0; i <= 10; i++) {
  if (i % 3) {
    continue;
  }
  if (i === 7) {
    break;
  }
  console.log(i);
}
