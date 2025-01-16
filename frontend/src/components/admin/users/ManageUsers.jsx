import React from 'react'

export const ManageUsers = () => {
  return (
    <tr>
                   
    <td >
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img
              src="https://img.daisyui.com/images/profile/demo/2@94.webp"
              alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div className="font-bold">Harry Potter</div>
          <div className="text-sm opacity-50">India</div>
        </div>
      </div>
    </td>
    <td>
      User Role
      <br />
      <span className="badge badge-ghost badge-sm"> Donate and Create Campaign</span>
    </td>
    <td>23/12/2023</td>
    <th>
      <button className="bg-red-500 hover:bg-red-900 px-5 py-3 rounded-lg text-white ">delete</button>
    </th>
  </tr>
  )
}
