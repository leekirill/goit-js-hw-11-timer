// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));
// class CountdownTimer {
//   constructor({ selector }) {
//     this._selector = {}
//   }
  
//   _getRefs(root) {
//     const refs = {}
//   }
// }

// const timer = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Junary 1, 2021'),
// });

const valueRef = document.querySelectorAll(".value")


const intervarId = setInterval(() => {
  const refs = {
  currentTime: Date.now(),
  targetTime: new Date('December 31, 2020'),
}
  const countDownTime = refs.targetTime - refs.currentTime;
  const { days, hours, mins, secs } = getTimeComponents(countDownTime) 
  updateValue({ days, hours, mins, secs })
  
}, 1000); 

// clearInterval(intervarId)

function updateValue({ days, hours, mins, secs }) {
  valueRef[0].textContent = `${days}`
  valueRef[1].textContent = `${hours}`
  valueRef[2].textContent = `${mins}`
  valueRef[3].textContent = `${secs}`
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

return {days, hours, mins, secs}
}