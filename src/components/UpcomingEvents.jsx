import { Calendar, MapPin, Users, ArrowRight, MoreHorizontal } from 'lucide-react'

const events = [
  {
    id: 1,
    name: 'Neon Nights Music Festival',
    date: 'Mar 22, 2026',
    time: '8:00 PM',
    venue: 'Madison Square Garden, NY',
    sold: 4200,
    capacity: 5000,
    revenue: '$189,000',
    category: 'Music',
    status: 'On Sale',
    color: 'violet',
    img: '🎵',
  },
  {
    id: 2,
    name: 'Web Summit Tech Conference',
    date: 'Apr 5, 2026',
    time: '9:00 AM',
    venue: 'Javits Center, New York',
    sold: 2800,
    capacity: 4000,
    revenue: '$224,000',
    category: 'Tech',
    status: 'On Sale',
    color: 'cyan',
    img: '💻',
  },
  {
    id: 3,
    name: 'Spring Food & Wine Expo',
    date: 'Apr 18, 2026',
    time: '11:00 AM',
    venue: 'Navy Pier, Chicago',
    sold: 1100,
    capacity: 2500,
    revenue: '$55,000',
    category: 'Food',
    status: 'Presale',
    color: 'emerald',
    img: '🍷',
  },
  {
    id: 4,
    name: 'EDM Underground Rave',
    date: 'May 3, 2026',
    time: '10:00 PM',
    venue: 'Terminal 5, New York',
    sold: 900,
    capacity: 3000,
    revenue: '$67,500',
    category: 'Music',
    status: 'Presale',
    color: 'rose',
    img: '🎧',
  },
]

const statusStyle = {
  'On Sale':  'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Presale':  'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Sold Out': 'bg-rose-500/10 text-rose-400 border-rose-500/20',
}

const colorBar = {
  violet: 'bg-violet-500',
  cyan:   'bg-cyan-500',
  emerald:'bg-emerald-500',
  rose:   'bg-rose-500',
}

export default function UpcomingEvents() {
  return (
    <div className="flex flex-col gap-5 p-6 rounded-2xl bg-[#0d0d1f] border border-[#1e1e40]">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-white">Upcoming Events</h3>
          <p className="text-xs text-slate-500 mt-0.5">{events.length} events scheduled</p>
        </div>
        <button className="flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 font-medium transition-colors group">
          View all <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {events.map((ev) => {
          const pct = Math.round((ev.sold / ev.capacity) * 100)
          return (
            <div
              key={ev.id}
              className="flex items-start gap-4 p-4 rounded-xl bg-[#12122a] border border-[#1e1e40] hover:border-[#2d2d5e] transition-all duration-200 group cursor-pointer"
            >
              {/* Emoji icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#1a1a3a] text-2xl shrink-0 group-hover:scale-105 transition-transform">
                {ev.img}
              </div>

              {/* Main info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="text-sm font-semibold text-white truncate">{ev.name}</p>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border shrink-0 ${statusStyle[ev.status]}`}>
                    {ev.status}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-2.5">
                  <span className="flex items-center gap-1">
                    <Calendar size={10} /> {ev.date} · {ev.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={10} /> {ev.venue}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-[#1e1e40] rounded-full h-1.5">
                    <div
                      className={`h-1.5 rounded-full ${colorBar[ev.color]} transition-all`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-500 shrink-0">
                    <span className="text-slate-300 font-semibold">{ev.sold.toLocaleString()}</span>/{ev.capacity.toLocaleString()} sold
                  </span>
                </div>
              </div>

              {/* Revenue */}
              <div className="flex flex-col items-end gap-1 shrink-0">
                <p className="text-sm font-bold text-white">{ev.revenue}</p>
                <p className="text-[10px] text-slate-600">revenue</p>
                <button className="mt-1 text-slate-600 hover:text-slate-400 transition-colors">
                  <MoreHorizontal size={15} />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
