import HospitalInfo from "../Models/hospitalModel";

class hospitalController{

static registerHospital=async (res,req)=>{
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

}
export default hospitalController;