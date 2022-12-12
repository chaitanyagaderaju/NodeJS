let http = require("http");

let url = require("url");

let server = http.createServer((req,res)=>{
// set the MIME type
// communication language between client and server called as MIME
res.writeHead(200,{'Content-Type':'text/html'});

let obj = url.parse(req.url,true).query;

if(obj.name === "chaitanya" && obj.password === "chaitanya"){
    res.write("<hl>Login success</h1>");
}
else{
    res.write("<h2>Login Fail</h2>");
}
res.end();
});
server.listen(9091);
console.log("server started");  