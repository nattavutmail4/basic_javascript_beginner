let id = 1
const movie = [
    {id:id++,name:"ทายาทพันธุ์ข้าวเหนียว",year:2021},
    {id:id++,name:"วันทอง",year:2021},
    {id:id++,name:"เวลากามเทพ",year:2022},
    {id:id++,name:"ใต้หล้า",year:2022},
    {id:id++,name:"แนวสุดท้าย",year:2018}
]
const OnData = ()=>{
    let countData = movie.length
    if(countData > 0){
        let data = movie
        let content = ''
        for(let r = 0; r <= countData; r++){
          if(data[r] != undefined){
            content+=`<tr>`,
            content+=`<td>${data[r].id}</td>`,
            content+=`<td>${data[r].name}</td>`,
            content+=`<td>${data[r].year}</td>`,
            content+=`</tr>`
          }
        }
        document.getElementById('dataS').innerHTML=content
    }else{
        console.log('Null data');
    }
}
const fetchphotos = async () => await (await fetch(`https://jsonplaceholder.typicode.com/photos`)).json()
const Photos = async()=>{
    let result = await( fetchphotos())
    if(result.length != undefined || result.length >1){
        let data  = result
        let count = result.length
        let content = ''
        for(let i = 0; i<=count; i++){
            if(data[i]!=undefined){
                const {id,title,thumbnailUrl,url} = data[i]
                content+=`<tr>`,
                content+=`<td>${id}</td>`,
                content+=`<td>${title}</td>`,
                content+=`<td><a href='${url}'><img src='${thumbnailUrl}'></a></td>`,
                content+=`</tr>`
            }
        }
        if(content.length >1){
          document.getElementById('dataphotos').innerHTML=content
        }else{
          document.getElementById('dataphotos').innerHTML='not empty'
        }
    }
}
const fetchUser = async ()=> await (await fetch(`https://jsonplaceholder.typicode.com/users`)).json()
const main = async()=>{
   let movieProducts = await(OnData())
   let photosData = await (Photos()) 
}
main()