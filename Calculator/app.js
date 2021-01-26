function getNumber(num){
    var result = document.getElementById("input");
    result.value += num;
}

function clearResult(){
    var result = document.getElementById("input");
    result.value =""   
}
function getResult(){
    var result = document.getElementById("input");
    result.value = eval(result.value)

}
    
