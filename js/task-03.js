
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

class timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.onTick = onTick;
   // this.init();
  }

  // init() {
  //   const time = this.getTimeComponents(0);
  //   this.onTick(time);
  // }

  const currentTime = Date.now();
    //this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = targetDate - currentTime;
      const time = this.getTimeComponents(deltaTime);

      this.onTick(time);
    }, 1000);
      
  getTimeComponents(time) {
    const days = this.pad( Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return {days, hours, mins, secs };
  }

   pad(value) {
    return String(value).padStart(2, '0');
  }
  
function updateCountdownTimer({ days, hours, mins, secs }) {
  CountdownTimer.textContent = `${days}:${hours}:${mins}:${secs}`;
}
}

const timer = new Timer({
  onTick: updateCountdownTimer,
});
