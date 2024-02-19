let random = Math.floor(Math.random() * 100);
console.log(random);

let hak = 5;
let kulSayi;

let messageElement = document.getElementById("message");
let Image = document.getElementById("Image");

function updateHakDisplay() {
  document.getElementById("hakValue").innerText = hak;
}

function increaseHak() {
  hak++;
  updateHakDisplay();
}

function decreaseHak() {
  hak = Math.max(0, hak - 1);
  updateHakDisplay();
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    assignUserNumber();
  }
}

function assignUserNumber() {
  let userInput = document.getElementById("numberInput").value;
  kulSayi = parseInt(userInput) || 0;

  checkGuess();
  
}

function checkGuess() {
  
  if (kulSayi === random) {
    messageElement.textContent = `Tebrikler! Doğru tahmin ettin.`;
    Image.src = "./img/wongif.gif";

    document.getElementById('gameTitle').style.display = 'none';
    document.getElementById('rightsSection').style.visibility = 'hidden';
    

    document.getElementById('restartButton').style.display = 'block';
  } else if (hak === 1) {
    messageElement.textContent = `Hakkın bitti. Doğru sayı ${random} idi.`;
    Image.src = "./img/lost.gif";
    document.getElementById('gameTitle').style.display = 'none';
    document.getElementById('rightsSection').style.visibility = 'hidden';
    
    document.getElementById('restartButton').style.display = 'block';
  } else {
    kulSayi < random
      ? (messageElement.textContent = `Olmadı be! Daha büyük bir sayı girmelisin. ${
          hak - 1
        } hakkın kaldı.`)
      : (messageElement.textContent = `Olmadı be! Daha küçük bir sayı girmelisin. ${
          hak - 1
        } hakkın kaldı.`);

        document.getElementById('gameTitle').style.display = 'none';
        document.getElementById('rightsSection').style.visibility = 'hidden';
        document.getElementById("numberInput").value = "";
    
    hak--;
  }
//   updateHakDisplay();
  
}

function restartGame() {
    random = Math.floor(Math.random() * 100);
    hak = 5;
    kulSayi = undefined;

    document.getElementById('gameTitle').style.display = 'block';
    document.getElementById('rightsSection').style.visibility = 'visible';
    

    messageElement.textContent = `Let's see if you can make it!`;
    Image.src = "./img/canyouguessme.webp";

    updateHakDisplay();
    document.getElementById('restartButton').style.display = 'none';
    document.getElementById("numberInput").value = "";
}
