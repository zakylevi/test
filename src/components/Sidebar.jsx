import {
  LayoutDashboard,
  Megaphone,
  DollarSign,
  Settings,
  Ticket,
  Bell,
  ChevronRight,
  Zap,
} from 'lucide-react'

const navItems = [
  { id: 'overview',   label: 'Overview',   icon: LayoutDashboard },
  { id: 'marketing', label: 'Marketing',  icon: Megaphone },
  { id: 'finance',   label: 'Finance',    icon: DollarSign },
  { id: 'settings',  label: 'Settings',   icon: Settings },
]

export default function Sidebar({ active, setActive }) {
  return (
    <aside className="flex flex-col w-64 min-h-screen bg-[#0d0d1f] border-r border-[#1e1e40] shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-[#1e1e40]">
        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 shadow-lg shadow-violet-500/30">
          <Ticket size={18} className="text-white" />
        </div>
        <div>
          <p className="text-white font-bold text-sm tracking-wide">EventPulse</p>
          <p className="text-[10px] text-violet-400 font-medium tracking-widest uppercase">Organizer</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1 px-3 py-6 flex-1">
        <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-600 px-3 mb-3">Menu</p>
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = active === id
          return (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 w-full text-left
                ${isActive
                  ? 'bg-gradient-to-r from-violet-600/20 to-purple-600/10 text-violet-300 border border-violet-500/30 shadow-sm'
                  : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                }`}
            >
              <span className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200
                ${isActive
                  ? 'bg-violet-600/30 text-violet-300'
                  : 'bg-transparent text-slate-500 group-hover:bg-white/5 group-hover:text-slate-300'
                }`}>
                <Icon size={16} />
              </span>
              <span className="flex-1">{label}</span>
              {isActive && <ChevronRight size={14} className="text-violet-400 opacity-70" />}
            </button>
          )
        })}
      </nav>

      {/* Upgrade card */}
      <div className="mx-3 mb-6 p-4 rounded-2xl bg-gradient-to-br from-violet-900/40 to-purple-900/20 border border-violet-500/20">
        <div className="flex items-center gap-2 mb-2">
          <Zap size={14} className="text-yellow-400" />
          <p className="text-xs font-semibold text-white">Pro Plan Active</p>
        </div>
        <p className="text-[11px] text-slate-400 mb-3 leading-relaxed">
          Unlimited events & advanced analytics
        </p>
        <div className="w-full bg-[#1e1e40] rounded-full h-1.5">
          <div className="bg-gradient-to-r from-violet-500 to-purple-500 h-1.5 rounded-full" style={{ width: '72%' }} />
        </div>
        <p className="text-[10px] text-slate-500 mt-1.5">72% storage used</p>
      </div>

      {/* User */}
      <div className="flex items-center gap-3 px-4 py-4 border-t border-[#1e1e40]">
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-pink-500 flex items-center justify-center text-white text-xs font-bold">
            ZL
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#0d0d1f]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-slate-200 truncate">Zaky Levi</p>
          <p className="text-[10px] text-slate-500 truncate">zaky@eventpulse.io</p>
        </div>
        <button className="text-slate-600 hover:text-slate-300 transition-colors">
          <Bell size={15} />
        </button>
      </div>
    </aside>
  )
}
