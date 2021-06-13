//SCREEN SIZE // Warn: Move to header
AFRAME.registerComponent('hotspots',{
  init:function(){
      this.el.addEventListener('reloadspots',function(evt){
      
      //get the entire current spot group and scale it to 0
      var currspotgroup=document.getElementById(evt.detail.currspots);
      currspotgroup.setAttribute("scale","0 0 0");
      
      //get the entire new spot group and scale it to 1
      var newspotgroup=document.getElementById(evt.detail.newspots);
      newspotgroup.setAttribute("scale","1 1 1");
    });
  }
});
// Warn: Move to header
AFRAME.registerComponent('spot',{
  schema:{
    linkto:{type:"string",default:""},
    spotgroup:{type:"string",default:""}
  },
  init:function(){
    
    //add image source of hotspot icon
    this.el.setAttribute("src","./img/hotspot.png");
    this.el.setAttribute("scale","1 1 1");
    this.el.setAttribute("height","3");
    this.el.setAttribute("width","3");
    this.el.setAttribute("visible","true");
    this.el.setAttribute("look-at","#camrig");
    
    var data=this.data;
    
    this.el.addEventListener('click',function(){
      //set the skybox source to the new image as per the spot
      var sky=document.getElementById("skybox");
      sky.setAttribute("src",data.linkto);
      
      var spotcomp=document.getElementById("spots");
      var currspots=this.parentElement.getAttribute("id");
      //create event for spots component to change the spots data
      spotcomp.emit('reloadspots',{newspots:data.spotgroup,currspots:currspots});
      
      

      
      asddd();
    });
  }
});

function asddd() {
let controls = document.querySelector('a-camera').components['look-controls']
var aaa = document.getElementById("camrig");
var abc = document.getElementById("zoomcam");
var asd = document.getElementById("asd");
var zzz = document.getElementById("zzz")
var tes = document.getElementById("tes");
var map360 = document.getElementById("map");
var audioicon = document.getElementById("audioicon");
var quiz = document.getElementById("quiz");
var credit = document.getElementById("credit");
var cur = document.getElementById('cur');
grup_point = document.getElementById("skybox");
id_skybox = grup_point.getAttribute("src");

document.getElementById("audiotest").pause();
document.getElementById("audio1").style.opacity="0.5";
document.getElementById("mapopens").style.display="none";
abc.setAttribute('position', '0 1.6 0')
aaa.setAttribute('position','-28 8 52')
controls.pitchObject.rotation.x = 0
controls.yawObject.rotation.y = 0
if (id_skybox === "#point3") {
  tes.style.display = "none";
  asd.style.display = "block";
  zzz.style.display = "block";
  audioicon.style.display = "block";
  quiz.style.display = "none";
  credit.style.display = "none";
  map360.style.display = "none";
  abc.setAttribute("look-controls","enabled: true")
} 

else if (id_skybox === "#point4") {
  tes.style.display = "none";
  asd.style.display = "none";
  zzz.style.display = "none";
  audioicon.style.display = "none";
  quiz.style.display = "block";
  credit.style.display = "none";
  map360.style.display = "none";
  abc.setAttribute("look-controls","enabled: true")
} 

else if (id_skybox === "#point5") {
  tes.style.display = "none";
  asd.style.display = "none";
  zzz.style.display = "none";
  audioicon.style.display = "none";
  quiz.style.display = "none";
  credit.style.display = "block";
  map360.style.display = "none";
  abc.setAttribute("look-controls","enabled: true")
} 

else if (id_skybox.indexOf("point2") !== -1) {
  tes.style.display = "none";
  asd.style.display = "none";
  zzz.style.display = "block";
  audioicon.style.display = "block";
  quiz.style.display = "none";
  credit.style.display = "none";
  map360.style.display = "flex";
  abc.setAttribute("look-controls","enabled: true")
  var x = document.getElementsByClassName("mapitem");
  var map360class = document.getElementsByClassName("map360");
  var mapon360class = document.getElementsByClassName("map360-on");
  if (document.getElementsByClassName(" onscene").length != 0) {
    document.getElementsByClassName(" onscene")[0].className = document.getElementsByClassName("onscene")[0].className.replace("onscene", "notonscene");
  }
  if (mapon360class.length != 0) {
    mapon360class[0].classList.remove("map360-on")
  }
  for (var e=0; e<map360class.length; e++) {
    if (id_skybox.substring(1) === map360class[e].getAttribute("id")) {
      map360class[e].classList.add("map360-on")
      x[e].classList.replace("notonscene","onscene")
    }
  }
  
} 

else if (id_skybox === "#point1") {
  tes.style.display = "block";
  asd.style.display = "none";
  zzz.style.display = "none";
  audioicon.style.display = "none";
  quiz.style.display = "none";
  credit.style.display = "none";
  map360.style.display = "none";
  abc.setAttribute("look-controls","enabled: true")
}

}

