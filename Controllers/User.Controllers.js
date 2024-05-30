const UserService = require('../Services/User.services')


//------ 1 ----- //
exports.getARandomUser = (req,res) => {
    const randomUser = UserService.getARandomUser();
    res.json(randomUser);
}
//------ 2 ----- //
exports.getAllUser = (req,res) => {
    const users = UserService.getAllUsers();
    res.json(users);
}
//------ 3 ----- //
exports.saveAUser = (req,res) => {
    const newUser = req.body;
    const savedUser = UserService.saveAUser(newUser);
    res.status(201).json(savedUser);
}
//------ 4 ----- //
exports.updateAUser = (req,res) => {
    const userId = parseInt(req.params.id);
    const updatedUserData = req.body;
    const updatedUser = UserService.updateAUser(userId,updatedUserData);
    
    if(updatedUser){
        res.json(updatedUser);
    }else{
        res.status(404).json({message:'User not found!'});
    }
}
//------ 5 ----- //
exports.deleteAUser = (req,res) => {
    const userId=parseInt(req.params.id);
    const deletedUser=UserService.deleteAUser(userId);

    if(deletedUser){
        res.json({message:'User delete successfully!'});
    }else{
        res.status(404).json({message:'User not found!'});
    }
}



