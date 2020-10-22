const menu = document.getElementById('menu')
const menuShownTop = document.getElementById('menuShownTop')
const up = document.getElementById('up')

const menuLeft = document.getElementById('menuShownLeft')
const menuLeftPic = document.getElementById('leftMenu')
const menuRightPic = document.getElementById('rightMenu')
const menuShownInfo = document.getElementById('menuShownInfo')

const wrapper = document.getElementById('wrapper')
const controls = document.getElementById('controls')
const header = document.getElementsByTagName('header')[0]
const body = document.getElementsByTagName('body')[0]

const darkLight = document.getElementById('switch')
const showMore = document.getElementById('showMore')
const showMoreBox = document.getElementById('showMoreBox')
const showMore2 = document.getElementById('showMore2')

const info1 = document.getElementsByClassName('info')[0]
const info2 = document.getElementsByClassName('info')[1]
const info3 = document.getElementsByClassName('info')[2]
const info4 = document.getElementsByClassName('info')[3]
const info5 = document.getElementsByClassName('info')[4]
const info6 = document.getElementsByClassName('info')[5]
const info7 = document.getElementsByClassName('info')[6]
const info8 = document.getElementsByClassName('info')[7]

const preset1 = document.getElementsByClassName('setting')[0]
const preset2 = document.getElementsByClassName('setting')[1]
const preset3 = document.getElementsByClassName('setting')[2]
const preset4 = document.getElementsByClassName('setting')[3]

preset1.addEventListener('mousedown', setPreset1)
preset2.addEventListener('mousedown', setPreset2)
preset3.addEventListener('mousedown', setPreset3)
preset4.addEventListener('mousedown', setPreset4)

menuLeftPic.addEventListener('mousedown', goMenuLeft)
menuRightPic.addEventListener('mousedown', goMenuRight)
menu.addEventListener('mousedown', goMenu)
up.addEventListener('mousedown', goMenuUp)

darkLight.addEventListener('mousedown', darkMode)

showMore.addEventListener('mousedown', showMoreInfo)
showMore2.addEventListener('mousedown', showMoreInfo)

let balancer = 0

let onoff = 1

function goMenu(){
    menu.classList.add('selected')
    menuLeftPic.style.opacity = '0'
    
    setTimeout(function(){
        menu.classList.remove('selected')
        menuLeftPic.style.opacity = '0.75' 

        if (infoChecker == 1) {
            menuShownInfo.style.height = '0'
            infoChecker = 0
        } else {
            return
        }
    
    }, 400)
    
    if (onoff == 1){
        
        darkLight.style.opacity = '0'
        setTimeout(function(){
            darkLight.style.display = 'none'
        }, 250)
        menuShownTop.style.display = 'block'
        
        setTimeout(function(){
            menuShownTop.style.height = '100vh'
            
            up.style.opacity = '1'
            
        })
       

        onoff++
    } else {
        if (balancer == 1) { //left open
            
            goMenuRight()
            setTimeout(function(){
                menuShownTop.style.height = '0vh'
                up.style.opacity = '0'
                darkLight.style.display = 'block'
                setTimeout(function(){
                    darkLight.style.opacity = '1'
                }, 100 )
               
                menuLeftPic.style.opacity = '0'
                setTimeout(function(){
                    menuShownTop.style.display = 'none'
                   
                }, 700)
            },400)

        } else {
            
            menuShownTop.style.height = '0vh'
            up.style.opacity = '0'
            darkLight.style.display = 'block'
            setTimeout(function(){
                darkLight.style.opacity = '1'
            }, 100 )
           
            menuLeftPic.style.opacity = '0'
            setTimeout(function(){
                menuShownTop.style.display = 'none'
            }, 700)
        }
        onoff = 1
    }
}

function goMenuUp(){
    
    menuShownTop.style.height = '0vh'
    up.style.opacity = '0'
    
    darkLight.style.display = 'block'
    setTimeout(function(){
        darkLight.style.opacity = '1'
    }, 100 )
    menuLeftPic.style.opacity = '0'
    setTimeout(function(){
        menuShownTop.style.display = 'none'
        
    }, 700)
    onoff = 1

}

