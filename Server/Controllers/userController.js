import UserInfo from "../Models/userModel";

class userController {

 static signupUser =async(req,res) =>{
    const user=await UserInfo.create(req.body);
    if (!user){
        return res.status(400).json({
            status:400,
            message:"failed to sign up 😢"
        });
    }
    return res.status(200).json({
        status:200,
        message: "success 😆",
        data:user
    });
 }  



}
export default userController;