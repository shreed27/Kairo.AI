"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Car, 
  Utensils, 
  Calendar, 
  BrainCircuit, 
  Bell, 
  Settings,
  Mic,
  ChevronRight
} from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Car, label: 'Rides', href: '/rides' },
  { icon: Utensils, label: 'Food', href: '/food' },
  { icon: Calendar, label: 'Calendar', href: '/calendar' },
  { icon: BrainCircuit, label: 'Memory', href: '/memory' },
  { icon: Bell, label: 'Notifications', href: '/notifications', badge: 7 },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();

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
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href} 
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
              {item.badge && (
                <span style={{ 
                  marginLeft: 'auto', 
                  background: 'var(--accent-purple)', 
                  color: '#fff', 
                  fontSize: '10px', 
                  padding: '2px 6px', 
                  borderRadius: '10px',
                  fontWeight: '700'
                }}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div style={{ marginTop: 'auto' }}>
        <div style={{ 
          background: 'rgba(168, 85, 247, 0.05)', 
          borderRadius: '20px', 
          padding: '20px', 
          marginBottom: '20px',
          border: '1px solid rgba(168, 85, 247, 0.1)',
          textAlign: 'center'
        }}>
           <div style={{ color: 'var(--accent-purple)', fontSize: '10px', fontWeight: 'bold', marginBottom: '8px', textTransform: 'uppercase' }}>
              <Mic size={10} style={{ marginRight: '4px' }} /> Kairo is listening
           </div>
           <div className="orb pulse-orb" style={{ width: '40px', height: '40px', margin: '0 auto 12px' }}>
              <div className="logo-inner" style={{ width: '12px', height: '12px' }}></div>
           </div>
           <p style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Tap to pause ✨</p>
        </div>

        <div className="user-profile">
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" 
            alt="User" 
            className="avatar" 
          />
          <div className="user-info">
            <h4>Aryan Mehta 👑</h4>
            <p>Premium Plan</p>
          </div>
          <ChevronRight size={14} color="var(--text-muted)" style={{ marginLeft: 'auto' }} />
        </div>
      </div>
      <style jsx>{`
        .pulse-orb {
          animation: orbPulse 2s infinite ease-in-out;
        }
        @keyframes orbPulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.4); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(139, 92, 246, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(139, 92, 246, 0); }
        }
      `}</style>
    </aside>
  );
}

