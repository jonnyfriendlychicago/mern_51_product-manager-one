// line below required on both model and config
const mongoose = require("mongoose"); 

// what is the significance of the word 'new' in line below?
const rockOutNewCollection = new mongoose.Schema (
    {
        // ! update field names/types in this object 
        title: {
            type: String
            // , required: [true, "yo, this field is required, fool!"]
                // min is for numbers; minlength is for string.  same thing with max
            // , maxlength: [120, "Title must be 120 characters or less"]
            // , default: "N/A"
        }
        , price: {
            type: Number
            // , min: [1920, "no pre-1920 movies, man"]
        }
        , description: {
            type: String
            // , required: [true, "yo, this field is required, fool!"]
                // min is for numbers; minlength is for string.  same thing with max
            // , maxlength: [120, "Title must be 120 characters or less"]
            // , default: "N/A"
        }
    }, 
    {
        timestamps: true
    }
); 

// ! update name of collection below, specific to what you want to create here.  change "ent" in next line to "students" or "users" or "widgets"
module.exports= mongoose.model('product', rockOutNewCollection); 

// below-is-deprecated-version 
// const Ent = mongoose.model('ent', rockOutNewCollection); 
// module.exports = Ent; 