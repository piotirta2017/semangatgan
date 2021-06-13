var menu = document.getElementById("menu");
var vrcam = document.querySelector("#vrcam");
var vrcur = document.querySelector("#vrcur");
var zoomcam = document.querySelector("#zoomcam");
id_skybox = document.getElementById('skybox').getAttribute('src');
menu.addEventListener("click", function() {
  menu.classList.toggle("change");
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
    } else {
    x.style.display = "block";
  }
})

this.container = document.getElementById("myLinks")
cam = document.getElementById("camrig")
this.menuLink = document.querySelectorAll(" .menu_item")

for (e=0; e< this.menuLink.length; e++) {
  this.menuLink[e].addEventListener("click", function(e)
  {
    s = e.target.getAttribute("data-to"),
    a = document.querySelector(s);
    cam.components["checkpoint-controls"].data.mode = "teleport",
    setTimeout(function() {
      var e = new Event("click");
      a.dispatchEvent(e),
      setTimeout(function() {
        cam.components["checkpoint-controls"].data.mode = "animate",
        document.getElementById("menu").dispatchEvent(e);
      }, 100)
    }, 50)
  }
  )
}

this.containers = document.getElementById("zxc")
this.menuLink2 = document.querySelectorAll(" .menu_item3")
for (e=0; e< this.menuLink2.length; e++) {
  this.menuLink2[e].addEventListener("click", function(e)
  {
    s = e.target.getAttribute("data-to"),
    a = document.querySelector(s);
    b = "group-"+document.getElementById('skybox').getAttribute('src').slice(1);
    document.getElementById(b).setAttribute("scale","0 0 0");
    setTimeout(function() {
      var e = new Event("click");
      a.dispatchEvent(e)
    }, 100)
  }
)
}

var block = document.getElementsByClassName("content--fill");
for (var i = 0; i < block.length; i++) {
    block[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
};

var w = document.getElementById("map");
var x = document.getElementsByClassName("mapitem");
x[0].className = x[0].className.replace("notonscene","onscene")
w.addEventListener("click", function() {
  var y = document.getElementById("mapopens");
  if (y.style.display === "none") {
    y.style.display = "flex";
  }
  else if (y.style.display === "flex") {
    y.style.display = "none";
  }
});



this.xs = document.querySelectorAll(" .mapitem")
this.group_point = document.getElementsByClassName(" map360")
for (var e = 0; e < group_point.length; e++) {
  if (group_point[e].classList.contains("map360-on")) {
    var current = document.getElementsByClassName(" onscene");
    if (current.length != 0) {
      current[0].className = current[0].className.replace(" onscene", " notonscene");
    }
    x[e].className = x[e].className.replace(" notonscene"," onscene");
  }
};

for (var e = 0; e < this.xs.length; e++) {
  this.xs[e].addEventListener("click", function (e) {
    s = e.target.getAttribute("data-to"),
    a = document.querySelector(s);
    b = "group-"+document.getElementById('skybox').getAttribute('src').slice(1);
    document.getElementById(b).setAttribute("scale","0 0 0");
    setTimeout(function() {
      var e = new Event("click");
      a.dispatchEvent(e)
    }, 100)
    document.getElementById("mapopens").style.display="none";
});
};

// Added
document.getElementById('btn_mulaiTour').addEventListener('click', function() {
  document.getElementById('camrig').setAttribute('position','-28 8 48');
})


document.querySelector('a-scene').addEventListener('enter-vr', function () {
  let vrcur = document.createElement('a-entity');
  setAttributes(vrcur, {"id":"vrcur", "cursor":"fuse:true; fuseTimeout:1000",
                "geometry":"primitive:ring; radiusInner:0.01; radiusOuter:0.02",
                "position":"0 0 -1.4",
                "material":"shader:flat; color:#84ff68",
                "animation__mouseenter":"property:scale; from:1 1 1; to:2 2 2; startEvents:mouseenter; pauseEvents:mouseleave; dir:reverse; dur:1000; loop:1"
  })
  zoomcam.appendChild(vrcur);
  if (id_skybox === "#point3") {
    document.getElementById('camrig').setAttribute('position','-28 8 80');
    document.getElementById('tutor_nav').setAttribute('visible', true);
  }
});
document.querySelector('a-scene').addEventListener('exit-vr', function () {
  zoomcam.innerHTML="";
  document.getElementById('tutor_nav').setAttribute('visible', false);
});
