
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
    //ARCHITECTURE
    let architecture = await fetchMap('https://admin.alianbutterflypark.com/api/architectures');
    architecture.data.forEach(element => {
      if(element.name === 'floor'){
        const floor = document.createElement('a-asset-item');
        setAttributes(floor, {"id": element.name, "src": element.material, "crossorigin": 'anonymous', "preload": ""} );
        document.getElementById("architecture").appendChild(floor);
      }
      if(element.name === 'wall'){
        const wall = document.createElement('a-mixin');
        setAttributes(wall, {"id": element.name, "material": element.material, "geometry":element.geometry, "preload": ""} );
        document.getElementById("architecture").appendChild(wall);
      }
  }); 
    let entity = await fetchMap('https://admin.alianbutterflypark.com/api/architecture_entities');
    entity.data.forEach(element => {
      if(element.name === 'wall'){
        const wall = document.createElement('a-entity');
        setAttributes(wall, {"id": element.name, "mixin": element.mixin, "geometry": element.geometry, "position": element.position, "class": "moveTarget"} );
        document.getElementById("entity_group").appendChild(wall);
      }
    });    
    let flr = await fetchMap('https://admin.alianbutterflypark.com/api/architecture_entities');    
    flr.data.forEach(element => {
      if(element.name === 'floor'){        
        const floor = document.createElement('a-plane');
        setAttributes(floor, {"id":element.nameEntity, "position": element.position, "rotation": "-90 0 0", "scale" : "8 8 1", "checkpoint": "offset: 0 8 1", "visible":"true"} );
        document.getElementById("step").appendChild(floor);
      }
    });
    let floor = await fetchMap('https://admin.alianbutterflypark.com/api/architecture_entities');
    id_floor = document.getElementById('floor');
    src_floor = id_floor.getAttribute('src');
    floor.data.forEach(element => {
      if(element.name === 'floor'){
        const floor = document.createElement('a-gltf-model');
        setAttributes(floor, {"src":src_floor, "position": element.position, "checkpoint": "offset: 0 8 1"})
        document.getElementById("gltffloor").appendChild(floor);
      }
    });
    floor.data.forEach(element => {
      if(element.name === 'floor'){
        atapArray = element.position.split(" ");
        atapArray[1] = "26";
        atap = atapArray.join(' ');
      const flr = document.createElement('a-gltf-model');
      setAttributes(flr, {"src":src_floor, "position": atap})
      document.getElementById("gltffloor").appendChild(flr);
      }
    });

    //BUTTERFLY
    let butterfly_model = await fetchMap('https://admin.alianbutterflypark.com/api/butterflies');
    butterfly_model.data.forEach(element => {
      const btf_modelObj = document.createElement('a-asset-item');
      setAttributes(btf_modelObj, {"id": element.modelId + "-obj", "src": element.modelObj, "preload":""});
      document.getElementById("butterfly_model").appendChild(btf_modelObj);
    });
    butterfly_model.data.forEach(element => {
      const btf_modelMtl = document.createElement('a-asset-item');
      setAttributes(btf_modelMtl, {"id": element.modelId + "-mtl", "src": element.modelMtl, "preload":""});
      document.getElementById("butterfly_model").appendChild(btf_modelMtl);
    });      

    //WALL_OBJECT
    let wall_object = await fetchMap('https://admin.alianbutterflypark.com/api/wall_objects');
    wall_object.data.forEach(element => {
        const object = document.createElement('a-box');
        setAttributes(object, {"id": element.id, "scale": "1 1 0.1", "material": `src: url(${element.material}); shader: flat`, "geometry": element.geometry, "rotation": element.rotation, "position": element.position});
        document.getElementById("wall_object").appendChild(object);
    });

    //WALL_TEXT
    let wall_text = await fetchMap('https://admin.alianbutterflypark.com/api/wall_texts');
    wall_text.data.forEach(element => {
        const text = document.createElement('a-entity');
        setAttributes(text, {"id": element.id, "position": element.position, "rotation": element.rotation, "text": `value: ${element.text};font: dejavu; align: left; shader: flat; color: #000000; anchor: left; baseline: top;`});
        document.getElementById("wall_text").appendChild(text);
    });

    //WALL_FRAME
    let wall_frame = await fetchMap('https://admin.alianbutterflypark.com/api/wall_frames');
    wall_frame.data.forEach(element => {
      const wf = document.createElement('a-obj-model');
      setAttributes(wf, {"id": element.name, "src":"#objWF","mtl":"#mtlWF", "position":element.position, "rotation":element.rotation, "scale":element.scale})
      document.getElementById("wall_frame").appendChild(wf);
    });

    //WALL_AUDIO
    let wall_audio = await fetchMap("https://admin.alianbutterflypark.com/api/wall_audios");
    wall_audio.data.forEach(element => {
      const audio = document.createElement('a-box');
      setAttributes(audio, {"id": element.id, "rotation": element.rotation, "position": element.position, "sound": "src: url("+element.src+");volume:5; distanceModel:linear; refDistance:100;", "class": "audio-entity pause", "wall-audio":"", "geometry":"height: 1.000; width: 0.100", "material":"src: https://raw.githubusercontent.com/virtualtouralian/vtalian_file/main/img/topcoat_audio.png;shader:flat; color: #FFF; transparent: true;", "crossorigin":"anonymous", "animation__scale":"property: scale; to: 1.1 1.1 1.1; dur: 200; startEvents: mouseenter", "animation__scale_reverse":"property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"})
      document.getElementById("wall_audio").appendChild(audio);
    });

    //PANORAMAS
    let panorama = await fetchMap('https://admin.alianbutterflypark.com/api/panoramas');
    panorama.data.forEach(element => {
      const pano = document.createElement('img');
      setAttributes(pano, {"id": element.photoId, "crossorigin":"anonymous", "src": element.src, "class": element.photoClass, "preload": "", "geometry": "radius:-500"})
      document.getElementById("panorama_group").appendChild(pano);
      
      const envPhoto = document.createElement('a-entity');
      setAttributes(envPhoto, {"id": element.envId, "scale": "0 0 0", "class": "spotclass"});
      document.getElementById("panorama_env_group").appendChild(envPhoto);

      //Navigation to Menu
      const navtoMenu = document.createElement('a-entity');
      setAttributes(navtoMenu, {"geometry":"primitive: circle; radius: 8","material":"color: #a8f5ff; shader:flat; side: double",
                              "text":"align: center; anchor: center; baseline: center; lineHeight:60; font: dejavu; color:black; value: KEMBALI KE MENU UTAMA; width: 20; wrapCount: 20; zOffset: 0.25", 
                              "rotation":"90 0 0","position":"-28 30 45",
                              "spot":"linkto:#point1;spotgroup:group-point1"})
      document.getElementById(element.envId).appendChild(navtoMenu);
      //
      
      element.photo_links.forEach(childElement => {
        const envLink = document.createElement('a-image');
        setAttributes(envLink, {"id": childElement.name, "spot": childElement.spot, "position": childElement.position})
        document.getElementById(element.envId).appendChild(envLink);
      });
      

      element.photo_infos.forEach(childElement => {

        const envHotspot = document.createElement('a-image');
        setAttributes(envHotspot, {"id": childElement.name, "src":"https://raw.githubusercontent.com/virtualtouralian/vtalian_file/main/img/icons/info_spot.png", "position":childElement.position, "geometry":"height:3;width:3", "rotation":"", "infospot":"", "look-at":"#camrig", "animation__scale":"property: scale; to: 1.1 1.1 1.1; dur: 200; startEvents: mouseenter", "animation__scale_reverse":"property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"})
        document.getElementById(element.envId).appendChild(envHotspot);
        const getEnvHotspot = document.getElementById(childElement.name);
        getEnvHotspot.addEventListener("click", function(){ 
          const assetHotspot = document.createElement('img');
          setAttributes(assetHotspot, {"id": childElement.name, "crossorigin":"anonymous", "src": childElement.src, "preload": ""})
          document.getElementById("informasi_group").appendChild(assetHotspot);
    
          const hotspotText = document.createElement('a-plane')
          envHotspot.setAttribute("visible", "false");
          setAttributes(hotspotText, {"id": childElement.entityId, "src":`#${childElement.name}`, "material":`side: double;`, "geometry": `primitive: plane; ${childElement.geometry}`, "position" : childElement.position, "rotation": "0 0 0", "visible": "true", "look-at":"#camrig"} );                    
          hotspotText.innerHTML = `
          <a-entity id="close_info_hotspot" position="0 -4.470 0.1" geometry="primitive: plane; height:1.2; width:3;" rotation="0 0 0" material="shader:flat; color: #FFF; side: double;" text="align: center; anchor: center; baseline: center; lineHeight:60; font: dejavu; color:black; value: TUTUP; width: 12; wrapCount: 60; zOffset: 0.25"></a-entity>`;         
          document.getElementById(element.envId).appendChild(hotspotText);
          const close_info_hotspot = document.getElementById("close_info_hotspot");
          close_info_hotspot.addEventListener('click', function(){
           document.getElementById(childElement.entityId).remove();
           envHotspot.setAttribute("visible", "true");
         });
         });
         document.getElementById('splash').style.display = 'none';   
      });
    });
  }
    
    //CALL GET API FUNCTION
    loadJSON();
  
      