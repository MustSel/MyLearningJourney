//* ==============================================
//*                  EVENTS
//* ===============================================

console.log("****** EVENTS *******")
const h2 = document.querySelector(".add-item h2")

console.log(h2);

h2.onmouseover = function () {
    h2.classList.add("red", "text-center")
}
h2.onmouseout = () => {

    h2.classList.remove("red", "text-center")
}


function handleKeyPress(event) {
    if (event.key === "Enter") {
      onclick();
    }
  }