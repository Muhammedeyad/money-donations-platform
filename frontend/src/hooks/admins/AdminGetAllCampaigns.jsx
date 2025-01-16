import React, { useEffect, useState } from 'react'

export const AdminGetAllCampaigns = () => {
    const [loading, setLoading] = useState()
    useEffect(()=>{
        const getAllCampaigns= async()=>{
            // we will update it later after auth operations
        }
        getAllCampaigns()
    }, [])
    return {loading, getAllCampaigns}
}
