const h1 = document.querySelector("h1");
const subH1 = document.getElementById("sub-h1");


const makeItHoverable = (element) => {
      let Content = element.textContent.toUpperCase().split("");
      element.textContent = "";
      Content.forEach(letter => {
            let span = document.createElement("span");
            span.textContent = letter;
            element.appendChild(span);
      });
}

makeItHoverable(h1);

subH1.style.width = h1.offsetWidth + "px";
