"use client";

import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus, Filter, Clock, Search } from 'lucide-react';

const hours = Array.from({ length: 24 }, (_, i) => i);
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const mockEvents = [
  { id: 1, title: 'Team Sync', start: 10, end: 11.5, day: 2, color: '#8b5cf6', category: 'Work' },
  { id: 2, title: 'Product Review', start: 14, end: 15, day: 2, color: '#d946ef', category: 'Work' },
  { id: 3, title: 'Gym Session', start: 7, end: 8.5, day: 2, color: '#10b981', category: 'Health' },
  { id: 4, title: 'Friday Dinner', start: 20, end: 22, day: 4, color: '#fbbf24', category: 'Social' },
];

export default function CalendarPage() {
  const [view, setView] = useState<'Day' | 'Week' | 'Month'>('Week');
  const [activeDay, setActiveDay] = useState(2); // Wednesday
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const currentHourPosition = (currentTime.getHours() + currentTime.getMinutes() / 60) * 80;

  return (
    <main className="main-area" style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
      {/* Header Controls */}
      <header style={{ padding: '24px 40px', borderBottom: '1px solid var(--panel-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(5, 5, 10, 0.8)', backdropFilter: 'blur(10px)', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <CalendarIcon size={20} color="var(--accent-purple)" />
            <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>April 2026</h2>
          </div>
          <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '4px' }}>
            <button onClick={() => setView('Day')} style={{ padding: '6px 16px', borderRadius: '8px', border: 'none', background: view === 'Day' ? 'var(--panel-bg)' : 'transparent', color: view === 'Day' ? '#fff' : 'var(--text-muted)', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>Day</button>
            <button onClick={() => setView('Week')} style={{ padding: '6px 16px', borderRadius: '8px', border: 'none', background: view === 'Week' ? 'var(--panel-bg)' : 'transparent', color: view === 'Week' ? '#fff' : 'var(--text-muted)', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>Week</button>
            <button onClick={() => setView('Month')} style={{ padding: '6px 16px', borderRadius: '8px', border: 'none', background: view === 'Month' ? 'var(--panel-bg)' : 'transparent', color: view === 'Month' ? '#fff' : 'var(--text-muted)', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>Month</button>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '4px' }}>
            <button style={{ padding: '6px', borderRadius: '6px', border: 'none', background: 'transparent', color: 'var(--text-muted)', cursor: 'pointer' }}><ChevronLeft size={18} /></button>
            <button style={{ padding: '6px 12px', borderRadius: '6px', border: 'none', background: 'transparent', color: '#fff', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>Today</button>
            <button style={{ padding: '6px', borderRadius: '6px', border: 'none', background: 'transparent', color: 'var(--text-muted)', cursor: 'pointer' }}><ChevronRight size={18} /></button>
          </div>
          <button style={{ background: 'var(--gradient-btn)', border: 'none', color: '#fff', padding: '10px 20px', borderRadius: '12px', fontWeight: '600', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <Plus size={18} /> Add Event
          </button>
        </div>
      </header>

      {/* Calendar Content */}
      <div style={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        {/* Sidebar for Mini Cal & Filters */}
        <div style={{ width: '280px', borderRight: '1px solid var(--panel-border)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '32px', background: 'rgba(255,255,255,0.02)' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
               <h3 style={{ fontSize: '14px', fontWeight: '600' }}>April 2026</h3>
               <div style={{ display: 'flex', gap: '8px' }}>
                  <ChevronLeft size={14} color="var(--text-muted)" />
                  <ChevronRight size={14} color="var(--text-muted)" />
               </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textAlign: 'center' }}>
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                <span key={d} style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: 'bold' }}>{d}</span>
              ))}
              {Array.from({ length: 30 }, (_, i) => (
                <div key={i} className={`mini-date ${i + 1 === 22 ? 'active' : ''}`} style={{ 
                  fontSize: '12px', 
                  padding: '8px 0', 
                  borderRadius: '8px', 
                  cursor: 'pointer',
                  background: i + 1 === 22 ? 'var(--accent-purple)' : 'transparent',
                  color: i + 1 === 22 ? '#fff' : 'inherit'
                }}>
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          <div>
             <h3 style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px' }}>Categories</h3>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Work', 'Health', 'Social', 'Personal'].map(cat => (
                  <label key={cat} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                    <input type="checkbox" defaultChecked style={{ accentColor: 'var(--accent-purple)' }} />
                    <span style={{ fontSize: '13px' }}>{cat}</span>
                  </label>
                ))}
             </div>
          </div>
        </div>

        {/* Main Grid */}
        <div style={{ flexGrow: 1, overflowY: 'auto', position: 'relative' }}>
          {/* Grid Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(7, 1fr)', borderBottom: '1px solid var(--panel-border)', sticky: 'top', background: 'var(--bg-dark)', zIndex: 5 }}>
            <div style={{ borderRight: '1px solid var(--panel-border)', height: '40px' }}></div>
            {days.map((day, i) => (
              <div key={`header-${i}`} className={`day-header ${i === activeDay ? 'active' : ''}`} style={{ 
                textAlign: 'center', 
                padding: '12px 0', 
                fontSize: '13px', 
                fontWeight: '600', 
                color: i === activeDay ? 'var(--accent-purple)' : 'var(--text-muted)',
                borderRight: '1px solid var(--panel-border)',
                background: i === activeDay ? 'rgba(139, 92, 246, 0.05)' : 'transparent'
              }}>
                {day} <span style={{ fontSize: '16px', marginLeft: '4px' }}>{20 + i}</span>
              </div>
            ))}
          </div>

          {/* Grid Body */}
          <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(7, 1fr)', position: 'relative' }}>
            {hours.map((hour, idx) => (
              <React.Fragment key={`hour-row-${idx}`}>
                <div style={{ 
                  height: '80px', 
                  borderRight: '1px solid var(--panel-border)', 
                  borderBottom: '1px solid var(--panel-border)',
                  fontSize: '11px', 
                  color: 'var(--text-muted)', 
                  textAlign: 'right', 
                  paddingRight: '12px', 
                  paddingTop: '8px' 
                }}>
                  {hour === 0 ? '12 AM' : hour > 12 ? `${hour-12} PM` : `${hour} AM`}
                </div>
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={`cell-${idx}-${i}`} className="grid-cell" style={{ 
                    borderRight: '1px solid var(--panel-border)', 
                    borderBottom: '1px solid var(--panel-border)',
                    position: 'relative',
                    background: i === activeDay ? 'rgba(139, 92, 246, 0.02)' : 'transparent'
                  }}>
                    {/* Render Events */}
                    {mockEvents.filter(e => e.day === i && Math.floor(e.start) === hour).map(event => (
                      <div key={event.id} style={{
                        position: 'absolute',
                        top: `${(event.start - hour) * 80}px`,
                        left: '4px',
                        right: '4px',
                        height: `${(event.end - event.start) * 80 - 4}px`,
                        background: `${event.color}15`,
                        borderRadius: '8px',
                        padding: '10px',
                        borderLeft: `3px solid ${event.color}`,
                        zIndex: 2,
                        cursor: 'pointer'
                      }}>
                        <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#fff', marginBottom: '2px' }}>{event.title}</div>
                        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>{event.start}:00 - {event.end}:00</div>
                      </div>
                    ))}
                  </div>
                ))}
              </React.Fragment>
            ))}

            {/* Current Time Indicator */}
            <div style={{ 
              position: 'absolute', 
              top: `${currentHourPosition}px`, 
              left: '80px', 
              right: '0', 
              height: '2px', 
              background: '#ef4444', 
              zIndex: 10,
              display: 'flex',
              alignItems: 'center'
            }}>
               <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', marginLeft: '-4px' }}></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mini-date:hover {
          background: rgba(255, 255, 255, 0.05);
        }
        .day-header.active {
          position: relative;
        }
      `}</style>
    </main>
  );
}
