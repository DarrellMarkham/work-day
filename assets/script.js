
// set current date time
const now = moment().format('LLL'); 
console.log(now)

document.getElementById('currenttime').innerHTML = now
var rows = document.querySelectorAll(".row")
var currenthour = moment().format('HH')
const formatTime = (time) => {
  if (time.includes("AM")) {
    // grab the number
  } else {
    time += 12
  };

  if (time === currenthour) {
    textarea.setAttribute('style', ".present");
  };
};

for (let i=0; i<rows.length; i++) {
  formatTime()
};
