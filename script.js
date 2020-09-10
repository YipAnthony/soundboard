let soundboardContainer = document.querySelector("#soundboardContainer")
let soundSelectionBar = document.querySelector("#soundSelectionBarDiv")
let soundSelectionBarBottomRow = document.getElementById("soundSelectionBarBottomRow")
let trashCan = document.querySelector("#trashCanDiv")
let audioboxes = document.querySelectorAll('.audiobox')
let slider = document.querySelector("#originalSlider")
let volumeSlider = document.querySelector
let hiddenContainer = document.querySelector("#hiddencontainer")
let mainPanel = document.querySelector("#mainSoundPanel")

//create boxes within soundboardContainer
let soundboardBoxes = [];
let createBoxes = function(){
//split into 3 functions to recreate numberpad setup
for (i = 7; i <= 9; i++){
    soundboardBoxes[i] = document.createElement('div')
    soundboardBoxes[i].classList.add('soundBoardBoxes')
    soundboardBoxes[i].setAttribute("id", `soundBoardBox${i}`)
    soundboardContainer.appendChild(soundboardBoxes[i])
    let number = document.createElement("div")
    number.classList.add('soundboardNumbers')
    number.innerHTML = number.innerHTML + `${i}`
    soundboardBoxes[i].appendChild(number)

}
for (i = 4; i <= 6; i++){
    soundboardBoxes[i] = document.createElement('div')
    soundboardBoxes[i].classList.add('soundBoardBoxes')
    soundboardBoxes[i].setAttribute("id", `soundBoardBox${i}`)
    soundboardContainer.appendChild(soundboardBoxes[i])
    let number = document.createElement("div")
    number.classList.add('soundboardNumbers')
    number.innerHTML = number.innerHTML + `${i}`
    soundboardBoxes[i].appendChild(number)
}
for (i = 1; i <= 3; i++){
    soundboardBoxes[i] = document.createElement('div')
    soundboardBoxes[i].classList.add('soundBoardBoxes')
    soundboardBoxes[i].setAttribute("id", `soundBoardBox${i}`)
    soundboardContainer.appendChild(soundboardBoxes[i])
    let number = document.createElement("div")
    number.classList.add('soundboardNumbers')
    number.innerHTML = number.innerHTML + `${i}`
    soundboardBoxes[i].appendChild(number)
}
}
createBoxes();

// let soundOverlay = document.createElement('div')
// soundOverlay.setAttribute('id', 'dpoverlay1')
// soundboardBoxes[5].appendChild(soundOverlay)

//drag&drop sounds from soundbar into grid
// let selectedSound;
let boxFullStatus;
let boxToDropInto = 0
let isOverSoundboard = false;
let dragSoundOverBox = soundboardContainer.addEventListener('dragover', soundOutOfBar)
function soundOutOfBar(e){
    if (e.target.className != "soundBoardBoxes") {
        isOverSoundboard = true;
        if (e.target.id == "soundboardContainer") return
        boxFullStatus = "full"
        if (e.target.parentElement.className == "audiobox" ){
            boxToDropInto = e.target.parentElement.parentElement
        }
        else if (e.target.classList.contains('soundBoardBoxes')) {
            boxToDropInto = e.target
        }
        else boxToDropInto = e.target.parentElement;
    }
    else {
        isOverSoundboard = true;
        boxToDropInto = e.target
        if (boxToDropInto.lastElementChild.className == "soundboardNumbers") {
            boxFullStatus = "empty"
        }
        else boxFullStatus = "full"
    }
}

let testIfOverSoundboard = document.addEventListener('dragover', testifOverSoundBoard)
function testifOverSoundBoard(e){
    if (e.target.className == "dontDrop") {
        isOverSoundboard = false;
        return
    }
}

