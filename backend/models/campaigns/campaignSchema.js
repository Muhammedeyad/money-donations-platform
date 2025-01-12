const mongoose = require('mongoose')


const campaignSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    goalAmount: { type: Number, required: true},
    currentAmount: { type: Number, default: 0},
    status: { type: String, enum:["Pending", "Approved", "Rejected", "Closed"], default: "Pending"},
    reason: { type: String, required: true},
    createdBy: {type: mongoose.Schema.ObjectId, ref: "user"}, //findout who made the campaign
}, {timestamps: true})

module.exports = mongoose.model('campaign', campaignSchema)  