"use client";

import { useState, useEffect } from 'react';
import { Sun, AudioLines, X, Bell, Sparkles, Check, Edit2, XCircle, Timer, Star, ChevronRight } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import RightSidebar from '@/components/RightSidebar';
import VoiceArena from '@/components/VoiceArena';
import OrderDetails from '@/components/OrderDetails';

import { checkTrigger, sendQuery } from '@/lib/api';
import { speak, listen } from '@/lib/voice';

export default function Home() {
  const [suggestion, setSuggestion] = useState<any>({
    id: "default-1",
    type: "food",
    title: "Friday Dinner?",
    message: "You usually order pizza on Friday nights. Luigi's Kitchen has the best deals today!",
    reasons: ["Friday night ritual"],
    option: "Pizza from Luigi's",
    items: ["Margherita Pizza", "Garlic Bread"],
    rating: 4.8,
    alternatives: [],
    live: { delay: 0, eta: 25, options: [] }
  });
  const [cardStatus, setCardStatus] = useState<'idle' | 'active' | 'confirmed' | 'dismissed'>('active');
  const [voiceState, setVoiceState] = useState<'idle' | 'listening' | 'processing'>('idle');
  
  const handleConfirm = () => {
    setCardStatus('confirmed');
    speak("Okay, I've handled it.");
  };

  const currentIcon = suggestion?.type === 'food' ? '🍕' : '🚗';
  const imgUrl = suggestion?.type === 'food' 
    ? "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1500&auto=format&fit=crop"
    : "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1500&auto=format&fit=crop";

  return (
    <>
      <main className="main-area">
        <header className="header-top">
          <div className="date-weather">
            <span>Wednesday, Apr 22</span>
            <div className="weather-badge">
              <Sun size={14} color="#fbbf24" fill="#fbbf24" /> 28°C
            </div>
          </div>
          <div className="top-right-actions">
            <div className={`listening-badge ${voiceState === 'listening' ? 'active' : ''}`}>
              <AudioLines size={14} /> Listening...
            </div>
            <div className="notification-btn">
              <Bell size={18} />
              <div className="notification-dot"></div>
            </div>
          </div>
        </header>

        <section className="greeting-section">
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '8px' }}>Good evening, Aryan 💜</h2>
          <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={16} color="#d946ef" /> {suggestion ? "I've got something for you." : "Your evening looks clear."}
          </p>
        </section>

        {cardStatus === 'active' && suggestion && (
          <div className="suggestion-card">
            <div className="card-main-content">
                <div className="card-header" style={{ justifyContent: 'flex-start' }}>
                    <div className="proactive-badge">
                        <Sparkles size={14} /> PROACTIVE SUGGESTION
                    </div>
                </div>

                <div className="card-title">
                    <h3>{suggestion.title} {currentIcon}</h3>
                    <p>{suggestion.message || suggestion.reasons[0]}</p>
                </div>

                {suggestion.items && (
                <div className="items-prefilled" style={{ marginTop: '16px' }}>
                    <h4 style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>Items from your usual:</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {suggestion.items.map((item: string, i: number) => (
                        <span key={i} className="item-tag">{item}</span>
                    ))}
                    </div>
                </div>
                )}

                <div className="info-pills">
                    <div className="pill">
                        <div className="pill-icon pizza">{currentIcon}</div>
                        <div className="pill-text">
                        <span>Best Match</span>
                        <strong>{suggestion.option}</strong>
                        </div>
                    </div>
                    <div className="pill">
                        <div className="pill-icon time">
                        <Timer size={18} color="#10b981" />
                        </div>
                        <div className="pill-text">
                        <span>Live ETA</span>
                        <strong>{suggestion.live?.eta} mins</strong>
                        </div>
                    </div>
                    <div className="pill">
                        <div className="pill-icon price">
                        <span style={{fontSize: '18px', fontWeight: 'bold', color: '#fff'}}>₹</span>
                        </div>
                        <div className="pill-text">
                        <span>Price</span>
                        <strong>₹{suggestion.live?.options?.[0]?.price || suggestion.live?.price || "350"}</strong>
                        </div>
                    </div>
                </div>

                <div className="card-actions">
                    <button className="btn btn-primary" onClick={handleConfirm}>
                        <Check size={18} /> Confirm {suggestion.type === 'food' ? 'Order' : 'Ride'}
                    </button>
                    <button className="btn btn-secondary">
                        <Edit2 size={18} /> Modify
                    </button>
                    <button className="btn btn-secondary" onClick={() => setCardStatus('dismissed')}>
                        <XCircle size={18} /> Dismiss
                    </button>
                </div>
            </div>

            <div className="card-visual-side" style={{ position: 'relative' }}>
                <div className="rating-badge" style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 1, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}>
                    <Star size={12} fill="#fbbf24" color="#fbbf24" /> {suggestion.rating || "4.8"}
                </div>
                <img src={imgUrl} alt="Visual" className="visual-image" style={{ height: '240px' }} />
            </div>
          </div>
        )}

        {cardStatus === 'active' && (
          <VoiceArena 
            statusText={voiceState === 'listening' ? "Listening..." : "Processing..."} 
            isListening={voiceState === 'listening'}
            isProcessing={voiceState === 'processing'}
            message={suggestion?.message || "How can I help?"}
          />
        )}
        
        {cardStatus === 'confirmed' && suggestion && (
          <OrderDetails suggestion={suggestion} />
        )}
      </main>
      <RightSidebar />
    </>
  );
}
