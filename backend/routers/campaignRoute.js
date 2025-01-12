const express = require("express")
const { getAuthUser } = require("../middleware/gettingAuthUser")
const { createCampaign, gettingApprovedCampaigns, getMyCampaigns } = require("../controller/User/campaignController")
const { getAllCampaigns, setCammpaignStatusApproved, setCammpaignStatusRejected } = require("../controller/Admin/getAllCampaigns")
const router = express.Router()

router.post("/create", getAuthUser, createCampaign) //status gonna be a pending
router.get("/campaigns", getAuthUser, gettingApprovedCampaigns)  //getting approved campaigns for users
router.get("/mycampaigns", getAuthUser, getMyCampaigns) //getting my campaigns 

router.get("/campaigns",getAuthUser,  getAllCampaigns) //get all campaigns for admins
router.post("/campaigns/:id/approve", getAuthUser, setCammpaignStatusApproved) //update campaign status to rejected => admins
router.post("/campaigns/:id/reject", getAuthUser, setCammpaignStatusRejected) //update campaign status to rejected => admins



module.exports=router