// https://github.com/MainulTamim/assingment.js

const kilometerToMeter = (kilometer) => {
    let meter = kilometer * 1000;
    return meter;
};


const budgetCalculator = (watch, mobile, laptop) => {
    let totalPrice = 50 * watch + 100 * mobile + 500 * laptop;
    return totalPrice;
};


const hotelCost = (days) => {
    let first = 0;
    let second = 0;
    let third = 0;
    if (days > 10) {
        first = 10 * 100;
        days = days - 10;
        if (days > 10) {
            second = 10 * 80;
            days = days - 10;
        }
        else {
            second = days * 80;
            days = 0;
        }
        if (days > 0) {
            third = days * 50;
        };
    }
    else {
        first = days * 100;
    }
    total = first + second + third;
    return total;
};



const megaFriend = (friends) => {
    let longestName = "";

    friends.forEach(function (name) {
        if (name.length > longestName.length) {
            longestName = name;
        }
    });

    return longestName;
};
