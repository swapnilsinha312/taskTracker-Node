const mongoose = require('mongoose');

// const connect=async()=>{
//     try{
//         const connectionParam={
//             useNewUrlParser:true,
//             useCreateIndex:true,
//             useUnifiedTopology:true
//         }
//         await mongoose.connect("mongodb://localhost/taskTracker",connectionParam);
//     }
//     catch{
//         console.log(error);
//     }
// }

module.exports=
async()=>{
    try{
        const connectionParam={
            useNewUrlParser:true,
            // useCreateIndex:true,
            useUnifiedTopology:true
        }
        await mongoose.connect("mongodb://localhost/taskTracker",connectionParam);
        console.log("Connected");
    }
    catch(error){
        console.log(error);
    }
};
// connect;