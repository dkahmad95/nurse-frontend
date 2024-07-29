
import Header from '@/Components/Header'

import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="bg-accent">
        <Outlet />
      </div>
    
    </div>
  )
}

export default Layout