function goMenuLeft(){
   
    menuRightPic.style.opacity = '0.75'
        menuShownLeft.style.display = 'block'
        setTimeout(function(){
            menuShownLeft.style.width = '100vw'
       
            menuLeftPic.style.opacity = '0'
        }, )    
        balancer = 1  

}
function goMenuRight(){
    menuShownLeft.style.width = '0vw'
    menuLeftPic.classList.remove('move')
    menuRightPic.style.opacity = '0'
    setTimeout(function(){
       
        menuLeftPic.style.opacity = '0.75'   
    menuShownLeft.style.display = '1'

    }, 500)
    balancer = 0
}

infoChecker = 0

function showMoreInfo(){
    info1.innerText = I
    info2.innerText = II
    info3.innerText = III
    info4.innerText = IV
    info5.innerText = V
    info6.innerText = VI
    info7.innerText = VII
    info8.innerText = VIII

    if (infoChecker == 0){
        
        darkLight.style.opacity = '0'
        menuShownInfo.style.display = 'block'
        setTimeout(function(){
            menuShownInfo.style.height = '100vh'
        })
        infoChecker = 1
    } else {
        menuShownInfo.style.height = '0'
       
        setTimeout(function(){
            menuShownInfo.style.display = 'none'
            darkLight.style.opacity = '1'
        }, 700)
        infoChecker = 0
    }
    
   

    
}



function setPreset1(){
    input1 = document.getElementById('input1').value = '12'
    input2 = document.getElementById('input2').value = '11'
    input3 = document.getElementById('input3').value = '12'
    input4 = document.getElementById('input4').value = '11'
    input5 = document.getElementById('input5').value = '12'
    input6 = document.getElementById('input6').value = '1.5'
    input7 = document.getElementById('input7').value = '0.75'
    input8 = document.getElementById('input8').value = '1.25'
    
    goMenuRight()
    goMenuUp()
   
}
function setPreset2(){
    input1 = document.getElementById('input1').value = '2.5'
    input2 = document.getElementById('input2').value = '3'
    input3 = document.getElementById('input3').value = '2'
    input4 = document.getElementById('input4').value = '3'
    input5 = document.getElementById('input5').value = '2'
    input6 = document.getElementById('input6').value = '3.01'
    input7 = document.getElementById('input7').value = '2.01'
    input8 = document.getElementById('input8').value = '2.501'
    goMenuRight()
    goMenuUp()

}
function setPreset3(){
    input1 = document.getElementById('input1').value = '3.125'
    input2 = document.getElementById('input2').value = '2'
    input3 = document.getElementById('input3').value = '6.375'
    input4 = document.getElementById('input4').value = '2.5'
    input5 = document.getElementById('input5').value = '2.25'
    input6 = document.getElementById('input6').value = '6.125'
    input7 = document.getElementById('input7').value = '2'
    input8 = document.getElementById('input8').value = '3'
    goMenuRight()
    goMenuUp()

}

function setPreset4(){
    input1 = document.getElementById('input1').value = '1.25'
    input2 = document.getElementById('input2').value = '0.501'
    input3 = document.getElementById('input3').value = '0.5'
    input4 = document.getElementById('input4').value = '1'
    input5 = document.getElementById('input5').value = '1.25'
    input6 = document.getElementById('input6').value = '0.501'
    input7 = document.getElementById('input7').value = '0.5'
    input8 = document.getElementById('input8').value = '1.5'
    goMenuRight()
    goMenuUp()

}



function presetChecker() {
    if (time1 == 12000 && time2 == 11000 && time3 == 12000 && time4 == 11000 & time5 == 12000 && time6 == 1500 && time7 == 750 && time8 == 1250){
        warning.innerHTML += '<br><br><em>Slow Chords</em>'
    } else if (time1 == 1250 && time2 == 501 && time3 == 500 && time4 == 1000 & time5 == 1250 && time6 == 501 && time7 == 500 && time8 == 1500){
        warning.innerHTML += '<br><br><em>Infinity Phasing</em>'
    } else if (time1 == 3125 && time2 == 2000 && time3 == 6375 && time4 == 2500 & time5 == 2250 && time6 == 6125 && time7 == 2000 && time8 == 3000){
        warning.innerHTML += '<br><br><em>Minor 6th run</em>'
    } else if (time1/1000 == 2.5 && time2/1000 == 3 && time3/1000 == 2 && time4/1000 == 3 & time5/1000 == 2 && time6/1000 == 3.01 && time7/1000 == 2.01 && time8/1000 == 2.501){
        warning.innerHTML += '<br><br><em>Soft Phase</em>'
    } else {
        return
    }
}

