function add_leading_zero(number) {
    if (number < 10) {
        return "0" + number.toString();
    } else {
        return number.toString();
    }
};

function showStopWatch(hrs, mnts, scnds) {
    return add_leading_zero(hrs) + ":" + add_leading_zero(mnts) + ":" + add_leading_zero(scnds);
}
console.log(showStopWatch(5,4,30));

var hours = 0, minutes = 0, seconds = 0, isItRunning = false;
var timeInt;

document.getElementById("start_stop").onclick = function() {

    if (isItRunning == false) {
        // start the clock
        isItRunning = true;

        timeInt = setInterval(function() {

            seconds++;
            if (seconds == 60) {
                minutes++;
                seconds = 0;
            }
            if (minutes == 60) {
                hours++;
                minutes = 0;
            }
            
            console.log(showStopWatch(hours, minutes, seconds));
            document.getElementById("stopwatch").textContent = showStopWatch(hours, minutes, seconds);

        }, 1000);
    } else {
        // stop the clock
        
        clearInterval(timeInt);

        isItRunning = false;       
    } 
}

 // reset the clock
//  reset the clock means if it is stopped then it will return to 0, but if it is running just make running from the begning again (from 0)

document.getElementById("reset").onclick = function() {

    if (!isItRunning) {
        // console.log(showStopWatch(0, 0, 0, 0));
        document.getElementById("stopwatch").textContent = showStopWatch(0, 0, 0);
    }

    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("stopwatch").textContent = showStopWatch(hours, minutes, seconds);
    
};


