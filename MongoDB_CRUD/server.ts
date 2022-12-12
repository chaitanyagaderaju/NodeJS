import * as express from "express";

import * as cors from "cors";

import * as bodyparser from "body-parser";

import fetch from "./fetch/fetch";

import insert from "./insert/insert";

import update from "./update/update";

import remove from "./remove/remove";

let app:any = express();

app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


app.use("/fetch",fetch);
app.use("/remove",remove);
app.use("/insert",insert);
app.use("/update",update);


app.listen(9090,()=>{
    console.log("server started successfully");
});

