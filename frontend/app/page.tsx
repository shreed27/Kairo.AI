"use client";

import { useState, useEffect, useRef } from 'react';
import { 
  Sun, Bell, Sparkles, Check, Timer, Star, 
  MoreHorizontal, MapPin, X, Utensils, Car,
  ShieldCheck, Phone, MessageSquare
} from 'lucide-react';
import VoiceArena from '@/components/VoiceArena';
import { speak, listen } from '@/lib/voice';
import RightSidebar from '@/components/RightSidebar';

export default function Home() {
  const [simulation, setSimulation] = useState<'monday' | 'friday' | null>(null);
  const [cardStatus, setCardStatus] = useState<'idle' | 'active' | 'comparison' | 'confirmed' | 'dismissed'>('idle');
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [voiceStatus, setVoiceStatus] = useState<string>("Ready to assist");
  const [voiceMessage, setVoiceMessage] = useState<string>("How can I help you today?");
  
  const isSpeakingRef = useRef(false);

  const rideOptions = [
    { id: 'ola', name: 'Ola Mini', price: 285, eta: 4, rating: 4.5, color: '#d9f99d' },
    { id: 'uber', name: 'Uber Go', price: 312, eta: 7, rating: 4.8, color: '#e5e7eb' },
    { id: 'rapido', name: 'Rapido Auto', price: 120, eta: 2, rating: 4.2, color: '#fef08a' }
  ];

  const foodOptions = [
    { id: 'swiggy', name: 'Swiggy', price: 420, eta: 22, rating: 4.5, color: '#ffedd5' },
    { id: 'zomato', name: 'Zomato', price: 450, eta: 18, rating: 4.7, color: '#fee2e2' },
    { id: 'blinkit', name: 'Blinkit', price: 480, eta: 12, rating: 4.6, color: '#fef9c3' }
  ];

  const startSimulation = (type: 'monday' | 'friday') => {
    if (isSpeakingRef.current) return; // Prevent double trigger
    
    setSimulation(type);
    setCardStatus('active');
    setSelectedOption(null);
    
    const msg = type === 'monday' 
      ? "Heyyy boss, it's evening. Should I book the cab? I found Ola for 285 rupees, which is the cheapest price for your commute home." 
      : "Heyyy boss, it's Friday night! Luigi's Kitchen has a 40 percent discount on Swiggy. Should I place your usual order?";
    
    setVoiceMessage(msg);
    setVoiceStatus("Speaking...");
    isSpeakingRef.current = true;
    
    speak(msg, () => {
      isSpeakingRef.current = false;
      setVoiceStatus("Listening...");
      listen((intent) => {
        if (intent === 'confirm') {
          setVoiceStatus("Confirmed!");
          setVoiceMessage("Right away, boss!");
          speak("Right away, boss!", () => {
            if (type === 'monday') setCardStatus('comparison');
            else handleSelect(foodOptions[0]);
          });
        } else if (intent === 'dismiss') {
          setCardStatus('dismissed');
          setVoiceStatus("Dismissed");
          speak("No problem, boss. I'll be here if you change your mind.");
        } else if (intent === 'error') {
          setVoiceStatus("Offline");
          setVoiceMessage("I'm having trouble hearing you. Check your connection.");
        } else {
          setVoiceStatus("Listening...");
        }
      });
    });
  };

  const handleSelect = (option: any) => {
    setSelectedOption(option);
    setCardStatus('confirmed');
    const msg = `Great! Booked ${option.name} for you. It will arrive in ${option.eta} minutes.`;
    setVoiceMessage(msg);
    setVoiceStatus("Speaking...");
    speak(msg, () => {
      setVoiceStatus("Ready to assist");
    });
  };

  const currentIcon = simulation === 'monday' ? '🚗' : '🍕';
  const currentTitle = simulation === 'monday' ? 'Commute Home?' : 'Friday Dinner?';
  const currentOptions = simulation === 'monday' ? rideOptions : foodOptions;

  return (
    <>
      <main className="main-area">
        <header className="header-top">
          <div className="date-weather">
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Wednesday, Apr 22</span>
            <div className="weather-badge" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '600' }}>
              <Sun size={14} color="#fbbf24" fill="#fbbf24" /> 28°C
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
             <button 
              onClick={() => startSimulation('monday')}
              style={{ background: simulation === 'monday' ? 'var(--accent-purple)' : 'rgba(255,255,255,0.03)', color: simulation === 'monday' ? '#fff' : 'var(--text-muted)', border: '1px solid var(--panel-border)', padding: '10px 20px', borderRadius: '14px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', transition: 'all 0.2s' }}
             >
               Simulate Monday
             </button>
             <button 
              onClick={() => startSimulation('friday')}
              style={{ background: simulation === 'friday' ? 'var(--accent-purple)' : 'rgba(255,255,255,0.03)', color: simulation === 'friday' ? '#fff' : 'var(--text-muted)', border: '1px solid var(--panel-border)', padding: '10px 20px', borderRadius: '14px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', transition: 'all 0.2s' }}
             >
               Simulate Friday
             </button>
          </div>

          <div className="top-right-actions" style={{ visibility: 'hidden' }}>
             <Bell size={20} />
          </div>
        </header>

        <section className="greeting-section" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            Good evening, Aryan 💜
          </h2>
          <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}>
            <Sparkles size={16} color="#d946ef" /> {simulation ? `Running ${simulation} simulation...` : "I've got something for you."}
          </p>
        </section>

        {cardStatus === 'active' && (
          <div className="suggestion-card" style={{ padding: '40px', position: 'relative', overflow: 'visible', animation: 'slideIn 0.5s ease-out', minHeight: '400px' }}>
            <div className="card-main-content" style={{ flex: '1.2', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <div className="proactive-badge" style={{ background: 'rgba(217, 70, 239, 0.1)', border: '1px solid rgba(217, 70, 239, 0.2)', color: '#d946ef', fontSize: '11px', fontWeight: '700', padding: '6px 12px', borderRadius: '10px' }}>
                        <Sparkles size={12} style={{ marginRight: '6px' }} /> PROACTIVE SUGGESTION
                    </div>
                    <MoreHorizontal size={20} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
                </div>

                <h3 style={{ fontSize: '42px', fontWeight: '900', marginBottom: '16px', color: '#fff' }}>{currentTitle} {currentIcon}</h3>
                <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '32px' }}>
                  {simulation === 'monday' 
                    ? "Heyyy boss, it's evening. Traffic is building up at Silk Board. Should I book the cab? I found Ola for ₹285." 
                    : "Heyyy boss, it's Friday night! Luigi's Kitchen has a 40% discount on Swiggy right now. Should I place your usual order?"}
                </p>

                <div className="card-actions-row" style={{ display: 'flex', gap: '16px', marginTop: 'auto' }}>
                    <button className="btn btn-primary" onClick={() => setCardStatus('comparison')} style={{ flex: 1, padding: '18px', borderRadius: '20px', background: 'var(--gradient-btn)', border: 'none', color: '#fff', fontWeight: '800', fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', boxShadow: '0 10px 20px rgba(139, 92, 246, 0.3)', cursor: 'pointer' }}>
                        <Check size={20} /> Yes, help me book
                    </button>
                    <button className="btn-glass" onClick={() => setCardStatus('dismissed')} style={{ flex: 0.5, padding: '18px', borderRadius: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', color: '#fff', fontWeight: '600', fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', cursor: 'pointer' }}>
                        <X size={20} /> Not now
                    </button>
                </div>
            </div>

            <div className="card-visual-side" style={{ flex: '0.8', position: 'relative', height: '100%', minHeight: '250px' }}>
                <img 
                  src={simulation === 'monday' ? "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop" : "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop"} 
                  alt="Visual" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} 
                />
            </div>
          </div>
        )}

        {cardStatus === 'comparison' && (
          <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '800' }}>Comparing options for you...</h3>
              <button onClick={() => setCardStatus('active')} style={{ color: 'var(--accent-purple)', background: 'none', border: 'none', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>← Back</button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {currentOptions.map(opt => (
                <div key={opt.id} style={{ background: 'var(--panel-bg)', borderRadius: '28px', padding: '28px', border: '1px solid var(--panel-border)', transition: 'all 0.3s', cursor: 'pointer' }} className="option-card">
                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                      <div style={{ width: '48px', height: '48px', background: opt.color, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: '900', fontSize: '20px' }}>
                        {opt.name[0]}
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '22px', fontWeight: '900' }}>₹{opt.price}</div>
                        <div style={{ fontSize: '11px', color: '#10b981', fontWeight: '700' }}>BEST PRICE</div>
                      </div>
                   </div>
                   <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>{opt.name}</h4>
                   <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                      <span style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}><Timer size={14} /> {opt.eta}m</span>
                      <span style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}><Star size={14} color="#fbbf24" fill="#fbbf24" /> {opt.rating}</span>
                   </div>
                   <button 
                    onClick={() => handleSelect(opt)}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid var(--panel-border)', padding: '14px', borderRadius: '14px', fontWeight: '700', transition: 'all 0.2s', cursor: 'pointer' }}
                   >
                     Book with {opt.name}
                   </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {cardStatus === 'confirmed' && selectedOption && (
          <div style={{ animation: 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}>
             <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '24px 32px', borderRadius: '28px', display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
                <div style={{ width: '56px', height: '56px', background: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)' }}>
                   <Check size={28} color="#fff" strokeWidth={3} />
                </div>
                <div>
                   <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#10b981' }}>Booking Completed! 🎉</h3>
                   <p style={{ color: 'rgba(16, 185, 129, 0.8)', fontSize: '15px', fontWeight: '500' }}>Your {simulation === 'monday' ? 'ride' : 'order'} is confirmed with {selectedOption.name}.</p>
                </div>
             </div>

             <div style={{ background: 'var(--panel-bg)', borderRadius: '32px', border: '1px solid var(--panel-border)', padding: '32px', display: 'flex', gap: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                <div style={{ flex: 1 }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
                      <div>
                         <h4 style={{ fontSize: '28px', fontWeight: '900', letterSpacing: '-0.5px' }}>Arriving in {selectedOption.eta} mins</h4>
                         <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px', fontSize: '14px' }}>
                            <MapPin size={16} /> {simulation === 'monday' ? 'Pickup: Indiranagar 100ft Rd' : 'Delivery to: Home (Koramangala)'}
                         </p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                         <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px 20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <p style={{ fontSize: '10px', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: '700' }}>PIN/OTP</p>
                            <span style={{ fontSize: '20px', fontWeight: '900', letterSpacing: '2px' }}>{simulation === 'monday' ? '4412' : 'CONF-88'}</span>
                         </div>
                      </div>
                   </div>

                   <div style={{ display: 'flex', gap: '20px', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#222', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.1)' }}>
                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Agent" />
                      </div>
                      <div style={{ flex: 1 }}>
                         <h5 style={{ fontSize: '18px', fontWeight: '800' }}>{simulation === 'monday' ? 'Ramesh Kumar' : 'Suresh Singh'}</h5>
                         <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{simulation === 'monday' ? 'White Maruti Suzuki Dzire • KA 01 EQ 9121' : 'Delivery Partner • Suzuki Access'}</p>
                      </div>
                      <div style={{ display: 'flex', gap: '12px' }}>
                         <button style={{ background: 'rgba(255,255,255,0.05)', border: 'none', padding: '14px', borderRadius: '16px', cursor: 'pointer', transition: '0.2s' }}><MessageSquare size={20} /></button>
                         <button style={{ background: 'var(--accent-purple)', color: '#fff', border: 'none', padding: '14px 28px', borderRadius: '16px', fontWeight: '800', cursor: 'pointer', boxShadow: '0 5px 15px rgba(139, 92, 246, 0.2)' }}>Call</button>
                      </div>
                   </div>
                   
                   <button onClick={() => setCardStatus('idle')} style={{ marginTop: '32px', width: '100%', background: 'transparent', border: '1px solid var(--panel-border)', color: 'var(--text-muted)', padding: '18px', borderRadius: '20px', fontWeight: '700', cursor: 'pointer', fontSize: '14px' }}>Return to Home View</button>
                </div>
                
                <div style={{ width: '320px', borderRadius: '28px', overflow: 'hidden', border: '1px solid var(--panel-border)', position: 'relative' }}>
                   <div style={{ position: 'absolute', top: '20px', left: '20px', right: '20px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', padding: '12px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', zIndex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                         <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%' }}></div>
                         <span style={{ fontSize: '11px', fontWeight: '700' }}>LIVE TRACKING ACTIVE</span>
                      </div>
                   </div>
                   <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1500&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} alt="Map" />
                </div>
             </div>
          </div>
        )}

        <div style={{ marginTop: 'auto', width: '100%' }}>
          <VoiceArena 
            statusText={voiceStatus} 
            message={voiceMessage}
            isListening={voiceStatus === "Listening..."}
          />
        </div>
      </main>

      <style jsx>{`
        .option-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-purple) !important;
          background: rgba(139, 92, 246, 0.03) !important;
        }
        @keyframes slideIn {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
      <RightSidebar voiceStatus={voiceStatus} />
    </>
  );
}
