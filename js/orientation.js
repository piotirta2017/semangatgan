var _LOCK_BUTTON = document.querySelector("#lock-landscape-button");

// upon lock to landscape-primary mode
document.querySelector("#lock-landscape-button").addEventListener('focus', function() {
	if(document.documentElement.requestFullscreen)
		document.querySelector("#block_potrait").requestFullscreen();
	else if(document.documentElement.webkitRequestFullScreen)
		document.querySelector("#block_potrait").webkitRequestFullScreen();

	screen.orientation.lock("landscape-primary")
		.then(function() {
			_LOCK_BUTTON.style.display = 'none';
		})
		.catch(function(error) {
			alert(error);
		});

	var deleteBlock = document.getElementById("block_potrait");
	deleteBlock.remove();
});

// on exiting full-screen lock is automatically released
document.addEventListener("fullscreenchange", function() {
	_LOCK_BUTTON.style.display = 'block';
});

document.addEventListener("webkitfullscreenchange", function() {
	_LOCK_BUTTON.style.display = 'block';
});


// function viewMobile(){
// 	window.addEventListener('load', function() {
// 		if(document.documentElement.requestFullscreen)
// 			document.querySelector("#splash").requestFullscreen();
// 		else if(document.documentElement.webkitRequestFullScreen)
// 			document.querySelector("#splash").webkitRequestFullScreen();
	
// 		screen.orientation.lock("landscape-primary")
// 			.then(function() {
// 				console.log("berhasil")
// 			})
// 			.catch(function(error) {
// 				alert(error);
// 			});
// 	});
// }
// function viewDesktop(){
// 	console.log(width);
// }
		


// // var width = $(window).width();

// var width = window.innerWidth;
// if (width > 768) {
// 	viewDesktop();
//   } else if (width < 768) {
// 	viewMobile();
//   }
// console.log(width);
// window.addEventListener('resize', function(event) {
// 	var width = window.innerWidth;
// 	if (width > 768) {
// 		viewDesktop();
// 	  } else if (width < 768) {
// 		viewMobile();
// 	  }
// });