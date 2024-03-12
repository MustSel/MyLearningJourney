const sayacMs = document.querySelector(".milisaniye");
const sayacSn = document.querySelector(".saniye");
const sayacDk = document.querySelector(".dakika");
const startBtn = document.querySelector("#start");
const resetBtn = document.querySelector("#reset");

let sycMs = 0;
let sycSn = 0;
let sycDk = 0;
const sycArttir = () => {
  sycMs++;
  if (sycMs === 100) {
    sycMs = 0;
    sycSn++;
  }
  if (sycSn === 60) {
    sycSn = 0;
    sycDk++;
  }

  sayacMs.textContent = sycMs;
  sayacSn.textContent = sycSn;
  sayacDk.textContent = sycDk;
};

let intervalID = 0;
let btnSayac = 0;
startBtn.addEventListener("click", () => {
  btnSayac++;
  if (btnSayac % 2 !== 0) {
    intervalID = setInterval(sycArttir, 10);
    startBtn.textContent = "Pause";
  } else {
    clearInterval(intervalID);
    startBtn.textContent = "Continue";
  }
});

resetBtn.addEventListener("click", () => {
  clearInterval(intervalID);
  btnSayac = 0;
  sycMs = 0;
  sycSn = 0;
  sycDk = 0;
  sayacMs.textContent = "0";
  sayacSn.textContent = "0";
  sayacDk.textContent = "0";
  startBtn.textContent = "Start";
});
