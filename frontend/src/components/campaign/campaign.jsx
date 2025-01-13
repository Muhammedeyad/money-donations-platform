import React from 'react'
import donationpic from '../../assets/images/Authimages/4090662.jpg'

export const Campaign = () => {
    return (
        <div className="card bg-base-100  shadow-xl m-2 cursor-pointer relative">
            <figure className=''>
                <img
                    src={donationpic}
                    alt="Shoes" className='h-50 w-full' />
                    
            </figure>
            <div className="p-4 flex justify-between pb-10">
                <h1 className='font-bold text-sky-900 text-sm'>feed a homeless child</h1>
                <p className=' text-sm'>200/person</p>
                
            </div>
            <button className=' hover:bg-sky-900 bg-sky-400 p-2 rounded text-white text-sm bottom-0 transform translate-y-6 translate-x-20 absolute'>Donate now</button>
        </div>
    )
}
