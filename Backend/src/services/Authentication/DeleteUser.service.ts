import UserModel from "../../Models/User.model";

const deleteUserService=async (userId:string)=>{
    try{
          const res=await UserModel.deleteOne({_id:userId});
        if (res.deletedCount === 0) {
            throw new Error("Cannot find userid")
        }
          return res;
    }
    catch (e){
        console.log("user Deletion Issue ",e);
        throw new Error('Cannot Delete User');
    }
}
export default deleteUserService;