setTimeout(function(){
    menu.classList.add('onStart')
   
    header.style.opacity = '0.8'
    
 
    setTimeout(function(){
        menu.classList.remove('onStart')
    
    }, 250)
    
    setTimeout(function(){
        menu.classList.add('onStart')
    
    }, 500) 
     
    setTimeout(function(){
        menu.classList.remove('onStart')
    
    }, 750)  
    
    setTimeout(function(){
        menu.classList.add('onStart')
    
    }, 1000) 
     
    setTimeout(function(){
        menu.classList.remove('onStart')
        
    }, 1250)  
    setTimeout(function(){
       
        header.style.opacity = '1'
        
    }, 1750)

}, 3000)


let string = []
let noteNums = 'I II bIII IV V bVI bVII'
let str
let split
let splittemp
let namesForLog = []

let I
let II
let III
let IV
let V
let VI
let VII
let VIII

function downloader(){ // log data each  time 
    string = []

    str = sourceNotes + ' '
    split = str.split(/[+-/*]+/);
    splittemp = split + ''
    split = splittemp.replace(/mp3/g,'');
    split = split.replace(/sound/g,'');
    split = split.replace(/violin/g,'');
    split = split.replace(/nonverbed/g,'');
    split = split.split(/[+-/*]+/);
    split = split.slice(1, -1)
    namesForLog = split
    string += time1/1000 + 's '
    string += time2/1000 + 's '
    string += time3/1000 + 's '
    string += time4/1000 + 's '
    string += time5/1000 + 's '
    string += time6/1000 + 's '
    string += time7/1000 + 's '
    string += time8/1000 + 's '

    
    console.log(warning.innerText) // key + preset
    // console.log(noteNums) // I II etc optional
    // console.log(split) // note names
    // console.log(string) // repeats
    console.log(totalTime.innerText) //totalLoop
    I = loopLengthCalc/array[0]
    II = loopLengthCalc/array[1]
    III = loopLengthCalc/array[2]
    IV = loopLengthCalc/array[3]
    V = loopLengthCalc/array[4]
    VI = loopLengthCalc/array[5]
    VII = loopLengthCalc/array[6]
    VIII = loopLengthCalc/array[7]
    console.log(namesForLog)
    I = namesForLog[0]+' will be played '+I+' times.'
    II = namesForLog[1]+' will be played '+II+' times.' 
    III = namesForLog[2]+' will be played '+III+' times.' 
    IV = namesForLog[3]+' will be played '+IV+' times.' 
    V = namesForLog[4]+' will be played '+V+' times.'
    VI = namesForLog[5]+' will be played '+VI+' times.'
    VII = namesForLog[6]+' will be played '+VII+' times.'
    VIII = namesForLog[7]+' will be played '+VIII+' times.'
    console.log(I)
    console.log(II)
    console.log(III)
    console.log(IV)
    console.log(V)
    console.log(VI)
    console.log(VII)
    console.log(VIII)

}

let switchPos = 0

function darkMode(){
    if (switchPos == 0) {
        
        body.style.backgroundColor = "#121212"
        body.style.color = "rgba(256,256,256,0.6)"
        header.style.color = "rgba(256,256,256,0.9)"
        menuShownTop.style.backgroundColor = "#121212"
        menuShownTop.style.color = "rgba(256,256,256,0.6)"
        menuShownLeft.style.backgroundColor = "#121212"
        menuShownLeft.style.color = "rgba(256,256,256,0.6)"
        menuShownInfo.style.backgroundColor = "#121212"
        menuShownInfo.style.color = "rgba(256,256,256,0.6)"
        darkLight.src = './img/bulb_light.png'
        if (instrumentSelector == 0) {
            instr.src = './img/keys_light.png'
        } else {
            instr.src = './img/violin_light.png'
        }

        switchPos++
    } else {
        body.style.backgroundColor = "#007cc7"
        body.style.color = "#eefbfb"
        header.style.color = "#eefbfb"
        menuShownTop.style.backgroundColor = "#4da8da"
        menuShownTop.style.color = "#222"
        menuShownLeft.style.backgroundColor = "#4da8da"
        menuShownLeft.style.color = "#222"
        menuShownInfo.style.backgroundColor = "4da8da"
        menuShownInfo.style.color = "#222"
        darkLight.src = './img/bulb.png'
        if (instrumentSelector == 0) {
            instr.src = './img/keys.png'
        } else {
            instr.src = './img/violin.png'
        }

        switchPos--
    }
    
}
