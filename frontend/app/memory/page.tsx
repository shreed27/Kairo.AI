"use client";

import { Sun } from 'lucide-react';

export default function MemoryPage() {
  return (
    <>
      <main className="main-area" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>


        {/* Tabs */}
        <div style={{ display: 'flex', gap: '24px', borderBottom: '1px solid var(--panel-border)', paddingBottom: '16px', marginBottom: '24px', fontSize: '14px', color: 'var(--text-muted)' }}>
            <div style={{ color: '#fff', borderBottom: '2px solid var(--accent-purple)', paddingBottom: '16px', marginBottom: '-17px', fontWeight: '500' }}>Personal</div>
            <div>Preferences</div>
            <div>Habits</div>
            <div>Interactions</div>
            <div>Notes</div>
            <div>Places</div>
            <div>People</div>
            <button style={{ marginLeft: 'auto', background: 'transparent', color: '#a855f7', border: '1px solid rgba(168,85,247,0.3)', padding: '6px 16px', borderRadius: '8px' }}>+ Add Memory</button>
        </div>

        {/* About You */}
        <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600' }}>About You</h3>
                <span style={{ fontSize: '13px', color: '#a855f7' }}>Edit</span>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                {[
                    {icon:'👤', k:'Name', v:'Aryan Mehta'},
                    {icon:'📍', k:'Location', v:'Bengaluru, India'},
                    {icon:'💼', k:'Work', v:'Product Designer at Finova'},
                    {icon:'🎂', k:'Birthday', v:'September 12'},
                    {icon:'🎓', k:'Education', v:'MS in Design, IIT Bombay'},
                    {icon:'🌐', k:'Languages', v:'English, Hindi, Kannada'},
                    {icon:'❤️', k:'Relationship Status', v:'Single'},
                    {icon:'🕒', k:'Time Zone', v:'IST (UTC +5:30)'}
                ].map((item, i) => (
                    <div key={i} style={{ background: 'var(--panel-bg)', borderRadius: '12px', padding: '16px', border: '1px solid var(--panel-border)', display: 'flex', gap: '12px', alignItems: 'center' }}>
                         <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>{item.icon}</div>
                         <div>
                             <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{item.k}</p>
                             <h4 style={{ fontSize: '13px', color: '#fff' }}>{item.v}</h4>
                         </div>
                    </div>
                ))}
            </div>
            <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '12px', color: '#a855f7' }}>View all details ⌄</p>
        </div>

        {/* Your Habits */}
        <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div>
                   <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Your Habits</h3>
                   <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Patterns I've learned from you</p>
                </div>
                <span style={{ fontSize: '13px', color: '#a855f7' }}>View all</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                 <div style={{ background: 'var(--panel-bg)', borderRadius: '12px', padding: '16px', border: '1px solid var(--panel-border)' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: '#34d399' }}>🏋️ <h4 style={{ fontSize: '13px' }}>Gym Routine</h4></div>
                     <p style={{ fontSize: '12px', color: '#fff', marginBottom: '16px' }}>You go to the gym 5 times a week</p>
                     <span style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', padding: '4px 8px', borderRadius: '4px', fontSize: '10px' }}>Mon, Tue, Thu, Fri, Sat</span>
                 </div>
                 
                 <div style={{ background: 'var(--panel-bg)', borderRadius: '12px', padding: '16px', border: '1px solid var(--panel-border)' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: '#a855f7' }}>🌙 <h4 style={{ fontSize: '13px' }}>Sleep Schedule</h4></div>
                     <p style={{ fontSize: '12px', color: '#fff', marginBottom: '16px' }}>You usually sleep around 11:30 PM</p>
                     <span style={{ background: 'rgba(168,85,247,0.1)', color: '#a855f7', padding: '4px 8px', borderRadius: '4px', fontSize: '10px' }}>Daily</span>
                 </div>

                 <div style={{ background: 'var(--panel-bg)', borderRadius: '12px', padding: '16px', border: '1px solid var(--panel-border)' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: '#3b82f6' }}>💻 <h4 style={{ fontSize: '13px' }}>Work Focus</h4></div>
                     <p style={{ fontSize: '12px', color: '#fff', marginBottom: '16px' }}>You are most productive 10 AM - 1 PM</p>
                     <span style={{ background: 'rgba(59,130,246,0.1)', color: '#3b82f6', padding: '4px 8px', borderRadius: '4px', fontSize: '10px' }}>Weekdays</span>
                 </div>
                 
                 <div style={{ background: 'var(--panel-bg)', borderRadius: '12px', padding: '16px', border: '1px solid var(--panel-border)' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: '#f59e0b' }}>📖 <h4 style={{ fontSize: '13px' }}>Reading Habit</h4></div>
                     <p style={{ fontSize: '12px', color: '#fff', marginBottom: '16px' }}>You prefer reading in the evening</p>
                     <span style={{ background: 'rgba(245,158,11,0.1)', color: '#f59e0b', padding: '4px 8px', borderRadius: '4px', fontSize: '10px' }}>Daily</span>
                 </div>
            </div>
        </div>

      </main>

      {/* Right Sidebar */}
      <aside className="right-sidebar">
        <div className="widget" style={{ padding: '0', overflow: 'hidden' }}>
           <div style={{ padding: '16px', background: 'rgba(255,255,255,0.02)' }}>
              <h4 style={{ fontSize: '14px', marginBottom: '16px' }}>Memory Summary</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  <div style={{ width: '100px', height: '100px', borderRadius: '50%', border: '8px solid rgba(139,92,246,0.5)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                     <p style={{fontSize:'10px', color:'var(--text-muted)'}}>Total Memories</p>
                     <h3 style={{fontSize:'24px'}}>248</h3>
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                      <div style={{ display:'flex', justifyContent:'space-between' }}><span><span style={{color:'#a855f7'}}>●</span> Personal</span> <span>68</span></div>
                      <div style={{ display:'flex', justifyContent:'space-between' }}><span><span style={{color:'#3b82f6'}}>●</span> Preferences</span> <span>54</span></div>
                      <div style={{ display:'flex', justifyContent:'space-between' }}><span><span style={{color:'#10b981'}}>●</span> Habits</span> <span>42</span></div>
                      <div style={{ display:'flex', justifyContent:'space-between' }}><span><span style={{color:'#f59e0b'}}>●</span> Interactions</span> <span>62</span></div>
                  </div>
              </div>
           </div>
        </div>

        <div className="widget">
           <div className="widget-header">
             <h4>Memory Insights</h4>
           </div>
           
           <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
               <div style={{ display: 'flex', gap: '12px' }}>
                   <div style={{ width: '32px', height: '32px', background: 'rgba(16,185,129,0.15)', color:'#10b981', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>📈</div>
                   <div style={{ fontSize: '12px', color: '#fff' }}>
                       <p>You're most productive in the mornings on weekdays. <span style={{ color: 'var(--text-muted)' }}><br/>Keep scheduling important tasks before 1 PM.</span></p>
                   </div>
               </div>
               
               <div style={{ display: 'flex', gap: '12px' }}>
                   <div style={{ width: '32px', height: '32px', background: 'rgba(239,68,68,0.15)', color:'#ef4444', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>🍕</div>
                   <div style={{ fontSize: '12px', color: '#fff' }}>
                       <p>You enjoy Italian food the most. <span style={{ color: 'var(--text-muted)' }}><br/>You've ordered Italian 8 times this month.</span></p>
                   </div>
               </div>
           </div>
        </div>
        
        <div className="widget">
            <h4 style={{ fontSize: '14px', marginBottom: '12px' }}>Manage Memory</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: 'var(--text-muted)' }}>
                <p>Manage Categories &gt;</p>
                <p>Edit or Delete Memories &gt;</p>
                <p>Export My Data &gt;</p>
                <p style={{ color: '#ef4444' }}>Clear All Memories &gt;</p>
            </div>
        </div>
      </aside>
    </>
  );
}
