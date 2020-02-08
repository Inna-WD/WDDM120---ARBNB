
//Pants
let pantsMinusButton = document.getElementById("lessPants");
let pantsPlusButton = document.getElementById("morePants");

// function that decreases the number of pants by 1 and turns the value to 0 if it becames negative
function pantsMinus() {
    let label = document.getElementById("pantsQty");
    label.innerHTML = parseInt(label.innerHTML) - 1
    if (label.innerHTML < 0) {
        label.innerHTML = 0
    }
}
// function that increases the number of pants by 1
function pantsPlus() {
    let label = document.getElementById("pantsQty");
    label.innerHTML = parseInt(label.innerHTML) + 1
}


//Shirts

let shirtMinusButton = document.getElementById("lessShirt");
let shirtPlusButton = document.getElementById("moreShirt");
// function that decreases the number of shirts by 1 and turns the value to 0 if it becames negative
function shirtMinus() {
    let label = document.getElementById("shirtQty");
    label.innerHTML = parseInt(label.innerHTML) - 1
    if (label.innerHTML < 0) {
        label.innerHTML = 0
        // console.log(label.innerHTML)
    }
}
// function that increases the number of shirts by 1
function shirtPlus() {
    let label = document.getElementById("shirtQty");
    label.innerHTML = parseInt(label.innerHTML) + 1
}



// coupons
function couponFunction() {
    var txt;
    var t;
    var coupon = prompt("Enter coupon code here:", "NOTAX or FIFTYFIFTY");
    // empty coupon value will not change the total
    if (coupon == null || coupon == "") {
        txt = "I understand you don't have a coupon code ...";
    }
    // no tax coupon will calculate the total without 13% tax\
    else if (coupon == "NOTAX") {
        txt = subTotal.innerHTML;
        txt = "Your final price for today is: $ " + txt;
    }
    // the total will be divided by 2 and them 13% tax will be added  
    else if (coupon == "FIFTYFIFTY") {
        t = (subTotal.innerHTML / 2)*1.13;
        txt = t.toFixed(2);
        txt = "Your final price for today is: $ " + txt;
    }
    // any othe value will not change the total 
        else {
        txt = "This coupon code doesn't exist, please enter the valid coupon";
    }
       document.getElementById("result").innerHTML = txt;

}

// adding listeners to all 6 bottons in the page  
pantsMinusButton.addEventListener('click', pantsMinus);
pantsPlusButton.addEventListener('click', pantsPlus);
shirtMinusButton.addEventListener('click', shirtMinus);
shirtPlusButton.addEventListener('click', shirtPlus);
calculate.addEventListener(`click`, simpleCalc);
promo.addEventListener(`click`, couponFunction);