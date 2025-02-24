import User from "../models/usermodel.js";
export const CreateStudent = async (req, res) => {
  const { name, email, mobile, password } = req.body;
  try {
    if (!name || !email || !mobile || !password) {
      return res.status(401).json({
        message: "All fields are required!",
        success: false
      });
    }
    const newuser = new User({
      name,
      email,
      mobile,
      password
    });
    await newuser.save();
    return res.status(200).json({
      message: "User Created Successfully!",
      success: true,
      User: newuser
    });
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      message: "Internal Server Error!",
      success: false
    });
  }
};
export const ReadStudent = async (req, res) => {
  try {
    const alluser = await User.find();
    if (!alluser) {
      return res.status(500).json({
        message: "User not found!",
        success: false
      });
    }
    return res.status(200).json({
      message: "User Fetched Successfully!",
      success: true,
      User: alluser
    });
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      message: "Internal Server Error!",
      success: false
    });
  }
};
export const UpdateStudent=async(req,res)=>
  {
    const id=req.params.id;
    const {name,email,mobile,password}=req.body;
    try {
      if(!name || !email || !mobile|| !password)
      {
        return res.status(401).json({
          message:"All fields are required!",
          success:false
        });
      }
      const updateduser=await User.findOneAndUpdate(
        {_id:id},
        { name, email, mobile, password }, 
        {new:true}
      );
      if(!updateduser)
      {
        return res.status(401).json({
          message:"User Not Updated!",
          success:false
        });
      }
      return res.status(200).json({
        message:"User Updated Successfully!",
        success:true,
        User:updateduser
      });
    } catch (error) {
      console.log(error);
      return res.status(501).json({
        message:error.message || "Internal Server Error!",
        success:false
      });
    }
  };
  export const DeleteStudent=async(req,res)=>
    {
      const id=req.params.id;
      try {
        await User.findByIdAndDelete(id);
        return res.status(200).json({
          message:"User Deleted Successfully!",
          success:true,
        });
      } catch (error) {
        console.log(error);
        return res.status(501).json({
          message:error.message || "Internal Server Error!",
          success:false
        });
      }
    };