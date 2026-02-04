let name = prompt("What is your name?");

if(name=== null){
    name = "Dave The Magical Cheese Wizard"

}else if (name.trim() === ""){
    name = "Nameless Wonder";
}else{
    name.trim()
}

const nameSpawn = document.getElementById("studentName");
nameSpawn.innerText = name;

let luckyInput = prompt("pick a lucky number (0-100)");
let luckyNumber = parseInt(luckyInput);

function luckyNumFix() {
    let luckyOutput = "";
    if (isNaN(luckyNumber)) {
        return "You don't have a lucky number";
    } else {
        return luckyNumber.toString();
    }
}

let luckyOutput = luckyNumFix();

const luckyNumberSpan = document.getElementById("luckyNumber");
luckyNumberSpan.innerText = luckyOutput;

const facts = [name, luckyOutput];

const statusMessageSpan = document.getElementById("statusMessage");


console.log(`Your name is ${name}`);