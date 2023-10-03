const { default: mongoose } = require('mongoose')
const moongose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type : String,
        require: [true,'porfavor teclea un nombre']
    }, 
    email: {
        type : String,
        require: [true,'porfavor teclea un email'],
        unique: true
    }, 
    password: {
        type : String,
        require: [true,'porfavor teclea un password']
    }
    },{
        timestamps: true
    })

    module.exports = mongoose.model('User', userSchema)

   


