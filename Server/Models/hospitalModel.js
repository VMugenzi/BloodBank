import mongoose from "mongoose";

const HospitalSchema= new mongoose.Schema({

    hospitalName: String,

    email: {type:String, 
        require:true,
        unique:true
    },

    address:{ type:String,
        require:true
    },

    password:{type:String,
        require:true,
        default:1234}
    });

    const HospitalInfo= mongoose.model('Hospital',HospitalSchema);
    
    export default HospitalInfo;
