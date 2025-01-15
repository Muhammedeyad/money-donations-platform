import React, { useState } from 'react'
import UserSideBar from '../../../components/sidebar/Usersidebar';
import { Campaign } from '../../../components/campaign/campaign';
import { UserCampaign } from '../../../components/campaign/UserCampaign';
import { Usermobilesidebar } from '../../../components/sidebar/Usermobilesidebar';
import { userCreateCampaign } from '../../../hooks/userCreateCampaign';


export const CreatesCampaign = () => {
    const [campaignCreator, setCampaignCreator] =useState({
        fullName: "",
        purpose: "",
        goalAmount: "",
        place:"",
        address: "",
        reason:""
    })
    const {loading, createCampaign }= userCreateCampaign()
    const handleSubmit= async(e)=>{
        e.preventDefault()
        await createCampaign(campaignCreator)
        setCampaignCreator({...campaignCreator, fullName: "", purpose:"", goalAmount:"", place:"", address:"", reason:""})
        
    }
    return (
        <div className="w-full flex flex-row min-h-screen">
            {/* Sidebar */}
            <UserSideBar />
            {/* Main Content */}
            <div className='bg-gray-100 p-2  md:m-3 rounded-lg flex flex-col w-full'>
                <h4 className='text-start text-sky-400 font-bold text-xl mb-3'>Create Campaign</h4>
                <div className='text-center font-bold text-lg bg-white  rounded-md p-3 mb-2 mt-2 '>Total Raised: <span className='text-green-400'>$17700</span></div>
                <div className='w-full h-screen flex md:flex-row flex-col justify-between md:mt-5 mb-0 '>
                    <form onSubmit={(e)=> handleSubmit(e)} className='w-full md:w-1/2 flex flex-col gap-4 h-full md:p-0 p-10'>

                        <div>
                            <input type="text" className=' px-3 py-2 w-full mx-5 outline-none' placeholder='FullName' onChange={(e)=> setCampaignCreator({...campaignCreator, fullName:e.target.value})} value={campaignCreator.fullName}/>
                        </div>
                        <div>
                            <input type="text" className=' px-3 py-2 w-full mx-5 outline-none' placeholder='Purpose'  onChange={(e)=> setCampaignCreator({...campaignCreator, purpose:e.target.value})} value={campaignCreator.purpose}/>
                        </div>
                        <div>
                            <input type="text" className=' px-3 py-2 w-full mx-5 outline-none' placeholder='Goal Amount'  onChange={(e)=> setCampaignCreator({...campaignCreator, goalAmount:e.target.value})} value={campaignCreator.goalAmount}/>
                        </div>
                        <div>
                            <input type="text" className=' px-3 py-2 w-full mx-5 outline-none' placeholder='place'  onChange={(e)=> setCampaignCreator({...campaignCreator, place:e.target.value})} value={campaignCreator.place}/>
                        </div>
                        <div>
                            <input type="text" className=' px-3 py-2 w-full mx-5 outline-none' placeholder='address'  onChange={(e)=> setCampaignCreator({...campaignCreator, address:e.target.value})} value={campaignCreator.address}/>
                        </div>
                        <div>
                            <textarea type="text" className=' px-3 py-3 w-full mx-5 outline-none' placeholder='Reason for apply'  onChange={(e)=> setCampaignCreator({...campaignCreator, reason:e.target.value})} value={campaignCreator.reason}/>
                        </div>


                        <button className='btn bg-green-400 rounded-2xl w-1/2 text-white mx-2'>Apply Now</button>
                    </form>
                    <div className='w-full md:ml-10 flex flex-col cursor-pointer md:mb-0 mb-32'>
                        <div className='flex bg-gray-100 rounded-xl m-3 mt-2 p-2 items-center hover:bg-white'>
                            <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                        src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                        alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div className=' pl-4 flex w-full flex-col ml-3'>
                                <h4 className='text-sky-800 font-bold'>Alex Costa</h4>
                                <div className='flex gap-5 mt-1 text-sm text-sky-900 '>
                                    <p className='md:block hidden'>$9000</p>
                                    <p className='md:block hidden'>$ 6/2/2002</p>
                                    <p className='md:block hidden'>Feed a Poor Man</p>

                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <p className='text-center font-bold  bg-sky-200 rounded-lg p-2'>Pending</p>
                                <button className=' bg-red-600 md:block hidden font-medium font-sans hover:bg-red-800 px-3 py-2 rounded-lg text-white text-sm '>Delete</button>
                            </div>
                        </div>


                    </div>


                </div>
            </div>
            <Usermobilesidebar />
        </div>
    )
}
