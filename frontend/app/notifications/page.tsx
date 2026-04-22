"use client";

import { Search, MapPin, Map, Sun } from 'lucide-react';

export default function NotificationsPage() {
  return (
    <>
      <main className="main-area" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
        {/* Notifications Title & Tabs */}
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px' }}>Notifications</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--panel-border)', paddingBottom: '16px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', gap: '24px', fontSize: '14px', color: 'var(--text-muted)' }}>
                <div style={{ color: '#fff', borderBottom: '2px solid var(--accent-purple)', paddingBottom: '16px', marginBottom: '-17px', fontWeight: '500' }}>All <span style={{ background:'rgba(168,85,247,0.15)', color:'#d8b4fe', padding:'2px 8px', borderRadius:'12px', fontSize:'11px', marginLeft:'4px'}}>7</span></div>
                <div>Rides <span style={{ background:'rgba(255,255,255,0.05)', padding:'2px 8px', borderRadius:'12px', fontSize:'11px', marginLeft:'4px'}}>2</span></div>
                <div>Food <span style={{ background:'rgba(255,255,255,0.05)', padding:'2px 8px', borderRadius:'12px', fontSize:'11px', marginLeft:'4px'}}>2</span></div>
                <div>Calendar <span style={{ background:'rgba(255,255,255,0.05)', padding:'2px 8px', borderRadius:'12px', fontSize:'11px', marginLeft:'4px'}}>2</span></div>
                <div>System <span style={{ background:'rgba(255,255,255,0.05)', padding:'2px 8px', borderRadius:'12px', fontSize:'11px', marginLeft:'4px'}}>1</span></div>
                <div>Offers <span style={{ background:'rgba(255,255,255,0.05)', padding:'2px 8px', borderRadius:'12px', fontSize:'11px', marginLeft:'4px'}}>0</span></div>
            </div>
            <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
                 <span>✓ Mark all as read</span>
                 <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>▽ Filter</span>
            </div>
        </div>

        {/* Today List */}
        <div style={{ marginBottom: '32px' }}>
             <h4 style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px' }}>Today</h4>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                 
                 {/* Item 1 */}
                 <div style={{ background: 'var(--panel-bg)', borderRadius: '12px', padding: '16px', border: '1px solid var(--panel-border)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                     <div style={{ width: '8px', height: '8px', background: '#a855f7', borderRadius: '50%' }}></div>
                     <div style={{ width: '48px', height: '48px', background: 'rgba(168,85,247,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: '#a855f7' }}>🚗</div>
                     <div style={{ flexGrow: 1 }}>
                         <h4 style={{ fontSize: '14px', marginBottom: '2px' }}>Ride reminder</h4>
                         <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Your ride to Office starts in 20 minutes.</p>
                         <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>9:05 AM</p>
                     </div>
                     <span style={{ background:'rgba(168,85,247,0.1)', color:'#a855f7', padding:'4px 12px', borderRadius:'16px', fontSize:'11px' }}>Rides</span>
                     <span style={{ color: 'var(--text-muted)', cursor: 'pointer', padding: '0 8px' }}>•••</span>
                 </div>

                 {/* Item 2 */}
                 <div style={{ background: 'var(--panel-bg)', borderRadius: '12px', padding: '16px', border: '1px solid var(--panel-border)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                     <div style={{ width: '8px', height: '8px', background: '#f59e0b', borderRadius: '50%' }}></div>
                     <div style={{ width: '48px', height: '48px', background: 'rgba(245,158,11,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: '#f59e0b' }}>🍕</div>
                     <div style={{ flexGrow: 1 }}>
                         <h4 style={{ fontSize: '14px', marginBottom: '2px' }}>Order confirmed</h4>
                         <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Your order from Luigi's Kitchen will arrive by 8:30 PM.</p>
                         <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>8:45 AM</p>
                     </div>
                     <span style={{ background:'rgba(245,158,11,0.1)', color:'#f59e0b', padding:'4px 12px', borderRadius:'16px', fontSize:'11px' }}>Food</span>
                     <span style={{ color: 'var(--text-muted)', cursor: 'pointer', padding: '0 8px' }}>•••</span>
                 </div>

                 {/* Item 3 */}
                 <div style={{ background: 'var(--panel-bg)', borderRadius: '12px', padding: '16px', border: '1px solid var(--panel-border)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                     <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%' }}></div>
                     <div style={{ width: '48px', height: '48px', background: 'rgba(16,185,129,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: '#10b981' }}>📅</div>
                     <div style={{ flexGrow: 1 }}>
                         <h4 style={{ fontSize: '14px', marginBottom: '2px' }}>Event starting soon</h4>
                         <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Team Standup in 25 minutes</p>
                         <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>8:40 AM</p>
                     </div>
                     <span style={{ background:'rgba(16,185,129,0.1)', color:'#10b981', padding:'4px 12px', borderRadius:'16px', fontSize:'11px' }}>Calendar</span>
                     <span style={{ color: 'var(--text-muted)', cursor: 'pointer', padding: '0 8px' }}>•••</span>
                 </div>

                 {/* Item 4 */}
                 <div style={{ background: 'var(--panel-bg)', borderRadius: '12px', padding: '16px', border: '1px solid var(--panel-border)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                     <div style={{ width: '8px', height: '8px', background: '#3b82f6', borderRadius: '50%' }}></div>
                     <div style={{ width: '48px', height: '48px', background: 'rgba(59,130,246,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: '#3b82f6' }}>🔔</div>
                     <div style={{ flexGrow: 1 }}>
                         <h4 style={{ fontSize: '14px', marginBottom: '2px' }}>System update</h4>
                         <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Kairo now supports voice notes! Try it out.</p>
                         <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>8:30 AM</p>
                     </div>
                     <span style={{ background:'rgba(59,130,246,0.1)', color:'#3b82f6', padding:'4px 12px', borderRadius:'16px', fontSize:'11px' }}>System</span>
                     <span style={{ color: 'var(--text-muted)', cursor: 'pointer', padding: '0 8px' }}>•••</span>
                 </div>
             </div>
        </div>

        {/* Yesterday List */}
        <div>
             <h4 style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px' }}>Yesterday</h4>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                 <div style={{ background: 'var(--panel-bg)', borderRadius: '12px', padding: '16px', border: '1px solid var(--panel-border)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                     <div style={{ width: '8px', height: '8px', background: '#a855f7', borderRadius: '50%' }}></div>
                     <div style={{ width: '48px', height: '48px', background: 'rgba(168,85,247,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: '#a855f7' }}>🚗</div>
                     <div style={{ flexGrow: 1 }}>
                         <h4 style={{ fontSize: '14px', marginBottom: '2px' }}>Ride completed</h4>
                         <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>You reached Office. Total fare: ₹312</p>
                         <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>Yesterday, 6:20 PM</p>
                     </div>
                     <span style={{ background:'rgba(168,85,247,0.1)', color:'#a855f7', padding:'4px 12px', borderRadius:'16px', fontSize:'11px' }}>Rides</span>
                     <span style={{ color: 'var(--text-muted)', cursor: 'pointer', padding: '0 8px' }}>•••</span>
                 </div>
                 
                 <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
                     <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>—— You've reached the end ——</span>
                 </div>
             </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="right-sidebar">
        {/* Search */}
        <div style={{ background: '#1C1C26', borderRadius: '12px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <Search size={16} color="var(--text-muted)" />
            <input type="text" placeholder="Search notifications..." style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '13px', width: '100%', outline: 'none' }} />
            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontSize: '10px', color: 'var(--text-muted)' }}>⌘ K</span>
        </div>

        <div className="widget" style={{ padding: '16px' }}>
           <div className="widget-header">
             <h4>Notification Summary</h4>
             <a href="#">View all insights →</a>
           </div>
           <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '16px' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '6px solid', borderImage: 'linear-gradient(to right, #a855f7, #f59e0b, #10b981, #3b82f6) 1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                     <h3 style={{fontSize:'20px'}}>7</h3>
                     <p style={{fontSize:'10px', color:'var(--text-muted)'}}>Total</p>
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                      <div style={{ display:'flex', justifyContent:'space-between' }}><span><span style={{color:'#a855f7'}}>●</span> Rides</span> <span>2</span></div>
                      <div style={{ display:'flex', justifyContent:'space-between' }}><span><span style={{color:'#f59e0b'}}>●</span> Food</span> <span>2</span></div>
                      <div style={{ display:'flex', justifyContent:'space-between' }}><span><span style={{color:'#10b981'}}>●</span> Calendar</span> <span>2</span></div>
                      <div style={{ display:'flex', justifyContent:'space-between' }}><span><span style={{color:'#3b82f6'}}>●</span> System</span> <span>1</span></div>
                  </div>
           </div>
        </div>

        <div className="widget">
           <div className="widget-header">
             <h4>Priority Notifications</h4>
             <a href="#">View all</a>
           </div>
           <div className="widget-list">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ background: 'rgba(168,85,247,0.15)', color: '#d8b4fe', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>🚗</div>
                  <div style={{ flexGrow: 1 }}>
                      <h4 style={{ fontSize: '13px' }}>Ride to Office</h4>
                      <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Starts in 20 min • 9:25 AM</p>
                  </div>
                  <span style={{ fontSize: '10px', background: 'rgba(239,68,68,0.1)', color: '#ef4444', padding: '2px 8px', borderRadius: '4px' }}>High</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ background: 'rgba(245,158,11,0.15)', color: '#fcd34d', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>🍕</div>
                  <div style={{ flexGrow: 1 }}>
                      <h4 style={{ fontSize: '13px' }}>Luigi's Kitchen Order</h4>
                      <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Arriving by 8:30 PM</p>
                  </div>
                  <span style={{ fontSize: '10px', background: 'rgba(245,158,11,0.1)', color: '#f59e0b', padding: '2px 8px', borderRadius: '4px' }}>Medium</span>
              </div>
           </div>
        </div>
        
        <div className="widget">
           <h4 style={{ fontSize: '14px', marginBottom: '16px' }}>Notification Settings</h4>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '13px' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}><span>🔔</span> Notification Preferences</div>
                   <span style={{ color: 'var(--text-muted)' }}>&gt;</span>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}><span>🌙</span> Do Not Disturb</div>
                   <span style={{ color: 'var(--text-muted)' }}>Off &gt;</span>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}><span>⏱</span> Quiet Hours</div>
                   <span style={{ color: 'var(--text-muted)' }}>10 PM - 7 AM &gt;</span>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}><span>✉️</span> Email Notifications</div>
                   <div style={{ width: '32px', height: '16px', background: '#a855f7', borderRadius: '10px', position: 'relative' }}>
                       <div style={{ width: '12px', height: '12px', background: '#fff', borderRadius: '50%', position: 'absolute', right: '2px', top: '2px' }}></div>
                   </div>
               </div>
           </div>
        </div>

        <div style={{ background: 'rgba(139,92,246,0.15)', borderRadius: '16px', padding: '16px', border: '1px solid rgba(168,85,247,0.3)' }}>
           <h4 style={{ fontSize: '13px', color: '#fff', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><span>✨</span> Never miss what matters</h4>
           <p style={{ fontSize: '11px', color: '#d8b4fe', marginBottom: '16px', lineHeight: 1.5 }}>Enable all notifications to stay updated with Kairo.</p>
           <button style={{ width: '100%', padding: '10px', background: '#a855f7', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>Enable All</button>
        </div>
      </aside>
    </>
  );
}
