const durationInput = document.querySelector("#duration");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");

const circle = document.querySelector("circle");
const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let duration;
const timer = new Timer(durationInput, startBtn, pauseBtn, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeLeft) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeLeft) / duration - perimeter
    );
  },
  onComplete() {
    console.log("Completed");
  },
});
