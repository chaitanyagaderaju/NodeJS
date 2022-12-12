// Http server
// http is the predefined module in nodejs,used to create http server,
// no need to download http module
// http module already avaliable along with the node software


//step:1 import http module with help of require() function
let http = require("http");

let server = http.createServer((req,res)=>{
    res.write("welcome to http server");
    res.end();
});

server.listen(9090);
console.log("server runing");