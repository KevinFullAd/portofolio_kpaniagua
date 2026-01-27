import { useState } from 'react'

import Sidebar from '../layout/Sidebar'
import AboutPage from '../pages/About'
import { PortfolioPage } from '../pages/Portfolio'
import MobileNavbar from '../layout/NavbarMobile'
import { aboutData } from '../data/about.data'

export default function App() {
  const [activePage, setActivePage] = useState('portfolio')

  return (
    <div className="
    min-h-screen 
    bg-(--bg-main) text-white 
    flex flex-col 
    lg:flex-row border-3 border-red-500
    p-4 pb-24  lg:p-10
    gap-4
    "
    >

      {/* Sidebar */}
      <Sidebar />
      {/* Main content */}
      <div
        className="flex flex-col  h-full flex-1  ml:flex-row " 
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#4a4a4a transparent' }}
      >

        <main className="
                h-full bg-[color:var(--bg-sec)]
                border border-[color:var(--border)]
                shadow-[var(--shadow)] 
                z-10 flex-1 py-4 px-4 rounded-2xl 
                ">

          {activePage === 'about' && (
            <AboutPage data={aboutData} />
          )}

          {activePage === 'resume' && (
            <div className=" text-slate-400">
              Resume page (pending)
            </div>
          )}

          {activePage === 'portfolio' && (
            <PortfolioPage />
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
              lg:hidden
              pointer-events-none
              fixed
              inset-x-0
              bottom-0
              h-24
              z-40
              bg-gradient-to-t
              from-(--bg-main)/60
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
