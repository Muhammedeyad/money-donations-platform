import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './pages/user/authpage/login'
import { Register } from './pages/user/authpage/register'
import { Route, Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-full w-full'>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />}/>
        </Routes>

      </div>

    </>
  )
}

export default App
