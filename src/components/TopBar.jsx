import { Search, Bell, Plus, Calendar } from 'lucide-react'

const pageTitles = {
  overview:  { title: 'Dashboard Overview', sub: "Welcome back, Zaky — here's what's happening." },
  marketing: { title: 'Marketing Hub',      sub: 'Campaigns, promo codes & audience insights.' },
  finance:   { title: 'Finance Center',     sub: 'Revenue, payouts & financial reports.' },
  settings:  { title: 'Settings',           sub: 'Manage your account & preferences.' },
}

export default function TopBar({ active }) {
  const { title, sub } = pageTitles[active] || pageTitles.overview
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <header className="flex items-center justify-between px-8 py-5 border-b border-[#1e1e40] bg-[#080816]/80 backdrop-blur-md sticky top-0 z-10">
      <div>
        <h1 className="text-xl font-bold text-white">{title}</h1>
        <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
      </div>

      <div className="flex items-center gap-3">
        {/* Date chip */}
        <div className="flex items-center gap-2 bg-[#0d0d1f] border border-[#1e1e40] rounded-xl px-3 py-2 text-xs text-slate-400">
          <Calendar size={12} className="text-violet-400" />
          {today}
        </div>

        {/* Search */}
        <div className="relative">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search events..."
            className="bg-[#0d0d1f] border border-[#1e1e40] rounded-xl pl-8 pr-4 py-2 text-xs text-slate-300 placeholder-slate-600 outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all w-44"
          />
        </div>

        {/* Notifications */}
        <button className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-[#0d0d1f] border border-[#1e1e40] text-slate-400 hover:text-slate-200 hover:border-[#2d2d5e] transition-all">
          <Bell size={15} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-violet-500 rounded-full" />
        </button>

        {/* Create event */}
        <button className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-lg shadow-violet-500/25 transition-all duration-200 hover:shadow-violet-500/40 hover:-translate-y-0.5">
          <Plus size={14} />
          New Event
        </button>
      </div>
    </header>
  )
}
