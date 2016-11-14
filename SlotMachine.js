var credit = 50;

function  spin() {
    'use strict';
    var img = ["img/mercy.png", "img/mei.png", "img/winston.png", "img/roadhog.png", "img/soldier76.png",           //Creates an array for 10 different colors
        "img/bastion.png", "img/hanzo.jpg", "img/d.va.png", "img/lucio.jpg", "img/mcree.png"];

    var i1 = document.getElementById("pic1");
    var i2 = document.getElementById("pic2");
    var i3 = document.getElementById("pic3");
//alert(i1.src);
    i1.src = img[Math.floor(Math.random() * 9)];
    i2.src = img[Math.floor(Math.random() * 9)];
    i3.src = img[Math.floor(Math.random() * 9)];

    credit -= 1;

    if (credit < 0) {
        credit = 0;
        i1.src = "img/defeat.jpg";
        i2.src = "img/defeat.jpg";
        i3.src = "img/defeat.jpg";
    }

    else if (i1.src == i2.src && i1.src == i3.src) {
        credit += 15;
    }

    else if (i1.src == i2.src) {
        credit += 3;
    }

    else if (i2.src == i3.src) {
        credit += 1;
    }

    document.getElementById("counter").innerHTML = credit;

    return false;
}
