const express= require("express")
const { userRegister, userLogin, adminLogin, adminRegister } = require("../controller/authController")
const router = express.Router()

router.get("/", (req, res)=>{
    res.send('working fine')
})

router.post('/register', userRegister)
router.post('/login', userLogin)
router.post("/adminLogin", adminLogin)
router.post("/adminRegister", adminRegister)

module.exports =router