import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Toaster} from 'react-hot-toast'
import { Login } from './pages/user/authpage/login'
import { Register } from './pages/user/authpage/register'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/home'
import { Dashboard } from './pages/user/campaign/Dashboard'
import { DonatePerson } from './pages/user/donation/DonatePerson'
import { CreatesCampaign } from './pages/user/campaign/CreatesCampaign'
import { MyDonations } from './pages/user/campaign/MyDonations'
import { useAuthContext } from './context/authContext'
import { AdminDashboard } from './pages/admin/admin-dashboard/AdminDashboard'
import { AdminLogin } from './pages/admin/adminauth/AdminLogin'
import { AdminRegister } from './pages/admin/adminauth/AdminRegister'
import { AdminManageUser } from './pages/admin/manageUsers/AdminManageUser'

function App() {
  const [count, setCount] = useState(0)
  const {authuser } =useAuthContext()

  
  return (
    <>
      <div className='h-full w-full'>
        <Toaster/>
        <Routes>
          {/* USER ROUTES */}
          <Route path='/signup' element={ authuser ?<Navigate to={"/user/dashboard"}/> :<Register />} />
          <Route path='/login' element={authuser? <Navigate to={"/user/dashboard"}/> : <Login />}/>
          <Route path='/' element={authuser ? <Navigate to={"/user/dashboard"}/> :<Home/>}/>
          <Route path='/user/dashboard' element={authuser ? <Dashboard/>: <Navigate to={"/"}/>}/>
          <Route path='/user/makeDonation' element={authuser ? <DonatePerson/>: <Navigate to={'/'}/>}/>
          <Route path='/user/MyDonations' element={authuser ? <MyDonations/>: <Navigate to={'/'}/>}/>
          <Route path='/user/createsCampaign' element={authuser ? <CreatesCampaign/>: <Navigate to={'/'}/>}/>

        {/* ADMIN ROUTES */}
        <Route path='/admin/manageUsers' element={<AdminManageUser/>}/>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        <Route path='/admin/login' element={<AdminLogin/>}/>
        <Route path='/admin/register' element={<AdminRegister/>}/>
        </Routes>

      </div>

    </>
  )
}

export default App
