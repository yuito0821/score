'use strict';

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let ty = 65;
let x = 80;
let uy = 210;
let topscore = 0;
let underscore = 0;

let muy = 0;

for (let j = 50; j < 1580; j += 30) {
    context.beginPath();
    context.moveTo(j, 0);
    context.lineTo(j, 800);
    context.moveTo(0, 130);
    context.lineTo(1600, 130);
    context.stroke();
}

context.font = "25px bold italic";
context.fillText("C", 0, 65);
context.fillText("K", 0, 210);

context.fillText("S", 53, ty);
context.fillText("R", 53, uy);
context.fillText(topscore, x, ty);
context.fillText(underscore, x, uy);

function onClick(e) {
    let rect = e.target.getBoundingClientRect();
    muy = e.clientY - rect.top;

    context.font = "25px bold italic";

    if (muy < canvas.height / 2) {
        topscore++;
        x += 30;

        if (topscore > 9) {
            context.font = "24px bold italic";

            if ((topscore == 21 && underscore <= topscore - 2) || (topscore >= 21 && underscore == topscore - 2)) {
                context.fillStyle = "red";
            }
        }

        context.clearRect(1555, 0, canvas.width, 129);
        context.fillText(topscore, x, ty);
        context.font = "30px bold italic";
        context.fillText(topscore, 1560, 75);
        context.fillStyle = "red";
        context.fillRect(10, 90, 30, 5);
        context.clearRect(0, 230, 48, 59);
    } else if (muy > canvas.height / 2) {
        underscore++;
        x += 30;

        if (underscore > 9) {
            context.font = "24px bold italic";

            if ((underscore == 21 && topscore <= underscore - 2) || (underscore >= 21 && topscore == underscore - 2)) {
                context.fillStyle = "red";
                clearInterval(interval);
            }
        }

        context.clearRect(1555, 131, canvas.width, canvas.height);
        context.fillText(underscore, x, uy);
        context.font = "30px bold italic";
        context.fillText(underscore, 1560, 220);
        context.fillStyle = "red";
        context.fillRect(10, 230, 30, 5);
        context.clearRect(0, 70, 48, 59);
    }
    context.fillStyle = "black";
}

canvas.addEventListener('click', onClick);

let interval = setInterval(onClick, 8);