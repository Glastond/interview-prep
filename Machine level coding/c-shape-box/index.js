const boxContainer = document.querySelector(".box-container");
const boxes = document.querySelectorAll(".box");
let queue = [];

boxContainer.addEventListener("click", (event) => {
  const index = event.target.dataset.index;

  if (index) {
    queue.push(index);
    boxes[index].classList.add("green")
  }

  if(queue.length >= 7){
    let count = 0;

    while(queue.length !== 0){
        const index = queue.shift();
        count++;
        setTimeout(() => {
            boxes[index].classList.remove("green");
        }, count * 1000);

    }
  }
});
