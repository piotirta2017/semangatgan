//SCREEN SIZE
// AFRAME.registerComponent('blinkanimation', {
//   schema: {
// 		pos: {type: 'vec3'},
// 		scale: {type: 'vec3'},
// 		dur: {type: 'number', default: 1500},
// 		from: {type: 'vec3'},
// 		to: {type: 'vec3'}
// 	},
//   init: function() {
//     var el = this.el;
//     var data = this.data;
//     var camera = document.querySelector('#zoomcam');
//     // CREATE A TRANSPARENT BLACK CIRCLE
// 		var blink = document.createElement('a-circle');
// 		blink.setAttribute('material', {
// 			color: 'aqua',
// 			opacity: 1,
// 		});
//     blink.setAttribute('position', {x: 0, y: 0, z: -0.1});
//     blink.setAttribute('scale', {x: 0, y: 0, z: 0});
// 		camera.appendChild(blink);

//     el.addEventListener('click', function () {
//       blink.setAttribute('animation__1', {
// 				property: 'scale',
// 				from: {x: 0.1, y: 0.1, z: 0.1},
// 				to: {x: 0, y: 0, z: 0},
// 				dur: 1000
// 			});
//       // blink.setAttribute('animation__2', {
// 			// 	property: 'scale',
// 			// 	from: {x: 10, y: 10, z: 10},
// 			// 	to: {x: 0, y: 0, z: 0},
// 			// 	dur: 500
// 			// });
//       setTimeout(function () {
// 				// EMIT CUSTOM EVENT TO TRIGGER THE FADE-OUT ANIMATION
// 				el.emit('scale-changed');
// 			}, 1000);
//     });
//   }
// }) 


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

  AFRAME.registerComponent('spot',{
    schema:{
      linkto:{type:"string",default:""},
      spotgroup:{type:"string",default:""}
    },
    init:function(){
      
      //add image source of hotspot icon
      this.el.setAttribute("src","https://raw.githubusercontent.com/virtualtouralian/vtalian_file/main/img/icons/hotspot.png");
      this.el.setAttribute("animation__scale","property: scale; to: 1.1 1.1 1.1; dur: 200; startEvents: mouseenter");
      this.el.setAttribute("animation__scale_reverse","property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave");
      this.el.setAttribute("scale","1 1 1");
      this.el.setAttribute("height","6");
      this.el.setAttribute("width","6");
      this.el.setAttribute("visible","true");
      
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
  let controls = document.querySelector('#zoomcam').components['look-controls']
  var camrig = document.getElementById("camrig");
  var cam1 = document.getElementById("zoomcam");
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
  cam1.setAttribute('position', '0 1.6 0')
  camrig.setAttribute('position','-28 8 48')
  controls.pitchObject.rotation.x = 0
  controls.yawObject.rotation.y = 0
  if (id_skybox === "#point3") {
    camrig.setAttribute('kinematic-body', '')
    tes.style.display = "none";
    asd.style.display = "block";
    zzz.style.display = "block";
    audioicon.style.display = "block";
    quiz.style.display = "none";
    credit.style.display = "none";
    map360.style.display = "none";
    document.querySelector('.a-enter-vr').style.display="block";
  } 
  
  else if (id_skybox === "#point4") {
    tes.style.display = "none";
    asd.style.display = "none";
    zzz.style.display = "none";
    audioicon.style.display = "none";
    quiz.style.display = "block";
    credit.style.display = "none";
    map360.style.display = "none";
    document.querySelector('.a-enter-vr').style.display="none";
  } 
  
  else if (id_skybox === "#point5") {
    tes.style.display = "none";
    asd.style.display = "none";
    zzz.style.display = "none";
    audioicon.style.display = "none";
    quiz.style.display = "none";
    credit.style.display = "block";
    map360.style.display = "none";
    document.querySelector('.a-enter-vr').style.display="none";
  } 
  
  else if (id_skybox.indexOf("point2") !== -1) {
    tes.style.display = "none";
    asd.style.display = "none";
    zzz.style.display = "block";
    audioicon.style.display = "block";
    quiz.style.display = "none";
    credit.style.display = "none";
    map360.style.display = "flex";
    document.querySelector('.a-enter-vr').style.display="block";
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
    document.querySelector('a-scene').exitVR();
    document.querySelector('.a-enter-vr').style.display="none";
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
  
    return fetch(jsonURL, {
      credentials: 'omit'
    }).then(res => res.json());
  
  }
  
  //FUNCTION GET DATA FROM API
  async function loadJSON() {  
    let x = await fetchMap('https://raw.githubusercontent.com/virtualtouralian/vtalian_file/main/json/test.json');
    x.entity.forEach(element => {
        const test = document.createElement('a-entity');
        setAttributes(test, {"id": element.id, "mixin": element.mixin, "geometry": element.geometry, "position": element.position, "static-body":""} );
        document.getElementById("entity_group").appendChild(test);
    });    
    
    let butterfly_model = await fetchMap('https://raw.githubusercontent.com/virtualtouralian/vtalian_file/main/json/butterfly.json');
    butterfly_model.butterfly.forEach(element => {
      const btf_modelObj = document.createElement('a-asset-item');
      setAttributes(btf_modelObj, {"id": element.modelId + "-obj", "src": element.modelObj, "preload":""});
      document.getElementById("butterfly_model").appendChild(btf_modelObj);
    });
    butterfly_model.butterfly.forEach(element => {
      const btf_modelMtl = document.createElement('a-asset-item');
      setAttributes(btf_modelMtl, {"id": element.modelId + "-mtl", "src": element.modelMtl, "preload":""});
      document.getElementById("butterfly_model").appendChild(btf_modelMtl);
    });
        
    let flr = await fetchMap('https://raw.githubusercontent.com/virtualtouralian/vtalian_file/main/json/floor.json');    
    flr.floor.forEach(element => {
        const test = document.createElement('a-plane');
        setAttributes(test, {"id":element.id, "position": element.position, "rotation": "-90 0 0", "scale" : "8 8 1", "checkpoint": "offset: 0 8 1", "visible":"true", "static-body":""} );
        document.getElementById("step").appendChild(test);
    });
    let wall_object = await fetchMap('https://raw.githubusercontent.com/virtualtouralian/vtalian_file/main/json/wall-object.json');
    wall_object.wall_object.forEach(element => {
        const object = document.createElement('a-box');
        setAttributes(object, {"id": element.id, "scale": element.scale, "material": element.material, "geometry": element.geometry, "rotation": element.rotation, "position": element.position});
        document.getElementById("wall_object").appendChild(object);
    });
    let wall_text = await fetchMap('https://raw.githubusercontent.com/virtualtouralian/vtalian_file/main/json/wall-text.json');
    wall_text.wall_text.forEach(element => {
        const text = document.createElement('a-entity');
        setAttributes(text, {"id": element.id, "position": element.position, "rotation": element.rotation, "text": element.text});
        document.getElementById("wall_text").appendChild(text);
    });
    let wall_frame = await fetchMap('https://raw.githubusercontent.com/virtualtouralian/vtalian_file/main/json/wall_frame.json');
    wall_frame.wall_frame.forEach(element => {
      const wf = document.createElement('a-obj-model');
      setAttributes(wf, {"id": element.id, "id":element.id, "src":"#objWF","mtl":"#mtlWF", "position":element.position, "rotation":element.rotation, "scale":element.scale})
      document.getElementById("wall_frame").appendChild(wf);
    });
    let floor = await fetchMap('https://raw.githubusercontent.com/virtualtouralian/vtalian_file/main/json/floor.json');
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

    let panorama = await fetchMap('https://raw.githubusercontent.com/virtualtouralian/vtalian_file/main/json/panorama.json');
    panorama.panorama.forEach(element => {
      const pano = document.createElement('img');
      setAttributes(pano, {"id": element.photoId, "crossorigin":"anonymous", "src": element.src, "class": element.photoClass, "preload": "", "geometry": "radius:2000"})
      document.getElementById("panorama_group").appendChild(pano);
      
      const envPhoto = document.createElement('a-entity');
      setAttributes(envPhoto, {"id": element.envId, "scale": "0 0 0", "class": "spotclass"});
      document.getElementById("panorama_env_group").appendChild(envPhoto);

      //Navigation to Menu
      const navtoMenu = document.createElement('a-entity');
      setAttributes(navtoMenu, {"geometry":"primitive: circle; radius: 8","material":"color: #a8f5ff; shader:flat",
                              "text":"align: center; anchor: center; baseline: center; lineHeight:60; font: dejavu; color:black; value: KEMBALI KE MENU UTAMA; width: 20; wrapCount: 20; zOffset: 0.25", 
                              "rotation":"90 0 0","position":"-28 20 45",
                              "spot":"linkto:#point1;spotgroup:group-point1"})
      document.getElementById(element.envId).appendChild(navtoMenu);
      //
      
      element.photoLink.forEach(childElement => {
        const envLink = document.createElement('a-image');
        setAttributes(envLink, {"id": childElement.id, "spot": childElement.spot, "position": childElement.position})
        document.getElementById(element.envId).appendChild(envLink);
      });
      
      element.photoInfo.forEach(childElement => {
        const envHotspot = document.createElement('a-image');
        setAttributes(envHotspot, {"id": childElement.id, "src":"https://raw.githubusercontent.com/virtualtouralian/vtalian_file/main/img/icons/info_spot.png", "position":childElement.position, "rotation":"", "infospot":"", "look-at":"#camrig", "animation__scale":"property: scale; to: 1.1 1.1 1.1; dur: 200; startEvents: mouseenter", "animation__scale_reverse":"property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"})
        document.getElementById(element.envId).appendChild(envHotspot);
        const getEnvHotspot = document.getElementById(childElement.id);
        getEnvHotspot.addEventListener("click", function(){ 
          const hotspotText = document.createElement('a-plane')
          envHotspot.setAttribute("visible", "false");
          setAttributes(hotspotText, {"id": childElement.textId, "material": "shader:flat; color: #FFF; side: double;", "geometry": "height:7; width:12;", "position" : childElement.position, "rotation": "0 0 0", "visible": "true", "look-at":"#camrig"} );                    
          hotspotText.innerHTML = `
          <a-font-awesome id="close_info_hotspot" charcode="f00d" color="black" scale="0.5 0.5 0.5" position="5.239 2.8 0.1"></a-font-awesome>          
          <a-entity position="0 0 0.1" rotation="0 0 0" text="`+childElement.text+`">            
            </a-entity>
          `;         
          document.getElementById(element.envId).appendChild(hotspotText);
          const close_info_hotspot = document.getElementById("close_info_hotspot");
         close_info_hotspot.addEventListener('click', function(){
           document.getElementById(childElement.textId).remove();
           envHotspot.setAttribute("visible", "true");
         });
         });
         document.getElementById('splash').style.display = 'none';   
      });
    });
    let wall_audio = await fetchMap("https://raw.githubusercontent.com/virtualtouralian/vtalian_file/main/json/wall-audio.json");
wall_audio.wall_audio.forEach(element => {
  const audio = document.createElement('a-box');
  setAttributes(audio, {"id": element.id, "rotation": element.rotation, "position": element.position, "sound": element.sound, "class": "audio-entity pause", "wall-audio":"", "geometry":"height: 1.000; width: 0.100", "material":"src: https://raw.githubusercontent.com/virtualtouralian/vtalian_file/main/img/topcoat_audio.png;shader:flat; color: #FFF; transparent: true;", "crossorigin":"anonymous", "animation__scale":"property: scale; to: 1.1 1.1 1.1; dur: 200; startEvents: mouseenter", "animation__scale_reverse":"property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"})
  document.getElementById("wall_audio").appendChild(audio);
});
  }
    
    //CALL GET API FUNCTION
    loadJSON();
  
      