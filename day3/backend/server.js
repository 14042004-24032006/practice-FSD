// const batter=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("Batter reaady!"),1000);
// })
// batter.then(msg=>console.log(msg));

// function getcookerwistil(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve("rice is cooked"),4000);
//     });
// }
//  async function servefood(){
//     console.log("Mom  started cooking !");
//     const rice=await getcookerwistil();

//     console.log(rice);
//     console.log("now serve dinner!");
//  }
//  servefood();

//server
 const http=require('http')
 const items=['apple','orange','banana'];
 const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"application/json",
        "Access-Control-Allow-Origin": "*"  
    });
    res.end(JSON.stringify(items));
 });
 server.listen(3000,function(){
    console.log("server running on the port 3000");
 });

