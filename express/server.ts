import * as express from "express";
import  transcations from "./transcations";
import  accounts from "./accounts";


let app:any = express();

app.use("/module1",transcations);
app.use("/module2",accounts);


app.listen(9090,()=>{
    console.log("server started successfully");
})