// const APP_VERSION = document.getElementById('title').innerHTML='VERSION 1.0.0'

// const FIRSTNAME = 'John'
// const LASTNAME  = 'Muir'
// const AGE = 23
// const INRELATIONSHIP = false

// console.log(`His name is ${FIRSTNAME} ${LASTNAME} AND  ${AGE} years old with ${INRELATIONSHIP ? 'in relationship' :'not in relationship'}`)

// const PERSON = {
//     FIRSTNAME:"John",
//     LASTNAME:"Muir",
//     AGE:23,
//     INRELATIONSHIP:false
// }
// console.log(`His name is ${PERSON.FIRSTNAME} ${PERSON.LASTNAME} AND  ${PERSON.AGE} years old with ${PERSON.INRELATIONSHIP ? 'in relationship' :'not in relationship'}`)
// console.log(`His name is ${PERSON[FIRSTNAME]} ${PERSON[LASTNAME]} AND  ${PERSON[AGE]} years old with ${PERSON[INRELATIONSHIP] ? 'in relationship' :'not in relationship'} `)

// JSON
// const json = {
//     "String":"someText",
//     "Number":3.14,
//     "Boolean":true,
//     "Null":null,
//     "Object":{
//         "somekey":"dadsdadsadwd"
//     },
//     "Array":["a","b","c","d"]
// }
// console.log(json)

// JSON PAGEHOLDER
// const MYOBJ = {
//     string:"some text",
//     number:3.14,
//     boolean:true,
//     object:{
//         someKey:"Some Value"
//     },
//     array:['a','b','c','d'],
//     function:()=>{
//         console.log(`this is a method`)
//     },
//     data:new Date(),
//     undefined:undefined
// }
// console.log(MYOBJ)

// const alphabets ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// console.log(alphabets.length) // 26
// console.log(alphabets[0]) //a
// console.log(alphabets.slice(5)) // FGHIJKLMNOPQRSTUVWXYZ
// console.log(alphabets.slice(0,5)) //ABCDE
// console.log(alphabets.substring(0,5)) // ABCDE 
// console.log(alphabets.substr(0,5)) // ABCDE 

// console.log(alphabets.replace('ABC','132')) //เปลียนข้อมูล //123DEFGHIJKLMNOPQRSTUVWXYZ 

// const loweCaseAlphabets = alphabets.toLocaleLowerCase() //เปลี่ยนตัวอักษรเป็นตัวเล็ก
// console.log(loweCaseAlphabets)


// string template
// const MYVARIABLES = 'world'
// console.log(`hello ${MYVARIABLES} ${9*9}`)

// console.log({ MYVARIABLES })

//arrow function
// async  

const fetchEmployee = async (id) => await (await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)).json()
const getAddressString = (address) => `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`

const showInfo = (profile)=>{
    const idElement = document.getElementById('profile-id')
    const nameElement = document.getElementById('profile-name')
    const emailElement = document.getElementById('profile-email')
    const avatarElement = document.getElementById('profile-avatar')
    const addressElement = document.getElementById('profile-address')
    const companyElement = document.getElementById('profile-company-name')
    const companybsElement = document.getElementById('profile-company-bs')

    idElement.innerHTML = profile.id,
    nameElement.innerHTML =profile.name,
    emailElement.innerHTML = profile.email,
    avatarElement.src = `https://avatars.dicebear.com/api/bottts/${profile.name}.svg`
    addressElement.innerHTML = getAddressString(profile.address),
    companyElement.innerHTML = profile.company.name,
    companybsElement.innerHTML = profile.company.bs
}
const main = async () => {
    const random = Math.floor(Math.random() * 10)+1
    const profile =  await fetchEmployee(random)
    showInfo(profile)
}
main()







