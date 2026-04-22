"use client";

import { useState } from 'react';
import { Wallet, PieChart, TrendingUp, Zap, BarChart3, ArrowUpRight, ArrowDownRight, Coffee, Car, Utensils, ShoppingBag, ChevronRight } from 'lucide-react';

export default function InsightsPage() {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Spending', 'Trends', 'Habits', 'Recommendations'];

  return (
    <main className="main-area">
      <header className="header-top">
        <div className="date-weather">
          <Zap size={18} color="#d946ef" />
          <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#fff' }}>Personal Insights</span>
        </div>
        <div className="top-right-actions">
           <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Last updated: 5 mins ago</span>
        </div>
      </header>

      <nav style={{ display: 'flex', gap: '32px', marginBottom: '32px', borderBottom: '1px solid var(--panel-border)' }}>
        {tabs.map(tab => (
          <button 
            key={tab} 
            onClick={() => setActiveTab(tab)}
            style={{ 
              padding: '12px 0', 
              background: 'none', 
              border: 'none', 
              color: activeTab === tab ? 'var(--accent-purple)' : 'var(--text-muted)',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              position: 'relative',
              borderBottom: activeTab === tab ? '2px solid var(--accent-purple)' : '2px solid transparent'
            }}
          >
            {tab}
          </button>
        ))}
      </nav>

      {activeTab === 'Overview' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Quick Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
             {[
               { label: 'Total Spending', value: '₹42,500', trend: '+12%', icon: Wallet, color: '#8b5cf6' },
               { label: 'Avg. Delivery', value: '28m', trend: '-4m', icon: Zap, color: '#d946ef' },
               { label: 'Top Habit', value: 'Friday Pizza', trend: 'Consistent', icon: Utensils, color: '#fbbf24' },
               { label: 'Savings Opt.', value: '₹2,400', trend: 'Available', icon: TrendingUp, color: '#10b981' }
             ].map((stat, i) => (
               <div key={i} style={{ background: 'var(--panel-bg)', padding: '24px', borderRadius: '24px', border: '1px solid var(--panel-border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div style={{ padding: '8px', borderRadius: '10px', background: `${stat.color}15`, color: stat.color }}>
                      <stat.icon size={20} />
                    </div>
                    <span style={{ fontSize: '12px', color: stat.trend.includes('+') ? '#ef4444' : '#10b981', fontWeight: '600' }}>{stat.trend}</span>
                  </div>
                  <h4 style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>{stat.label}</h4>
                  <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{stat.value}</div>
               </div>
             ))}
          </div>

          {/* Main Visuals */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
             <div style={{ background: 'var(--panel-bg)', borderRadius: '24px', border: '1px solid var(--panel-border)', padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Spending Trends</h3>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                       <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-purple)' }}></div> Current
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                       <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}></div> Previous
                    </span>
                  </div>
                </div>
                {/* Mock SVG Chart */}
                <svg width="100%" height="200" viewBox="0 0 800 200" preserveAspectRatio="none">
                   <path d="M0 150 Q 100 120, 200 140 T 400 80 T 600 110 T 800 50" fill="none" stroke="var(--accent-purple)" strokeWidth="3" />
                   <path d="M0 180 Q 100 160, 200 170 T 400 130 T 600 150 T 800 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
                   {/* Gradient Fill */}
                   <defs>
                     <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--accent-purple)" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="var(--accent-purple)" stopOpacity="0" />
                     </linearGradient>
                   </defs>
                   <path d="M0 150 Q 100 120, 200 140 T 400 80 T 600 110 T 800 50 L 800 200 L 0 200 Z" fill="url(#chartGradient)" />
                </svg>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
                   {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                     <span key={day} style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{day}</span>
                   ))}
                </div>
             </div>

             <div style={{ background: 'var(--panel-bg)', borderRadius: '24px', border: '1px solid var(--panel-border)', padding: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '24px' }}>Category Split</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                   {[
                     { label: 'Food & Drinks', value: 45, color: '#fbbf24', icon: Utensils },
                     { label: 'Transport', value: 25, color: '#8b5cf6', icon: Car },
                     { label: 'Shopping', value: 20, color: '#d946ef', icon: ShoppingBag },
                     { label: 'Other', value: 10, color: '#10b981', icon: Coffee }
                   ].map((cat, i) => (
                     <div key={i}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                           <span style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <cat.icon size={14} color={cat.color} /> {cat.label}
                           </span>
                           <span style={{ fontSize: '13px', fontWeight: '600' }}>{cat.value}%</span>
                        </div>
                        <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                           <div style={{ width: `${cat.value}%`, height: '100%', background: cat.color, borderRadius: '10px' }}></div>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Smart Recommendations */}
          <div>
             <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>Smart Recommendations</h3>
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {[
                  { title: 'Switch to Swiggy One', desc: 'You could have saved ₹840 on delivery fees last month.', action: 'Upgrade' },
                  { title: 'Uber Intercity Deal', desc: 'Heading home this weekend? Pre-book now for 15% off.', action: 'Book' },
                  { title: 'Habit Alert', desc: 'You order Coffee daily at 11 AM. Get a Starbucks pass?', action: 'Explore' }
                ].map((rec, i) => (
                  <div key={i} style={{ background: 'rgba(139, 92, 246, 0.05)', padding: '20px', borderRadius: '20px', border: '1px solid rgba(139, 92, 246, 0.1)' }}>
                     <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>{rec.title}</h4>
                     <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: '1.5' }}>{rec.desc}</p>
                     <button style={{ background: 'var(--accent-purple)', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '10px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>{rec.action}</button>
                  </div>
                ))}
             </div>
          </div>
        </div>
      )}
    </main>
  );
}
