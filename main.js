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




let sound = document.getElementsByClassName('sound')



const buttonPlay = document.getElementById('play')

const ratio = document.getElementById('ratio')

let interval1
let interval2
let interval3
let interval4
let interval5
let interval6

let time1
let time2
let time3
let time4
let time5
let time6

let minCounter
let secCounter

let sourceNotes = ['./sound/A.mp3', './sound/Ab.mp3', './sound/B.mp3', './sound/Bb.mp3', './sound/C.mp3', './sound/D.mp3', './sound/Db.mp3', './sound/E.mp3','./sound/Eb.mp3','./sound/F.mp3','./sound/G.mp3','./sound/Gb.mp3', './sound/C+.mp3']


    sound1.src = sourceNotes[0]
    sound2.src = sourceNotes[2]
    sound3.src = sourceNotes[4]
    sound4.src = sourceNotes[5]
    sound5.src = sourceNotes[7]
    sound6.src = sourceNotes[9]
    sound7.src = sourceNotes[10]
    sound8.src = sourceNotes[12]


let remainder
let remainderToHours
let remainderToMins
let remainderToMinsToSecs //for calc only
let remainderToSecs



buttonPlay.addEventListener('mousedown', start)
buttonPlay.addEventListener('transitionend', transitionStop)

function transitionStop(){
    this.classList.remove('play_on_click')
}

let startCheck = 1

window.addEventListener('keydown', keychecker)

function keychecker(e){
    if (e.keyCode == 32){
        start()
    } else {
        return
    }
}

function start(){
    buttonPlay.classList.add('play_on_click')
    if (startCheck == 1) {
        let input1 = document.getElementById('input1').value
        let input2 = document.getElementById('input2').value
        let input3 = document.getElementById('input3').value
        let input4 = document.getElementById('input4').value
        let input5 = document.getElementById('input5').value
        let input6 = document.getElementById('input6').value
        let input7 = document.getElementById('input7').value
        let input8 = document.getElementById('input8').value

        warning.innerText = ''
        time1 = input1*1000
        time2 = input2 *1000
        time3 = input3*1000
        time4 = input4*1000
        time5 = input5 *1000
        time6 = input6*1000
        time7 = input7*1000
        time8 = input8*1000
        
        let array = [time1/1000, time2/1000, time3/1000, time4/1000, time5/1000, time6/1000, time7/1000, time8/1000] 
         

        for (i=0; i< array.length; i++) {
            
            if (array[i] == 0){
                warning.innerText = 'Please fill out all inputs'
                return  
            }
        }
        
        const gcd = (a, b) => a ? gcd(b % a, a) : b;

        const lcm = (a, b) => a * b / gcd(a, b);
        
        let loopLength = array.reduce(lcm);
        console.log(loopLength)


            
        if (loopLength >= 60 && loopLength < 3600) { //mins 
            loopLength = loopLength / 60
            

            remainder = (loopLength % 1)
            remainderToSecs = remainder*60

            if (remainderToSecs > 0) {
                totalTime.innerText = Math.trunc(loopLength) + ' minutes '+Math.round(remainderToSecs)+' seconds to full cycle'
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
                console.log(remainderToSecs)
                
                    if (remainderToSecs > 0) {
                       totalTime.innerText = Math.trunc(loopLength) + ' hours '+Math.trunc(remainderToMins)+' minutes '+Math.trunc(remainderToSecs)+ ' seconds to full cycle'

                        


                    } else {
                        totalTime.innerText = Math.trunc(loopLength) + ' hours '+remainderToMins+' minutes to full cycle'
                       
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

                        if (remainderToSecs > 0) {
                            totalTime.innerText = Math.trunc(loopLength) +' days '+ Math.trunc(remainderToHours) + ' hours '+Math.trunc(remainderToMins)+' minutes '+Math.round(remainderToSecs)+ ' seconds to full cycle'
                        } else {
                            totalTime.innerText = Math.trunc(loopLength) +' days '+ Math.trunc(remainderToHours) + ' hours '+Math.trunc(remainderToMins)+' minutes to full cycle'
                        }

                    } else {
                        totalTime.innerText = Math.trunc(loopLength )+' days '+ Math.trunc(loopLength) + ' hours '+remainderToMins+' minutes to full cycle'
                       
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
        go()
        startCheck++
    } 

    else {
        startCheck = 1
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
        console.log(min+' minutes')
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
