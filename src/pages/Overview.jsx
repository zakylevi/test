import { DollarSign, Ticket, Users, CalendarDays } from 'lucide-react'
import StatCard from '../components/StatCard'
import RevenueChart from '../components/RevenueChart'
import UpcomingEvents from '../components/UpcomingEvents'

const stats = [
  {
    title: 'Total Revenue',
    value: '$534,200',
    subtitle: 'Across all events',
    change: '+18.4%',
    changeType: 'up',
    icon: DollarSign,
    color: 'violet',
    sparkData: [30, 45, 38, 60, 52, 75, 94],
  },
  {
    title: 'Tickets Sold',
    value: '12,840',
    subtitle: 'Active ticket holders',
    change: '+12.1%',
    changeType: 'up',
    icon: Ticket,
    color: 'cyan',
    sparkData: [20, 35, 28, 50, 42, 65, 84],
  },
  {
    title: 'Total Attendees',
    value: '9,632',
    subtitle: 'Checked-in this year',
    change: '+8.7%',
    changeType: 'up',
    icon: Users,
    color: 'emerald',
    sparkData: [40, 52, 48, 70, 63, 78, 96],
  },
  {
    title: 'Upcoming Events',
    value: '24',
    subtitle: 'Next 90 days',
    change: '-2',
    changeType: 'down',
    icon: CalendarDays,
    color: 'rose',
    sparkData: [8, 12, 10, 14, 11, 9, 7],
  },
]

export default function Overview() {
  return (
    <div className="flex flex-col gap-6 p-8">
      {/* Stats grid */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s) => (
          <StatCard key={s.title} {...s} />
        ))}
      </div>

      {/* Chart */}
      <RevenueChart />

      {/* Two-column row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Upcoming events takes 2 cols */}
        <div className="xl:col-span-2">
          <UpcomingEvents />
        </div>

        {/* Quick Stats panel */}
        <div className="flex flex-col gap-4 p-6 rounded-2xl bg-[#0d0d1f] border border-[#1e1e40]">
          <h3 className="text-base font-bold text-white">Quick Insights</h3>

          <div className="flex flex-col gap-3">
            {[
              { label: 'Avg Ticket Price',   value: '$41.60',  bar: 72,  color: 'bg-violet-500' },
              { label: 'Conversion Rate',    value: '68.4%',   bar: 68,  color: 'bg-cyan-500' },
              { label: 'Refund Rate',        value: '2.1%',    bar: 10,  color: 'bg-rose-500' },
              { label: 'Repeat Customers',   value: '34.7%',   bar: 34,  color: 'bg-emerald-500' },
              { label: 'Promo Code Usage',   value: '21.3%',   bar: 21,  color: 'bg-amber-500' },
            ].map(({ label, value, bar, color }) => (
              <div key={label}>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-slate-400">{label}</span>
                  <span className="font-semibold text-white">{value}</span>
                </div>
                <div className="w-full bg-[#1e1e40] rounded-full h-1.5">
                  <div className={`h-1.5 rounded-full ${color}`} style={{ width: `${bar}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Top category */}
          <div className="mt-2 p-4 rounded-xl bg-[#12122a] border border-[#1e1e40]">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-2 font-semibold">Top Category</p>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎵</span>
              <div>
                <p className="text-sm font-bold text-white">Music Events</p>
                <p className="text-[11px] text-slate-500">$312,000 · 6,400 tickets</p>
              </div>
            </div>
          </div>

          {/* Next payout */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-violet-900/30 to-purple-900/10 border border-violet-500/20">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-semibold">Next Payout</p>
            <p className="text-xl font-bold text-white">$48,320</p>
            <p className="text-xs text-slate-500 mt-0.5">Scheduled Mar 15, 2026</p>
          </div>
        </div>
      </div>
    </div>
  )
}
