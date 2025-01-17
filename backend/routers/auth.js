const express= require("express")
const { userRegister, userLogin, adminLogin, adminRegister, logout, adminLogout } = require("../controller/authController")
const router = express.Router()

router.get("/", (req, res)=>{
    res.send('working fine')
})

router.post('/register', userRegister)
router.post('/login', userLogin)
router.post("/adminLogin", adminLogin)
router.post("/adminRegister", adminRegister)
router.post("/logout", logout)
router.post("/admin/logout", adminLogout)

module.exports =router