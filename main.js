const warning = document.getElementById('warning')
const hourDisplay = document.getElementById('hours')
const minDisplay = document.getElementById('minutes')
const secDisplay = document.getElementById('seconds')  
const totalTime = document.getElementById('totalTime') 

    
const sound1 = document.getElementById('click1')
const sound2 = document.getElementById('click2')
const sound3 = document.getElementById('click3')
const sound4 = document.getElementById('click4')
const sound5 = document.getElementById('click5')
const sound6 = document.getElementById('click6')
const sound7 = document.getElementById('click7')
const sound8 = document.getElementById('click8')

const instr = document.getElementById('instr')
let sound = document.getElementsByClassName('sound')


const buttonPlay = document.getElementById('play')

const ratio = document.getElementById('ratio')

let interval1
let interval2
let interval3
let interval4
let interval5
let interval6
let interval7
let interval8

let time1
let time2
let time3
let time4
let time5
let time6

let input1
let input2
let input3
let input4
let input5
let input6
let input7
let input8

let hourCounter
let minCounter
let secCounter

let randomKey

let sourceNotes 

let speedUnit = 1000

let startCheck = 0

let instrumentSelector = 0

let loopLength
let loopLengthCalc

let remainder
let remainderToHours
let remainderToMins
let remainderToMinsToSecs //for calc only
let remainderToSecs

let array



buttonPlay.addEventListener('mousedown', start)

instr.addEventListener('mousedown', instrumentChooser)


buttonPlay.addEventListener('transitionend', transitionStop)

//keys

let sourceNotesA = ['./sound/A.mp3', './sound/B.mp3', './sound/C.mp3', './sound/D.mp3', './sound/E.mp3', './sound/F.mp3','./sound/G.mp3', './sound/A.mp3']

let sourceNotesB = ['./sound/B.mp3', './sound/C♯.mp3', './sound/D.mp3', './sound/E.mp3', './sound/F♯.mp3', './sound/G.mp3', './sound/A.mp3', './sound/B.mp3']

let sourceNotesC = ['./sound/C.mp3', './sound/D.mp3', './sound/Eb.mp3', './sound/F.mp3', './sound/G.mp3', './sound/Ab.mp3', './sound/Bb.mp3', './sound/C+.mp3']

let sourceNotesD = ['./sound/D.mp3', './sound/E.mp3', './sound/F.mp3', './sound/G.mp3', './sound/A.mp3', './sound/Bb.mp3', './sound/C.mp3', './sound/D.mp3']

let sourceNotesE = ['./sound/E.mp3', './sound/F♯.mp3', './sound/G.mp3', './sound/A.mp3', './sound/B.mp3', './sound/C.mp3', './sound/D.mp3', './sound/E.mp3']

let sourceNotesF = ['./sound/F.mp3', './sound/G.mp3', './sound/Ab.mp3', './sound/Bb.mp3', './sound/C.mp3', './sound/Db.mp3', './sound/Eb.mp3', './sound/F.mp3']

let sourceNotesG = ['./sound/G.mp3', './sound/A.mp3', './sound/Bb.mp3', './sound/C.mp3', './sound/D.mp3', './sound/Eb.mp3', './sound/F.mp3', './sound/G.mp3']

let sourceNotesGSharp = ['./sound/G♯.mp3', './sound/A♯.mp3', './sound/B.mp3', './sound/C♯.mp3', './sound/D♯.mp3', './sound/E.mp3', './sound/F♯.mp3', './sound/G♯.mp3']

let sourceNotesBb = ['./sound/Bb.mp3', './sound/C.mp3', './sound/Db.mp3', './sound/Eb.mp3', './sound/F.mp3', './sound/Gb.mp3', './sound/Ab.mp3', './sound/Bb.mp3']

let sourceNotesCSharp = ['./sound/C♯.mp3', './sound/D♯.mp3', './sound/E.mp3', './sound/F♯.mp3', './sound/G♯.mp3', './sound/A.mp3', './sound/B.mp3', './sound/C♯.mp3']

let sourceNotesEb = ['./sound/Eb.mp3', './sound/F.mp3', './sound/Gb.mp3', './sound/Ab.mp3', './sound/Bb.mp3', './sound/Cb.mp3', './sound/Db.mp3', './sound/Eb.mp3']

let sourceNotesFSharp = ['./sound/F♯.mp3', './sound/G♯.mp3', './sound/A.mp3', './sound/B.mp3', './sound/C♯.mp3', './sound/D.mp3', './sound/E.mp3', './sound/F♯.mp3']










//violins 


