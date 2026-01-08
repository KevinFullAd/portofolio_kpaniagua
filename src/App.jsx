import { useState } from 'react'

import Sidebar from './layout/Sidebar'
import Navbar from './layout/Navbar'
import AboutPage from './pages/AboutPage'
import MobileNavbar from './layout/NavbarMobile'
import { aboutData } from './data/about.data'
const NAVBAR_HEIGHT = 64 // px (ajustá si tu navbar mide más)

export default function App() {
  const [activePage, setActivePage] = useState('about')

  return (
    <div className="min-h-screen bg-(--bg-main) text-white flex">

      {/* Sidebar */}
      {/* Main content */}
      <div className="flex-1 flex flex-col  min-h-screen pb-24">
        <Sidebar />

        {/* Page container */}
        <main className="flex-1 relative">

          {activePage === 'about' && (
            <AboutPage data={aboutData} />
          )}

          {activePage === 'resume' && (
            <div className="p-10 text-slate-400">
              Resume page (pending)
            </div>
          )}

          {activePage === 'portfolio' && (
            <div className="p-10 text-slate-400">
              Portfolio page (pending)
            </div>
          )}

          {activePage === 'blog' && (
            <div className="p-10 text-slate-400">
              Blog page (pending)
            </div>
          )}

          {activePage === 'contact' && (
            <div className="p-10 text-slate-400">
              Contact page (pending)
            </div>
          )}
        </main>
        <div className="
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
