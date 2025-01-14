import React from 'react'
import { FaTachometerAlt } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaBullhorn } from 'react-icons/fa'
import { FaHandHoldingHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { logout } from '../../pages/user/authpage/logout';


const UserSideBar = () => {
  const {logoutuser }= logout()
  async function logoutUser(){
      if(confirm('do you want to logout')){
        await logoutuser()
      }
      
  }
  return (
    <div className="w-1/4 bg-sky-200 md:block hidden sticky top-0 h-screen ml-3">
          <ul className="flex flex-col gap-4 px-5 w-full items-start text-start py-5 mt-10">

            <Link to={'/user/dashboard'} href="#" className="hover:bg-sky-100 py-3 text-sm w-full text-sky-800 pl-2 rounded">
               <li className="flex gap-2 items-center">
                <FaTachometerAlt /> <span>Dashboard</span>
              </li>
            </Link>
            <Link to={'/user/createsCampaign'} href="#" className="hover:bg-sky-100 py-3  text-sm w-full text-sky-800 pl-2 rounded">
             <li className="flex gap-2 items-center">
                <FaHandHoldingHeart /> <span>Create Campaign</span>
              </li>
            </Link>
            <Link to={'/user/MyDonations'} href="#" className="hover:bg-sky-100 py-3 text-sm w-full text-sky-800 pl-2 rounded">
              <li className="flex gap-2 items-center">
                <FaBullhorn /> <span>My Donations</span>
              </li>
              </Link>
            
            <a onClick={logoutUser} className="hover:bg-sky-100 py-3 text-sm w-full text-sky-800 pl-2 rounded">
              <button   className="flex gap-2 items-center">
                <FaSignOutAlt /> <span>Logout</span>
              </button>
            </a>
          </ul>
        </div>
      
  )
}

export default UserSideBar