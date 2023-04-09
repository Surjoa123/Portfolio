   var typed = new Typed('.typer', {
    strings: ['Developer.', 'Coder.','Designer.','Music Lover.','Follower of Krishna.'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
   });

let valueNumbers = document.querySelectorAll(".exp-number");
let intervalTime = 2000; // 1 second

valueNumbers.forEach((valueNumber)=> {
  let startValue = 0;
  let endValue = parseInt(valueNumber.getAttribute("data-val"));
  let duration = Math.floor(intervalTime / endValue);
  let intervalID = setInterval(()=> {
    startValue++;
    valueNumber.textContent = startValue;
    
    if (startValue === endValue) { // Stop after reaching end value
      clearInterval(intervalID);
    }
    
    // Change color as value increases
    if (startValue >= Math.floor(endValue / 2)) {
      valueNumber.style.color = "red";
    }
  }, duration);
});