let dropSoundIntoBox = soundSelectionBar.addEventListener('dragend', dropSound)
function dropSound(e){
    let adjustIcon = document.querySelector('.adjustIcon')
    let deleteIcon = document.querySelector('.deleteIcon')
    let slider = document.querySelector('#originalSlider')
    let adjustBack = document.querySelector('.adjustBackIcon')
    let adjustIconClone = adjustIcon.cloneNode(true)
    let deleteIconClone = deleteIcon.cloneNode(true)
    let sliderClone = slider.cloneNode(true)
    let adjustBackClone = adjustBack.cloneNode(true)

    if (!isOverSoundboard) return;
    else if (boxFullStatus == "full") {
        let clone = e.target.cloneNode(true)
        while (boxToDropInto.lastElementChild.classList != "soundboardNumbers") {
            boxToDropInto.removeChild(boxToDropInto.lastElementChild);
        }
        boxToDropInto.appendChild(clone)
        boxToDropInto.appendChild(adjustIconClone)
        boxToDropInto.appendChild(deleteIconClone)
        boxToDropInto.appendChild(sliderClone)
        boxToDropInto.appendChild(adjustBackClone)
        // boxToDropInto.insertBefore(primaryOverlayClone, boxToDropInto.firstElementChild)
        // let sliderclone = slider.cloneNode(true)
        // boxToDropInto.appendChild(sliderclone)
        // sliderclone.classList.remove('visibility')
        boxToDropInto = 0
        isOverSoundboard = false;
    } 
    else if (boxFullStatus == "empty") {
        let clone = e.target.cloneNode(true)
        boxToDropInto.appendChild(clone)
        boxToDropInto.appendChild(adjustIconClone)
        boxToDropInto.appendChild(deleteIconClone)
        boxToDropInto.appendChild(sliderClone)
        boxToDropInto.appendChild(adjustBackClone)
        // boxToDropInto.insertBefore(primaryOverlayClone, boxToDropInto.firstElementChild)
        boxToDropInto.classList.add("full")
        // let sliderclone = slider.cloneNode(true)
        // boxToDropInto.appendChild(sliderclone)
        // sliderclone.classList.remove('visibility')
        boxToDropInto = 0
        isOverSoundboard = false;
    }
    else if (boxToDropInto.className != "soundBoardBoxes") return
}

let dropSoundBoxIntoBox = soundboardContainer.addEventListener('dragend', dropSoundBoxtoBox)
function dropSoundBoxtoBox(e){
    let adjustIcon = document.querySelector('.adjustIcon')
    let adjustIconClone = adjustIcon.cloneNode(true)
    let deleteIcon = document.querySelector('.deleteIcon')
    let deleteIconClone = deleteIcon.cloneNode(true)
    let slider = document.querySelector('#originalSlider')
    let adjustBack = document.querySelector('.adjustBackIcon')
    let sliderClone = slider.cloneNode(true)
    let adjustBackClone = adjustBack.cloneNode(true)

    if (!isOverSoundboard) return;
    //////////////////doublecheck VVV: .classname could be null ///////////////////
    else if (e.target.parentElement.classList.contains('full')) {
        let clone = e.target.cloneNode(true)
        // boxToDropInto.removeChild(boxToDropInto.firstChild)
        while (boxToDropInto.lastElementChild.className != 'soundboardNumbers') {
            boxToDropInto.removeChild(boxToDropInto.lastElementChild);

        }
        boxToDropInto.appendChild(clone)
        boxToDropInto.appendChild(adjustIconClone)
        boxToDropInto.appendChild(deleteIconClone)
        boxToDropInto.appendChild(sliderClone)
        boxToDropInto.appendChild(adjustBackClone)
        // let sliderclone = slider.cloneNode(true)
        // boxToDropInto.appendChild(sliderclone)
        // sliderclone.classList.remove('visibility')
        boxToDropInto = 0
        isOverSoundboard = false;
    } 
    else if (boxFullStatus == "empty") {
        let clone = e.target.cloneNode(true)
        boxToDropInto.appendChild(clone)
        boxToDropInto.appendChild(adjustIconClone)
        boxToDropInto.appendChild(deleteIconClone)
        boxToDropInto.appendChild(sliderClone)
        boxToDropInto.appendChild(adjustBackClone)
        boxToDropInto.classList.add("full")

        // let sliderclone = slider.cloneNode(true)
        // boxToDropInto.appendChild(sliderclone)
        // sliderclone.classList.remove('visibility')
        boxToDropInto = 0
        isOverSoundboard = false;
    }
    else if (boxToDropInto.className != "soundBoardBoxes") return
}

