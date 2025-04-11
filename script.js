
// Dollar
const NairaNum = document.getElementById("Naira");
const Output = document.getElementById("Out");
const mybutton = document.getElementById("btn");
const DollarNum = document.getElementById("Dollar");

if (mybutton) {
    mybutton.addEventListener("click", function DollarConverter() {
        const number1Int = parseInt(NairaNum.value);
        const number2Int = parseInt(DollarNum.value);
        Result = number1Int * number2Int;
        Output.textContent = Result.toString();
    });
}

const Naira = document.getElementById("Naira2");
const Pound = document.getElementById("Pound");
const Output2 = document.getElementById("Out2");
const mybutton2 = document.getElementById("btn2")

if (mybutton2) {

    let Result2 = 0;
    mybutton2.addEventListener("click", function PoundConverter() {
        const number1Int = parseInt(Naira.value);
        const number2Int = parseInt(Pound.value);
        console.log(number1Int)
        Result2 = number1Int * number2Int;
        Output2.textContent = Result2.toString();
    });
}


const Number1 = document.getElementById("Num1");
const Number2 = document.getElementById("Num2");
const Output3 = document.getElementById("Out3");
const mybutton3 = document.getElementById("btn3");

if (mybutton3) {

    let Result3 = 0;
    mybutton3.addEventListener("click", function CanadianConverter() {
        const number1Int = parseInt(Number1.value);
        const number2Int = parseInt(Number2.value);
        Result3 = number1Int * number2Int;
        Output3.textContent = Result3.toString();
    });
}


const Euro = document.getElementById("Euro");
const EuroNum = document.getElementById("EuroNum");
const Output4 = document.getElementById("Out4");
const mybutton4 = document.getElementById("btn4");

if (mybutton4) {

    let Result4 = 0;
    mybutton4.addEventListener("click", function EuroConverter() {
        const number1Int = parseInt(Euro.value);
        const number2Int = parseInt(EuroNum.value);
        Result4 = number1Int * number2Int;
        Output4.textContent = Result4.toString();
    });
}




const CD  = document.getElementById("CD");
const CdNum = document.getElementById("CdNum");
const Output5 = document.getElementById("Out5");
const mybutton5 = document.getElementById("btn5");


if (mybutton5) {
    let Result5 = 0;
    mybutton5.addEventListener("click", function CdConverter(){
        const number1Int = parseInt(CD.value);
        const number2Int = parseInt(CdNum.value);
        Result5 = number1Int * number2Int;
        Output5.textContent = Result5.toString();
    });
    
}
