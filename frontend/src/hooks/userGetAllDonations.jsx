import React, { useEffect, useState } from 'react'

export const userGetAllDonations = () => {
    const [loading, setLoading] = useState(false)
    const [allDonations, setAllDonations] = useState()

    useEffect(() => {
        const getAllDonations =async ()=>{
            try {
                const res= await fetch(`http://localhost:5000/api/donations/get`, {method: 'GET', credentials:'include'})
                const data= await res.json()
                setAllDonations(data)
            } catch (error) {
                console.log(error.message);
            }
        }
        getAllDonations()
    }, [])
    return { loading, allDonations }
}
