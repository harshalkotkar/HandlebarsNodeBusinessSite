const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/harshaldynamic", { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology:true }).then(()=>{
    console.log("conn seccessful");}).catch((e)=>{
        console.log(`failed ${e}`);});




