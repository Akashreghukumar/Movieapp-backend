const mongoose=require('mongoose')
exports.connect=()=>{
    try{
       // mongoose.connect('mongodb://localhost:27017/movieappdb')
       mongoose.connect('mongodb+srv://akash:iBLUozExk7Duh5jE@cluster0.756jt.mongodb.net/movie?retryWrites=true&w=majority')

        console.log("monggosse mondb conneced")

    }
    catch(err){
        console.log(err)

    }
}
