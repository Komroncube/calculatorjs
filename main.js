function run()
{
    document.getElementById("number1").innerHTML = getRandomInt(10);
    document.getElementById("number2").innerHTML = getRandomInt(10);
}
function check()
{
    var num1 = document.getElementById("number1").innerHTML;
    var num2 = document.getElementById("number2").innerHTML;
    var op = document.getElementById("operation").value;
    var controlNumber = document.getElementById("result").value;
    try{
        res = Math.floor(eval(num1+op+num2))
        console.log(controlNumber)
        console.log(res)
        console.log(op)
        if(res == controlNumber)
        {
            alert("Javob to'g'ri")
        }
        else{
            alert("Javob xato")
    
        }
    }
    catch{
        alert("system error")
    }
    

}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}