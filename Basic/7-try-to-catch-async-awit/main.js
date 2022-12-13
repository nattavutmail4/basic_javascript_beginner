/**
 *  Try คือส่วนที่วางโค้ดที่อาจเกิด Errors ขึ้นได้
 *  Catch คือ ส่วนที่จะทำงานเมื่อเกิด Errors ขึ้น
 *  Throw คือ ส่วนที่สร้าง errors เมื่อเกิดการทำงานที่เราไม่ต้องการ
 *  finally คือ ส่วนสุดท้ายหลังจาก try และ catch
 */

// try {
//     // block of code to try
// } catch (error) {
//     // block of code to handle errors
// }
// finally{
//     //Block of code to be executed regardLess of the try / catch result
// }

// Exampel1
let x=5
try {
    if(x=="") throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x)
    if(x >10) throw "is too high"
    if(x < 5) throw "is too low"
} catch (error) {
    console.log(`Error: ${x} ${error}`)
}
finally{
    console.log(`DONE!!`);
}