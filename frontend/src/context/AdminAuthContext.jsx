import { createContext, useContext, useState } from "react";


const adminContext = createContext()

export const useAdminContext= ()=>{
    return useContext(adminContext)
}

import React from 'react'

export const AdminAuthContextProvider = ({ children }) => {
    const [adminUser, setAdminUser] = useState()
    return (
        <adminContext.Provider value={{adminUser, setAdminUser}}>
            {children}
        </adminContext.Provider>
    )
}
