import { User, Bell, Shield, CreditCard, Globe, Palette, Save, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const sections = [
  { id: 'profile',     label: 'Profile',          icon: User },
  { id: 'notifications', label: 'Notifications',  icon: Bell },
  { id: 'security',   label: 'Security',          icon: Shield },
  { id: 'billing',    label: 'Billing',           icon: CreditCard },
]

function Toggle({ defaultOn = false }) {
  const [on, setOn] = useState(defaultOn)
  return (
    <button
      onClick={() => setOn(v => !v)}
      className={`relative inline-flex w-11 h-6 rounded-full transition-colors duration-200 ${on ? 'bg-violet-600' : 'bg-[#2d2d5e]'}`}
    >
      <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${on ? 'translate-x-5' : 'translate-x-0'}`} />
    </button>
  )
}

export default function Settings() {
  const [activeSection, setActiveSection] = useState('profile')

  return (
    <div className="flex gap-6 p-8">
      {/* Left nav */}
      <div className="flex flex-col gap-1 w-52 shrink-0">
        <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-600 px-3 mb-3">Preferences</p>
        {sections.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveSection(id)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium w-full text-left transition-all duration-200
              ${activeSection === id
                ? 'bg-violet-600/15 text-violet-300 border border-violet-500/20'
                : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
              }`}
          >
            <Icon size={15} />
            {label}
            <ChevronRight size={13} className={`ml-auto transition-opacity ${activeSection === id ? 'opacity-60' : 'opacity-0'}`} />
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-5">

        {/* Profile */}
        {activeSection === 'profile' && (
          <>
            <div className="rounded-2xl bg-[#0d0d1f] border border-[#1e1e40] p-6">
              <h3 className="text-base font-bold text-white mb-5">Profile Information</h3>
              <div className="flex items-center gap-5 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-400 to-pink-500 flex items-center justify-center text-white text-xl font-bold">
                    ZL
                  </div>
                  <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-violet-600 rounded-lg flex items-center justify-center text-white text-xs shadow-lg hover:bg-violet-500 transition-colors">
                    +
                  </button>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Zaky Levi</p>
                  <p className="text-xs text-slate-500">Pro Organizer · Member since 2023</p>
                  <button className="text-xs text-violet-400 hover:text-violet-300 mt-1 transition-colors">Change photo</button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'First Name',    val: 'Zaky',              type: 'text' },
                  { label: 'Last Name',     val: 'Levi',              type: 'text' },
                  { label: 'Email',         val: 'zaky@eventpulse.io',type: 'email' },
                  { label: 'Phone',         val: '+1 (555) 084-2200', type: 'tel' },
                  { label: 'Organization',  val: 'EventPulse Inc.',   type: 'text' },
                  { label: 'Website',       val: 'eventpulse.io',     type: 'url' },
                ].map(({ label, val, type }) => (
                  <div key={label}>
                    <label className="block text-xs text-slate-500 mb-1.5 font-medium">{label}</label>
                    <input
                      type={type}
                      defaultValue={val}
                      className="w-full bg-[#12122a] border border-[#2d2d5e] rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/20 transition-all"
                    />
                  </div>
                ))}
              </div>
              <button className="flex items-center gap-2 mt-5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 transition-all">
                <Save size={13} /> Save Changes
              </button>
            </div>
          </>
        )}

        {/* Notifications */}
        {activeSection === 'notifications' && (
          <div className="rounded-2xl bg-[#0d0d1f] border border-[#1e1e40] p-6">
            <h3 className="text-base font-bold text-white mb-5">Notification Preferences</h3>
            <div className="flex flex-col gap-0 divide-y divide-[#1e1e40]">
              {[
                { label: 'New ticket sale',          sub: 'Get notified when someone buys a ticket', on: true },
                { label: 'Event reminders',          sub: '24h and 1h before your events start',     on: true },
                { label: 'Payout processed',         sub: 'When funds are transferred to your bank', on: true },
                { label: 'Refund requests',          sub: 'When an attendee requests a refund',      on: false },
                { label: 'Marketing reports',        sub: 'Weekly campaign performance digest',      on: false },
                { label: 'New follower',             sub: 'When someone follows your organizer page',on: true },
              ].map(({ label, sub, on }) => (
                <div key={label} className="flex items-center justify-between py-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-200">{label}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
                  </div>
                  <Toggle defaultOn={on} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Security */}
        {activeSection === 'security' && (
          <div className="rounded-2xl bg-[#0d0d1f] border border-[#1e1e40] p-6">
            <h3 className="text-base font-bold text-white mb-5">Security Settings</h3>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xs text-slate-500 mb-1.5 font-medium">Current Password</label>
                <input type="password" placeholder="••••••••••" className="w-full bg-[#12122a] border border-[#2d2d5e] rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 outline-none focus:border-violet-500/60 transition-all" />
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1.5 font-medium">New Password</label>
                <input type="password" placeholder="••••••••••" className="w-full bg-[#12122a] border border-[#2d2d5e] rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 outline-none focus:border-violet-500/60 transition-all" />
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1.5 font-medium">Confirm New Password</label>
                <input type="password" placeholder="••••••••••" className="w-full bg-[#12122a] border border-[#2d2d5e] rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 outline-none focus:border-violet-500/60 transition-all" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-[#12122a] border border-[#2d2d5e]">
                <div>
                  <p className="text-sm font-semibold text-slate-200">Two-Factor Authentication</p>
                  <p className="text-xs text-slate-500 mt-0.5">Add an extra layer of security</p>
                </div>
                <Toggle defaultOn={true} />
              </div>
              <button className="flex items-center gap-2 w-fit bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-violet-500/25 hover:-translate-y-0.5 transition-all">
                <Save size={13} /> Update Password
              </button>
            </div>
          </div>
        )}

        {/* Billing */}
        {activeSection === 'billing' && (
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl bg-[#0d0d1f] border border-[#1e1e40] p-6">
              <h3 className="text-base font-bold text-white mb-4">Current Plan</h3>
              <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-violet-900/40 to-purple-900/20 border border-violet-500/20 mb-4">
                <div>
                  <p className="text-sm font-bold text-violet-300">Pro Organizer</p>
                  <p className="text-xs text-slate-400 mt-0.5">$49 / month · Renews Apr 1, 2026</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">Active</span>
              </div>
              <button className="text-xs text-violet-400 hover:text-violet-300 font-medium transition-colors">Upgrade to Enterprise →</button>
            </div>
            <div className="rounded-2xl bg-[#0d0d1f] border border-[#1e1e40] p-6">
              <h3 className="text-base font-bold text-white mb-4">Payment Method</h3>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#12122a] border border-[#2d2d5e]">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1e1e40]">
                  <CreditCard size={18} className="text-slate-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-200">Visa ending in 4242</p>
                  <p className="text-xs text-slate-500">Expires 08/28</p>
                </div>
                <button className="ml-auto text-xs text-violet-400 hover:text-violet-300 font-medium transition-colors">Change</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
