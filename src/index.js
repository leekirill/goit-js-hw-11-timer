class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const countDownTime = this.targetDate - currentTime;
      const remainingTime = this.getTimeComponents(countDownTime);
      this.updateValue(remainingTime);
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  updateValue({ days, hours, mins, secs }) {
    const clock = document.querySelector(this.selector);
    const daysValue = clock.querySelector('span[data-value="days"]');
    const hoursValue = clock.querySelector('span[data-value="hours"]');
    const minsValue = clock.querySelector('span[data-value="mins"]');
    const secsValue = clock.querySelector('span[data-value="secs"]');

    daysValue.textContent = `${days}`;
    hoursValue.textContent = `${hours}`;
    minsValue.textContent = `${mins}`;
    secsValue.textContent = `${secs}`;
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Junary 2, 2022'),
});

const timer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Junary 2, 2021'),
});

// class CountdownTimer {
//     constructor({selector, targetDate}) {
//         this.selector = selector;
//         this.targetDate = targetDate;
//         this.start();
//     }

//     start() {
//         setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = this.targetDate - currentTime;
//             const remainingTime = this.getTimeComponents(deltaTime);
//             this.updateClockFace(remainingTime);

//         }, 1000)
//     }
//     pad(value) {
//         return String(value).padStart(2, '0');
//     }

//     getTimeComponents(time) {
//     const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
//         return { days, hours, mins, secs };
//     }

//     updateClockFace({ days, hours, mins, secs }) {
//         const clock = document.querySelector(this.selector);
//         const daysCount = clock.querySelector('span[data-value="days"]');
//         const hoursCount = clock.querySelector('span[data-value="hours"]');
//         const minsCount = clock.querySelector('span[data-value="mins"]');
//         const secsCount = clock.querySelector('span[data-value="secs"]');

//         daysCount.textContent = `${days}`;
//         hoursCount.textContent = `${hours}`;
//         minsCount.textContent = `${mins}`;
//         secsCount.textContent = `${secs}`;
//     }

// }

// const timer = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Nov 17, 2020'),
// });

// const timer2 =new CountdownTimer({
//   selector: '#timer-2',
//   targetDate: new Date('Nov 17, 2022')
// })
