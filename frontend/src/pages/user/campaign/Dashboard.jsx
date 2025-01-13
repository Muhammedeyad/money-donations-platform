import React from 'react'
import { SignupImage } from '../../../components/svgContainer/SignupImage'
import { Homeimage } from '../../../components/svgContainer/Homeimage'
import { FaTachometerAlt } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaBullhorn } from 'react-icons/fa'
import { FaHandHoldingHeart } from 'react-icons/fa';
import { Campaign } from '../../../components/campaign/campaign';

export const Dashboard = () => {
    return (
        <div className="w-full flex flex-row min-h-screen">
        {/* Sidebar */}
        <div className="w-1/4 bg-sky-200 md:block hidden sticky top-0 h-screen">
          <ul className="flex flex-col gap-4 px-5 w-full items-start text-start py-5 mt-10">

            <a href="#" className="hover:bg-sky-100 py-3 w-full text-sky-800 pl-2 rounded">
              <li className="flex gap-2 items-center">
                <FaTachometerAlt /> <span>Dashboard</span>
              </li>
            </a>
            <a href="#" className="hover:bg-sky-100 py-3 w-full text-sky-800 pl-2 rounded">
              <li className="flex gap-2 items-center">
                <FaHandHoldingHeart /> <span>My Campaigns</span>
              </li>
            </a>
            <a href="#" className="hover:bg-sky-100 py-3 w-full text-sky-800 pl-2 rounded">
              <li className="flex gap-2 items-center">
                <FaBullhorn /> <span>Create Campaign</span>
              </li>
            </a>
            <a href="#" className="hover:bg-sky-100 py-3 w-full text-sky-800 pl-2 rounded">
              <li className="flex gap-2 items-center">
                <FaSignOutAlt /> <span>Logout</span>
              </li>
            </a>
          </ul>
        </div>
      
        {/* Main Content */}
        <div className="w-full flex-1 bg-slate-200 overflow-y-scroll">
          <div className="bg-white m-2 px-5 py-2 rounded flex justify-between items-center sticky top-0 z-10">
            <div>
              <p className="text-xs text-sky-900">Primary</p>
              <h3 className="text-lg text-sky-500 font-bold">Dashboard</h3>
            </div>
      
            <div className="avatar">
              <div className="ring ring-offset-base-100 w-10 rounded-full ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
      
          <div className="campaigns bg-white m-2 px-5 py-2 rounded grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Campaign />
            <Campaign />
           
        
           
          </div>
        </div>
      </div>
      
      
    )
}
