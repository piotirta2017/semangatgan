var koleksi_1 = 0; var koleksi_2 = 1; var koleksi_3 = 2;

AFRAME.registerComponent('butterfly', {
    schema: {
      txt: {default:'default'}
    },        
    init: async function () {
    },
    update: async function () {
      var data = this.data;
      var el = this.el;        
      let kupukupu = await fetchMap('https://raw.githubusercontent.com/virtualtouralian/vtalian_file/main/json/butterfly.json');

      //Create object
      el.addEventListener('click', function (e) {  
        const div = document.createElement('a-plane')
          setAttributes(div, {"info":"", "id":"koleksi", "material": "shader:flat; src: #bg-kupuku; side: double;", "geometry": "height:7; width:12;", "position" : "0 0 -0.5", "rotation": "0 180 0", "visible": "true"} );                    
          div.innerHTML = `
          <a-font-awesome id="close_info" charcode="f00d" color="black" scale="0.5 0.5 0.5" position="5.376 2.8 0.1"></a-font-awesome>          

            <a-entity position="0 2.7 0.1" text="value: Koleksi Kupu Kupu;
                color: #000000;
                align: center;
                line-height: 60;
                width: 12;            
                shader: flat" geometry="primitive: plane; width: auto; height: auto" material="color: #FFF; shader: flat; visible: false">            
            </a-entity>

            <a-plane open_collection id="kupu`+koleksi_1+`" color="#000" height="3.1" width="3.1" material="side: double" position="-3.393 -0.319 0.1">
              <a-image id="pict_kupu1" geometry="height:3; width:3;" src="`+ kupukupu.butterfly[koleksi_1].src +`" position="0 0.005 0.01"></a-image>              
            </a-plane>
            <a-plane open_collection id="kupu`+koleksi_2+`" color="#000" height="3.1" width="3.1" material="side: double" position="0 -0.319 0.1">
              <a-image id="pict_kupu1" geometry="height:3; width:3;" src="`+ kupukupu.butterfly[koleksi_2].src +`" position="0 0.005 0.01"></a-image>              
            </a-plane>
            <a-plane open_collection id="kupu`+koleksi_3+`" color="#000" height="3.1" width="3.1" material="side: double" position="3.393 -0.319 0.1">
              <a-image id="pict_kupu1" geometry="height:3; width:3;" src="`+ kupukupu.butterfly[koleksi_3].src +`" position="0 0.005 0.01"></a-image>              
            </a-plane>            

            <a-font-awesome id="koleksi_next" next="event: click" charcode="f054" color="white" scale="0.5 0.5 0.5" position="5.376 0 0.05"></a-font-awesome>          
            <a-font-awesome id="koleksi_prev" next="event: click" charcode="f053" color="white" scale="0.5 0.5 0.5" position="-5.376 0 0.05"></a-font-awesome>          
          `;   
        document.getElementById("butterfly").appendChild(div);

        const koleksi_next = document.getElementById("koleksi_next");
        const koleksi_prev = document.getElementById("koleksi_prev");
        const close_info = document.getElementById("close_info");

        koleksi_next.addEventListener('click', function(){
          const kupu_1 = document.getElementById("kupu"+koleksi_1);
          const kupu_2 = document.getElementById("kupu"+koleksi_2);          
          const kupu_3 = document.getElementById("kupu"+koleksi_3);          
          
          const pict_kupu1 = document.getElementById("pict_kupu1");          
          const pict_kupu2 = document.getElementById("pict_kupu2");          
          const pict_kupu3 = document.getElementById("pict_kupu3");

          const title_kupu1 = document.getElementById("title_kupu1");
          const title_kupu2 = document.getElementById("title_kupu2");
          const title_kupu3 = document.getElementById("title_kupu3");

          koleksi_1 += 3;
          koleksi_2 += 3;
          koleksi_3 += 3;

          title1 = kupukupu.butterfly[koleksi_1].content[0].text;            

          kupu_1.setAttribute("id", "kupu"+koleksi_1);          
          kupu_2.setAttribute("id", "kupu"+koleksi_2);          
          kupu_3.setAttribute("id", "kupu"+koleksi_3);          

          pict_kupu1.setAttribute("src", kupukupu.butterfly[koleksi_1].src);
          pict_kupu2.setAttribute("src", kupukupu.butterfly[koleksi_2].src);
          pict_kupu3.setAttribute("src", kupukupu.butterfly[koleksi_3].src);
                 
          title_kupu1.setAttribute("text", kupukupu.butterfly[koleksi_1].content[0].text);
          title_kupu2.setAttribute("text", kupukupu.butterfly[koleksi_2].content[0].text);
          title_kupu3.setAttribute("text", kupukupu.butterfly[koleksi_3].content[0].text);

        });
        koleksi_prev.addEventListener('click', function(){
          const kupu_1 = document.getElementById("kupu"+koleksi_1);
          const kupu_2 = document.getElementById("kupu"+koleksi_2);          
          const kupu_3 = document.getElementById("kupu"+koleksi_3);          
          
          const pict_kupu1 = document.getElementById("pict_kupu1");          
          const pict_kupu2 = document.getElementById("pict_kupu2");          
          const pict_kupu3 = document.getElementById("pict_kupu3");

          const title_kupu1 = document.getElementById("title_kupu1");
          const title_kupu2 = document.getElementById("title_kupu2");
          const title_kupu3 = document.getElementById("title_kupu3");

          koleksi_1 -= 3;
          koleksi_2 -= 3;
          koleksi_3 -= 3;

          title1 = kupukupu.butterfly[koleksi_1].content[0].text;            

          kupu_1.setAttribute("id", "kupu"+koleksi_1);          
          kupu_2.setAttribute("id", "kupu"+koleksi_2);          
          kupu_3.setAttribute("id", "kupu"+koleksi_3);          

          pict_kupu1.setAttribute("src", kupukupu.butterfly[koleksi_1].src);
          pict_kupu2.setAttribute("src", kupukupu.butterfly[koleksi_2].src);
          pict_kupu3.setAttribute("src", kupukupu.butterfly[koleksi_3].src);
                 
          title_kupu1.setAttribute("text", kupukupu.butterfly[koleksi_1].content[0].text);
          title_kupu2.setAttribute("text", kupukupu.butterfly[koleksi_2].content[0].text);
          title_kupu3.setAttribute("text", kupukupu.butterfly[koleksi_3].content[0].text);

        });
        close_info.addEventListener('click', function(){
          document.getElementById('koleksi').remove();
        });
      });      
    }             
  });

  AFRAME.registerComponent('open_3d', {
    schema: {
    },
    update: async function(){
      var data = this.data;
      var el = this.el;

      el.addEventListener('click', function(){
        console.log(`obj:#${el.id}-obj; mtl:${el.id}-mtl`);
        const model_3d = document.createElement('a-entity');
        setAttributes(model_3d, {"obj-model":`obj:#${el.id}-obj; mtl:#${el.id}-mtl`, "position":"-6.230 -2.233 6.001", "scale":"1 1 1", "rotation":"-90 0 0", "animation":"property: rotation; to: -90 360 0; loop: true; dur: 10000" })
        document.getElementById("koleksi_detail").appendChild(model_3d);
      });
    }
  });

  AFRAME.registerComponent('open_collection',{
    schema: {

    },
    update: async function (){
      var data = this.data;
      var el = this.el;
      let kupukupu = await fetchMap('https://raw.githubusercontent.com/virtualtouralian/vtalian_file/main/json/butterfly.json');
      el.addEventListener('click', function (){
        let getId = el.id.slice(4);
        console.log(getId);
        const koleksi_detail = document.createElement('a-plane')
        setAttributes(koleksi_detail, {"info":"", "id":"koleksi_detail", "material": "shader:flat; src: https://raw.githubusercontent.com/virtualtouralian/vtalian_file/main/img/bg-kupukupu.png; side: double;", "geometry": "height:7; width:12;", "position" : "0 0 -0.8", "rotation": "0 180 0", "visible": "true"} );                    
        koleksi_detail.innerHTML = `
        <a-font-awesome id="close_koleksi_detail" charcode="f00d" color="black" scale="0.5 0.5 0.5" position="5.376 2.8 0.05"></a-font-awesome>          

        <a-entity position="0 2.7 0.1" text="`+kupukupu.butterfly[getId].content[0].text+`;
            color: #000000;
            align: center;
            line-height: 60;
            wrap-count: 30;
            width: 9.000;            
            shader: flat" geometry="primitive: plane; width: auto; height: auto" material="color: #FFF; shader: flat; visible: false">            
        </a-entity>
        
        <a-plane id="kupu`+getId+`" color="#000" height="3.1" width="3.1" material="side: double" position="-3.897 -0.075 0.1">
            <a-image id="pict_kupu1" geometry="height:3; width:3;" src="`+ kupukupu.butterfly[getId].src +`" position="0 0 0.01"></a-image>            
        </a-plane>

        <a-entity id="deskripsi_kupu"position="-1.997 1.451 0.1" text= "`+kupukupu.butterfly[getId].content[0].description+`; 
          width: 7.600;
          align: left; 
          line-height: 65; 
          wrap-count: 50.000; 
          shader: msdf; 
          color: #FFFFFF; 
          anchor: left; 
          baseline: top;",
        geometry="primitive: plane; width: auto; height: auto" material="color: #FFF; shader: flat; visible: false">            
        </a-entity>    

        <a-plane open_3d id="`+ kupukupu.butterfly[getId].modelId +`" geometry="height:0.650; width: 2.630" material="side: double" position="-3.897 -1.959 0.1">    
        <a-entity position="0 0 0" text="value: Lihat 3D Model;
            color: #000000;
            align: center;
            line-height: 60;
            wrap-count: 20;
            width:2.5;
            shader: flat" geometry="primitive: plane; width: auto; height: auto" material="color: #FFF; shader: flat; visible: false">            
        </a-entity>
        </a-plane>


        `;
        document.getElementById("butterfly").appendChild(koleksi_detail);

        const close_koleksi_detail = document.getElementById("close_koleksi_detail");

        close_koleksi_detail.addEventListener('click', function(){
          console.log("ASDASD");
          document.getElementById('koleksi_detail').remove();
        })
      });
    }
  })

  AFRAME.registerComponent('closeslide', {
    schema: {
    },        
    init: function () {
      var data = this.data;
      var el = this.el; 
      console.log(el)   ;
      //Create object
      el.addEventListener('click', function () {  
      const div = document.getElementById('info').remove();
      });
    },                  
  });

