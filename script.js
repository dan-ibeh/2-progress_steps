var circles = document.querySelectorAll(".circle");
var progress = document.querySelector(".progress");
var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");

var pointer = 0;

function nextStep() {
  pointer++;
  update();
}

function prevStep() {
  pointer--;
  update();
}

function update() {
  progress.style.width = `${(pointer / (circles.length - 1)) * 100}%`;
  circles.forEach((circle, index) => {
    if (index <= pointer) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  prevBtn.disabled = pointer == 0
  nextBtn.disabled = pointer == circles.length - 1
}

nextBtn.addEventListener("click", nextStep);
prevBtn.addEventListener("click", prevStep);
