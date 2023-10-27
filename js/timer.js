// ===========================================================
// ================DEADLINE FOR MERCEDES======================
// ===========================================================
let deadline = new Date("Oct 27, 2023 09:43:20").getTime()
let a = setInterval(function(){
    let now = new Date().getTime();
    let diff = deadline - now;
    
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    let daysText = days === 1 ? 'day' : 'days';
    let hoursText = hours === 1 ? 'hour' : 'hours';
    let minutesText = minutes === 1 ? 'minute' : 'minutes';
    let secondsText = seconds === 1 ? 'second' : 'seconds';

    document.getElementById("timer").innerHTML = days+daysText+ ' ' + hours +hoursText +' '+ minutes +minutesText +' ' + seconds +secondsText + '.';;

    if (diff < 0) {
        clearInterval(a);
        document.getElementById("timer").innerHTML = "BID FOR THIS ITEM IS OVER";
        document.querySelector(".input-field").disabled = true;
        document.querySelector(".bid_button").disabled = true;
        
                
    }
}, 1000);

// ===========================================================
// ===================DEADLINE FOR LEXUS======================
// ===========================================================


let deadline2 = new Date("Nov 14, 2023 10:22:00").getTime()
let b = setInterval(function(){
    let now = new Date().getTime();

    let diff2 = deadline2 - now;
    
    let days = Math.floor(diff2 / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff2 % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff2 % (1000 * 60)) / 1000);

    let daysText = days === 1 ? 'day' : 'days';
    let hoursText = hours === 1 ? 'hour' : 'hours';
    let minutesText = minutes === 1 ? 'minute' : 'minutes';
    let secondsText = seconds === 1 ? 'second' : 'seconds';

    document.getElementById("timer2").innerHTML = days+daysText+ ' ' + hours +hoursText +' '+ minutes +minutesText +' ' + seconds +secondsText + '.';;

    if (diff2 < 0) {
        clearInterval(b);
        document.getElementById("timer2").innerHTML = "BID FOR THIS ITEM IS OVER";
        document.querySelector(".input-field").disabled = true;
        document.querySelector(".bid_button").disabled = true;
    }
}, 1000);

let deadline3 = new Date("Oct 27, 2023 22:00:00").getTime()
let c = setInterval(function(){
    let now = new Date().getTime();

    let diff3 = deadline3 - now;
    
    let days = Math.floor(diff3 / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff3 % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff3 % (1000 * 60)) / 1000);

    let daysText = days === 1 ? 'day' : 'days';
    let hoursText = hours === 1 ? 'hour' : 'hours';
    let minutesText = minutes === 1 ? 'minute' : 'minutes';
    let secondsText = seconds === 1 ? 'second' : 'seconds';

    document.getElementById("timer3").innerHTML = days+daysText+ ' ' + hours +hoursText +' '+ minutes +minutesText +' ' + seconds +secondsText + '.';;

    if (diff3 < 0) {
        clearInterval(c);
        document.getElementById("timer3").innerHTML = "BID FOR THIS ITEM IS OVER";
        document.querySelector(".input-field").disabled = true;
        document.querySelector(".bid_button").disabled = true;     
    }
}, 1000);

let deadline4 = new Date("Oct 30, 2023 12:34:00").getTime()
let d = setInterval(function(){
    let now = new Date().getTime();

    let diff4 = deadline4 - now;
    
    let days = Math.floor(diff4 / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff4 % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff4 % (1000 * 60)) / 1000);

    let daysText = days === 1 ? 'day' : 'days';
    let hoursText = hours === 1 ? 'hour' : 'hours';
    let minutesText = minutes === 1 ? 'minute' : 'minutes';
    let secondsText = seconds === 1 ? 'second' : 'seconds';

    document.getElementById("timer4").innerHTML = days+daysText+ ' ' + hours +hoursText +' '+ minutes +minutesText +' ' + seconds +secondsText + '.';;

    if (diff4 < 0) {
        clearInterval(d);
        document.getElementById("timer4").innerHTML = "BID FOR THIS ITEM IS OVER";
        document.querySelector(".input-field").disabled = true;
        document.querySelector(".bid_button").disabled = true;     
    }
}, 1000);

