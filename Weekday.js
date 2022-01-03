var weekday = new Array(7);
weekday[0] = "Monday";
weekday[1] = "Tuesday";
weekday[2] = "Wednesday";
weekday[3] = "Thursday";
weekday[4] = "Friday";
weekday[5] = "Saturday";
weekday[6] = "Sunday";
console.log("Today is " + weekday[3]);


//find day on the given date
function Display(day, month, year) {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (month < 3) {
        month += 12;
        year--;
    }
    var h = (day + parseInt(((month + 1) * 26) / 10) +
        year + parseInt(year / 4) + 6 * parseInt(year / 100) +
        parseInt(year / 400) - 1) % 7;
    return weekday[h];
}
console.log(Display(28, 12, 2021));