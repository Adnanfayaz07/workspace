const User= require('../models/user')

exports.adduser = async (req, res, next) => {
    try {
      const name = req.body.name;
      const email = req.body.email;
      const phonenumber = req.body.phonenumber;
  
      const data = await User.create({
        name: name,
        email: email,
        phonenumber: phonenumber,
      });
  
      res.status(201).json({ newuserdetail: data });
    } catch (err) {
      console.error(err); // Log the error for debugging
      res.status(500).json({ error: 'Internal server error' });
    }
  };
exports.getuser=async(req,res)=>{
    try{
        const users=await User.findAll();
        res.status(200).json({alluser:users})
    }catch(error){
        console.log('get user is failing',JSON.stringify(error))
    }
}
exports.deleteuser=async(req,res)=>{
    try{
        if(req.params.id=='undefined'){
            console.log('ID is missing')
            return res.status(404).json({err:'ID is missing'})
        }
        const uId=req.params.id;
        await User.destroy({where:{id:uId}})
        res.sendStatus(200)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

