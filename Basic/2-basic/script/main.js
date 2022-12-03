const title = document.getElementById('title').innerHTML='เริ่มต้นสร้างโปรแจค'
const myElement = document.getElementById('first-element')
var a =1; //var = golble 
let b =2;
const c = 3
const clicked = () =>{
    alert(`กดหาพ่อง`)
    myElement.innerHTML='กดหาพ่อง'
}

// let let1 ='let1'
// let someDecision = true

// if(someDecision){
//      let let2 = 'let2' //let2 ถูกประกาศภายใน boxscrop ทำให้ไม่สามารถนำไปใช้นอก scrope if ได้
//      var var1 = 'var1'

//      console.log(let1)
//      console.log(let2)
//      console.log(var1)
// }
// console.log(let1)
// console.error(let2)
// console.log(var1)

/**
 *  การเปลี่ยน type ของ javascript
 *  Number() แปลง เลข strign เป็นนามเบอร์
 *  parseFloat() ทศนิยม
 *  parseInt() แปลงเป็นเลขเต็มกำลง
 */

// Convert automatically by javascript itself

// console.log(Number('3.14')) // returns 3.14
// console.log(Number(' ')) //return 0
// console.log(Number("")) // return 0
// console.log(Number('99 88')) // return nan
// console.log(parseFloat(30.1)) //return 30.1
// console.log(parseInt(30.1)) //return 30


// console.log(String(123)) //return '123'
// console.log(String(100+30)) //return '130'
// console.log((123).toString()) //return "123"
// console.log((100+23).toString()) //return "!23"

/**
 *   Javascript function 
 * การประกาศ function ในภาษา javascript
 * 
 */

// ตัวอย่างที่1  classic function
function classicFunction(){

}
// ตัวอย่างที่ arrow function
const arrowFunction = () =>{

}

const sayHi = (name,lastname) =>{
 console.log(`ชื่อ ${name} นามสกุล ${lastname}`)
}

// setInterval(() => {
//     sayHi(`หล่อ` , `สวย`)
// }, 1000);


const addition = (number1,number2) => {
    return number1 + number2
}
console.log(addition(10,30))

