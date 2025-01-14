import React, { useState } from 'react'
import donationpic from '../../assets/images/Authimages/4090662.jpg'
import { Dashboard } from '../../pages/user/campaign/Dashboard'
import { DonatePerson } from '../../pages/user/donation/DonatePerson'
import { Link } from 'react-router-dom'

export const Campaign = () => {
    
    return (
        <tr>
     
        <td>
            <div className="flex items-center gap-3 mb-3">
                <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                        <img
                            src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div className="font-bold">Alberto</div>
                    <div className="text-sm opacity-50">India</div>
                </div>
            </div>
        </td>
        <td>
          For Education
            <br />
            <span className="badge badge-ghost badge-sm">Bcom Accontant</span>
        </td>
        <td>12000</td>
        <td>999</td>
        <th>
            <Link to={'/user/makeDonation'} className="btn bg-green-400 hover:bg-green-200 text-sm text-white px-4 py-2 ">Donate Now</Link>
        </th>
    </tr>
    )
}