let sourceNotesAviolin = ['./sound/violin/nonverbed/A.mp3', './sound/violin/nonverbed/B.mp3', './sound/violin/nonverbed/C.mp3', './sound/violin/nonverbed/D.mp3', './sound/violin/nonverbed/E.mp3', './sound/violin/nonverbed/F.mp3', './sound/violin/nonverbed/G.mp3', './sound/violin/nonverbed/A.mp3', ]

let sourceNotesBviolin = ['./sound/violin/nonverbed/B.mp3', './sound/violin/nonverbed/C♯.mp3', './sound/violin/nonverbed/D.mp3', './sound/violin/nonverbed/E.mp3', './sound/violin/nonverbed/F♯.mp3', './sound/violin/nonverbed/G.mp3', './sound/violin/nonverbed/A.mp3', './sound/violin/nonverbed/B.mp3', ]

let sourceNotesCviolon = ['./sound/violin/nonverbed/C.mp3', './sound/violin/nonverbed/D.mp3', './sound/violin/nonverbed/Eb.mp3', './sound/violin/nonverbed/F.mp3', './sound/violin/nonverbed/G.mp3', './sound/violin/nonverbed/Ab.mp3', './sound/violin/nonverbed/Bb.mp3', './sound/violin/nonverbed/C.mp3', ]

let sourceNotesDviolin = ['./sound/violin/nonverbed/D.mp3', './sound/violin/nonverbed/E.mp3', './sound/violin/nonverbed/F.mp3', './sound/violin/nonverbed/G.mp3', './sound/violin/nonverbed/A.mp3', './sound/violin/nonverbed/Bb.mp3', './sound/violin/nonverbed/C.mp3', './sound/violin/nonverbed/D.mp3', ]

let sourceNotesEviolin = ['./sound/violin/nonverbed/E.mp3', './sound/violin/nonverbed/F♯.mp3', './sound/violin/nonverbed/G.mp3', './sound/violin/nonverbed/A.mp3', './sound/violin/nonverbed/B.mp3', './sound/violin/nonverbed/C.mp3', './sound/violin/nonverbed/D.mp3', './sound/violin/nonverbed/E.mp3', ]

let sourceNotesFviolin = ['./sound/violin/nonverbed/F.mp3', './sound/violin/nonverbed/G.mp3', './sound/violin/nonverbed/Ab.mp3', './sound/violin/nonverbed/Bb.mp3', './sound/violin/nonverbed/C.mp3', './sound/violin/nonverbed/Db.mp3', './sound/violin/nonverbed/Eb.mp3', './sound/violin/nonverbed/F.mp3', ]

let sourceNotesGviolin = ['./sound/violin/nonverbed/G.mp3', './sound/violin/nonverbed/A.mp3', './sound/violin/nonverbed/Bb.mp3', './sound/violin/nonverbed/C.mp3', './sound/violin/nonverbed/D.mp3', './sound/violin/nonverbed/Eb.mp3', './sound/violin/nonverbed/F.mp3', './sound/violin/nonverbed/G.mp3', ]

let sourceNotesGSharpviolin = ['./sound/violin/nonverbed/G♯.mp3', './sound/violin/nonverbed/A♯.mp3', './sound/violin/nonverbed/B.mp3', './sound/violin/nonverbed/C♯.mp3', './sound/violin/nonverbed/D♯.mp3', './sound/violin/nonverbed/E.mp3', './sound/violin/nonverbed/F♯.mp3', './sound/violin/nonverbed/G♯.mp3', ]

let sourceNotesBbviolin = ['./sound/violin/nonverbed/Bb.mp3', './sound/violin/nonverbed/C.mp3', './sound/violin/nonverbed/Db.mp3', './sound/violin/nonverbed/Eb.mp3', './sound/violin/nonverbed/F.mp3', './sound/violin/nonverbed/Gb.mp3', './sound/violin/nonverbed/Ab.mp3', './sound/violin/nonverbed/Bb.mp3', ]

let sourceNotesCSharpviolin = ['./sound/violin/nonverbed/C♯.mp3', './sound/violin/nonverbed/D♯.mp3', './sound/violin/nonverbed/E.mp3', './sound/violin/nonverbed/F♯.mp3', './sound/violin/nonverbed/G♯.mp3', './sound/violin/nonverbed/A.mp3', './sound/violin/nonverbed/B.mp3', './sound/violin/nonverbed/C♯.mp3', ]

let sourceNotesEbviolin = ['./sound/violin/nonverbed/Eb.mp3', './sound/violin/nonverbed/F.mp3', './sound/violin/nonverbed/Gb.mp3', './sound/violin/nonverbed/Ab.mp3', './sound/violin/nonverbed/Bb.mp3', './sound/violin/nonverbed/Cb.mp3', './sound/violin/nonverbed/Db.mp3', './sound/violin/nonverbed/Eb.mp3', ]

