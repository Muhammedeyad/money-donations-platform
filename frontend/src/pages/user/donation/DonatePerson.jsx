import React from 'react'
import UserSideBar from '../../../components/sidebar/Usersidebar';
import pic from './../../../assets/images/Authimages/pic.png'
import { Link } from 'react-router-dom';
export const DonatePerson = () => {
    return (
        <div className="w-full flex flex-row min-h-screen">

            <div className='w-1/2 flex flex-col items-center '>
                <div className="breadcrumbs text-sm mt-3">
                    <ul>
                        <li><Link to={`/user/dashboard`}><a>DashBoard</a></Link></li>
                        <li><Link to={'/user/makeDonation'}><a>Person Details</a></Link></li>
                    
                    </ul>
                </div>
                <h4 className='text-sky-400 text-2xl font-bold mb-5 mt-5'>Person Detail</h4>
                <div>
                    <div class="avatar mt-2 border border-blue-500 p-2">
                        <div class="w-32 rounded">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>

                </div>
                <div>
                    <div className='w-full mt-7'>
                        <progress class=" w- progress progress-info w-80" value="40" max="100">56</progress>
                        <div className='flex justify-between'>
                            <p className='text-sky-800 text-sm'>Raised $500</p>
                            <p className='text-sky-800 text-sm'>Goal $28,000</p>
                        </div>
                    </div>
                </div>
                <div className='mt-20 grid grid-cols-3 gap-10 mb-10'>
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
                        <p className='font-bold'>Gender</p>
                        <p className='text-sm'>Female</p>
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
            <div className='w-1/2 bg-sky-200 flex justify-center items-center'>
                <form action="" className='bg-white m-4 rounded w-full flex flex-col justify-center shadow-lg items-center mx-10 gap-5 p-5'>
                    <h4 className='text-xl text-sky-400 font-bold mt-4'>Donate Here</h4>
                    <div className='flex flex-col gap-1 w-full ' >
                        <label htmlFor="" className=' text-md text-gray-800 '>FullName</label>
                        <input type="text" className='w-full border-none outline-none px-4 py-2 bg-gray-100 rounded' placeholder='Enter your FullName' />
                    </div>
                    <div className='flex flex-col gap-1 w-full ' >
                        <label htmlFor="" className=' text-md text-gray-800 '>Phone Number</label>
                        <input type="text" className='w-full border-none outline-none px-4 py-2 bg-gray-100 rounded' placeholder='Enter your Phone Number' />
                    </div>
                    <div className='flex flex-col gap-1 w-full ' >
                        <label htmlFor="" className=' text-md text-gray-800 '>Email Address</label>
                        <input type="text" className='w-full border-none outline-none px-4 py-2 bg-gray-100 rounded' placeholder='Enter your Donation Amount' />
                    </div>
                    <div className='flex flex-col gap-1 w-full ' >
                        <label htmlFor="" className=' text-md text-gray-800 '>Amount</label>
                        <input type="text" className='w-full border-none outline-none px-4 py-2 bg-gray-100 rounded' placeholder='Enter your FullName' />
                    </div>

                    <button className='btn bg-sky-400 hover:bg-sky-200 mt-4 text-white'> Donate Now</button>
                </form>
            </div>
        </div>
    )
}
