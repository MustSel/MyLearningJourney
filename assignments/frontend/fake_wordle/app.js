// Kelimelerin bulunduğu bir dizi
const wordList = [
  "merhaba",
  "javascript",
  "htmlcss",
  "örnek",
  "kelime",
  "liste",
  "kodlama",
  "proje",
  "geliştirici",
  "bilgisayar",
  "programlama",
  "öğrenmek",
  "teknoloji",
  "developer",
  "web",
  "tasarım",
  "sayfa",
  "uygulama",
  "veritabanı",
  "backend",
  "frontend",
  "framework",
  "karakter",
  "deneme",
  "özellik",
  "öğrenci",
  "sınav",
  "başarı",
  "sistem",
  "dil",
  "kod",
  "işlem",
  "hızlı",
  "yavaş",
  "anlamak",
  "öğrenmek",
  "kullanıcı",
  "bilgi",
  "sanal",
  "gerçek",
  "hata",
  "gelecek",
  "bağlantı",
  "güvenlik",
  "değişken",
  "fonksiyon",
  "parametre",
  "modül",
  "veri",
  "algoritma",
  "çözüm",
  "gelişme",
  "sorun",
  "havuz",
  "döngü",
  "sıralama",
  "arama",
  "yönetim",
  "etkileşim",
  "arayüz",
  "grafik",
  "ses",
  "video",
  "oyun",
  "eğlence",
  "istatistik",
  "analiz",
  "rapor",
  "özet",
  "başlık",
  "sayı",
  "metin",
  "konu",
  "çalışma",
  "performans",
  "optimizasyon",
  "başlangıç",
  "bitiş",
  "tasarım",
  "model",
  "veri",
  "tür",
  "dönüşüm",
];

const filteredWordList = wordList.filter((word) => word.length <= 8);

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * filteredWordList.length);
  return filteredWordList[randomIndex];
}

document.addEventListener("DOMContentLoaded", function () {
  const checkBtn = document.querySelector("#check-btn");
  const userInput = document.getElementById("guess-input");
  const guessOutput = document.querySelector(".guess .guess-li");
  const gameInfo = document.getElementById("game-info");
  const cells = document
    .getElementById("game-board")
    .getElementsByTagName("td");
  const lettersGreen = document.querySelector(".letters-li1");
  const lettersYellow = document.querySelector(".letters-li2");
  const lettersGray = document.querySelector(".letters-li3");

  // Random kelimeyi al
  const word = getRandomWord();
  console.log("Seçilen kelime:", word);

  // Hak sayısını belirle
  let rights = word.length;

  // Oyun bilgisi yazısını güncelle
  updateGameInfo();

  // Tahmin et butonuna tıklandığında veya Enter tuşuna basıldığında yapılacak işlemler
  function makeGuess() {
    const guess = userInput.value.toLowerCase();

    if (guess.length !== word.length) {
      alert(`Lütfen ${word.length} harfli bir kelime girin.`);
      return;
    }

    const guessLi = document.createElement("li");

    for (let i = 0; i < cells.length; i++) {
      if (i < guess.length) {
        cells[i].textContent = guess[i].toUpperCase();

        if (guess[i] === word[i]) {
          guessLi.textContent = guess;
          guessOutput.appendChild(guessLi);
          addLetterToLetters(lettersGreen, guess[i], i + 1);
          cells[i].style.backgroundColor = "#198754";
        } else if (word.includes(guess[i]) && guess[i] !== word[i]) {
          guessLi.textContent = guess;
          guessOutput.appendChild(guessLi);
          addLetterToLetters(lettersYellow, guess[i]);
          cells[i].style.backgroundColor = "#ffc107";
        } else {
          guessLi.textContent = guess;
          guessOutput.appendChild(guessLi);
          addLetterToLetters(lettersGray, guess[i]);
          cells[i].style.backgroundColor = "lightgray";
        }
      } else {
        cells[i].textContent = "";
        cells[i].style.backgroundColor = "white";
      }
    }

    // Hak sayısını azalt
    rights--;

    // Oyun bilgisini güncelle
    updateGameInfo();

    // Inputu Temizle
    userInput.value = "";

    // Hak kalmadıysa oyunu bitir
    if (rights === 0 || guess === word) {
      if (guess === word) {
        wonGame();
      } else {
        lostGame();
      }

      // Butonu devre dışı bırak
      // checkBtn.disabled = true;
    }
  }

  // Tahmin et butonuna tıklandığında
  checkBtn.addEventListener("click", function () {
    makeGuess();
  });

  // Enter tuşuna basıldığında
  userInput.addEventListener("keydown", handleEnter);

  function handleEnter(e) {
    if (e.key === "Enter") {
      e.preventDefault(); // Sayfa yenilenmesini engelle
      makeGuess();
    }
  }

  // Oyun bilgisini güncelleyen fonksiyon
  function updateGameInfo() {
    gameInfo.innerText = `Kelime ${word.length} harfli. ${rights} hakkınız var.`;
  }

  // Oyunu bitiren fonksiyon
  function wonGame() {
    gameInfo.innerText = "Tebrikler! Doğru kelimeyi buldunuz.";
    playApplause();

    // Tahmin et butonunun olay dinleyicisini kaldır (tekrar tıklanmasını engelle)
    checkBtn.removeEventListener("click", makeGuess);
    // Enter tuşunu devre dışı bırak
    
  }

  function lostGame() {
    gameInfo.innerText = "Bulamadınız. Doğru kelime: " + word;
    playLost();

    // Tahmin et butonunun olay dinleyicisini kaldır (tekrar tıklanmasını engelle)
    checkBtn.removeEventListener("click", makeGuess);
    // Enter tuşunu devre dışı bırak
    
  }

  // Belirli bir öğenin listede olup olmadığını ve belirli bir pozisyonda olup olmadığını kontrol eden fonksiyon
  function isInList(list, value, position) {
    for (let i = 0; i < list.children.length; i++) {
      // Harf kontrolü
      if (list.children[i].textContent.includes(value)) {
        // Pozisyon kontrolü (sadece lettersGreen listesinde)
        if (
          position &&
          list === lettersGreen &&
          list.children[i].textContent.includes(`(${position}. sırada)`)
        ) {
          return true;
        }
        // Pozisyon kontrolü olmadan diğer listeler
        else if (!position) {
          return true;
        }
      }
    }
    return false;
  }

  // Harfi listeye ekleyen fonksiyon
  function addLetterToLetters(list, value, position) {
    if (!isInList(list, value)) {
      const newLetter = document.createElement("li");
      if (position) {
        newLetter.textContent = `${position}= ${value}`;
      } else {
        newLetter.textContent = value;
      }
      list.appendChild(newLetter);
    }
  }
});

function playApplause() {
  const correctSound = document.getElementById("correct-sound");
  correctSound.play();
}

function playLost() {
  const incorrectSound = document.getElementById("incorrect-sound");
  incorrectSound.play();
}

