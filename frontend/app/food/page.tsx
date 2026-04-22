"use client";

import { useState } from 'react';
import { Utensils, Search, Filter, Timer, Star, Check, Edit2, XCircle, Sparkles, ChevronRight, MapPin, Truck } from 'lucide-react';
import OrderDetails from '@/components/OrderDetails';

const deliveryApps = [
  { id: 'swiggy', name: 'Swiggy', price: 358, eta: 28, rating: 4.5, color: '#fc8019' },
  { id: 'zomato', name: 'Zomato', price: 385, eta: 22, rating: 4.8, color: '#cb202d' },
  { id: 'blinkit', name: 'Blinkit', price: 410, eta: 15, rating: 4.6, color: '#fff200' },
];

export default function FoodPage() {
  const [suggestion, setSuggestion] = useState<any>({
    id: "food-1",
    type: "food",
    title: "Friday Pizza Night?",
    message: "You usually order pizza on Friday. Swiggy is offering 40% off at Luigi's Kitchen!",
    option: "Luigi's Pizza",
    items: ["Margherita Pizza (Large)", "Garlic Bread"],
    rating: 4.8
  });
  const [cardStatus, setCardStatus] = useState<'active' | 'confirmed' | 'dismissed'>('active');
  const [bookedApp, setBookedApp] = useState<string | null>(null);

  const handleConfirm = () => {
    setBookedApp('swiggy');
    setCardStatus('confirmed');
  };

  const imgUrl = "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1500&auto=format&fit=crop";

  return (
    <main className="main-area">

      {cardStatus === 'active' && suggestion && (
          <div className="suggestion-card" style={{ marginBottom: '40px' }}>
            <div className="card-main-content">
                <div className="card-header" style={{ justifyContent: 'flex-start' }}>
                    <div className="proactive-badge">
                        <Sparkles size={14} /> PROACTIVE SUGGESTION
                    </div>
                </div>

                <div className="card-title">
                    <h3>{suggestion.title} 🍕</h3>
                    <p>{suggestion.message}</p>
                </div>

                {suggestion.items && (
                <div className="items-prefilled" style={{ marginTop: '16px' }}>
                    <h4 style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>Your usual order:</h4>
                    <div style={{ display: 'flex', gap: '8px' }}>
                    {suggestion.items.map((item: string, i: number) => (
                        <span key={i} className="item-tag">{item}</span>
                    ))}
                    </div>
                </div>
                )}

                <div className="card-actions" style={{ marginTop: '24px' }}>
                    <button className="btn btn-primary" onClick={handleConfirm} style={{ padding: '14px 24px', flex: 'none' }}>
                        <Check size={18} /> Confirm Order
                    </button>
                    <button className="btn btn-secondary" style={{ padding: '14px 24px', flex: 'none' }}>
                        <Edit2 size={18} /> Modify
                    </button>
                    <button className="btn btn-secondary" onClick={() => setCardStatus('dismissed')} style={{ padding: '14px 24px', flex: 'none' }}>
                        <XCircle size={18} /> Dismiss
                    </button>
                </div>
            </div>

            <div className="card-visual-side">
                <div className="rating-badge" style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 1, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}>
                    <Star size={12} fill="#fbbf24" color="#fbbf24" /> {suggestion.rating || "4.8"}
                </div>
                <img src={imgUrl} alt="Visual" className="visual-image" style={{ height: '240px' }} />
            </div>
          </div>
      )}

      {cardStatus === 'confirmed' && (
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></div>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Live Order Tracking</h3>
          </div>
          
          <div style={{ background: 'var(--panel-bg)', borderRadius: '24px', border: '1px solid var(--panel-border)', padding: '24px', display: 'flex', gap: '24px' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div>
                  <h4 style={{ fontSize: '20px', fontWeight: 'bold' }}>Arriving in 18 mins</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Luigi's Kitchen • Margherita Pizza + 1 more</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>Preparing</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px' }}>
                 <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Truck size={24} color="#8A8A9E" />
                 </div>
                 <div>
                    <h5 style={{ fontWeight: '600' }}>Ramesh Kumar</h5>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Your delivery partner • Suzuki Access (White)</p>
                 </div>
                 <button style={{ marginLeft: 'auto', background: 'var(--accent-purple)', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer' }}>Call</button>
              </div>
            </div>
            <div style={{ width: '300px', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--panel-border)' }}>
               <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1500&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Map" />
            </div>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Compare Apps</h3>
        <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', cursor: 'pointer' }}>
          <Filter size={16} /> Filters
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {deliveryApps.map(app => (
          <div key={app.id} style={{ background: 'var(--panel-bg)', borderRadius: '24px', padding: '24px', border: `1px solid ${bookedApp === app.id ? 'var(--accent-purple)' : 'var(--panel-border)'}`, position: 'relative' }}>
            {app.id === 'swiggy' && (
              <div style={{ position: 'absolute', top: '-10px', right: '20px', background: 'var(--accent-purple)', color: '#fff', fontSize: '10px', fontWeight: 'bold', padding: '4px 10px', borderRadius: '20px' }}>BEST VALUE</div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: app.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', fontSize: '20px' }}>{app.name[0]}</div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '18px', fontWeight: 'bold' }}>₹{app.price}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>incl. taxes</div>
              </div>
            </div>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '4px' }}>{app.name}</h4>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}><Timer size={14} /> {app.eta}m</span>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}><Star size={14} color="#fbbf24" fill="#fbbf24" /> {app.rating}</span>
            </div>
            <button onClick={() => { setBookedApp(app.id); setCardStatus('confirmed'); }} style={{ width: '100%', background: bookedApp === app.id ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255,255,255,0.05)', color: bookedApp === app.id ? 'var(--accent-purple)' : '#fff', border: '1px solid var(--panel-border)', padding: '12px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer' }}>
              {bookedApp === app.id ? 'Order Placed' : 'Order Food here'}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
