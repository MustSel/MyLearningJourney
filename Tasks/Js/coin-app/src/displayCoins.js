//? export defaılt ile paylaşıldı, diğer tarafta {} kullanmadan ve isim değiştirerek import  edilebildi.

import Swal from "sweetalert2";
let addedCoins = [];
const displayCoinCard = (coin) => {
  if (addedCoins.includes(coin.name)) {
    Swal.fire({
      title: "Error!",
      text: "Already added!",
      icon: "error",
      confirmButtonText: "Cool",
    });

    // const SwalRemove = () => {
    //   Swal.close();
    // };
    setTimeout(Swal.close, 2000);
  } else {
    addedCoins.push(coin.name);

    const { price, change, iconUrl, symbol, name, rank } = coin;
    const ul = document.querySelector("main .coins");
    const coinLi = document.createElement("li");
    coinLi.className = "coin";
    ul.appendChild(coinLi);
    coinLi.innerHTML = `
    
    <div class="remove-icon">
  <i class="fas fa-window-close"></i>
</div>
    <h2 class="coin-name">
    <sup>${symbol}</sup>
    <span>${name}</span>
    </h2>
    <div class="coin-temp">${Number(price).toFixed(6)}</div>
    <figure>
  <img class="coin-icon" src="${iconUrl}">
  <figcaption style='color: ${change < 0 ? "red" : "green"}'>
    <i class="fa-solid fa-chart-line"></i>
    <span>${change || "0.00"}</span>
  </figcaption>
  <div>Rank:${rank}</div>
</figure>
`;

    //? card silme

    coinLi.querySelector(".remove-icon").addEventListener("click", () => {
      coinLi.remove();
      addedCoins = addedCoins.filter((coinName) => coinName !== name);
    });
  }
};

export default displayCoinCard;
