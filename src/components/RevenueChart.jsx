import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts'

const data = [
  { month: 'Sep', revenue: 42000, tickets: 840 },
  { month: 'Oct', revenue: 58000, tickets: 1160 },
  { month: 'Nov', revenue: 51000, tickets: 1020 },
  { month: 'Dec', revenue: 79000, tickets: 1580 },
  { month: 'Jan', revenue: 65000, tickets: 1300 },
  { month: 'Feb', revenue: 88000, tickets: 1760 },
  { month: 'Mar', revenue: 94500, tickets: 1890 },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#12122a] border border-[#2d2d5e] rounded-xl px-4 py-3 shadow-2xl">
        <p className="text-xs text-slate-400 mb-2 font-medium">{label} 2026</p>
        {payload.map((p) => (
          <div key={p.dataKey} className="flex items-center gap-2 text-sm font-semibold">
            <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
            <span className="text-slate-300">{p.name}:</span>
            <span className="text-white">
              {p.dataKey === 'revenue' ? `$${p.value.toLocaleString()}` : p.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export default function RevenueChart() {
  return (
    <div className="flex flex-col gap-5 p-6 rounded-2xl bg-[#0d0d1f] border border-[#1e1e40]">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-white">Revenue Overview</h3>
          <p className="text-xs text-slate-500 mt-0.5">Last 7 months performance</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5 text-slate-400">
            <span className="w-3 h-0.5 bg-violet-500 rounded-full inline-block" /> Revenue
          </span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <span className="w-3 h-0.5 bg-cyan-500 rounded-full inline-block" /> Tickets
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id="gradRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradTickets" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e1e40" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fill: '#64748b', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#64748b', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => v >= 1000 ? `${v / 1000}k` : v}
            width={36}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#2d2d5e', strokeWidth: 1 }} />
          <Area
            type="monotone"
            dataKey="revenue"
            name="Revenue"
            stroke="#8b5cf6"
            strokeWidth={2.5}
            fill="url(#gradRevenue)"
            dot={false}
            activeDot={{ r: 5, fill: '#8b5cf6', stroke: '#0d0d1f', strokeWidth: 2 }}
          />
          <Area
            type="monotone"
            dataKey="tickets"
            name="Tickets"
            stroke="#06b6d4"
            strokeWidth={2.5}
            fill="url(#gradTickets)"
            dot={false}
            activeDot={{ r: 5, fill: '#06b6d4', stroke: '#0d0d1f', strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
