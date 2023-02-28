const p = document.querySelector("p");
const h2 = document.querySelector("h2");
const body = document.querySelector("body");
const reset = document.querySelector(".reset");
const count = document.querySelector(".count");
h2.style.fontSize = "10rem";



reset.addEventListener("click", () => {
  p.style.visibility = "visible";
})
count.addEventListener("click", () => {
  countDown();
});
const countDown = (counter = 10) => {
  h2.innerText = counter;
  setTimeout(() => {
    h2.innerText = counter--;
    setTimeout(() => {
      h2.innerText = counter--;
      setTimeout(() => {
        h2.innerText = counter--;
        setTimeout(() => {
          h2.innerText = counter--;
          setTimeout(() => {
            h2.innerText = counter--;
            setTimeout(() => {
              h2.innerText = counter--;
              setTimeout(() => {
                h2.innerText = counter--;
                setTimeout(() => {
                  h2.innerText = counter--;
                  setTimeout(() => {
                    h2.innerText = counter--;
                    setTimeout(() => {
                      h2.innerText = counter--;
                      setTimeout(() => {
                        p.style.visibility = "hidden";
                        h2.innerText = "Happy Independance Day";
                        counter = 10;
                      }, 1000)
                    }, 1000)
                  }, 1000)
                }, 1000)
              }, 1000)
            }, 1000)
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
}

