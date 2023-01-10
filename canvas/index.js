function exercice1() {

    let canvasDom = document.querySelector('#ex1');
    let ctx = canvasDom.getContext('2d');
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(100, 40, 200, 200);
}

function exercice2() {

    let circle = {
        color: "#0000FF",
        radius: 100,
        x: 220,
        y: 130
    };
    let canvasDom = document.querySelector('#ex2');
    let ctx = canvasDom.getContext('2d');
    ctx.fillStyle = circle.color;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill();
}

function exercice3() {

    let canvasDom = document.querySelector('#ex3');
    let ctx = canvasDom.getContext('2d');
    ctx.font = 'bold 68px Montserrat';
    ctx.fillStyle = "#000000";
    ctx.fillText('Geometry.io', 0, 150);
}

function exercice4() {

    let circle = {
        color: "#0000FF",
        radius: 100,
        x: 120,
        y: 130
    };
    let canvasDom = document.querySelector('#ex4');
    let ctx = canvasDom.getContext('2d');
    ctx.fillStyle = circle.color;
    ctx.beginPath();
    ctx.arc(circle.x += 10, circle.y, circle.radius, 0, 2 * Math.PI);
    let intervalId = setInterval(function() {
        ctx.fill();
    }, 1500);
    let clearInter = setInterval(function() {}, 1500);
    clearInterval(clearInter);
    ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
}

function exercice5() {

}

function exercice6() {

}

function initCanvasSize() {
    // setting the size of the canvas
    let canvasList = document.querySelectorAll("canvas");

    for (canvas of canvasList) {
        let section = canvas.parentNode;

        canvas.width = section.clientWidth;
        canvas.height = section.clientHeight;
    }
}

window.addEventListener("DOMContentLoaded", function() {
    initCanvasSize();
    exercice1();
    exercice2();
    exercice3();
    exercice4();
    exercice5();
    exercice6();
});