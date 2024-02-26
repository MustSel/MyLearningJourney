// Kodlar buraya

const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector(".btn-over");
const backG = document.querySelector("body");
const cInput = document.getElementById("colorInput");
const cText = document.querySelector("#colorText");
const copiedColor = document.querySelector("#copy");
const cDiv = document.querySelector(".colorDiv");


btn1.onclick = () => {
  const n1 = Math.round(Math.random() * 999);
  let newImageUrl = `https://picsum.photos/id/${n1}/1920/1080`;
  backG.style.backgroundColor = "";
  backG.style.backgroundImage = `url('${newImageUrl}')`;
  cInput.value = "#ffffff";
  cText.textContent = `picsum id: ${n1}`;
  cDiv.style.opacity = "0.2";
};

const backGroundChanger = () => {
  const num1 = Math.round(Math.random() * 255);
  const num2 = Math.round(Math.random() * 255);
  const num3 = Math.round(Math.random() * 255);

  const randomcolor = () => {
    return ` rgb(${num1} ,${num2} ,${num3})`;
  };

  const newcolor = randomcolor();
  backG.style.backgroundColor = newcolor;

  const hexcolor = rgbToHex(num1, num2, num3);

  function rgbToHex(num1, num2, num3) {
    return (
      "#" + componentToHex(num1) + componentToHex(num2) + componentToHex(num3)
    );
  }

  function componentToHex(c) {
    var hex = c.toString(16);

    return hex.length == 1 ? "0" + hex : hex;
  }

  cInput.value = hexcolor;
  cText.textContent = hexcolor;

};

btn2.onmouseover = () => {
  backG.style.backgroundImage = "";
  cDiv.style.opacity = "0.2";
  btn2.style.opacity = "1";

  backGroundChanger();

 
};

copiedColor.onclick = () => {
  navigator.clipboard.writeText(cInput.value).then(() => {
    alert("Metin başarıyla kopyalandı!");
  });
};

cInput.oninput = function () {
  backG.style.backgroundImage = "";
  backG.style.backgroundColor = cInput.value;
  cText.textContent = cInput.value;
};

cDiv.onmouseover = () => {
  cDiv.style.opacity = "1";
};
cDiv.onmouseout = () => {
  cDiv.style.opacity = "0.2";
};

btn1.onmouseover = () => {
  btn1.style.opacity = "1";
};
btn1.onmouseout = () => {
  btn1.style.opacity = "0.5";
};

btn2.onmouseout = () => {
  btn2.style.opacity = "0.5";
  backGroundChanger()
};