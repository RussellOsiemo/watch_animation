const hour = document.getElementById("hour_hand");
const minute = document.getElementById("minute_hand");

const second = document.getElementById("second_hand");

function animate() {

    const date = new Date();

    const hour_point = date.getHours() + date.getMinutes() / 60;
    const minute_point = date.getMinutes() + date.getSeconds() / 60;
    const second_point = date.getSeconds() + date.getMilliseconds() / 1000;

    hour.setAttribute("transform", `rotate(${(360 / 12) * hour_point})`);
    minute.setAttribute("transform", `rotate(${(360 / 60) * minute_point})`);
    secdond.setAttribute("transform", `rotate(${(360 / 60) * second_point})`);
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);