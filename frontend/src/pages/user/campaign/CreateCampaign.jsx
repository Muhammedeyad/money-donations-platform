import React from 'react'
import UserSideBar from '../../../components/sidebar/Usersidebar';
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export const CreateCampaign = () => {
    return (
        <div className="w-full flex flex-row min-h-screen">
            {/* Sidebar */}
            <UserSideBar />

            {/* Main Content */}
            <div className="w-full bg-slate-200 overflow-y-scroll relative">
                <div className="bg-white m-2 px-5 py-2 rounded flex justify-between items-center sticky top-0 z-10">
                    <div>
                        <p className="text-xs text-sky-900">Primary</p>
                        <h3 className="text-lg text-sky-500 font-bold">Create Campaign</h3>
                    </div>

                    <div className="avatar">
                        <div className="ring ring-offset-base-100 w-10 rounded-full ring-offset-2">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                </div>
                <div className="campaigns w-1/2 mx-auto bg-white m-2  mt-5 px-5 py-2 rounded-lg grid grid-cols-1 gap-5">
                    <form className=' py-6 '>
                        <div>

                            <div className='flex flex-col gap-7'>

                                <label className="input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                        <path
                                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                    </svg>
                                    <input type="text" className="grow" placeholder="FullName" />
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                    </svg>
                                    <input type="text" className="grow" placeholder="Purpose" />
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            fillRule="evenodd"
                                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                            clipRule="evenodd" />
                                    </svg>
                                    <input type="password" className="grow" placeholder='Goal Amount' />
                                </label>
                                <label htmlFor="">
                                    
                                <textarea
                                    
                                    placeholder="Reason for apply"
                                    className="textarea textarea-bordered textarea-lg w-full  "></textarea>
                                </label>
                            </div>

                            <Link onClick={() => toast.success("campaign has been created")} className="btn  bg-sky-400 mt-10 text-sm  font-bold hover:bg-sky-900 hover:font-bold text-white">Create Campaign</Link>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
