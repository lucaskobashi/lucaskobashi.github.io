// let element = document.createElement('p');
// element.textContent = "hello";
// document.body.appendChild(element); //add the newly created element to the DOM
//
// alert("hey there!");

let canvas = document.createElement('canvas'); canvas.width = 500;
canvas.height = 250;
let ctx = canvas.getContext('2d');
ctx.font = '30px Cursive';
ctx.fillText("Hello world!", 50, 50);
document.body.appendChild(canvas);
