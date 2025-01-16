import React from 'react'
import { FaTachometerAlt, FaSignOutAlt, FaBullhorn, FaHandHoldingHeart } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom'
export const AdminSidebar = () => {
  return (
    <div className="w-1/4 bg-green-200 md:block hidden sticky top-0 h-screen ml-3">
          <ul className="flex flex-col gap-4 px-5 w-full items-start text-start py-5 mt-10">
            <Link
              to="/user/dashboard"
              className={`hover:bg-green-400 bg-green-400 py-3 text-sm w-full pl-2 rounded 
                `}
            >
              <li className="flex gap-2 items-center">
                <FaTachometerAlt /> <span>Dashboard </span>
              </li>
            </Link>
         
            <Link
              to="/user/MyDonations"
              
              className={`hover:bg-green-100 py-3 text-sm w-full pl-2 rounded `}
            >
              <li className="flex gap-2 items-center">
                <FaBullhorn /> <span>Manage Users</span>
              </li>
            </Link>
            <a
              
              className="hover:bg-green-100 py-3 text-sm w-full pl-2 rounded text-green-800"
            >
              <button className="flex gap-2 items-center">
                <FaSignOutAlt /> <span>Exit</span>
              </button>
            </a>
          </ul>
        </div>
  )
}
