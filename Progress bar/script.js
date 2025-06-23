const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");

let activeIndex = 1;
document.getElementById("next").addEventListener('click', () => update(1));
document.getElementById("prev").addEventListener('click', () => update(-1));



function update(change) {
    activeIndex += change;
    if (activeIndex < 1) activeIndex = 1;
    if (activeIndex > circles.length) activeIndex = circles.length;

    circles.forEach((circle, i) => circle.classList.toggle('active', i < activeIndex));
    progress.style.width = ((activeIndex - 1) / (circles.length - 1)) * 100 + '%';

    document.getElementById("prev").disabled = activeIndex === 1;
    document.getElementById("next").disabled = activeIndex === circles.length;
}
