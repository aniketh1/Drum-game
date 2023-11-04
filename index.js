var audio = [new Audio("./sounds/crash.mp3"),
 new Audio("./sounds/kick-bass.mp3"),
 new Audio("./sounds/snare.mp3"),
 new Audio("./sounds/tom-1.mp3"),
 new Audio("./sounds/tom-2.mp3"),
 new Audio("./sounds/tom-3.mp3"),
 new Audio("./sounds/tom-4.mp3"),
]
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    audio[i].play();
    var buttonValue = document.querySelectorAll("button")[i].innerHTML;
    buttonPressed(buttonValue);
    
});
    document.addEventListener("keydown",function(e){
    switch (e.key) {
        case "w":
            audio[0].play();
            buttonPressed(e.key);
            
            break;
        case "a":
            audio[1].play();
            buttonPressed(e.key);
            break;
        case "s":
            audio[2].play();
            buttonPressed(e.key);
            break;
        case "d":
            audio[3].play();
            buttonPressed(e.key);
            break;
        case "j":
            audio[4].play();
            buttonPressed(e.key);
            break;
        case "k":
            audio[5].play();
            buttonPressed(e.key);
            break;
        case "l":
            audio[6].play();
            buttonPressed(e.key);
            break;
    
        default:
            break;
    }
    
    
});
}

function buttonPressed(animation){
    console.log("clicked")
    var btn = document.querySelector("."+animation);
    btn.classList.add("pressed");   
    setTimeout(function(){
        btn.classList.remove("pressed");
    },200);
    
}

// new Audio("./sounds/crash.mp3")
