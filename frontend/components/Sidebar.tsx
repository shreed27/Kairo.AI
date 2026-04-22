"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Car, Utensils, Calendar, BarChart2, Brain, Settings, Mic, AudioLines, Bell } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Rides', icon: Car, path: '/rides' },
    { name: 'Food', icon: Utensils, path: '/food' },
    { name: 'Calendar', icon: Calendar, path: '/calendar' },
    { name: 'Insights', icon: BarChart2, path: '/insights' },
    { name: 'Memory', icon: Brain, path: '/memory' },
    { name: 'Notifications', icon: Bell, path: '/notifications' },
    { name: 'Settings', icon: Settings, path: '/settings' }
  ];

  return (
    <aside className="sidebar">
      <div className="logo-section">
        <div className="logo-icon">
          <div className="logo-inner"></div>
        </div>
        <div className="logo-text">
          <h1>Kairo</h1>
          <p>AI Assistant</p>
        </div>
      </div>

      <nav className="nav-links">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link key={item.name} href={item.path} className={`nav-item ${isActive ? 'active' : ''}`}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }}>
                  <item.icon size={18} />
                  <span>{item.name}</span>
                  {item.name === 'Notifications' && (
                      <span style={{ marginLeft: 'auto', background: isActive ? 'rgba(255,255,255,0.2)' : 'rgba(168,85,247,0.15)', color: isActive ? '#fff' : '#d8b4fe', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold' }}>7</span>
                  )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Mini Voice UI inside sidebar */}
      <div style={{ background: 'var(--panel-bg)', borderRadius: '16px', padding: '16px', border: '1px solid var(--panel-border)', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '16px', marginTop: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '16px' }}>
          <AudioLines size={14} color="#d946ef" /> Kairo is listening
        </div>
        
        <div className="orb-container" style={{ height: '60px', transform: 'scale(0.6)' }}>
          <div className="soundwave" style={{ opacity: 0.5 }}></div>
          <div className="orb active"><Mic size={32} color="white" /></div>
        </div>
        
        <p style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '8px' }}>Tap to pause <Mic size={10} style={{ marginLeft: '4px' }}/></p>
      </div>

      <div className="user-profile" style={{ marginBottom: 0 }}>
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="Aryan Mehta" className="avatar" />
        <div className="user-info">
          <h4 style={{ fontSize: '13px' }}>Aryan Mehta 👑</h4>
          <p style={{ color: '#a855f7' }}>Premium Plan</p>
        </div>
        <div style={{ marginLeft: 'auto', color: 'var(--text-muted)' }}>›</div>
      </div>
    </aside>
  );
}

function BellIconWithBadge() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }}>
      <div style={{ position: 'relative' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
      </div>
      <span>Notifications</span>
      <span style={{ marginLeft: 'auto', background: '#8b5cf6', color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold' }}>3</span>
    </div>
  );
}
