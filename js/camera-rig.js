function objectToPos(posObject) {
    return posObject.x + " " + posObject.y + " " + posObject.z
}

function clickHandler(target) {
    let cameraRig = document.querySelector('#camrig')
    let targetPos= objectToPos(target.getAttribute('position'))
    let camPos = objectToPos(cameraRig.getAttribute('position'))

    cameraRig.setAttribute('animation',`property: position; from: ${camPos}; to: ${targetPos}; dur: 700`)
    
}

function registerHandlerForClick(target) {
    target.addEventListener('click', function() {
        clickHandler(target)
    })
}

function setupHandlers() {
    let targetList = document.querySelectorAll('.moveTarget')
    let index = 0
    while (index < targetList.length) {
        registerHandlerForClick(targetList[index])
        index = index + 1
    }
}

window.onload = setupHandlers