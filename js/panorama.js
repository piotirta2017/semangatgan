// AFRAME.registerComponent('infospot', {
//     schema: {
//       txt: {default:'default'}
//     },        
//     init: async function () {
//         var data = this.data;
//       var el = this.el;  
//       console.log("INI EL" + this.el);
//       let kupukupu = await fetchMap('../json/panorama.json');

//       //Create object
//       el.addEventListener('click', function (e) {  
//         const div = document.createElement('a-plane')
//           setAttributes(div, {"info":"", "id":"koleksi", "material": "shader:flat; color: #FFF; side: double;", "geometry": "height:7; width:12;", "position" : "0 0 -0.5", "rotation": "0 180 0", "visible": "true"} );                    
//           div.innerHTML = `
//           <a-font-awesome id="close_info" charcode="f00d" color="black" scale="0.5 0.5 0.5" position="5.376 2.8 0.1"></a-font-awesome>          

           
//           `;   
//         document.getElementById("butterfly").appendChild(div);

//       });  
//     },
//     update: async function () {          
//     }             
//   });