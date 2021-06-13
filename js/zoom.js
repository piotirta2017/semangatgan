// Enabling camera zoom functionality
window.addEventListener('wheel', event => {
    // Getting the mouse wheel change  and normalizing it 
    const rotation = Math.sign(event.wheelDelta);

    var vrCamera = document.getElementById('zoomcam').getAttribute('camera');
    var finalZoom = document.getElementById('zoomcam').getAttribute('camera').zoom + rotation * 0.07;

    // Limiting the zoom o 5
    if (finalZoom < 1) finalZoom = 1;
    if (finalZoom > 10) finalZoom = 10;

    vrCamera.zoom = finalZoom;

    // Setting the vrCamera property into HTML camera element
    document.getElementById('zoomcam').setAttribute('camera', vrCamera);
});