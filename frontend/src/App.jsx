import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './pages/user/authpage/login'
import { Register } from './pages/user/authpage/register'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/home'
import { Dashboard } from './pages/user/campaign/Dashboard'
import { DonatePerson } from './pages/user/donation/DonatePerson'
import { CreateCampaign } from './pages/user/campaign/CreateCampaign'
import { MyCampaign } from './pages/user/campaign/MyCampaign'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-full w-full'>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/user/dashboard' element={<Dashboard/>}/>
          <Route path='/user/makeDonation' element={<DonatePerson/>}/>
          <Route path='/user/createCampaign' element={<CreateCampaign/>}/>
          <Route path='/user/myCampaign' element={<MyCampaign/>}/>
        </Routes>

      </div>

    </>
  )
}

export default App
