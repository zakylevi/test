import { Megaphone, Tag, Mail, Share2, TrendingUp, Users, Eye, MousePointerClick } from 'lucide-react'

const campaigns = [
  { name: 'Spring Festival Launch',   channel: 'Email',     sent: '24,500', opens: '38.2%', clicks: '12.4%', revenue: '$42,000', status: 'Active',   color: 'emerald' },
  { name: 'Neon Nights Social Push',  channel: 'Instagram', sent: '18,200', opens: '—',     clicks: '4.8%',  revenue: '$28,400', status: 'Active',   color: 'violet' },
  { name: 'Early Bird Promo',         channel: 'Email',     sent: '12,000', opens: '31.5%', clicks: '9.1%',  revenue: '$19,200', status: 'Ended',    color: 'slate' },
  { name: 'VIP Upgrade Blast',        channel: 'SMS',       sent: '5,400',  opens: '—',     clicks: '22.7%', revenue: '$12,800', status: 'Scheduled',color: 'amber' },
]

const promoCodes = [
  { code: 'SPRING25', discount: '25% off', uses: 342, limit: 500, revenue: '$18,400' },
  { code: 'VIP50',    discount: '$50 off',  uses: 128, limit: 200, revenue: '$32,000' },
  { code: 'EARLYB',   discount: '15% off', uses: 892, limit: 1000,revenue: '$67,200' },
]

const statusStyle = {
  Active:    'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Ended:     'bg-slate-500/10 text-slate-400 border-slate-500/20',
  Scheduled: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
}

const channelIcon = { Email: Mail, Instagram: Share2, SMS: Megaphone }

export default function Marketing() {
  return (
    <div className="flex flex-col gap-6 p-8">
      {/* Metric row */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          { label: 'Total Impressions', value: '1.24M',  icon: Eye,             color: 'text-violet-400 bg-violet-500/10' },
          { label: 'Total Clicks',      value: '84,200', icon: MousePointerClick, color: 'text-cyan-400 bg-cyan-500/10' },
          { label: 'Email Subscribers', value: '38,400', icon: Mail,            color: 'text-emerald-400 bg-emerald-500/10' },
          { label: 'Audience Reach',    value: '210K',   icon: Users,           color: 'text-rose-400 bg-rose-500/10' },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="flex items-center gap-4 p-5 rounded-2xl bg-[#0d0d1f] border border-[#1e1e40]">
            <div className={`flex items-center justify-center w-11 h-11 rounded-xl ${color} shrink-0`}>
              <Icon size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{value}</p>
              <p className="text-xs text-slate-500 mt-0.5">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Campaigns table */}
      <div className="rounded-2xl bg-[#0d0d1f] border border-[#1e1e40] overflow-hidden">
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1e1e40]">
          <div>
            <h3 className="text-base font-bold text-white">Campaigns</h3>
            <p className="text-xs text-slate-500 mt-0.5">Email, SMS & social campaigns</p>
          </div>
          <button className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 transition-all">
            <Megaphone size={13} /> New Campaign
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[11px] text-slate-600 uppercase tracking-widest border-b border-[#1e1e40]">
                {['Campaign', 'Channel', 'Sent', 'Open Rate', 'CTR', 'Revenue', 'Status'].map(h => (
                  <th key={h} className="text-left px-6 py-3 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {campaigns.map((c, i) => {
                const ChIcon = channelIcon[c.channel] || Mail
                return (
                  <tr key={i} className="border-b border-[#1a1a30] hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 font-semibold text-white">{c.name}</td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1.5 text-slate-400 text-xs">
                        <ChIcon size={12} /> {c.channel}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-300">{c.sent}</td>
                    <td className="px-6 py-4 text-slate-300">{c.opens}</td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                        <TrendingUp size={11} /> {c.clicks}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-bold text-white">{c.revenue}</td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${statusStyle[c.status]}`}>
                        {c.status}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Promo codes */}
      <div className="rounded-2xl bg-[#0d0d1f] border border-[#1e1e40] overflow-hidden">
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1e1e40]">
          <div>
            <h3 className="text-base font-bold text-white">Promo Codes</h3>
            <p className="text-xs text-slate-500 mt-0.5">Active discount codes</p>
          </div>
          <button className="flex items-center gap-2 bg-[#12122a] border border-[#2d2d5e] text-slate-300 text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-[#1a1a40] transition-colors">
            <Tag size={13} /> Create Code
          </button>
        </div>
        <div className="flex flex-col gap-0">
          {promoCodes.map((p, i) => {
            const pct = Math.round((p.uses / p.limit) * 100)
            return (
              <div key={i} className="flex items-center gap-6 px-6 py-4 border-b border-[#1a1a30] hover:bg-white/[0.02] transition-colors last:border-b-0">
                <div className="flex items-center gap-3 w-40">
                  <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-violet-500/10">
                    <Tag size={14} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white font-mono">{p.code}</p>
                    <p className="text-xs text-slate-500">{p.discount}</p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-slate-500">{p.uses} / {p.limit} uses</span>
                    <span className="text-slate-400 font-semibold">{pct}%</span>
                  </div>
                  <div className="w-full bg-[#1e1e40] rounded-full h-1.5">
                    <div className="h-1.5 rounded-full bg-violet-500" style={{ width: `${pct}%` }} />
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-white">{p.revenue}</p>
                  <p className="text-xs text-slate-500">revenue</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