let sourceNotesFSharpviolin = ['./sound/violin/nonverbed/F♯.mp3', './sound/violin/nonverbed/G♯.mp3', './sound/violin/nonverbed/A.mp3', './sound/violin/nonverbed/B.mp3', './sound/violin/nonverbed/C♯.mp3', './sound/violin/nonverbed/D.mp3', './sound/violin/nonverbed/E.mp3', './sound/violin/nonverbed/F♯.mp3', ]







function instrumentChooser(){
    if (instrumentSelector == 0) {
        if (switchPos == 1) {
            instr.src = './img/violin_light.png'
        } else {
            instr.src = './img/violin.png'
        }
        instrumentSelector ++
    } else {
        if (switchPos == 1) {
            instr.src = './img/keys_light.png'
        } else {
            instr.src = './img/keys.png'
        }
        instrumentSelector = 0
    }
    setTimeout(() => {
        onoff = 2
        goMenu()
        
        
        
    }, 350);
    setTimeout(() => {
        startCheck = 0
        nogo()
        start()
    }, 1000);
    
    
}








function transitionStop(){
    this.classList.remove('play_on_click')
    this.classList.remove('play_on_swap')
}



window.addEventListener('keydown', keychecker)

function keychecker(e){
    if (e.keyCode == 32){
        start()
    } else if (e.keyCode == 37) {
        speedUnit = 1000
    } else if (e.keyCode == 39) {
        speedUnit = 500
    }
    
    else {
        return
    }
}