let selectedBox;
let soundBeingDragged = soundboardContainer.addEventListener('dragstart', identifySoundDragged)
function identifySoundDragged(e){
    selectedSound = e.target
    selectedBox = selectedSound.parentElement
}

function clickDeleteIcon() {
    let boxWithDeleteButton = event.srcElement.parentElement.parentElement;
    while (boxWithDeleteButton.lastElementChild.classList != "soundboardNumbers") {
        boxWithDeleteButton.removeChild(boxWithDeleteButton.lastElementChild)
    }
    boxWithDeleteButton.classList.remove('full')
    } 

function clickAdjustIcon() {
    let soundboard = event.srcElement.parentElement.parentElement
    let slider = soundboard.querySelector('#originalSlider')
    let backIcon = soundboard.querySelector('.adjustBackIcon')
    slider.classList.remove('visibility')
    backIcon.classList.remove('visibility')
}

function clickAdjustBackIcon() {
    let slider = event.srcElement.parentElement.previousSibling
    let adjustBack = event.srcElement.parentElement
    slider.classList.add('visibility')
    adjustBack.classList.add('visibility')
}
// let dropFromBoxToTrash
// let dragSoundOverTrash = trashCan.addEventListener('dragover', soundOutOfSoundboardContainer)
// function soundOutOfSoundboardContainer(e){
//     dropFromBoxToTrash = e.target.id

// }
// let dropSoundIntoTrash = soundboardContainer.addEventListener('dragend', dropSoundintoSoundBarFunc)
// function dropSoundintoSoundBarFunc(e){
//     if (dropFromBoxToTrash != "trashCanDiv") return
//     else {
//         while (selectedBox.lastElementChild) {
//             if (selectedBox.lastElementChild.className == "soundboardNumbers") return
//             else selectedBox.removeChild(selectedBox.lastElementChild);
//         }
//         // e.target.parentElement.removeChild(e.target.parentElement.firstChild)
//         // trashCan.removeChild(e.target)
//         selectedBox.classList.remove('full')
        
        
//         dropFromBoxToTrash = 0
//         selectedBox = 0
//     }
// }

//activate box animation w/ keyPress, only works for numbers 1-9 like a numberpad
//activation will also play whatever sound has been dragged into the corresponding box
let keyPress = document.addEventListener('keypress', activate)
function activate(e){
    if(Number(e.key) > 0 && Number(e.key) <= 9){
        soundboardBoxes[Number(e.key)].classList.add("soundBoardBoxesActivated")
        let sound = document.querySelector(`#soundBoardBox${e.key} audio`);
        let volume = document.querySelector(`#soundBoardBox${e.key} #Volume-Slider`);
        let speed = document.querySelector(`#soundBoardBox${e.key} #Speed-Slider`);
        if (!sound) return;
        sound.currentTime = 0;
        let speedObject = {
            0: .25,
            1: 0.5,
            2: 0.75,
            3: 1,
            4: 1.5,
            5: 2,
            6: 3,
            7: 3.5,
        }
        sound.playbackRate = speedObject[speed.value]
        sound.volume = volume.value/100;
        sound.play();
    } 
}
//stop animation after transition ends
let transitionEnd = soundboardContainer.addEventListener("transitionend", deactivate)
function deactivate(e){
    if (e.returnValue){
        e.target.classList.remove("soundBoardBoxesActivated")
    }
}

let spaceBar = document.addEventListener('keypress', stopAllSound)
function stopAllSound(e){
    let allAudio = document.getElementsByTagName("audio")
    i = allAudio.length;
    if (e.code == "Space") {
        while (i--) {
            allAudio[i].volume = 0;
        }
    }
}

let reset = document.addEventListener('click', resetboxes)
function resetboxes(e){
    if (e.target.id == "reset-Button"){
        i = soundboardBoxes.length;
        while (i-- > 1) {
            while (soundboardBoxes[i].lastElementChild.className != "soundboardNumbers") {
                soundboardBoxes[i].removeChild(soundboardBoxes[i].lastElementChild);
                soundboardBoxes[i].classList.remove("full")
            }
        }
            // togglesoundSelectionBar();
        
    }
}

