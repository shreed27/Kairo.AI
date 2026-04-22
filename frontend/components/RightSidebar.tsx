"use client";

import { Calendar, ChevronRight, Edit3, Clock, Pizza, Car, Sparkles, MapPin, Dumbbell, UtensilsCrossed, IndianRupee, Flame, Bell, X } from 'lucide-react';

export default function RightSidebar({ voiceStatus = 'Ready to assist' }: { voiceStatus?: string }) {
  return (
    <aside style={{ width: '340px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px', flexShrink: 0, background: 'transparent' }}>
      {/* Top Header Actions (Sync with Main Header) */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginBottom: '8px' }}>
         {voiceStatus !== 'Ready to assist' && (
           <div style={{ 
              background: 'rgba(139, 92, 246, 0.1)', 
              border: '1.5px solid rgba(139, 92, 246, 0.3)', 
              borderRadius: '100px', 
              padding: '8px 16px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px',
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.1)'
           }}>
              <div className="wave-icon" style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                 <div style={{ width: '2px', height: '8px', background: '#d946ef', borderRadius: '2px' }}></div>
                 <div style={{ width: '2px', height: '14px', background: '#d946ef', borderRadius: '2px', animation: voiceStatus === 'Speaking...' ? 'pulse 1s infinite' : 'none' }}></div>
                 <div style={{ width: '2px', height: '8px', background: '#d946ef', borderRadius: '2px' }}></div>
              </div>
              <span style={{ fontSize: '13px', fontWeight: '700', color: '#fff' }}>{voiceStatus}</span>
              <div style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.2)', margin: '0 4px' }}></div>
              <X size={14} color="rgba(255,255,255,0.5)" style={{ cursor: 'pointer' }} />
           </div>
         )}
         <div style={{ width: '42px', height: '42px', background: 'rgba(255,255,255,0.03)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', border: '1px solid rgba(255,255,255,0.05)' }}>
            <Bell size={20} color="#fff" />
            <div style={{ position: 'absolute', top: '12px', right: '12px', width: '8px', height: '8px', background: '#ef4444', borderRadius: '50%', border: '2px solid #0a0a0f' }}></div>
         </div>
      </div>

      {/* Upcoming Section */}
      <section style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '28px', padding: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#fff' }}>Upcoming</h3>
          <button style={{ background: 'none', border: 'none', color: 'var(--accent-purple)', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>View all</button>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[
            { title: 'Team Standup', time: '9:30 AM • Tomorrow', icon: Calendar, color: '#8b5cf6' },
            { title: 'Gym Session', time: '6:00 PM • Tomorrow', icon: Dumbbell, color: '#10b981' }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color, border: '1px solid rgba(255,255,255,0.05)' }}>
                <item.icon size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: '600' }}>{item.title}</h4>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Preferences Section */}
      <section style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '28px', padding: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#fff' }}>Your Preferences</h3>
          <button style={{ background: 'none', border: 'none', color: 'var(--accent-purple)', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>Edit</button>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
           {[
             { label: 'Cuisine', value: 'Italian, Pizza, Burgers', icon: UtensilsCrossed, color: '#8b5cf6' },
             { label: 'Budget', value: '₹300 – ₹600', icon: IndianRupee, color: '#10b981' },
             { label: 'Spice Level', value: 'Medium', icon: Flame, color: '#f59e0b' }
           ].map((pref, i) => (
             <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: pref.color, border: '1px solid rgba(255,255,255,0.05)' }}>
                   <pref.icon size={20} />
                </div>
                <div>
                   <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '2px' }}>{pref.label}</p>
                   <p style={{ fontSize: '13px', fontWeight: '600' }}>{pref.value}</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Recent Activity */}
      <section style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '28px', padding: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#fff' }}>Recent Activity</h3>
          <button style={{ background: 'none', border: 'none', color: 'var(--accent-purple)', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>View all</button>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
           <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                 <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=100&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Pizza" />
              </div>
              <div>
                 <h4 style={{ fontSize: '14px', fontWeight: '600' }}>Ordered from Luigi's</h4>
                 <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Apr 19 • 8:15 PM</p>
              </div>
           </div>
           
           <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', border: '1px solid rgba(255,255,255,0.05)' }}>
                 <Car size={20} />
              </div>
              <div>
                 <h4 style={{ fontSize: '14px', fontWeight: '600' }}>Ola Ride to Office</h4>
                 <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Apr 21 • 9:05 AM</p>
              </div>
           </div>
        </div>
      </section>

      {/* Proactive Tip */}
      <div style={{ marginTop: 'auto', background: 'rgba(139, 92, 246, 0.03)', padding: '16px', borderRadius: '24px', border: '1px solid rgba(139, 92, 246, 0.1)', textAlign: 'center' }}>
         <p style={{ fontSize: '13px', fontWeight: '600', color: '#fff' }}>Speak naturally, I understand ✨</p>
      </div>
    </aside>
  );
}
