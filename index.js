// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick() {
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play()
    
// }

// Detecting Button Press
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // var inner = this.innerHTML;
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML)
    });
}

// Detecting Key Press
document.addEventListener("keypress",function(event){
    // alert(event+" key was pressed!");
    makeSound(event.key);
    buttonAnimation(event.key)
})

function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play()
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play()
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play()
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play()
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play()
        case "k":
            var audio = new Audio("sounds/kick.mp3");
            audio.play()
        case "l":
            var audio = new Audio("sounds/crash.mp3");
            audio.play()
        default:
            console.log(this.innerHTML)
    }
}

function buttonAnimation(currentKey){
    activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}