let soundSelectionBarToggleStatus = "closed"
let togglesoundSelectionBar = function() {
    if (soundSelectionBarToggleStatus == "closed") {
        soundSelectionBar.classList.remove('soundSelectionBarDivToggleClosed')
        soundSelectionBar.classList.add('soundSelectionBarDivToggleOpen')
        soundSelectionBarToggleStatus = "open"
    }
    else {
        soundSelectionBar.classList.add('soundSelectionBarDivToggleClosed')
        soundSelectionBar.classList.remove('soundSelectionBarDivToggleOpen')
        hiddenContainer.appendChild(soundSelectionBarBottomRow.firstElementChild.lastElementChild.firstElementChild)
        hiddenContainer.appendChild(soundSelectionBarBottomRow.firstElementChild)
        soundSelectionBarToggleStatus = "closed"
        drumPanelStatus = "closed"
        instrumentPanelStatus = "closed"
        synthPanelStatus = "closed"
        vocalPanelStatus = "closed"
        mainPanelStatus();
    }
}

//Nav animations for Instruments
let mainPanelStatus = function(selection) {
    let drumMainPanel = document.getElementById('drumMainPanel')
    let instrumentMainPanel =  document.getElementById('instrumentMainPanel')
    let synthMainPanel = document.getElementById('synthMainPanel')
    let vocalMainPanel = document.getElementById('vocalMainPanel')
    if (selection == "instrument"){
        if (instrumentPanelStatus != "open"){
            instrumentPanelStatus = "open"
        }
        instrumentMainPanel.classList.add('mainSoundPanelClicked') 
        synthPanelStatus = "closed"
        vocalPanelStatus = "closed"
        drumPanelStatus = "closed"
    }
    else if (selection == "synth") {
        if (synthPanelStatus != "open") {
            synthPanelStatus = "open"
        }
        synthMainPanel.classList.add('mainSoundPanelClicked') 
        instrumentPanelStatus = "closed"
        vocalPanelStatus = "closed"
        drumPanelStatus = "closed"
    }
    else if (selection == "vocal") {
        if (vocalPanelStatus != "open") {
            vocalPanelStatus = "open"
        }
        vocalMainPanel.classList.add('mainSoundPanelClicked') 
        instrumentPanelStatus = "closed"
        synthPanelStatus = "closed"
        drumPanelStatus = "closed"
    }
    else if (selection == "drum") {
        if (drumPanelStatus != "open") {
            
            drumPanelStatus = "open"
        }
        drumMainPanel.classList.add('mainSoundPanelClicked') 
        instrumentPanelStatus = "closed"
        synthPanelStatus = "closed"
        vocalPanelStatus = "closed"
    }
    if (drumPanelStatus == "closed") {
        if (drumMainPanel.className == "mainSoundPanelClicked"){
            drumMainPanel.classList.remove('mainSoundPanelClicked')
        }
    }
    if (instrumentPanelStatus == "closed") {
        if (instrumentMainPanel.className == "mainSoundPanelClicked"){
            instrumentMainPanel.classList.remove('mainSoundPanelClicked')
        }
    }
    if (synthPanelStatus == "closed") {
        if (synthMainPanel.className == "mainSoundPanelClicked"){
            synthMainPanel.classList.remove('mainSoundPanelClicked')
        }
    }
    if (vocalPanelStatus == "closed") {
        if (vocalMainPanel.className == "mainSoundPanelClicked"){
            vocalMainPanel.classList.remove('mainSoundPanelClicked')
        }
    }
}

let instrumentChosen = ""
let instrumentPanelStatus = "closed"
let instrumentPanel = document.getElementById('instrumentPanel')

