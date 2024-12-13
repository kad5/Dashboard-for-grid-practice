document.addEventListener("DOMContentLoaded", function () {
  const trackers = document.querySelectorAll(".svg-tracker");
  trackers.forEach((svg) => {
    const progressCircle = svg.querySelector(".circle-progress");
    const percentageText = svg.querySelector(".percentage-text");
    const backCircle = svg.querySelector(".circle-background");

    const progress = parseInt(svg.getAttribute("data-value"), 10);
    const radius = parseFloat(progressCircle.getAttribute("r"));

    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    progressCircle.style.strokeDasharray = circumference;
    progressCircle.style.strokeDashoffset = circumference;

    setTimeout(() => {
      backCircle.style.strokeDashoffset = 0;
      progressCircle.style.strokeDashoffset = offset;

      let currentProgress = 0;
      const step = progress / 20;
      const intervalId = setInterval(() => {
        if (currentProgress < progress) {
          currentProgress += step;
          percentageText.textContent = Math.round(currentProgress) + "%";
        } else {
          clearInterval(intervalId);
          percentageText.textContent = progress + "%";
        }
      }, 50);
    }, 50);
  });
});
