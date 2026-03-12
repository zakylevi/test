import { TrendingUp, TrendingDown } from 'lucide-react'

export default function StatCard({ title, value, subtitle, change, changeType, icon: Icon, color, sparkData }) {
  const isPositive = changeType === 'up'

  const colorMap = {
    violet: {
      iconBg: 'bg-violet-500/15',
      iconText: 'text-violet-400',
      glow: 'shadow-violet-500/10',
      bar: 'bg-violet-500',
      border: 'border-violet-500/10',
      ring: 'ring-violet-500/20',
    },
    cyan: {
      iconBg: 'bg-cyan-500/15',
      iconText: 'text-cyan-400',
      glow: 'shadow-cyan-500/10',
      bar: 'bg-cyan-500',
      border: 'border-cyan-500/10',
      ring: 'ring-cyan-500/20',
    },
    emerald: {
      iconBg: 'bg-emerald-500/15',
      iconText: 'text-emerald-400',
      glow: 'shadow-emerald-500/10',
      bar: 'bg-emerald-500',
      border: 'border-emerald-500/10',
      ring: 'ring-emerald-500/20',
    },
    rose: {
      iconBg: 'bg-rose-500/15',
      iconText: 'text-rose-400',
      glow: 'shadow-rose-500/10',
      bar: 'bg-rose-500',
      border: 'border-rose-500/10',
      ring: 'ring-rose-500/20',
    },
  }

  const c = colorMap[color] || colorMap.violet
  const maxVal = Math.max(...(sparkData || [1]))

  return (
    <div className={`relative flex flex-col gap-4 p-5 rounded-2xl bg-[#0d0d1f] border ${c.border} shadow-xl ${c.glow} overflow-hidden group hover:border-opacity-30 transition-all duration-300`}>
      {/* Background blur accent */}
      <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full ${c.iconBg} blur-2xl opacity-50 group-hover:opacity-70 transition-opacity`} />

      <div className="flex items-start justify-between relative">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">{title}</p>
          <p className="text-3xl font-bold text-white tracking-tight">{value}</p>
          {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
        </div>
        <div className={`flex items-center justify-center w-11 h-11 rounded-xl ${c.iconBg} ${c.iconText} shrink-0`}>
          <Icon size={20} />
        </div>
      </div>

      {/* Mini spark bar chart */}
      {sparkData && (
        <div className="flex items-end gap-1 h-10 relative">
          {sparkData.map((v, i) => (
            <div
              key={i}
              className={`flex-1 rounded-sm ${c.bar} opacity-50 group-hover:opacity-70 transition-all duration-300`}
              style={{ height: `${(v / maxVal) * 100}%`, transitionDelay: `${i * 20}ms` }}
            />
          ))}
        </div>
      )}

      {/* Change badge */}
      <div className="flex items-center gap-2">
        <span className={`flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full
          ${isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
          {isPositive ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
          {change}
        </span>
        <span className="text-[11px] text-slate-600">vs last month</span>
      </div>
    </div>
  )
}
