const h1 = document.querySelector("h1");
const subH1 = document.getElementById("sub-h1");
const btnSubH1 = document.getElementById("btn-sub-h1");
const cite = document.getElementById("cite");
const footCite = document.getElementById("foot-cite");
const header = document.querySelector("header");
const body = document.querySelector("body");

const makeItHoverable = (element) => {
      let Content = element.textContent.toUpperCase().split("");
      element.textContent = "";
      Content.forEach(letter => {
            let span = document.createElement("span");
            span.textContent = letter;
            if(letter == ".") {
                  span.classList.add("red");
            }
            element.appendChild(span);
      });
}

makeItHoverable(h1);

subH1.style.width = h1.offsetWidth + "px";
btnSubH1.style.width = h1.offsetWidth + "px";

footCite.style.width = cite.offsetWidth + "px";

body.style.paddingTop = header.offsetHeight + "px";
