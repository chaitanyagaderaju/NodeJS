import * as fs from "fs";


// 1) read the data asynchronusly
// fs.readFile("demo.txt",(err,res)=>{
// if(err) throw err;
// else{
//     console.log(res.toString());
// }
// });

// 2)read the data asynchronously
// const res = fs.readFileSync("demo.txt");
// console.log(res.toString());

//  3)write the data asynchronously
// fs.writeFile("demo.txt","chaitanya gaderaju",(err:any):any=>{
// if(err) throw err;
// else{
//     console.log("Write the file asynchronously successfully");
// }
// });

// 4)write the data synchronously
// fs.writeFileSync("demo.txt","hello nikhila");
// console.log("write the file synchronously");

// 5) append the file asynchronously
// fs.appendFile("demo.txt","NodeJS server",(err:any):any=>{
//     if(err) throw err;
//     else{
//         console.log("data append asynchronously");
//     }
// });

// 6) append the file synchronously
// fs.appendFileSync("demo.txt","hi priyanshi");
// console.log("data append synchronously");

// 7)open the file asynchronously
fs.open("demo.txt","r+",(err,fd)=>{
    if(err) throw err;
    else{
        console.log("file open asynchronously");
        // 8) rename the file asynchronously
        fs.rename("demo.txt","demo1.txt",(err)=>{
            if(err) throw err;
            else{
                console.log("renamed file asynchronously");
                // 9) read operation
                fs.readFile("demo1.txt",(err,res)=>{
                    if(err) throw err;
                    else{
                        console.log(res.toString());
                        console.log("data read successfully");
                        // 10) write the data
                        fs.writeFile("demo1.txt","chaitanya gaderaju",(err)=>{
                            if(err) throw err;
                            else{
                                console.log("write the data succesfully");
                                // 11)truncate operation
                                  fs.truncate("demo1.txt",6,(err)=>{
                                    if(err) throw err;
                                    else{
                                        console.log("truncate asynchronously");
                                        // 12) close the file
                                        fs.close(fd,(err)=>{
                                            if(err) throw err;
                                            else{
                                                console.log("close the file successfully");
                                                // 13) delete the file
                                                fs.unlink("demo1.txt",(err)=>{
                                                    if(err) throw err;
                                                    else{
                                                        console.log("file delete successfully");
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
    });