import React from 'react'
import UserSideBar from '../../../components/sidebar/Usersidebar';
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export const MyDonations = () => {
    return (
        <div className="w-full flex flex-row min-h-screen">
            {/* Sidebar */}
            <UserSideBar />
            {/* Main Content */}
            <div className='bg-gray-100 p-2 m-3 rounded-lg flex flex-col w-full'>
                <h4 className='text-start text-sky-400 font-bold text-xl mb-3'>My Donations</h4>
                <div className='text-center font-bold text-lg bg-white  rounded-md p-3 mb-2 mt-2 '>Donated <span className='text-green-400'>History</span></div>
                <div className="overflow-x-auto mt-3 text-center w-full ">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className='text-sky-900 font-bold'>
                                <th></th>
                                <th>FullName</th>
                                <th>Purpose</th>
                                <th>Amount Paid</th>
                            </tr>
                        </thead>
                        <tbody className='text-sky-600'>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td className='text-green-700 font-bold'>10000</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td className='text-green-700 font-bold'>2222</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td className='text-green-700 font-bold'>21000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
