var btn_prev = document.querySelector(".btn-prev");
var btn_next = document.querySelector(".btn-next");
var image = document.querySelectorAll(".slider_image img");

var i = 0;

btn_next.onclick = function () {
    image[i].classList.remove('active');
    i++;
    console.log(i);
    if (i >= image.length) {
        i = 0;
    }
    image[i].classList.add('active');
}
function sliderNext() {
    image[i].classList.remove('active');
    i++;
    console.log(i);
    if (i >= image.length) {
        i = 0;
    }
    image[i].classList.add('active');
}
setInterval(sliderNext, 3000);
btn_prev.onclick = function () {
    image[i].classList.remove('active');
    i--;
    console.log(i);
    if (i < 0) {
        i = image.length - 1;
    }
    image[i].classList.add('active');
}
/* ===== */

// function some() {
//     alert('salom guruh');
// }
// setTimeout(some, 3000);     /* soniyalar ichida ishlaydi */

/* function some() {
    alert('salom guruh');
}
var int = setInterval(some, 2000); /* soniyalarda almashib turadi */

/* clearInterval(int);/*  setIntervalni to'xtatadi */ 

/* setTimeout(function () {
    clearInterval(int)
    alert('boom bax');
}, 10000) */




console.log(btn_prev);
console.log(btn_next);
console.log(image);