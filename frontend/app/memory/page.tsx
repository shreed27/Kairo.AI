"use client";

import { 
  User, MapPin, Briefcase, Calendar, GraduationCap, Languages, Heart, Globe, 
  Search, Plus, ChevronDown, ChevronRight, Dumbbell, Moon, Zap, BookOpen, Utensils, 
  ShoppingCart, Car, Plane, Coffee, Settings, Edit2, Share, Trash2
} from 'lucide-react';

export default function MemoryPage() {
  return (
    <main className="main-area">
      <header className="header-top">
        <div className="header-left">
          <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Insights and habits Kairo has learned about you.</p>
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
               <span>Search memory...</span>
               <span>⌘ K</span>
            </div>
          </div>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '2.5fr 1fr', gap: '32px', marginTop: '32px' }}>
        <div className="memory-content-left">
          {/* About You Section */}
          <section className="memory-card" style={{ padding: '24px' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700' }}>About You</h3>
                <button style={{ background: 'none', border: 'none', color: 'var(--accent-purple)', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                   <Edit2 size={12} /> Edit
                </button>
             </div>
             
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                {[
                  { icon: User, label: 'Name', val: 'Aryan Mehta', color: '#8b5cf6' },
                  { icon: MapPin, label: 'Location', val: 'Bengaluru, India', color: '#3b82f6' },
                  { icon: Briefcase, label: 'Work', val: 'Product Designer at Finova', color: '#10b981' },
                  { icon: Calendar, label: 'Birthday', val: 'September 12', color: '#f59e0b' },
                  { icon: GraduationCap, label: 'Education', val: 'MS in Design, IIT Bombay', color: '#a855f7' },
                  { icon: Languages, label: 'Languages', val: 'English, Hindi, Kannada', color: '#ec4899' },
                  { icon: Heart, label: 'Relationship Status', val: 'Single', color: '#ef4444' },
                  { icon: Globe, label: 'Time Zone', val: 'IST (UTC +5:30)', color: '#06b6d4' }
                ].map((item, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color }}>
                           <item.icon size={12} />
                        </div>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{item.label}</span>
                     </div>
                     <p style={{ fontSize: '13px', fontWeight: '600' }}>{item.val}</p>
                  </div>
                ))}
             </div>
             <button style={{ width: '100%', marginTop: '20px', background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                View all details <ChevronDown size={12} />
             </button>
          </section>

          {/* Your Habits */}
          <section style={{ marginTop: '32px' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700' }}>Your Habits</h3>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', cursor: 'pointer' }}>View all</span>
             </div>
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
                {[
                  { icon: Dumbbell, label: 'Gym Routine', text: 'You go to the gym 5 times a week', color: '#10b981', tags: ['Mon, Tue, Thu, Fri, Sat'] },
                  { icon: Moon, label: 'Sleep Schedule', text: 'You usually sleep around 11:30 PM', color: '#8b5cf6', tags: ['Daily'] },
                  { icon: Zap, label: 'Work Focus', text: 'You are most productive 10 AM – 1 PM', color: '#3b82f6', tags: ['Weekdays'] },
                  { icon: BookOpen, label: 'Reading Habit', text: 'You prefer reading in the evening', color: '#f59e0b', tags: ['Daily'] },
                  { icon: Utensils, label: 'Meal Preference', text: 'You prefer home-cooked food on weekdays', color: '#ef4444', tags: ['Mon – Fri'] }
                ].map((habit, i) => (
                  <div key={i} style={{ background: 'var(--panel-bg)', padding: '16px', borderRadius: '20px', border: '1px solid var(--panel-border)' }}>
                     <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: `${habit.color}15`, color: habit.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                        <habit.icon size={16} />
                     </div>
                     <h4 style={{ fontSize: '12px', fontWeight: '700', marginBottom: '8px' }}>{habit.label}</h4>
                     <p style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: '1.4', marginBottom: '12px' }}>{habit.text}</p>
                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {habit.tags.map((tag, j) => (
                          <span key={j} style={{ fontSize: '9px', background: `${habit.color}10`, color: habit.color, padding: '2px 6px', borderRadius: '4px', fontWeight: '600' }}>{tag}</span>
                        ))}
                     </div>
                  </div>
                ))}
             </div>
          </section>

          {/* Recent Memories */}
          <section style={{ marginTop: '32px' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700' }}>Recent Memories</h3>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', cursor: 'pointer' }}>View all</span>
             </div>
             <div style={{ background: 'var(--panel-bg)', borderRadius: '24px', border: '1px solid var(--panel-border)', overflow: 'hidden' }}>
                {[
                  { icon: ShoppingCart, color: '#10b981', title: 'You mentioned you want to buy a new laptop next month.', category: 'Goals', time: 'Today, 8:45 AM' },
                  { icon: Heart, color: '#ec4899', title: "You said you love pizza, especially from Luigi's.", category: 'Preferences', time: 'Yesterday, 7:20 PM' },
                  { icon: Plane, color: '#3b82f6', title: 'You have a trip to Goa planned on May 10 – May 14.', category: 'Travel', time: 'Apr 20, 2025' },
                  { icon: Briefcase, color: '#f59e0b', title: 'You have a project deadline on April 30.', category: 'Work', time: 'Apr 18, 2025' }
                ].map((m, i) => (
                  <div key={i} style={{ padding: '20px', borderBottom: i === 3 ? 'none' : '1px solid rgba(255,255,255,0.03)', display: 'flex', gap: '16px', alignItems: 'center' }}>
                     <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: `${m.color}10`, color: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <m.icon size={20} />
                     </div>
                     <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: '14px', fontWeight: '600' }}>{m.title}</h4>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Category: {m.category}</span>
                     </div>
                     <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>{m.time}</div>
                        <MoreHorizontal size={14} color="var(--text-muted)" />
                     </div>
                  </div>
                ))}
             </div>
          </section>
        </div>

        <div className="memory-content-right">
           <section className="memory-card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700' }}>Memory Summary</h3>
                <span style={{ fontSize: '11px', color: 'var(--accent-purple)', cursor: 'pointer' }}>View all</span>
              </div>
              <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
                  <svg width="200" height="200" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="15" />
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#8b5cf6" strokeWidth="15" strokeDasharray="502" strokeDashoffset="150" strokeLinecap="round" />
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#d946ef" strokeWidth="15" strokeDasharray="502" strokeDashoffset="400" strokeLinecap="round" />
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#10b981" strokeWidth="15" strokeDasharray="502" strokeDashoffset="450" strokeLinecap="round" />
                  </svg>
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                     <div style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Total Memories</div>
                     <div style={{ fontSize: '32px', fontWeight: '800' }}>248</div>
                  </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                 {[
                   { label: 'Personal', val: 68, color: '#a855f7' },
                   { label: 'Preferences', val: 54, color: '#3b82f6' },
                   { label: 'Habits', val: 42, color: '#10b981' },
                   { label: 'Interactions', val: 62, color: '#f59e0b' },
                   { label: 'Places', val: 14, color: '#3b82f6' },
                   { label: 'People', val: 8, color: '#ef4444' }
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
                <h3 style={{ fontSize: '16px', fontWeight: '700' }}>Memory Insights</h3>
                <span style={{ fontSize: '11px', color: 'var(--accent-purple)', cursor: 'pointer' }}>View all</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                 {[
                   { icon: Zap, color: '#10b981', text: "You're most productive in the mornings on weekdays. Keep scheduling important tasks before 1 PM." },
                   { icon: Heart, color: '#ec4899', text: "You enjoy Italian food the most. You've ordered Italian 8 times this month." },
                   { icon: Plane, color: '#3b82f6', text: "You travel every 2–3 months on average. Your next trip is in 18 days." },
                   { icon: Coffee, color: '#f59e0b', text: "You have a coffee habit! You usually have 2 cups a day." }
                 ].map((insight, i) => (
                   <div key={i} style={{ display: 'flex', gap: '12px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: `${insight.color}15`, color: insight.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                         <insight.icon size={16} />
                      </div>
                      <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.5' }}>{insight.text}</p>
                   </div>
                 ))}
              </div>
           </section>

           <section className="memory-card" style={{ padding: '24px', marginTop: '32px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '20px' }}>Manage Memory</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                 {[
                   { label: 'Manage Categories', icon: Globe },
                   { label: 'Edit or Delete Memories', icon: Edit2 },
                   { label: 'Export My Data', icon: Share },
                   { label: 'Clear All Memories', icon: Trash2, color: '#ef4444' }
                 ].map((action, i) => (
                   <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                         <action.icon size={16} color={action.color || 'var(--text-muted)'} />
                         <span style={{ fontSize: '13px', color: action.color || '#fff' }}>{action.label}</span>
                      </div>
                      <ChevronRight size={14} color="var(--text-muted)" />
                   </div>
                 ))}
              </div>
           </section>
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

function MoreHorizontal({ size, color }: any) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
    </svg>
  );
}
