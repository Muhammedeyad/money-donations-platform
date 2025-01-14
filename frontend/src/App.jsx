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
import { Sample } from './pages/sample'
import { CreatesCampaign } from './pages/user/campaign/CreatesCampaign'
import { MyDonations } from './pages/user/campaign/MyDonations'
import { useAuthContext } from './context/authContext'
function App() {
  const [count, setCount] = useState(0)
  const {authuser } =useAuthContext()

  
  return (
    <>
      <div className='h-full w-full'>
        <Toaster/>
        <Routes>
          <Route path='/' element={ authuser ?<Navigate to={"/user/dashboard"}/> :<Register />} />
          <Route path='/login' element={authuser? <Navigate to={"/user/dashboard"}/> : <Login />}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/user/dashboard' element={authuser ? <Dashboard/>: <Navigate to={"/"}/>}/>
          <Route path='/user/makeDonation' element={<DonatePerson/>}/>
          <Route path='/user/MyDonations' element={<MyDonations/>}/>
          <Route path='/user/createsCampaign' element={<CreatesCampaign/>}/>

        </Routes>

      </div>

    </>
  )
}

export default App
