var number=document.querySelectorAll(".drum").length;

for(i=0;i<number;i++){
    
document.querySelectorAll("button")[i].addEventListener("click",function(){
    var button=this.innerHTML;
    makesound(button);
    Animation(button);
});

}


document.addEventListener("keypress",function(event){
makesound(event.key);
Animation(event.key);
})





function makesound(key){
    switch(key){
        case "w":
            var tom1=new Audio('./sounds/tom-1.mp3')
            tom1.play();
            break;

            case "a":
                var tom2=new Audio('./sounds/tom-2.mp3')
                tom2.play();
                break;

                case "s":
                    var tom3=new Audio('./sounds/tom-3.mp3')
                    tom3.play();
                    break;

                    case "d":
                        var tom4=new Audio('./sounds/tom-4.mp3')
                        tom4.play();
                        break;

                        case "j":
                            var crash=new Audio('./sounds/crash.mp3')
                            crash.play();
                            break;

                            case "k":
                                var kickbass=new Audio('./sounds/kick-bass.mp3')
                                kickbass.play();
                                break;

                                case "l":
                                    var snare=new Audio('./sounds/snare.mp3')
                                    snare.play();
                                    break;

                                    default: console.log(button)


    }
}


function Animation(currentkey){
    var joker=document.querySelector("."+currentkey);
    joker.classList.add("pressed");
    setTimeout(function(){
        joker.classList.remove("pressed");
    },300);
}