function keyChooser(){


    randomKey = Math.floor(Math.random()*12)

    if (instrumentSelector == 0) {
        if (randomKey == 0){
            sourceNotes = sourceNotesA
            warning.innerHTML = 'A minor'
        } else if (randomKey == 1){
            sourceNotes = sourceNotesB
            warning.innerHTML = 'B minor'
        } else if (randomKey == 2){
            sourceNotes = sourceNotesC
            warning.innerHTML = 'C minor'
        } else if (randomKey == 3){
            sourceNotes = sourceNotesD
            warning.innerHTML = 'D minor'
        } else if (randomKey == 4){
            sourceNotes = sourceNotesE
            warning.innerHTML = 'E minor'
        } else if (randomKey == 5){
            sourceNotes = sourceNotesF
            warning.innerHTML = 'F minor'
        } else if (randomKey == 6){
            sourceNotes = sourceNotesG
            warning.innerHTML = 'G minor'
        } else if (randomKey == 7){
            sourceNotes = sourceNotesGSharp
            warning.innerHTML = 'G♯ minor'
        } else if (randomKey == 8){
            sourceNotes = sourceNotesBb
            warning.innerHTML = 'B♭ minor'
        } else if (randomKey == 9){
            sourceNotes = sourceNotesCSharp
            warning.innerHTML = 'C♯ minor'
        } else if (randomKey == 10){
            sourceNotes = sourceNotesEb
            warning.innerHTML = 'E♭ minor'
        } else if (randomKey == 11){
            sourceNotes = sourceNotesFSharp
            warning.innerHTML = 'F♯ minor'
        }
    } else if (instrumentSelector == 1){
        if (randomKey == 0){
            sourceNotes = sourceNotesAviolin
            warning.innerHTML = 'A minor'
        } else if (randomKey == 1){
            sourceNotes = sourceNotesBviolin
            warning.innerHTML = 'B minor'
        } else if (randomKey == 2){
            sourceNotes = sourceNotesCviolon
            warning.innerHTML = 'C minor'
        } else if (randomKey == 3){
            sourceNotes = sourceNotesDviolin
            warning.innerHTML = 'D minor'
        } else if (randomKey == 4){
            sourceNotes = sourceNotesEviolin
            warning.innerHTML = 'E minor'
        } else if (randomKey == 5){
            sourceNotes = sourceNotesFviolin
            warning.innerHTML = 'F minor'
        } else if (randomKey == 6){
            sourceNotes = sourceNotesGviolin
            warning.innerHTML = 'G minor'
        } else if (randomKey == 7){
            sourceNotes = sourceNotesGSharpviolin
            warning.innerHTML = 'G♯ minor'
        } else if (randomKey == 8){
            sourceNotes = sourceNotesBbviolin
            warning.innerHTML = 'B♭ minor'
        } else if (randomKey == 9){
            sourceNotes = sourceNotesCSharpviolin
            warning.innerHTML = 'C♯ minor'
        } else if (randomKey == 10){
            sourceNotes = sourceNotesEbviolin
            warning.innerHTML = 'E♭ minor'
        } else if (randomKey == 11){
            sourceNotes = sourceNotesFSharpviolin
            warning.innerHTML = 'F♯ minor'
        }

    }
    
    sound1.src = sourceNotes[0]
    sound2.src = sourceNotes[1]
    sound3.src = sourceNotes[2]
    sound4.src = sourceNotes[3]
    sound5.src = sourceNotes[4]
    sound6.src = sourceNotes[5]
    sound7.src = sourceNotes[6]
    sound8.src = sourceNotes[7]
    
    sound1.load()
    sound2.load()
    sound3.load()
    sound4.load()
    sound5.load()
    sound6.load()
    sound7.load()
    sound8.load()

}
function start(){
    
    buttonPlay.classList.add('play_on_click')
 

    if (startCheck == 0) {
  
        keyChooser()

        input1 = document.getElementById('input1').value
        input2 = document.getElementById('input2').value
        input3 = document.getElementById('input3').value
        input4 = document.getElementById('input4').value
        input5 = document.getElementById('input5').value
        input6 = document.getElementById('input6').value
        input7 = document.getElementById('input7').value
        input8 = document.getElementById('input8').value

        
        time1 = input1*speedUnit
        time2 = input2 *speedUnit
        time3 = input3*speedUnit
        time4 = input4*speedUnit
        time5 = input5 *speedUnit
        time6 = input6*speedUnit
        time7 = input7*speedUnit
        time8 = input8*speedUnit

        presetChecker()
        
        array = [time1/speedUnit, time2/speedUnit, time3/speedUnit, time4/speedUnit, time5/speedUnit, time6/speedUnit, time7/speedUnit, time8/speedUnit] 
         

        for (i=0; i< array.length; i++) {
            
            if (array[i] == 0){
                warning.innerText = 'Please fill out all inputs'
                return  
            }
        }
        
        const gcd = (a, b) => a ? gcd(b % a, a) : b;

        const lcm = (a, b) => a * b / gcd(a, b);
        
        loopLength = array.reduce(lcm);
        loopLengthCalc = loopLength // save the seconds & don't be affected by speedunit ?

        if (speedUnit == 500) {
            loopLength = loopLength/2
        } 
        
       


            
        if (loopLength >= 60 && loopLength < 3600) { //mins 
            loopLength = loopLength / 60
            

            remainder = (loopLength % 1)
            remainderToSecs = remainder*60

            if (remainderToSecs > 0) {
                totalTime.innerText = Math.trunc(loopLength) + ' minutes '+Math.trunc(remainderToSecs)+' seconds to full cycle'
            } else {
               totalTime.innerText = loopLength + ' minutes to full cycle'
            }

        }
        else if (loopLength >= 3600 && loopLength < 86400) { // hours
            loopLength = loopLength / 3600
        
            remainder = (loopLength % 1) 
           
            remainderToMins = remainder*60
            
            if (remainderToMins > 0) { //remainder mins
                remainderToMinsToSecs = (remainderToMins % 1)
                remainderToSecs = remainderToMinsToSecs*60
                Math.trunc(remainderToSecs)
                
                
                    if (remainderToSecs >= 1) {
                       totalTime.innerText = Math.trunc(loopLength) + ' hours '+Math.trunc(remainderToMins)+' minutes '+Math.trunc(remainderToSecs)+ ' seconds to full cycle'

                        


                    } else {
                        totalTime.innerText = Math.trunc(loopLength) + ' hours '+Math.trunc(remainderToMins)+' minutes to full cycle'
                       
                    }

            } else {
            totalTime.innerText = loopLength + ' hours to full cycle'
            }    
             
                    
        } else if (loopLength >= 86400){ // days

            loopLength = loopLength / 86400 

            remainder = (loopLength % 1) // hours
            
            remainderToHours = remainder*24 // it's day to hours!

            if (remainderToHours > 0) {
               
                remainder = (remainderToHours % 1)
                remainderToMins = remainder*60

                
               
                    if (remainderToMins > 0) {
                        remainderToMinsToSecs = (remainderToMins % 1)
                        remainderToSecs = remainderToMinsToSecs*60

                        if (remainderToSecs >= 1) {
                            totalTime.innerText = Math.trunc(loopLength) +' days '+ Math.trunc(remainderToHours) + ' hours '+Math.trunc(remainderToMins)+' minutes '+Math.round(remainderToSecs)+ ' seconds to full cycle'
                        } else {
                            totalTime.innerText = Math.trunc(loopLength) +' days '+ Math.trunc(remainderToHours) + ' hours '+Math.trunc(remainderToMins)+' minutes to full cycle'
                        }

                    } else {
                        totalTime.innerText = Math.trunc(loopLength )+' days '+ Math.trunc(loopLength) + ' hours to full cycle'
                       
                    }
            } else {
                totalTime.innerHTML = loopLength + ' days to full cycle'
            }
            

        } else if (loopLength > 0){
            totalTime.innerHTML = loopLength + ' seconds to full cycle'
        }   


        hourDisplay.innerText = hour+' hours'
        minDisplay.innerText = min+' minutes'
        secDisplay.innerText = sec+' seconds'
        downloader()
        showMoreBox.style.visibility = 'visible'
        go()
        startCheck++
    } else {
        startCheck = 0
        nogo()
    }    
    
    
    
}

