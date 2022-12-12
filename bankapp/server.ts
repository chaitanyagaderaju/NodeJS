import * as express from "express";

import accounts from "./accounts";

import transcations from "./transcations";

import cards from "./cards";

let app:any = express();

app.use("/module1",accounts);
app.use("/module2",transcations);
app.use("/module3",cards);


app.listen(9090,()=>{
    console.log("server started successfully");
})