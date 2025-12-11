const imgArray = ["mashedpotatoes.webp","turkey.gif","pumpkinpie.jpeg"];
const pArray = ["Mashed potatoes are my favoite thanksgiving food. It's kinda like warm icecreame, but without suger.","Whats thanksgiving without a turkey? Can't go wrong with this one.","Yo recomiendo que ellos coman la tarta de calabaza porque es muy amable y delicioso."]
let counter = 0
function increment(val){
    if(val == "plus"){
        counter +=1;
    if(counter >= imgArray.length){
        counter = 0
    }
    document.getElementById("dishImg").src = imgArray[counter];
    document.getElementById("dishParagraph").innerText = pArray[counter];
    }else{
        counter -=1;
    if(counter < 0){
        counter = imgArray.length -1
    }
    document.getElementById("dishImg").src = imgArray[counter];
    document.getElementById("dishParagraph").innerText = pArray[counter];
    }
    
}
let counter2 = 0
let bruh = 0
function donate(){
    counter2 ++
    bruh = 2 + counter2
    bruh = "$" + bruh
    document.getElementById("jMoney").innerText = bruh
    if(counter2 == 2){
    alert("Thats enough.")
}
if(counter2 == 4){
    alert("I said thats enough.")
}
if(counter2 == 6){
    let wrongAnswer = prompt("Why do you want to give her money anyways?")
    alert("wrong answer.")
}
if(counter2 == 8){
    alert("fine. you leave me no choice.")
    document.getElementById("card").classList.add("move")
}
if(counter2 == 10){
    alert("i said STOP.")
}
if(counter2 == 14){
    alert("cmon bro. its nots that deep. just stop clicking the button")
    document.getElementById("cardb").classList.add("moveb")
}
if(counter2 == 17){
    alert("im warning you.")
}
if(counter2 == 21){
    document.getElementById("cardq").classList.add("moveq")
}   
if(counter2 == 26){
    alert("if you dont stop ill crash the sight")
} 
if(counter2 == 30){
    alert("you brought this on yourself")
    document.getElementById("jMoney").innerText = "the money was never real."
    while(true){
        print("lolz")
        
    }
}   
}