let toggleInstrumentMainPanel = function(){
    let guitarPanel = document.getElementById('guitarPanel')
    if (soundSelectionBarToggleStatus == "closed") {
        togglesoundSelectionBar();
        soundSelectionBarBottomRow.appendChild(instrumentPanel)
        instrumentPanel.lastElementChild.appendChild(guitarPanel)
        mainPanelStatus('instrument')
        instrumentChosen = "guitar"
    }
    else if (soundSelectionBarToggleStatus == "open") {
        if (instrumentPanelStatus == "open") return
        else {
        hiddenContainer.appendChild(soundSelectionBarBottomRow.firstElementChild)
        soundSelectionBarBottomRow.appendChild(instrumentPanel)
        if (instrumentPanel.lastElementChild.firstElementChild) {
            hiddenContainer.appendChild(instrumentPanel.lastElementChild.firstElementChild)
        }
        instrumentPanel.lastElementChild.appendChild(guitarPanel)
        mainPanelStatus('instrument')
        instrumentChosen = "guitar"
        }
    }
}
let togglepianoPanel = function () {
    if (instrumentChosen == "piano") return
    hiddenContainer.appendChild(instrumentPanel.lastElementChild.firstElementChild);
    let pianoPanel = document.getElementById('pianoPanel')
    instrumentPanel.lastElementChild.appendChild(pianoPanel)
    instrumentChosen = "piano"
}
let toggleGuitarPanel = function () {
    if (instrumentChosen == "guitar") return
    hiddenContainer.appendChild(instrumentPanel.lastElementChild.firstElementChild);
    let guitarPanel = document.getElementById('guitarPanel')
    instrumentPanel.lastElementChild.appendChild(guitarPanel)
    instrumentChosen = "guitar"
}
let togglestringsPanel = function () {
    if (instrumentChosen == "strings") return
    hiddenContainer.appendChild(instrumentPanel.lastElementChild.firstElementChild);
    let stringPanel = document.getElementById('stringPanel')
    instrumentPanel.lastElementChild.appendChild(stringPanel)
    instrumentChosen = "strings"
}

// change from guitar to synth
let synthChosen = ""
let synthPanelStatus = "closed"
let synthPanel = document.getElementById('synthPanel')

let toggleSynthMainPanel = function(){
    let arpPanel = document.getElementById('arpPanel')
    if (soundSelectionBarToggleStatus == "closed") {
        togglesoundSelectionBar();
        soundSelectionBarBottomRow.appendChild(synthPanel)
        synthPanel.lastElementChild.appendChild(arpPanel)
        // synthPanelStatus = "open"
        mainPanelStatus('synth')
        synthChosen = "arp"
    }
    else if (soundSelectionBarToggleStatus == "open") {
        if (synthPanelStatus == "open") return
        else {
        // synthPanelStatus = "open"
        hiddenContainer.appendChild(soundSelectionBarBottomRow.firstElementChild)
        soundSelectionBarBottomRow.appendChild(synthPanel)
        if (synthPanel.lastElementChild.firstElementChild) {
            hiddenContainer.appendChild(synthPanel.lastElementChild.firstElementChild)
        }
        synthPanel.lastElementChild.appendChild(arpPanel)
        mainPanelStatus('synth')
        synthChosen = "arp"
        }
    }
}
let toggleChordPanel = function () {
    if (synthChosen == "chord") return
    hiddenContainer.appendChild(synthPanel.lastElementChild.firstElementChild);
    let chordPanel = document.getElementById('chordPanel')
    synthPanel.lastElementChild.appendChild(chordPanel)
    synthChosen = "chord"
}
let toggleDropPanel = function () {
    if (synthChosen == "drop") return
    hiddenContainer.appendChild(synthPanel.lastElementChild.firstElementChild);
    let dropPanel = document.getElementById('dropPanel')
    synthPanel.lastElementChild.appendChild(dropPanel)
    synthChosen = "drop"
}
let toggleArpPanel = function () {
    if (synthChosen == "arp") return
    hiddenContainer.appendChild(synthPanel.lastElementChild.firstElementChild);
    let arpPanel = document.getElementById('arpPanel')
    synthPanel.lastElementChild.appendChild(arpPanel)
    synthChosen = "arp"
}

let vocalChosen = ""
let vocalPanelStatus = "closed"
let vocalPanel = document.getElementById('vocalPanel')

