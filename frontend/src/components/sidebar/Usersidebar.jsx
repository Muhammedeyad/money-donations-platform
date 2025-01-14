import React from 'react'
import { FaTachometerAlt } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaBullhorn } from 'react-icons/fa'
import { FaHandHoldingHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'


const UserSideBar = () => {
  return (
    <div className="w-1/4 bg-sky-200 md:block hidden sticky top-0 h-screen">
          <ul className="flex flex-col gap-4 px-5 w-full items-start text-start py-5 mt-10">

            <Link to={'/user/dashboard'} href="#" className="hover:bg-sky-100 py-3 text-sm w-full text-sky-800 pl-2 rounded">
               <li className="flex gap-2 items-center">
                <FaTachometerAlt /> <span>Dashboard</span>
              </li>
            </Link>
            <Link to={'/user/myCampaign'} href="#" className="hover:bg-sky-100 py-3  text-sm w-full text-sky-800 pl-2 rounded">
             <li className="flex gap-2 items-center">
                <FaHandHoldingHeart /> <span>My Campaigns</span>
              </li>
            </Link>
            <Link to={'/user/createCampaign'} href="#" className="hover:bg-sky-100 py-3 text-sm w-full text-sky-800 pl-2 rounded">
              <li className="flex gap-2 items-center">
                <FaBullhorn /> <span>Create Campaign</span>
              </li>
              </Link>
            
            <a href="" className="hover:bg-sky-100 py-3 text-sm w-full text-sky-800 pl-2 rounded">
              <Link onClick={toast.success('do you want to logout')} className="flex gap-2 items-center">
                <FaSignOutAlt /> <span>Logout</span>
              </Link>
            </a>
          </ul>
        </div>
      
  )
}

export default UserSideBar