'use strict'
/*
drumkit user clicks on element and a sound play. eazy, but what about having it somehwat record a session?
ill just make a function that ehcks if record is true it adds the el sounds just pressed to a list of sounds to iterate over when user clicks playback.
i suspect the sounds will be player and iterated over incredible fast so ill have to prepare a wait function.
i cant have it record timing so ill focus on playing sounds in sequence by user back to them and a delete recording button ofc
ill add styling to each drum part that react on user inpput this should also play when the recording is playing
*/

const playRecordingBtn = document.querySelector("#recording-button")
const drumkitEL = document.querySelector(".drumkit-section")
const soundFolder = "sounds/"
const sounds = ["clap.wav","hihat.wav","kick.wav","openhat.wav","ride.wav","tink.wav","tom.wav"]

function instrumentCreator(targetEl, source, sourceFolder){
    source.forEach(e => {
        let instrument =  document.createElement("div")
        let text = document.createElement("p")
        instrument.className = "instrument"
        text.textContent = e.split('').splice(0, (e.length - 4)).join('')
        addingAudioFunctionality(instrument, e, sourceFolder)
        instrument.append(text)
        targetEl.append(instrument)
    });
}

function addingAudioFunctionality(targetEl, source, sourceFolder){
    let note = document.createElement("audio")
    note.src = sourceFolder + source
    targetEl.append(note)
    targetEl.addEventListener("click",()=>{note.play()})
}

drumkitEL.addEventListener("click", (e)=>{
    if(e.target.className === "instrument"){
        recording.push(e.target)
        console.log(recording)
    }
})


let recording = []
//this takes i and makes it so all timeouts fires at the same time but with increased delay based on time * i so first is 500*0=0 then 500*1=500 then 500*2=1000
function playBack(recording){
    for (let i = 0; i < recording.length; i++) {
        setTimeout(function(){recording[i].querySelector("audio").play()}, 500 * i)
    }
}


playRecordingBtn.addEventListener("click", ()=>{
    playBack(recording)
})


instrumentCreator(drumkitEL, sounds, soundFolder)