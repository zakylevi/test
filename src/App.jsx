import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import Overview from './pages/Overview'
import Marketing from './pages/Marketing'
import Finance from './pages/Finance'
import Settings from './pages/Settings'
import './index.css'

const pages = {
  overview:  Overview,
  marketing: Marketing,
  finance:   Finance,
  settings:  Settings,
}

export default function App() {
  const [active, setActive] = useState('overview')
  const Page = pages[active] || Overview

  return (
    <div className="flex min-h-screen w-full bg-[#080816]">
      <Sidebar active={active} setActive={setActive} />
      <div className="flex flex-col flex-1 min-w-0 overflow-auto">
        <TopBar active={active} />
        <main className="flex-1">
          <Page />
        </main>
      </div>
    </div>
  )
}
