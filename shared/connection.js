const mongoose=require('mongoose')
exports.connect=()=>{
    try{
        mongoose.connect('mongodb://localhost:27017/movieappdb')
        console.log("monggosse mondb conneced")

    }
    catch(err){
        console.log(err)

    }
}