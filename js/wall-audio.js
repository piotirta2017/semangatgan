AFRAME.registerComponent('wall-audio', {
    schema: {

    },
    init: async function () {
        var el = this.el; 
        console.log(el);
        el.addEventListener('click', function (e) {
            if(el.classList.contains("pause")){
                if(document.getElementsByClassName("play").length !== 0){
                    var playing = document.getElementsByClassName("play")[0];
                    playing.components.sound.stopSound();
                    playing.classList.remove("play");
                    playing.classList.add("pause");
                    console.log(playing)
                }
                el.components.sound.playSound();
                el.classList.remove("pause");
                el.classList.add("play");
                console.log(document.getElementsByClassName("play").length);
                console.log(el);
            }
            else if(el.classList.contains("play")){
                el.components.sound.stopSound();;
                el.classList.remove("play");
                el.classList.add("pause");
                console.log(el);
            }

        });
    },});