import React from 'react'
import UserSideBar from '../../../components/sidebar/Usersidebar';
import pic from './../../../assets/images/Authimages/pic.png'
import { Link } from 'react-router-dom';
export const DonatePerson = () => {
    return (
        <div className="w-full flex flex-row min-h-screen bg-gray-100">
            <UserSideBar />

            <div className='bg-gray-100 p-2 m-3 rounded-lg flex flex-col w-full'>
                <h4 className='text-start text-sky-400 font-bold text-xl mb-3'>Donate Here</h4>
                <div className='text-center font-bold text-lg bg-white  rounded-md pl-4 pb-1 text-sky-900 '><div className="breadcrumbs text-sm mt-3">
                    <ul>
                        <li><Link to={`/user/dashboard`}><a>DashBoard</a></Link></li>
                        <li><Link to={'/user/makeDonation'}><a>Person Details</a></Link></li>

                    </ul>
                </div>  </div>
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


                        <button className='btn bg-green-400 rounded-2xl w-1/2 text-white mx-2'>Donate Now</button>
                    </form>
                    <div className='w-1/2  flex flex-col cursor-pointer'>
                        
                            <div className=' flex flex-col items-center '>

                            <h1 className='text-sky-900 font-bold mb-1'>person detail</h1>
                                <div>
                                    <div className="avatar mt-1 border border-blue-500 p-1">
                                        <div className="w-24 rounded">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <div className='w-full mt-3'>
                                        <progress className=" w- progress progress-info w-80" value="40" max="100">56</progress>
                                        <div className='flex justify-between'>
                                            <p className='text-sky-800 text-sm'>Raised $500</p>
                                            <p className='text-sky-800 text-sm'>Goal $28,000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=' mt-10 px-10 grid grid-cols-3 gap-10 mb-10  pr-5'>
                                    <div>
                                        <p className='font-bold'>Person Name</p>
                                        <p className='text-sm'>Monica</p>
                                    </div>
                                    <div>
                                        <p className='font-bold'>Person Age</p>
                                        <p className='text-sm'>21</p>
                                    </div>
                                    <div>
                                        <p className='font-bold'>Place</p>
                                        <p className='text-sm'> Chennai</p>
                                    </div>
                                
                                    <div>
                                        <p className='font-bold'>Address</p>
                                        <p className='text-sm'>Kulamlumbur</p>
                                    </div>
                                    <div>
                                        <p className='font-bold'>Goal Amount</p>
                                        <p className='text-sm'>21000</p>
                                    </div>
                                    <div>
                                        <p className='font-bold'>Date Of Need</p>
                                        <p className='text-sm'>Jan. 31, 2025</p>
                                    </div>
                                </div>
                            </div>
                        


                    </div>
                </div>
            </div>
        </div>
    )
}
