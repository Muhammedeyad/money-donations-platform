
const bcrypt = require('bcrypt')
const authModel = require('../models/authModel')

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
            await user.save()
            return res.status(200).json(user)
        }
        res.status(400).json({ error: "this username already exists" })
    } catch (error) {
        res.status(400).json({ error: "error comes from auth router" })
        console.log("comes from auth router", error.message);
    }
}
const userLogin = (req, res) => {
    res.send('signin success')
}
module.exports = { userRegister, userLogin }