function go(){
    clickOne()
    clickTwo()
    clickThree()
    clickFour()
    clickFive()
    clickSix()
    clickSeven()
    clickEight()

    countSec()
    interval1 = setInterval (clickOne, time1)
    interval2 = setInterval (clickTwo, time2)
    interval3 = setInterval (clickThree, time3)
    interval4 = setInterval (clickFour, time4)
    interval5 = setInterval (clickFive, time5)
    interval6 = setInterval (clickSix, time6)
    interval7 = setInterval (clickSeven, time7)
    interval8 = setInterval (clickEight, time8)

    secCounter = setInterval (countSec, 1000)
    minCounter = setInterval (countMin, 60000)
    hourCounter = setInterval (countHour, 3600000)
    // mainsound.play() 
}



function clickOne(){
   
    sound1.currentTime = 0
    sound1.play()  
    sound1.volume = 0.25 
    
    
}
function clickTwo(){
    sound2.currentTime = 0
    sound2.play() 
    sound2.volume = 0.25

   
}
function clickThree(){
    sound3.currentTime = 0
    sound3.play()
    sound3.volume = 0.25

}
function clickFour(){
    sound4.currentTime = 0
    sound4.play() 
    sound4.volume = 0.25

}
function clickFive(){
    sound5.currentTime = 0
    sound5.play() 
    sound5.volume = 0.25
  
}
function clickSix(){
    sound6.currentTime = 0
    sound6.play()
    sound6.volume = 0.25

}
function clickSeven(){
    sound7.currentTime = 0
    sound7.play() 
    sound7.volume = 0.25

}
function clickEight(){
    sound8.currentTime = 0
    sound8.play()
    sound8.volume = 0.25

}


function nogo() {
    clearInterval(interval1)
    clearInterval(interval2)
    clearInterval(interval3)
    clearInterval(interval4)
    clearInterval(interval5)
    clearInterval(interval6)
    clearInterval(interval7)
    clearInterval(interval8)

    clearInterval(secCounter)
    clearInterval(minCounter)
    clearInterval(hourCounter)

    sound1.pause()
    sound2.pause()
    sound3.pause()
    sound4.pause()
    sound5.pause()
    sound6.pause()
    sound7.pause()
    sound8.pause()
    sound1.currentTime = 0
    sound2.currentTime = 0
    sound3.currentTime = 0
    sound4.currentTime = 0
    sound5.currentTime = 0
    sound6.currentTime = 0
    sound7.currentTime = 0
    sound8.currentTime = 0

    sec = 0
    min = 0
    hour = 0
}


let sec = 0
let min = 0
let hour = 0

function countHour(){
    if (hour < 23) {
        hour++
        
        hourDisplay.innerText = hour+' hours'
        
    } else {
        hour = 0
        
        hourDisplay.innerText = hour+' hours what the hell are you still doing here ?'
        
    }
}


function countMin(){
    if (min < 60) {
        min++
        
        minDisplay.innerText = min+' minutes'
        
    } else {
        min = 0
      
        minDisplay.innerText = min+' minutes'
        
    }
}


function countSec(){
  
    if (sec < 60) {
        
        secDisplay.innerText = sec+' seconds'
        sec++
        
    } else {
        sec = 0
        
        secDisplay.innerText = sec+' seconds'
        
    }
}



   
// function clickOne(){
//     if (x == 1) {
//         sound1.currentTime = 0
//     sound1.play()
//     x++;
//     } else {
//         sound1.pause()
//         x = 1
//     }
    
// }
// function clickTwo(){
//     if (x == 1) {
//         sound2.currentTime = 0
//     sound2.play()
//     x++
//     } else {
//         sound2.pause()
//         x=1
//     }
    
// }





