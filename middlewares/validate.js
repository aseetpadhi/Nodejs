const validation = require('validate');
const Schema = validation.Schema;

function validate(req, res){
const userSchema = new Schema({
name : {
    type: String    
},
 age : {type : Number}
});
}


module.exports=validate;