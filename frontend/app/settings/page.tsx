"use client";

import { Sun, Search } from 'lucide-react';

export default function SettingsPage() {
  return (
    <>
      <main className="main-area" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px' }}>Settings</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '32px', flexGrow: 1 }}>
            
            {/* Inner Sidebar Menu */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                 <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px 16px', background: 'rgba(168,85,247,0.1)', color: '#d8b4fe', borderRadius: '12px', border: '1px solid rgba(168,85,247,0.2)', fontSize: '14px', fontWeight: '500' }}>
                     <span>⚙️</span> General
                 </div>
                 <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px 16px', color: 'var(--text-muted)', fontSize: '14px' }}><span>👤</span> Account</div>
                 <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px 16px', color: 'var(--text-muted)', fontSize: '14px' }}><span>📋</span> Preferences</div>
                 <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px 16px', color: 'var(--text-muted)', fontSize: '14px' }}><span>🔊</span> Voice & Audio</div>
                 <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px 16px', color: 'var(--text-muted)', fontSize: '14px' }}><span>🔒</span> Privacy & Data</div>
                 <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px 16px', color: 'var(--text-muted)', fontSize: '14px' }}><span>🧩</span> Integrations</div>
                 <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px 16px', color: 'var(--text-muted)', fontSize: '14px' }}><span>🔔</span> Notifications</div>
                 <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px 16px', color: 'var(--text-muted)', fontSize: '14px' }}><span>💳</span> Plans & Billing</div>
                 <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px 16px', color: 'var(--text-muted)', fontSize: '14px' }}><span>ℹ️</span> About Kairo</div>
            </div>

            {/* Inner Content - General */}
            <div>
               {/* General Settings */}
               <div style={{ background: 'var(--panel-bg)', borderRadius: '16px', padding: '24px', border: '1px solid var(--panel-border)', marginBottom: '24px' }}>
                   <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '24px' }}>General Settings</h3>
                   
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                           <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                               <span style={{ color: 'var(--text-muted)', fontSize: '20px' }}>🌐</span>
                               <div>
                                   <p style={{ fontSize: '14px', color: '#fff' }}>Language</p>
                                   <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Choose your preferred language</p>
                               </div>
                           </div>
                           <div style={{ background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                               English (India) <span style={{ fontSize: '10px' }}>▼</span>
                           </div>
                       </div>

                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                           <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                               <span style={{ color: 'var(--text-muted)', fontSize: '20px' }}>🕒</span>
                               <div>
                                   <p style={{ fontSize: '14px', color: '#fff' }}>Time Format</p>
                                   <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Choose 12 or 24 hour time format</p>
                               </div>
                           </div>
                           <div style={{ background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                               12-hour (AM/PM) <span style={{ fontSize: '10px' }}>▼</span>
                           </div>
                       </div>

                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                           <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                               <span style={{ color: 'var(--text-muted)', fontSize: '20px' }}>📅</span>
                               <div>
                                   <p style={{ fontSize: '14px', color: '#fff' }}>Date Format</p>
                                   <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Choose your preferred date format</p>
                               </div>
                           </div>
                           <div style={{ background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                               Wed, Apr 22, 2025 <span style={{ fontSize: '10px' }}>▼</span>
                           </div>
                       </div>

                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                           <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                               <span style={{ color: 'var(--text-muted)', fontSize: '20px' }}>📍</span>
                               <div>
                                   <p style={{ fontSize: '14px', color: '#fff' }}>Default Location</p>
                                   <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>For weather, rides and local suggestions</p>
                               </div>
                           </div>
                           <div style={{ color: 'var(--text-muted)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                               Bengaluru, India <span>&gt;</span>
                           </div>
                       </div>

                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                           <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                               <span style={{ color: 'var(--text-muted)', fontSize: '20px' }}>📏</span>
                               <div>
                                   <p style={{ fontSize: '14px', color: '#fff' }}>Units</p>
                                   <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Choose your preferred units of measurement</p>
                               </div>
                           </div>
                           <div style={{ background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                               Metric (km, °C) <span style={{ fontSize: '10px' }}>▼</span>
                           </div>
                       </div>
                   </div>
               </div>

               {/* Appearance */}
               <div style={{ background: 'var(--panel-bg)', borderRadius: '16px', padding: '24px', border: '1px solid var(--panel-border)', marginBottom: '24px' }}>
                   <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '24px' }}>Appearance</h3>
                   
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                       <div>
                           <p style={{ fontSize: '14px', color: '#fff' }}>Theme</p>
                           <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Choose your preferred theme</p>
                       </div>
                       <div style={{ display: 'flex', gap: '12px' }}>
                           <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px 20px', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                               <span>☀️</span> <span style={{ fontSize: '12px' }}>Light</span>
                           </div>
                           <div style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid #a855f7', padding: '16px 20px', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: '#fff', position: 'relative' }}>
                               <span>🌙</span> <span style={{ fontSize: '12px' }}>Dark</span>
                               <span style={{ position: 'absolute', top: '-6px', right: '-6px', background: '#a855f7', borderRadius: '50%', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>✓</span>
                           </div>
                           <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px 20px', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                               <span>💻</span> <span style={{ fontSize: '12px' }}>System</span>
                           </div>
                       </div>
                   </div>

                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px' }}>
                       <div>
                           <p style={{ fontSize: '14px', color: '#fff' }}>Accent Color</p>
                           <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Choose your favorite accent color</p>
                       </div>
                       <div style={{ display: 'flex', gap: '12px' }}>
                           <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#a855f7', border: '2px solid #fff' }}></div>
                           <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#3b82f6' }}></div>
                           <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#06b6d4' }}></div>
                           <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#10b981' }}></div>
                           <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#f59e0b' }}></div>
                           <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#ef4444' }}></div>
                           <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#ec4899' }}></div>
                       </div>
                   </div>
               </div>

               {/* Other Preferences */}
               <div style={{ background: 'var(--panel-bg)', borderRadius: '16px', padding: '24px', border: '1px solid var(--panel-border)' }}>
                   <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '24px' }}>Other Preferences</h3>

                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                       <div>
                           <p style={{ fontSize: '14px', color: '#fff' }}>Auto Play Voice Responses</p>
                           <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Automatically play Kairo's voice responses</p>
                       </div>
                       <div style={{ width: '40px', height: '20px', background: '#a855f7', borderRadius: '10px', position: 'relative' }}>
                           <div style={{ width: '16px', height: '16px', background: '#fff', borderRadius: '50%', position: 'absolute', right: '2px', top: '2px' }}></div>
                       </div>
                   </div>

                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
                       <div>
                           <p style={{ fontSize: '14px', color: '#fff' }}>Show Tips & Suggestions</p>
                           <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Get helpful tips to make the most of Kairo</p>
                       </div>
                       <div style={{ width: '40px', height: '20px', background: '#a855f7', borderRadius: '10px', position: 'relative' }}>
                           <div style={{ width: '16px', height: '16px', background: '#fff', borderRadius: '50%', position: 'absolute', right: '2px', top: '2px' }}></div>
                       </div>
                   </div>

                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px' }}>
                       <div>
                           <p style={{ fontSize: '14px', color: '#fff' }}>Start Kairo on System Startup</p>
                           <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Launch Kairo automatically when you start your device</p>
                       </div>
                       <div style={{ width: '40px', height: '20px', background: 'rgba(255,255,255,0.2)', borderRadius: '10px', position: 'relative' }}>
                           <div style={{ width: '16px', height: '16px', background: '#fff', borderRadius: '50%', position: 'absolute', left: '2px', top: '2px' }}></div>
                       </div>
                   </div>

               </div>
               
               <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '12px', marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                   Kairo.AI v2.1.0 • Made with <span style={{ color: '#a855f7' }}>💜</span> in Bengaluru
               </p>

            </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="right-sidebar">
        {/* Search */}
        <div style={{ background: '#1C1C26', borderRadius: '12px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <Search size={16} color="var(--text-muted)" />
            <input type="text" placeholder="Search settings..." style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '13px', width: '100%', outline: 'none' }} />
            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontSize: '10px', color: 'var(--text-muted)' }}>⌘ K</span>
        </div>

        <div className="widget" style={{ padding: '16px' }}>
           <h4 style={{ fontSize: '14px', marginBottom: '16px' }}>Account</h4>
           <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
               <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
               <div>
                   <h4 style={{ fontSize: '14px' }}>Aryan Mehta 👑</h4>
                   <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>aryan.mehta@email.com</p>
               </div>
           </div>
           <p style={{ fontSize: '13px', color: '#a855f7', textAlign: 'center', padding: '8px 0', borderTop: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer' }}>Manage Account &gt;</p>
        </div>

        <div className="widget">
           <h4 style={{ fontSize: '14px', marginBottom: '16px' }}>Your Plan</h4>
           <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
               <div style={{ width: '48px', height: '48px', background: 'rgba(168,85,247,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', border: '1px solid rgba(168,85,247,0.3)' }}>👑</div>
               <div>
                   <h4 style={{ fontSize: '15px' }}>Kairo Premium</h4>
                   <p style={{ fontSize: '11px', color: '#34d399', display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: '6px', height: '6px', background: '#34d399', borderRadius: '50%', display: 'inline-block' }}></span> Your plan is active</p>
               </div>
           </div>
           
           <div style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
               <p><span style={{ color: '#a855f7', marginRight: '4px' }}>✓</span> Unlimited AI conversations</p>
               <p><span style={{ color: '#a855f7', marginRight: '4px' }}>✓</span> Priority support</p>
               <p><span style={{ color: '#a855f7', marginRight: '4px' }}>✓</span> No delivery fees</p>
               <p><span style={{ color: '#a855f7', marginRight: '4px' }}>✓</span> Exclusive offers</p>
           </div>
           <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '10px', textAlign: 'center', color: '#a855f7', fontSize: '13px', cursor: 'pointer' }}>
               Manage Plan &gt;
           </div>
        </div>
        
        <div className="widget">
           <h4 style={{ fontSize: '14px', marginBottom: '16px' }}>Quick Shortcuts</h4>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '13px' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                   <div style={{ background: 'rgba(255,255,255,0.05)', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>⌨️</div>
                   <div style={{ flexGrow: 1 }}>
                       <p style={{ color: '#fff' }}>Keyboard Shortcuts</p>
                       <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>View all shortcuts</p>
                   </div>
                   <span style={{ color: 'var(--text-muted)' }}>⌘ /</span>
               </div>
               
               <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                   <div style={{ background: 'rgba(255,255,255,0.05)', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🎙️</div>
                   <div style={{ flexGrow: 1 }}>
                       <p style={{ color: '#fff' }}>Voice Commands</p>
                       <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Manage voice commands</p>
                   </div>
                   <span style={{ color: 'var(--text-muted)' }}>&gt;</span>
               </div>
               
               <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                   <div style={{ background: 'rgba(255,255,255,0.05)', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🏠</div>
                   <div style={{ flexGrow: 1 }}>
                       <p style={{ color: '#fff' }}>Customize Home</p>
                       <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Choose what appears on home</p>
                   </div>
                   <span style={{ color: 'var(--text-muted)' }}>&gt;</span>
               </div>
           </div>
        </div>

        <div className="widget">
           <h4 style={{ fontSize: '14px', marginBottom: '16px' }}>Theme Preview</h4>
           <div style={{ background: '#0a0a0f', borderRadius: '12px', border: '1px solid rgba(168,85,247,0.3)', padding: '12px', height: '120px', display: 'flex', gap: '8px' }}>
                <div style={{ width: '40px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', paddingTop: '8px' }}>
                     <div style={{ width: '16px', height: '16px', background: '#a855f7', borderRadius: '50%' }}></div>
                     <div style={{ width: '24px', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}></div>
                     <div style={{ width: '24px', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}></div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                     <div style={{ height: '30px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px' }}></div>
                     <div style={{ flex: 1, background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)', borderRadius: '6px' }}></div>
                     <div style={{ height: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', width: '40px', margin: '0 auto' }}></div>
                </div>
                <div style={{ width: '50px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                     <div style={{ height: '40px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}></div>
                     <div style={{ height: '40px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}></div>
                </div>
           </div>
        </div>
      </aside>
    </>
  );
}
