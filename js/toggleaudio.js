
document.getElementById("audioicon").addEventListener("click",function(){
    var audiopacity = document.getElementById("audio1").style.opacity;
    if(audiopacity=="0.5"){
        document.getElementById("audiotest").play();
        document.getElementById("audio1").style.opacity="1";
    }
    else {
        document.getElementById("audiotest").pause();
        document.getElementById("audio1").style.opacity="0.5";
    }
});