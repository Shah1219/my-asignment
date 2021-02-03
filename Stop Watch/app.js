var min = 0;
var sec = 0;
var msec = 0;
var minute = document.getElementById("min");
var second = document.getElementById("sec");
var msecond = document.getElementById("msec");

var interval

function timer(){
    msec++;
    msecond.innerHTML = msec
    if(msec == 99){
        sec++
        second.innerHTML = sec
        msec = ""
    }else if(sec > 59){
        min++
        minute.innerHTML = min
        sec = ""
    }
    document.getElementById("started").disabled = true
}
function start(){
    interval = setInterval(timer, 10)
    
}
function pause(){
    clearInterval(interval)
    document.getElementById("started").disabled = false
}
function stop(){
    msec = 0
    sec = 0
    min = 0
    minute.innerHTML = min
    second.innerHTML = sec
    msecond.innerHTML = msec
    pause() 

}