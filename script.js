function logEvent(e) {
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.eventPhase);
}

document.querySelector("body").addEventListener("click", logEvent);
