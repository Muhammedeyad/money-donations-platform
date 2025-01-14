const campaignSchema = require("../../models/campaigns/campaignSchema")


const createCampaign = async (req, res) => {
    const campaignCreatedUser = req.userId
    try {
        const { fullName, purpose, goalAmount, reason } = req.body
        if (!fullName || !purpose || !goalAmount || !reason) return res.status(400).json({ error: "please fill out all fields" })
        const existingCampaign = await campaignSchema.findOne({ createdBy: campaignCreatedUser._id })
        if (existingCampaign) return res.status(400).json({ error: "campaign has been already created" })
        const newCampaign = await campaignSchema.create({
            fullName: fullName,
            purpose: purpose,
            goalAmount: goalAmount,
            reason: reason,
            createdBy: campaignCreatedUser._id
        })
        res.status(200).json(newCampaign)
    } catch (error) {
        console.log('error comes from campaign route', error.message);
        res.status(400).json({ error: error.message })
    }
}



const gettingApprovedCampaigns = async (req, res) => {
    try {
        const authAdminId = req.userId
        const authId = String(authAdminId._id)
        if (!authAdminId) return res.status(400).json({ error: "un-authorized user" })
        const ApprovedCampaigns = await campaignSchema.find(
            {
                status: "Approved",
                createdBy: {$ne: authId}
            })
        if (!ApprovedCampaigns) return res.status(200).json({ error: "approved campaigns not getting error " })
        if (ApprovedCampaigns.length < 1) return res.status(200).json({ message: "No Campaign Found At This Time" })
        res.status(200).json(ApprovedCampaigns)
    } catch (error) {
        console.log('error comes from getting approved campaigns', error.message);
        res.status(400).json({ error: error.message })
    }
}


const getMyCampaigns = async (req, res) => {
    try {
        const authAdminId = req.userId
        if (!authAdminId) return res.status(400).json({ error: "un-authorized user" })
        const myCampaigns = await campaignSchema.find({ createdBy: authAdminId._id })
        if (myCampaigns.length < 1) return res.status(200).json({ message: "no campaings have been created" })
        res.status(200).json(myCampaigns)
    } catch (error) {
        console.log('error comes from getting my campaigns', error.message);
        res.status(400).json({ error: error.message })
    }
}

module.exports = { createCampaign, gettingApprovedCampaigns, getMyCampaigns }