import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Login } from './pages/login/Login'
import { RouterLayout } from './common/RouterLayout'
import { CharacterPages } from './pages/character'

export const AppRouter:React.FC = () => {
  return (
    <Routes>
       <Route path='/' element={<RouterLayout/>}>
         <Route path='/' element={<Home/>}/>
         <Route path='/character/:id' element={<CharacterPages/>}/>
         
       </Route>
      <Route path='/login' element={<Login/>}/>
        
    </Routes>
  )
}
