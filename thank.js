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
    if(counter2 > 2){
    document.getElementById("card").classList.add("move")
}
if(counter2 > 7){
    document.getElementById("cardb").classList.add("moveb")
}
if(counter2 > 13){
    document.getElementById("cardq").classList.add("moveq")
}
}
