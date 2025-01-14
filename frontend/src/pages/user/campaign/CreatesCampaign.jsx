import React from 'react'
import UserSideBar from '../../../components/sidebar/Usersidebar';
import { Campaign } from '../../../components/campaign/campaign';
import { UserCampaign } from '../../../components/campaign/UserCampaign';
export const CreatesCampaign = () => {
    return (
        <div className="w-full flex flex-row min-h-screen">
            {/* Sidebar */}
            <UserSideBar />
            {/* Main Content */}
            <div className='bg-gray-100 p-2 m-3 rounded-lg flex flex-col w-full'>
                <h4 className='text-start text-sky-400 font-bold text-xl mb-3'>Create Campaign</h4>
                <div className='text-center font-bold text-lg bg-white  rounded-md p-3 mb-2 mt-2 '>Total Raised: <span className='text-green-400'>$17700</span></div>
                <div className='w-full h-screen flex justify-between mt-5 '>
                    <form className='w-1/2 flex flex-col gap-4 h-full '>

                        <div>
                            <input type="text" className=' px-3 py-2 w-full mx-5 outline-none' placeholder='FullName' />
                        </div>
                        <div>
                            <input type="text" className=' px-3 py-2 w-full mx-5 outline-none' placeholder='Purpose' />
                        </div>
                        <div>
                            <input type="text" className=' px-3 py-2 w-full mx-5 outline-none' placeholder='Goal Amount' />
                        </div>
                        <div>
                            <textarea type="text" className=' px-3 py-5 w-full mx-5 outline-none' placeholder='Add a Reference' />
                        </div>


                        <button className='btn bg-green-400 rounded-2xl w-1/2 text-white mx-2'>Add Campaign</button>
                    </form>
                    <div className='w-full ml-10 flex flex-col cursor-pointer'>
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
                                <div className='flex gap-5 mt-1 text-sm text-sky-900'>
                                    <p>$9000</p>
                                    <p>$ 6/2/2002</p>
                                    <p>Feed a Poor Man</p>
                                </div>
                            </div>
                            <div><button className=' bg-red-600 font-medium font-sans hover:bg-red-800 px-3 py-2 rounded-lg text-white text-sm '>Delete</button></div>
                        </div>
                       
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
