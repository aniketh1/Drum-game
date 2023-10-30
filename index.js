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
    
});
    document.addEventListener("keydown",function(e){
    switch (e.key) {
        case "w":
            audio[0].play();
            break;
        case "a":
            audio[1].play();
            break;
        case "s":
            audio[2].play();
            break;
        case "d":
            audio[3].play();
            break;
        case "j":
            audio[4].play();
            break;
        case "k":
            audio[5].play();
            break;
        case "l":
            audio[6].play();
            break;
    
        default:
            break;
    }
    
});
}

// new Audio("./sounds/crash.mp3")
