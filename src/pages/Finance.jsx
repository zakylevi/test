import { DollarSign, ArrowDownLeft, ArrowUpRight, CreditCard, FileText, Download } from 'lucide-react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'

const monthlyData = [
  { month: 'Sep', gross: 42000, fees: 3200, net: 38800 },
  { month: 'Oct', gross: 58000, fees: 4600, net: 53400 },
  { month: 'Nov', gross: 51000, fees: 4100, net: 46900 },
  { month: 'Dec', gross: 79000, fees: 6300, net: 72700 },
  { month: 'Jan', gross: 65000, fees: 5200, net: 59800 },
  { month: 'Feb', gross: 88000, fees: 7000, net: 81000 },
  { month: 'Mar', gross: 94500, fees: 7560, net: 86940 },
]

const transactions = [
  { id: '#TXN-8821', event: 'Neon Nights Festival',    type: 'Payout',   amount: '+$42,800', date: 'Mar 10, 2026', status: 'Completed' },
  { id: '#TXN-8820', event: 'Platform Fee — Feb',      type: 'Fee',      amount: '-$7,000',  date: 'Mar 01, 2026', status: 'Deducted' },
  { id: '#TXN-8819', event: 'Web Summit Conference',   type: 'Payout',   amount: '+$35,600', date: 'Feb 28, 2026', status: 'Completed' },
  { id: '#TXN-8818', event: 'Spring Food Expo — Refunds', type: 'Refund',amount: '-$2,400',  date: 'Feb 24, 2026', status: 'Processed' },
  { id: '#TXN-8817', event: 'EDM Underground Rave',    type: 'Payout',   amount: '+$18,200', date: 'Feb 18, 2026', status: 'Completed' },
]

const txStyle = {
  Completed: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Deducted:  'bg-rose-500/10 text-rose-400 border-rose-500/20',
  Processed: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#12122a] border border-[#2d2d5e] rounded-xl px-4 py-3 shadow-2xl text-xs">
        <p className="text-slate-400 mb-2 font-semibold">{label}</p>
        {payload.map(p => (
          <div key={p.dataKey} className="flex justify-between gap-4 font-medium" style={{ color: p.color }}>
            <span>{p.name}</span>
            <span>${p.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export default function Finance() {
  return (
    <div className="flex flex-col gap-6 p-8">
      {/* Summary cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          { label: 'Gross Revenue',   value: '$534,200', sub: 'All time',       icon: DollarSign,    color: 'text-violet-400 bg-violet-500/10', change: '+$94,500', up: true },
          { label: 'Net Revenue',     value: '$491,340', sub: 'After fees',      icon: ArrowDownLeft, color: 'text-emerald-400 bg-emerald-500/10', change: '+$86,940', up: true },
          { label: 'Platform Fees',   value: '$42,860',  sub: '8% avg rate',    icon: CreditCard,    color: 'text-rose-400 bg-rose-500/10', change: '-$7,560', up: false },
          { label: 'Pending Payout',  value: '$48,320',  sub: 'Mar 15, 2026',   icon: ArrowUpRight,  color: 'text-amber-400 bg-amber-500/10', change: 'In 3 days', up: true },
        ].map(({ label, value, sub, icon: Icon, color, change, up }) => (
          <div key={label} className="flex flex-col gap-3 p-5 rounded-2xl bg-[#0d0d1f] border border-[#1e1e40]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1">{label}</p>
                <p className="text-2xl font-bold text-white">{value}</p>
                <p className="text-xs text-slate-600 mt-0.5">{sub}</p>
              </div>
              <div className={`flex items-center justify-center w-11 h-11 rounded-xl ${color} shrink-0`}>
                <Icon size={20} />
              </div>
            </div>
            <span className={`text-xs font-semibold ${up ? 'text-emerald-400' : 'text-rose-400'}`}>{change} this month</span>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="rounded-2xl bg-[#0d0d1f] border border-[#1e1e40] p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-base font-bold text-white">Monthly Breakdown</h3>
            <p className="text-xs text-slate-500 mt-0.5">Gross vs Net vs Fees</p>
          </div>
          <button className="flex items-center gap-2 bg-[#12122a] border border-[#2d2d5e] text-slate-300 text-xs font-semibold px-4 py-2 rounded-xl hover:bg-[#1a1a40] transition-colors">
            <Download size={12} /> Export CSV
          </button>
        </div>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={monthlyData} margin={{ top: 5, right: 5, bottom: 0, left: 0 }} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e1e40" vertical={false} />
            <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} width={40} tickFormatter={v => `${v/1000}k`} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.02)' }} />
            <Bar dataKey="gross" name="Gross"  fill="#8b5cf6" radius={[4,4,0,0]} />
            <Bar dataKey="net"   name="Net"    fill="#06b6d4" radius={[4,4,0,0]} />
            <Bar dataKey="fees"  name="Fees"   fill="#f43f5e" radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Transactions */}
      <div className="rounded-2xl bg-[#0d0d1f] border border-[#1e1e40] overflow-hidden">
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1e1e40]">
          <div>
            <h3 className="text-base font-bold text-white">Transaction History</h3>
            <p className="text-xs text-slate-500 mt-0.5">Recent payouts, fees & refunds</p>
          </div>
          <button className="flex items-center gap-2 bg-[#12122a] border border-[#2d2d5e] text-slate-300 text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-[#1a1a40] transition-colors">
            <FileText size={13} /> Full Report
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[11px] text-slate-600 uppercase tracking-widest border-b border-[#1e1e40]">
                {['ID', 'Event / Description', 'Type', 'Amount', 'Date', 'Status'].map(h => (
                  <th key={h} className="text-left px-6 py-3 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {transactions.map((t, i) => (
                <tr key={i} className="border-b border-[#1a1a30] hover:bg-white/[0.02] transition-colors last:border-0">
                  <td className="px-6 py-4 font-mono text-xs text-slate-500">{t.id}</td>
                  <td className="px-6 py-4 font-semibold text-white">{t.event}</td>
                  <td className="px-6 py-4 text-slate-400 text-xs">{t.type}</td>
                  <td className={`px-6 py-4 font-bold text-sm ${t.amount.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {t.amount}
                  </td>
                  <td className="px-6 py-4 text-slate-500 text-xs">{t.date}</td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${txStyle[t.status]}`}>
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
