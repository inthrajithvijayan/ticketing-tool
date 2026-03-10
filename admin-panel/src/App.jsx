import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router"
import Login from './Views/Login.jsx'
import Dashboard from './Views/Dashboard.jsx'
import { Sidemenu } from './Components/Sidemenu.jsx'
import { NavbarMenu } from './Components/NavbarMenu.jsx'
import { SidebarProvider } from "@/components/ui/sidebar"

function App() {

  return (
    <>
      <div className=''>
        <div className=''>
          <SidebarProvider>
            <Sidemenu />  
            <main className='w-full'>
              <NavbarMenu/>
              <div className='mx-5'>
                 <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
              </Routes>
              </div>
            </main>
          </SidebarProvider>
        </div>
      </div>
    </>
  )
}

export default App
