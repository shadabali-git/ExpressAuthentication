import UserModel from "../../Models/User.model";

const deleteUserService=async (username:string)=>{
    try{
          const res=await UserModel.deleteOne({username:username});
        if (res.deletedCount === 0) {
            throw new Error("Cannot find username")
        }
          return res;
    }
    catch (e){
        console.log("user Deletion Issue ",e);
        throw new Error('Cannot Delete User');
    }
}
export default deleteUserService;