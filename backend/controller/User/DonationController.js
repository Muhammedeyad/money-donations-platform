const campaignSchema = require("../../models/campaigns/campaignSchema");
const donationSchmea = require("../../models/donations/donationSchmea");


const createDonation =async (req, res)=>{
    const {fullName, email,phoneNumber, donationAmount, paymentMethod} = req.body
    if(!fullName || !email || !phoneNumber || !donationAmount || !paymentMethod) return res.status(400).json({error: "all fields are required"})
    const {id:campaignId} = req.params
    const donationMadeby = req.userId
    try{
        const donation = await donationSchmea.create({donationMadeby, fullName, email, phoneNumber, donationAmount, paymentMethod, campaignId})
        if(!donation) return res.status(400).json({error: "error while making donation "})
        const campaign = await campaignSchema.findOne({_id: campaignId})
        campaign.currentAmount+= donation.donationAmount
        await campaign.save()
        res.status(200).json(donation)
    }catch(err){
        console.log(err.message, 'error comes from donationController');
        res.status(400).json(err.message)
    }
}
const getAllDonations= async (req,res)=>{
  try{
    const allDonations = await donationSchmea.find()
    if(!allDonations) return res.status(200).json([])
    res.status(200).json(allDonations)
  }catch(err){
    console.log(err.message, 'error comes from getAllDonations Route');
    res.status(400).json(err.message)
  }
}
module.exports = {createDonation, getAllDonations}