try {
    var credit = 50;  //Sets the variable's value to 50
    function spin() {
        'use strict';
        var img = ["img/mercy.png", "img/mei.png", "img/winston.png", "img/roadhog.png", "img/soldier76.png",
            "img/bastion.png", "img/hanzo.jpg", "img/d.va.png", "img/lucio.jpg", "img/mcree.png"];
        //Creates an array for 10 different colors

        var i1 = document.getElementById("pic1");
        var i2 = document.getElementById("pic2");           //Calls variable i1 i2 & i3 by an id
        var i3 = document.getElementById("pic3");
        //alert(i1.src);
        i1.src = img[Math.floor(Math.random() * 9)];
        i2.src = img[Math.floor(Math.random() * 9)];        //Grabs each variable and attaches them to the array
        i3.src = img[Math.floor(Math.random() * 9)];

        credit -= 1;

        if (credit < 0) {                   //Declares what happens when user runs out of credits/loses
            credit = 0;
            i1.src = "img/defeat.jpg";
            i2.src = "img/defeat.jpg";
            i3.src = "img/defeat.jpg";
        }

        else if (i1.src == i2.src && i1.src == i3.src) {
            credit += 15;
        }

        else if (i1.src == i2.src) {                                //Sets what happens when user gets 2 or 3 in a row to win
            credit += 3;
        }

        else if (i2.src == i3.src) {
            credit += 1;
        }

        document.getElementById("counter").innerHTML = credit;      //Grabs element by id "counter" and sets it equal to credit var.

        return false;
    }
}
catch (e) {

}
