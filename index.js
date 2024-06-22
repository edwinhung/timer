const durationInput = document.querySelector("#duration");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const timer = new Timer(durationInput, startBtn, pauseBtn, {
  onStart() {
    console.log("Started");
  },
  onTick() {
    console.log("tick");
  },
  onComplete() {
    console.log("Completed");
  },
});
