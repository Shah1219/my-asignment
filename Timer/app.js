var hour = document.getElementById('hour');
var min = document.getElementById('Min');
var sec = document.getElementById('sec');
var heading1 = document.getElementById('heading1');
var heading2 = document.getElementById('heading2');
var heading3 = document.getElementById('heading3');
var colon1 = document.getElementById("colon1");
var colon2 = document.getElementById("colon2")
var interval

function submit(){
    heading1.innerHTML = hour.value 
    colon1.innerHTML = ":"
    heading2.innerHTML = Min.value  
    colon2.innerHTML = ":"
    heading3.innerHTML = sec.value

   
}
function timer(){
    heading3.innerHTML--
    if(heading3.innerHTML <= 00){
        heading2.innerHTML--
        heading3.innerHTML = 59
     
    }else if(heading2.innerHTML = 0){
        heading1.innerHTML--
    }
    // else if(heading2.innerHTML == 0) {
    //     heading1--
    //     heading2 = 59
    // }
    console.log(heading2.innerHTML)
}


function start(){
    interval = setInterval(timer,999)
}