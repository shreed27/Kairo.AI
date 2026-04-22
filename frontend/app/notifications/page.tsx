"use client";

import { 
  Bell, Search, Settings2, Moon, Mail, Phone, Sparkles, Car, Utensils, Calendar, Zap, 
  ChevronRight, MoreHorizontal, Check, Filter, Info, Smartphone, Clock
} from 'lucide-react';

export default function NotificationsPage() {
  return (
    <main className="main-area">
      <header className="header-top">
        <div className="header-left">
          <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Stay updated with your latest alerts and activities.</p>
        </div>
        <div className="header-right" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '14px', fontWeight: '700' }}>9:05 AM</div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Wed, Apr 22</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
               <img src="https://flagcdn.com/in.svg" width="16" /> 28°C Bengaluru
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '8px 12px', borderRadius: '12px', fontSize: '13px', color: 'var(--text-muted)', width: '240px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between' }}>
               <span>Search notifications...</span>
               <span>⌘ K</span>
            </div>
          </div>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '2.5fr 1fr', gap: '32px', marginTop: '32px' }}>
        <div className="notifications-content-left">
           {/* Tab Bar */}
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                 {[
                   { label: 'All', count: 7, active: true },
                   { label: 'Rides', count: 2 },
                   { label: 'Food', count: 2 },
                   { label: 'Calendar', count: 2 },
                   { label: 'System', count: 1 },
                   { label: 'Offers', count: 0 }
                 ].map((tab, i) => (
                   <button key={i} style={{ 
                     background: tab.active ? 'rgba(139, 92, 246, 0.1)' : 'rgba(255,255,255,0.03)', 
                     border: tab.active ? '1px solid rgba(139, 92, 246, 0.2)' : '1px solid rgba(255,255,255,0.05)', 
                     color: tab.active ? '#a78bfa' : 'var(--text-muted)', 
                     padding: '6px 16px', 
                     borderRadius: '12px', 
                     fontSize: '13px', 
                     fontWeight: '600',
                     display: 'flex',
                     alignItems: 'center',
                     gap: '8px'
                   }}>
                     {tab.label} {tab.count > 0 && <span style={{ background: tab.active ? '#a78bfa' : 'rgba(255,255,255,0.1)', color: tab.active ? '#1e1b4b' : '#fff', padding: '1px 6px', borderRadius: '6px', fontSize: '10px' }}>{tab.count}</span>}
                   </button>
                 ))}
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                 <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}><Check size={14} /> Mark all as read</button>
                 <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}><Filter size={14} /> Filter</button>
              </div>
           </div>

           {/* Today Section */}
           <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '16px' }}>Today</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                 {[
                   { icon: Car, color: '#8b5cf6', title: 'Ride reminder', desc: 'Your ride to Office starts in 20 minutes.', time: '9:05 AM', type: 'Rides' },
                   { icon: Utensils, color: '#f59e0b', title: 'Order confirmed', desc: "Your order from Luigi's Kitchen will arrive by 8:30 PM.", time: '8:45 AM', type: 'Food' },
                   { icon: Calendar, color: '#10b981', title: 'Event starting soon', desc: 'Team Standup in 25 minutes', time: '8:40 AM', type: 'Calendar' },
                   { icon: Bell, color: '#3b82f6', title: 'System update', desc: 'Kairo now supports voice notes! Try it out.', time: '8:30 AM', type: 'System' }
                 ].map((n, i) => (
                   <div key={i} style={{ background: 'var(--panel-bg)', borderRadius: '20px', padding: '20px', border: '1px solid var(--panel-border)', display: 'flex', gap: '20px', alignItems: 'center' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: n.color }}></div>
                      <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: `${n.color}10`, color: n.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <n.icon size={20} />
                      </div>
                      <div style={{ flex: 1 }}>
                         <h4 style={{ fontSize: '14px', fontWeight: '700' }}>{n.title}</h4>
                         <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{n.desc}</p>
                         <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{n.time}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                         <span style={{ fontSize: '11px', fontWeight: '700', color: n.color, background: `${n.color}10`, padding: '4px 10px', borderRadius: '8px' }}>{n.type}</span>
                         <MoreHorizontal size={16} color="var(--text-muted)" />
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Yesterday Section */}
           <div>
              <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '16px' }}>Yesterday</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                 {[
                   { icon: Car, color: '#8b5cf6', title: 'Ride completed', desc: 'You reached Office. Total fare: ₹312', time: 'Yesterday, 6:20 PM', type: 'Rides' },
                   { icon: Utensils, color: '#f59e0b', title: 'New offer for you!', desc: 'Get 20% OFF on your next order from Biryani Blues.', time: 'Yesterday, 5:15 PM', type: 'Offers' },
                   { icon: Calendar, color: '#10b981', title: 'Event updated', desc: 'Project Discussion rescheduled to 4:00 PM', time: 'Yesterday, 3:45 PM', type: 'Calendar' }
                 ].map((n, i) => (
                   <div key={i} style={{ background: 'var(--panel-bg)', borderRadius: '20px', padding: '20px', border: '1px solid var(--panel-border)', display: 'flex', gap: '20px', alignItems: 'center', opacity: 0.6 }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }}></div>
                      <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <n.icon size={20} />
                      </div>
                      <div style={{ flex: 1 }}>
                         <h4 style={{ fontSize: '14px', fontWeight: '700' }}>{n.title}</h4>
                         <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{n.desc}</p>
                         <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{n.time}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                         <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: '8px' }}>{n.type}</span>
                         <MoreHorizontal size={16} color="var(--text-muted)" />
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="notifications-content-right">
           <section className="memory-card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700' }}>Notification Summary</h3>
                <span style={{ fontSize: '11px', color: 'var(--accent-purple)', cursor: 'pointer' }}>View all insights →</span>
              </div>
              <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
                  <svg width="180" height="180" viewBox="0 0 180 180">
                    <circle cx="90" cy="90" r="70" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="15" />
                    <circle cx="90" cy="90" r="70" fill="none" stroke="#8b5cf6" strokeWidth="15" strokeDasharray="440" strokeDashoffset="100" strokeLinecap="round" />
                    <circle cx="90" cy="90" r="70" fill="none" stroke="#f59e0b" strokeWidth="15" strokeDasharray="440" strokeDashoffset="250" strokeLinecap="round" />
                    <circle cx="90" cy="90" r="70" fill="none" stroke="#10b981" strokeWidth="15" strokeDasharray="440" strokeDashoffset="350" strokeLinecap="round" />
                  </svg>
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                     <div style={{ fontSize: '28px', fontWeight: '800' }}>7</div>
                     <div style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Total</div>
                  </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                 {[
                   { label: 'Rides', val: 2, color: '#8b5cf6' },
                   { label: 'Food', val: 2, color: '#f59e0b' },
                   { label: 'Calendar', val: 2, color: '#10b981' },
                   { label: 'System', val: 1, color: '#3b82f6' },
                   { label: 'Offers', val: 0, color: '#ec4899' }
                 ].map((stat, i) => (
                   <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                         <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: stat.color }}></div>
                         <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{stat.label}</span>
                      </div>
                      <span style={{ fontSize: '13px', fontWeight: '700' }}>{stat.val}</span>
                   </div>
                 ))}
              </div>
           </section>

           <section className="memory-card" style={{ padding: '24px', marginTop: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700' }}>Priority Notifications</h3>
                <span style={{ fontSize: '11px', color: 'var(--accent-purple)', cursor: 'pointer' }}>View all</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                 {[
                   { icon: Car, color: '#8b5cf6', title: 'Ride to Office', desc: 'Starts in 20 min • 9:25 AM', priority: 'High', pColor: '#ef4444' },
                   { icon: Utensils, color: '#f59e0b', title: "Luigi's Kitchen Order", desc: 'Arriving by 8:30 PM', priority: 'Medium', pColor: '#f59e0b' },
                   { icon: Calendar, color: '#10b981', title: 'Team Standup', desc: 'Starts in 25 min • 9:30 AM', priority: 'Medium', pColor: '#f59e0b' }
                 ].map((n, i) => (
                   <div key={i} style={{ display: 'flex', gap: '12px', background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: `${n.color}15`, color: n.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                         <n.icon size={16} />
                      </div>
                      <div style={{ flex: 1 }}>
                         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h4 style={{ fontSize: '12px', fontWeight: '700' }}>{n.title}</h4>
                            <span style={{ fontSize: '9px', fontWeight: '800', color: n.pColor }}>{n.priority}</span>
                         </div>
                         <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{n.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </section>

           <section className="memory-card" style={{ padding: '24px', marginTop: '32px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '20px' }}>Notification Settings</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                 {[
                   { label: 'Notification Preferences', icon: Bell },
                   { label: 'Do Not Disturb', icon: Moon, extra: 'Off' },
                   { label: 'Quiet Hours', icon: Clock, extra: '10 PM – 7 AM' },
                   { label: 'Email Notifications', icon: Mail, toggle: true },
                   { label: 'Push Notifications', icon: Smartphone, toggle: true }
                 ].map((s, i) => (
                   <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                         <s.icon size={16} color="var(--text-muted)" />
                         <span style={{ fontSize: '13px' }}>{s.label}</span>
                      </div>
                      {s.extra ? <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{s.extra}</span> : s.toggle ? (
                        <div style={{ width: '32px', height: '18px', background: i === 3 ? 'var(--accent-purple)' : 'var(--accent-purple)', borderRadius: '10px', padding: '2px', display: 'flex', justifyContent: 'flex-end' }}>
                           <div style={{ width: '14px', height: '14px', background: '#fff', borderRadius: '50%' }}></div>
                        </div>
                      ) : <ChevronRight size={14} color="var(--text-muted)" />}
                   </div>
                 ))}
              </div>
           </section>

           <div style={{ marginTop: '32px', background: 'var(--gradient-glow)', borderRadius: '24px', padding: '24px', border: '1px solid rgba(168, 85, 247, 0.2)', position: 'relative', overflow: 'hidden' }}>
              <Sparkles size={24} color="#f0abfc" style={{ position: 'absolute', top: '16px', left: '16px', opacity: 0.2 }} />
              <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>Never miss what matters</h4>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.5', marginBottom: '16px' }}>Enable all notifications to stay updated with Kairo.</p>
              <button style={{ width: '100%', background: 'var(--accent-purple)', border: 'none', color: '#fff', padding: '12px', borderRadius: '14px', fontWeight: '700', fontSize: '13px' }}>Enable All</button>
           </div>
        </div>
      </div>
      <style jsx>{`
        .memory-card {
          background: var(--panel-bg);
          border: 1px solid var(--panel-border);
          border-radius: 28px;
        }
      `}</style>
    </main>
  );
}