var screenSize = window.matchMedia("(min-width: 768px)");

//FUNCTION BUNDLE SETATTRIBUT
function setAttributes(el, attrs) {
  for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
  }
}

//FUNCTION FETCHMAP API
function fetchMap(jsonURL) {

  return fetch(jsonURL).then(res => res.json());

}

//FUNCTION GET DATA FROM API
async function loadJSON() {  
  let x = await fetchMap('./json/test.json');
  x.entity.forEach(element => {
      const test = document.createElement('a-entity');
      setAttributes(test, {"id": element.id, "mixin": element.mixin, "geometry": element.geometry, "position": element.position} );
      document.getElementById("entity_group").appendChild(test);
  });          
      
  let flr = await fetchMap('./json/floor.json');    
  flr.floor.forEach(element => {
      const test = document.createElement('a-image');
      setAttributes(test, {"id":element.id, "src": "./img/footsteps2.jpg", "position": element.position, "rotation": "-90 0 0", "scale" : "8 8 1", "checkpoint": "offset: 0 8 1", "visible":"true"} );
      document.getElementById("step").appendChild(test);
  });
  let wall_object = await fetchMap('./json/wall-object.json');
  wall_object.wall_object.forEach(element => {
      const object = document.createElement('a-box');
      setAttributes(object, {"id": element.id, "scale": element.scale, "material": element.material, "geometry": element.geometry, "rotation": element.rotation, "position": element.position});
      document.getElementById("wall_object").appendChild(object);
  });
  let wall_text = await fetchMap('./json/wall-text.json');
  wall_text.wall_text.forEach(element => {
      const text = document.createElement('a-entity');
      setAttributes(text, {"id": element.id, "position": element.position, "rotation": element.rotation, "text": element.text});
      document.getElementById("wall_text").appendChild(text);
  });
  let floor = await fetchMap('./json/floor.json');
  id_floor = document.getElementById('floor');
  src_floor = id_floor.getAttribute('src');
  floor.floor.forEach(element => {
      const flr = document.createElement('a-gltf-model');
      setAttributes(flr, {"src":src_floor, "position": element.position, "checkpoint": "offset: 0 8 1"})
      document.getElementById("gltffloor").appendChild(flr);
  });
  floor.atap.forEach(element => {
    const flr = document.createElement('a-gltf-model');
    setAttributes(flr, {"src":src_floor, "position": element.position})
    document.getElementById("gltffloor").appendChild(flr);
  });
  let info_text1 = await fetchMap('./json/info.json');
  info_text1.info_text1.forEach(element => {
    const els = document.createElement('a-plane');
    setAttributes(els, {"position":element.position, "scale":"25 15 1", "class":"info-text", "visible":"false"})
    document.getElementById("info_text1").appendChild(els);
  });
  let info_spot1 = await fetchMap('./json/info.json');
  info_spot1.info1.forEach(element => {
    const el = document.createElement('a-image');
    setAttributes(el, {"src":"./img/info_spot.png", "position":element.position, "rotation":"", "infospot":""})
    this.index = el.index
    el.addEventListener("click", function() {
      let mam = document.getElementById("info_text1").childNodes[0];
      mam.setAttribute("visible", !mam.getAttribute("visible"))
      console.log("clicked");
    })
    document.getElementById("info_spot1").appendChild(el);
  });
}
  
  //CALL GET API FUNCTION
  loadJSON();

    