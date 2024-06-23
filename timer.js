const smoothInterval = 0.05;
class Timer {
  constructor(durationInput, startBtn, pauseBtn, callbacks) {
    this.durationInput = durationInput;
    this.startBtn = startBtn;
    this.pauseBtn = pauseBtn;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startBtn.addEventListener("click", this.start);
    this.pauseBtn.addEventListener("click", this.pause);
  }

  start = () => {
    if (this.onStart) {
      this.onStart();
    }
    this.tick();
    this.interval = setInterval(this.tick, smoothInterval * 1000);
  };

  tick = () => {
    if (this.timeLeft <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.onTick();
      this.timeLeft = this.timeLeft - smoothInterval;
    }
  };

  get timeLeft() {
    return parseFloat(this.durationInput.value);
  }

  set timeLeft(time) {
    this.durationInput.value = time.toFixed(2);
  }

  pause = () => {
    clearInterval(this.interval);
  };
}
