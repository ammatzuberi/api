let app= document.getElementById("app")
let app2= document.getElementById("app2")
let app3= document.getElementById("app3")
let app4= document.getElementById("app4")
let app5= document.getElementById("app5")




  
const element=()=>{

    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
.then(Response => Response.json())
.then(json =>{
    
      
    console.log(json)
    console.log(json.chartName)
    console.log(json.disclaimer)
    console.log(json.time)

    
let output= document.getElementById('app')
let output2= document.getElementById('app2')

let output4= document.getElementById('app4')
output2.innerHTML+=`<div  >
<H1>${""+json.chartName}</div>`

output4.innerHTML+=`<div  > <h2>${"Disclaimer :-    "+json.disclaimer}</div>`


c={...json.bpi};
console.log(json);
Object.keys(c).forEach(function(key, index) {

    output.innerHTML+=`<div class="app" >
     Name : ${c[key].code} <br>
     ${'Symbol :'+c[key].symbol} <br>

     ${'Rate :'+c[key].rate} <br>
        ${'Discription :'+c[key].description} <br>
     ${'Rate_float :'+c[key].rate_float} <br> <div>`




          
       
        //   <div>Name : ${c[key].code}<br> ${'Symbol :'+c[key].symbol}
        //    <br> ${'Rate :'+c[key].rate} <br>   ${'Discription :'+c[key].description} 
        //     <br> ${'Rate_float :'+c[key].rate_float} <div>`
             
    
       
            // for looping      
        // console.log("Name:", c[key].code)
        // console.log("symbol:", c[key].symbol)
        // console.log("Rate:", c[key].rate)
        // console.log("Rate_float:", c[key].rate_float)
        // // console.log("Discription:", c[key].description)

        // var2= app.prepend(` 
        //  ${'Name :'+c[key].code}-
        //   ${'Symbol :'+c[key].symbol}
        //   ${'Rate :'+c[key].rate} ${'Discription :'+c[key].description}  ${'Rate_float :'+c[key].rate_float}
        //  `);
     
        //  var3= app3.append(` ${'Symbol :'+c[key].symbol}`)
        //  var4=app2.append(` ${'Rate :'+c[key].rate}`)
        //  var5=app4.append(` ${'Rate_float :'+c[key].rate_float}`)
        // var7=app6.append(` ${'Discription :'+c[key].description}`)
    
        // app.innerHTML=` ${'Name :'+c[key].code}  <br>   ${'symbol :'+c[key].symbol} <br> 
        //  ${'Rate :'+c[key].rate} <br>${'Discription :'+c[key].description} <br> ${'Rate_float :'+c[key].rate_float}`
        // // app3.innerHTML=` ${'symbol :'+c[key].symbol}` 
        // app2.innerHTML=` ${'Rate :'+c[key]}` 
        // app4.innerHTML=` ${'Rate_float :'+c[key].rate_float}`
        // console.log("dis:", disclaimer)
       
        //  app.innerHTML= `<p>${ 'Disclaimer :' +c[key].code}</p>`;
       
        //  app.innerHTML+=`${'Name :'+key}<br>`
        // app.innerHTML+=`${'Rate:'+index}`
        // app.innerHTML+=`${'Rate_float:'+rate}`

 

    
})


} 
)
}
element();