let deadline5 = new Date("Dec 30, 2024 12:34:00").getTime()
let e = setInterval(function(){
    let now = new Date().getTime();

    let diff5 = deadline5 - now;
    
    let days = Math.floor(diff5 / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff5 % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff5 % (1000 * 60)) / 1000);

    let daysText = days === 1 ? 'day' : 'days';
    let hoursText = hours === 1 ? 'hour' : 'hours';
    let minutesText = minutes === 1 ? 'minute' : 'minutes';
    let secondsText = seconds === 1 ? 'second' : 'seconds';

    document.getElementById("timer5").innerHTML = days+daysText+ ' ' + hours +hoursText +' '+ minutes +minutesText +' ' + seconds +secondsText + '.';;

    if (diff5 < 0) {
        clearInterval(e);
        document.getElementById("timer5").innerHTML = "BID FOR THIS ITEM IS OVER";
        document.querySelector(".input-field").disabled = true;
        document.querySelector(".bid_button").disabled = true;     
    }
}, 1000);

let deadline6 = new Date("Dec 30, 2023 01:00:00").getTime()
let f = setInterval(function(){
    let now = new Date().getTime();

    let diff6 = deadline6 - now;
    
    let days = Math.floor(diff6 / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff6 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff6 % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff6 % (1000 * 60)) / 1000);

    let daysText = days === 1 ? 'day' : 'days';
    let hoursText = hours === 1 ? 'hour' : 'hours';
    let minutesText = minutes === 1 ? 'minute' : 'minutes';
    let secondsText = seconds === 1 ? 'second' : 'seconds';

    document.getElementById("timer6").innerHTML = days+daysText+ ' ' + hours +hoursText +' '+ minutes +minutesText +' ' + seconds +secondsText + '.';;

    if (diff6 < 0) {
        clearInterval(f);
        document.getElementById("timer6").innerHTML = "BID FOR THIS ITEM IS OVER";
        document.querySelector(".input-field").disabled = true;
        document.querySelector(".bid_button").disabled = true;     
    }
}, 1000);

let deadline7 = new Date("Nov 10, 2023 13:12:00").getTime()
let g = setInterval(function(){
    let now = new Date().getTime();

    let diff7 = deadline7 - now;
    
    let days = Math.floor(diff7 / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff7 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff7 % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff7 % (1000 * 60)) / 1000);

    let daysText = days === 1 ? 'day' : 'days';
    let hoursText = hours === 1 ? 'hour' : 'hours';
    let minutesText = minutes === 1 ? 'minute' : 'minutes';
    let secondsText = seconds === 1 ? 'second' : 'seconds';

    document.getElementById("timer7").innerHTML = days+daysText+ ' ' + hours +hoursText +' '+ minutes +minutesText +' ' + seconds +secondsText + '.';;

    if (diff7 < 0) {
        clearInterval(g);
        document.getElementById("timer7").innerHTML = "BID FOR THIS ITEM IS OVER";
        document.querySelector(".input-field").disabled = true;
        document.querySelector(".bid_button").disabled = true;     
    }
}, 1000);

let deadline8 = new Date("Oct 30, 2023 11:33:00").getTime()
let h = setInterval(function(){
    let now = new Date().getTime();

    let diff8 = deadline8 - now;
    
    let days = Math.floor(diff8 / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff8 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff8 % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff8 % (1000 * 60)) / 1000);

    let daysText = days === 1 ? 'day' : 'days';
    let hoursText = hours === 1 ? 'hour' : 'hours';
    let minutesText = minutes === 1 ? 'minute' : 'minutes';
    let secondsText = seconds === 1 ? 'second' : 'seconds';

    document.getElementById("timer8").innerHTML = days+daysText+ ' ' + hours +hoursText +' '+ minutes +minutesText +' ' + seconds +secondsText + '.';;

    if (diff8 < 0) {
        clearInterval(h);
        document.getElementById("timer8").innerHTML = "BID FOR THIS ITEM IS OVER";
        document.querySelector(".input-field").disabled = true;
        document.querySelector(".bid_button").disabled = true;     
    }
}, 1000);

let deadline9 = new Date("Jan 01, 2024 05:34:00").getTime()
let x = setInterval(function(){
    let now = new Date().getTime();

    let diff9 = deadline9 - now;
    
    let days = Math.floor(diff9 / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff9 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff9 % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff9 % (1000 * 60)) / 1000);

    let daysText = days === 1 ? 'day' : 'days';
    let hoursText = hours === 1 ? 'hour' : 'hours';
    let minutesText = minutes === 1 ? 'minute' : 'minutes';
    let secondsText = seconds === 1 ? 'second' : 'seconds';

    document.getElementById("timer9").innerHTML = days+daysText+ ' ' + hours +hoursText +' '+ minutes +minutesText +' ' + seconds +secondsText + '.';;

    if (differ < 0) {
        clearInterval(x);
        document.getElementById("timer9").innerHTML = "BID FOR THIS ITEM IS OVER";
        document.querySelector(".input-field").disabled = true;
        document.querySelector(".bid_button").disabled = true;     
    }
}, 1000);
