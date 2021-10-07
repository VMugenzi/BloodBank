import HospitalInfo from "../Models/hospitalModel";

class hospitalController{

static registerHospital=async (req,res)=>{
    const hospital=await HospitalInfo.create(req.body);
    if(!hospital){
        return res.status(400).json({
            status:400,
            message:"failed to register 😕"
        });
    }
        return res.status(200).json({
            status:200,
            message:"sucessfully registered 🦾",
            data: hospital
        });
}


static signinHospital=async(req,res)=>{
    const{hospitalName,password}=req.body;
    const hospital=await HospitalInfo.findOne({hospitalName:hospitalName,password:password});
if(!hospital){
    return res.status(404).json({
        status:404,
        message:"hospital does not exist🤪"
    });
}
    return res.status(200).json({
        status:200,
        message:"sucessfully logged in👍",
        data:hospital
    });
}

static getAllHospitals=async(req,res)=>{
    const hospitals=await HospitalInfo.find();
if(!hospitals){
    return res.status(404).json({
        status:404,
        message:"failed to get all hospitals🤪"
    });
}
    return res.status(200).json({
        status:200,
        message:"The list of all Hospitals",
        data:hospitals
    });
}

static getOneHospital=async(req,res)=>{
    const hospital=await HospitalInfo.findById(req.params.id);
if(!hospital){
    return res.status(404).json({
        status: 404,
        message:"failed to get One Hospital🤪"
    });
}
    return res.status(200).json({
        status:200,
        message:"successfully got one Hospital",
        data: hospital
    });
}


static updateOneHospital=async(req,res)=>{
    const hospital=await HospitalInfo.findByIdAndUpdate(req.params.id,req.body);
if(!hospital){
    return res.status(404).json({
        status:404,
        message:"failed to update a user🤪"
    });
}
    const updatedHospital=await HospitalInfo.findById(req.params.id);
    return res.status(200).json({
        status:200,
        message:"successfully upadated hospital👍",
        data:updatedHospital
    });
}


static deleteOneHospital=async (req,res)=>{
    const hospital=await HospitalInfo.findByIdAndDelete(req.params.id);
if(!hospital){
    return res.status(404).json({
        status: 404,
        message: "failed to delete hospital"
    });
}
    return res.status(200).json({
        status:200,
        message:"successfully deleted hospital",
        data:hospital
    });
}

}
export default hospitalController;