let toggleVocalMainPanel = function(){
    let regularPanel = document.getElementById('regularPanel')
    if (soundSelectionBarToggleStatus == "closed") {
        togglesoundSelectionBar();
        soundSelectionBarBottomRow.appendChild(vocalPanel)
        vocalPanel.lastElementChild.appendChild(regularPanel)
        // vocalPanelStatus = "open"
        mainPanelStatus('vocal')
        vocalChosen = "regular"
    }
    else if (soundSelectionBarToggleStatus == "open") {
        if (vocalPanelStatus == "open") return
        else {
        // vocalPanelStatus = "open"
        hiddenContainer.appendChild(soundSelectionBarBottomRow.firstElementChild)
        soundSelectionBarBottomRow.appendChild(vocalPanel)
        if (vocalPanel.lastElementChild.firstElementChild) {
            hiddenContainer.appendChild(vocalPanel.lastElementChild.firstElementChild)
        }
        vocalPanel.lastElementChild.appendChild(regularPanel)
        mainPanelStatus('vocal')
        vocalChosen = "regular"
        }
    }
}

let toggleRegularPanel = function () {
    if (vocalChosen == "regular") return
    hiddenContainer.appendChild(vocalPanel.lastElementChild.firstElementChild);
    let regularPanel = document.getElementById('regularPanel')
    vocalPanel.lastElementChild.appendChild(regularPanel)
    vocalChosen = "regular"
}
let toggleVocalArpPanel = function () {
    if (vocalChosen == "vocalarp") return
    hiddenContainer.appendChild(vocalPanel.lastElementChild.firstElementChild);
    let vocalarpPanel = document.getElementById('vocalarpPanel')
    vocalPanel.lastElementChild.appendChild(vocalarpPanel)
    vocalChosen = "vocalarp"
}
let toggleVocoderPanel = function () {
    if (vocalChosen == "vocoder") return
    hiddenContainer.appendChild(vocalPanel.lastElementChild.firstElementChild);
    let vocoderPanel = document.getElementById('vocoderPanel')
    vocalPanel.lastElementChild.appendChild(vocoderPanel)
    vocalChosen = "vocoder"
}

let drumChosen = ""
let drumPanelStatus = "closed"
let drumPanel = document.getElementById('drumPanel')
let toggleDrumMainPanel = function(){
    let singleHitsPanel = document.getElementById('singleHitsPanel')
    if (soundSelectionBarToggleStatus == "closed") {
        togglesoundSelectionBar();
        soundSelectionBarBottomRow.appendChild(drumPanel)
        drumPanel.lastElementChild.appendChild(singleHitsPanel)
        // drumPanelStatus = "open"
        mainPanelStatus('drum')
        drumChosen = "singleHits"
    }
    else if (soundSelectionBarToggleStatus == "open") {
        if (drumPanelStatus == "open") return
        else {
        // drumPanelStatus = "open"
        hiddenContainer.appendChild(soundSelectionBarBottomRow.firstElementChild)
        soundSelectionBarBottomRow.appendChild(drumPanel)
        if (drumPanel.lastElementChild.firstElementChild) {
            hiddenContainer.appendChild(drumPanel.lastElementChild.firstElementChild)
        }
        drumPanel.lastElementChild.appendChild(singleHitsPanel)
        mainPanelStatus('drum')
        drumChosen = "singleHits"
        }
    }
}

let toggleSingleHitsPanel = function () {
    if (drumChosen == "singleHits") return
    hiddenContainer.appendChild(drumPanel.lastElementChild.firstElementChild);
    let singleHitsPanel = document.getElementById('singleHitsPanel')
    drumPanel.lastElementChild.appendChild(singleHitsPanel)
    drumChosen = "singleHits"
}
let toggleTopLoopsPanel = function () {
    if (drumChosen == "top") return
    hiddenContainer.appendChild(drumPanel.lastElementChild.firstElementChild);
    let topLoopsPanel = document.getElementById('topLoopsPanel')
    drumPanel.lastElementChild.appendChild(topLoopsPanel)
    drumChosen = "top"
}
let toggleFullLoopsPanel = function () {
    if (drumChosen == "full") return
    hiddenContainer.appendChild(drumPanel.lastElementChild.firstElementChild);
    let fullLoopsPanel = document.getElementById('fullLoopsPanel')
    drumPanel.lastElementChild.appendChild(fullLoopsPanel)
    drumChosen = "full"
}
let toggleBuildupPanel = function () {
    if (drumChosen == "buildup") return
    hiddenContainer.appendChild(drumPanel.lastElementChild.firstElementChild);
    let buildupPanel = document.getElementById('buildupPanel')
    drumPanel.lastElementChild.appendChild(buildupPanel)
    drumChosen = "buildup"
}
