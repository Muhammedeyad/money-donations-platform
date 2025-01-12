
const bcrypt = require('bcrypt')
const authModel = require('../models/authModel')
const { generatingCookie } = require('../utils/generatingCookie')
const authAdmin = require('../models/authAdmin')

const userRegister = async (req, res) => {
    try {
        const { username, password, confirmPassword } = req.body
        if (password != confirmPassword) return res.status(400).json({ message: "ensure confirmpassword is same" })
        const existingUser = await authModel.findOne({ username: username })
        if (!existingUser) {
            const bcryptPassword = await bcrypt.hash(password, 8)
            const user = await authModel.create({
                username: username,
                password: bcryptPassword,
                confirmPassword: bcryptPassword
            })
            await generatingCookie(user._id, res)
            return res.status(200).json(user)
        }
        res.status(400).json({ error: "this username already exists" })
    } catch (error) {
        res.status(400).json({ error: "error comes from auth router" })
        console.log("comes from auth router", error.message);
    }
}

const userLogin =async (req, res) => {
 try {
    const { username, password } = req.body
    const registerdUser = await authModel.findOne({username})
    if(!registerdUser) return res.status(400).json({error: "username is incorrect"})
    const isSame = await bcrypt.compare(password, registerdUser.password)
    if(isSame){
        await generatingCookie(registerdUser, res)
        return res.status(200).json(registerdUser)
    }
    res.status(400).json({error: "make sure password is correct "})

 } catch (error) {
    return res.status(400).json({error: "error came from login route"})
    console.log("error came from login route", error.message);
    
 }
}



const adminRegister = async (req, res) => {
    try {
        const { username, password, confirmPassword } = req.body
        if (password != confirmPassword) return res.status(400).json({ message: "ensure confirmpassword is same" })
        const existingUser = await authAdmin.findOne({ username: username })
        if (!existingUser) {
            const bcryptPassword = await bcrypt.hash(password, 8)
            const user = await authAdmin.create({
                username: username,
                password: bcryptPassword,
                confirmPassword: bcryptPassword
            })

            await generatingCookie(user._id, res)
            return res.status(200).json(user)
        }
        res.status(400).json({ error: "this username already exists" })
    } catch (error) {
        res.status(400).json({ error: "error comes from auth router" })
        console.log("comes from auth router", error.message);
    }
}

const adminLogin =async (req, res) => {
    try {
       const { username, password } = req.body
       const registerdUser = await authAdmin.findOne({username})
       if(!registerdUser) return res.status(400).json({error: "username is incorrect"})
       const isSame = await bcrypt.compare(password, registerdUser.password)
       if(isSame){
           await generatingCookie(registerdUser, res)
           return res.status(200).json(registerdUser)
       }
       res.status(400).json({error: "make sure password is correct "})
   
    } catch (error) {
       return res.status(400).json({error: "error came from login route"})
       console.log("error came from login route", error.message);
       
    }
   }


const logout =(req, res)=>{
    try {
        res.cookie("auth", "", { maxAge: 0})
        res.status(200).json("logout successfully")
    } catch (error) {
        console.log(error.message, "error while logout");
        res.status(400).json({error: "error while logout"})
    }
}
module.exports = { userRegister, userLogin, adminRegister, adminLogin, logout}