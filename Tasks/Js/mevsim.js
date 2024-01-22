alert(
  "Hangi mevsime ait olduğunu öğrenmek istediğiniz tarihi Ay ve Gün olarak iki aşamada giriniz!"
);
let month = +prompt("Lütfen 1 ile 12 arası bir ay seçiniz: ");
let day = +prompt("Lutfen 1-31 arası bir gün seçiniz: ");

if (
  month < 1 ||
  month > 12 ||
  day < 1 ||
  day > 31 ||
  (month == 2 && day > 28) ||
  (month == 4 && day > 30) ||
  (month == 6 && day > 30) ||
  (month == 9 && day > 30) ||
  (month == 11 && day > 30)
) {
  alert("Gün veya ay bilgisini hatalı girdiniz! Sayfayı yenileyip tekrar deneyiniz.");
}

if (
  (month == 2 && day >= 21 && day <= 28) ||
  (month == 3 && day >= 1 && day <= 31) ||
  (month == 4 && day >= 1 && day <= 30) ||
  (month == 5 && day >= 1 && day <= 31)
) {
  alert("Girdiğiniz gün mevsim ilkbahardır.");
}
if (
  (month == 6 && day >= 1 && day <= 30) ||
  (month == 7 && day >= 1 && day <= 31) ||
  (month == 8 && day >= 1 && day <= 31) ||
  (month == 9 && day >= 1 && day <= 21)
) {
  alert("Girdiğiniz gün mevsim yazdır.");
}
if (
  (month == 9 && day >= 22 && day <= 30) ||
  (month == 10 && day >= 1 && day <= 31) ||
  (month == 11 && day >= 1 && day <= 30) ||
  (month == 12 && day >= 1 && day <= 20)
) {
  alert("Girdiğiniz gün mevsim sonbahardır.");
}
if (
  (month == 12 && day >= 21 && day <= 31) ||
  (month == 1 && day >= 1 && day <= 31) ||
  (month == 2 && day >= 1 && day <= 20)
) {
  alert("Girdiğiniz gün mevsim kıştır.");
}
