import { useState } from 'react'

import Sidebar from './layout/Sidebar'
import Navbar from './layout/Navbar'
import AboutPage from './pages/About'
import MobileNavbar from './layout/NavbarMobile'
import { aboutData } from './data/about.data'
const NAVBAR_HEIGHT = 64 // px (ajustá si tu navbar mide más)

export default function App() {
  const [activePage, setActivePage] = useState('about')

  return (
    <div className="
    min-h-screen 
    bg-(--bg-main) text-white 
    flex flex-col 
    lg:flex-row 
    p-4 pb-24  lg:p-6
    gap-4
    "
    >

      {/* Sidebar */}
      <Sidebar />
      {/* Main content */}
      <div className="flex-1 flex flex-col  h-auto  ml:flex-row" style={{ overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#4a4a4a transparent' }}>

        {/* Page container */}
        <main className="flex-1 border relative" style={{ overflowY: 'auto' }}>

          {activePage === 'about' && (
            <AboutPage data={aboutData} />
          )}

          {activePage === 'resume' && (
            <div className=" text-slate-400">
              Resume page (pending)
            </div>
          )}

          {activePage === 'portfolio' && (
            <div className=" text-slate-400">
              Portfolio page (pending)
            </div>
          )}

          {activePage === 'blog' && (
            <div className=" text-slate-400">
              Blog page (pending)
            </div>
          )}

          {activePage === 'contact' && (
            <div className=" text-slate-400">
              Contact page (pending)
            </div>
          )}
        </main>
           <span className="
              pointer-events-none
              fixed
              inset-x-0
              bottom-0
              h-24
              z-40
              bg-gradient-to-t
              from-black/60
              to-transparent
            " />
            <MobileNavbar
              className=""
              activePage={activePage}
              setActivePage={setActivePage}
            />
      </div>
    </div>
  )
}
