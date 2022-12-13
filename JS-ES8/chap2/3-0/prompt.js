const prompt = require('prompt-sync')()
let username = prompt('Enter username ')
let password = prompt('Enter password ')

if(username != '' && password !=''){
    let check = (username === 'admin' && password ==='123456') ? true : false
    if(check){
        console.log(`Welcome to Programe`)
        console.log('SELECT MENU')
        console.log('1.CricleAre ')
        console.log('2.Sum ')
        let selectMenu = prompt('Select chois ')
        if(selectMenu ==1){
            let radius = prompt('radius is ')
            radius = parseInt()
            let result = circleArea(radius)
            console.log(`result cricleare ${result}`)
        }else{
            console.log(``)
        }

    }else{
        console.log('false username && password')
    }
}

const circleArea = (radius)=>{
    let circlearea  = 3.14*(radius ** 2)
    let sqrt100 = 100**0.5
    return circlearea
}