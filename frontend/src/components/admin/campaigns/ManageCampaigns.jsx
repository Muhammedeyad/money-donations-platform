import React from 'react'

export const ManageCampaigns = () => {
    return (
        <tr>

        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-10 w-10">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold text-md">Hart Hagerty</div>

            </div>
          </div>
        </td>
        <td className='text-xs space-x-1 text-mono text-green-900'>
          Feed street dogs
          <br />

        </td>
        <td className=' text-md  text-green-400 font-bold'>$ 30000</td>
        <th className='flex gap-3 items-center justify-center font-bold'>
          <button className="bg-green-500 text-xm rounded-lg text-white  hover:bg-green-400 w-30 p-3  ">Approve</button>
          <button className="text-xm bg-red-500 rounded-lg  text-white  hover:bg-red-400 p-3 w-15">Reject</button>


        </th>
      </tr>
    )
}
