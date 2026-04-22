"use client";

import { Check, Clock, MapPin, Truck, ChevronRight } from 'lucide-react';

interface OrderDetailsProps {
  suggestion: any;
}

export default function OrderDetails({ suggestion }: OrderDetailsProps) {
  const isFood = suggestion.type === 'food';
  const eta = suggestion.live?.eta || 25;

  return (
    <div style={{ marginTop: '40px', animation: 'fadeIn 0.5s ease-out' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Live Tracking</h3>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        <div style={{ background: 'var(--panel-bg)', borderRadius: '28px', padding: '32px', border: '1px solid var(--panel-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
            <div>
              <h4 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '4px' }}>Arriving in {eta} mins</h4>
              <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} /> Order placed at {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '8px 16px', borderRadius: '12px', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase' }}>
              {isFood ? 'Preparing' : 'Driver Assigned'}
            </div>
          </div>

          <div className="summary-card" style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '20px', padding: '24px', marginBottom: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid var(--panel-border)', paddingBottom: '16px' }}>
                <strong style={{ fontSize: '16px' }}>{suggestion.option}</strong>
                <span style={{ fontWeight: '700' }}>₹{suggestion.live?.options?.[0]?.price || suggestion.live?.price || "350"}</span>
            </div>
            {isFood && suggestion.items && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                    {suggestion.items.map((item: string, i: number) => (
                        <span key={i} style={{ fontSize: '12px', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: '8px', color: 'var(--text-muted)' }}>{item}</span>
                    ))}
                </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                <span>Delivery Fee</span>
                <span>₹25.00</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: 'bold', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--panel-border)' }}>
                <span>Total</span>
                <strong style={{ color: 'var(--accent-purple)' }}>₹{((suggestion.live?.options?.[0]?.price || suggestion.live?.price || 350) + 25).toFixed(2)}</strong>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '20px' }}>
             <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#222', overflow: 'hidden' }}>
                <img src={isFood ? "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" : "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </div>
             <div style={{ flex: 1 }}>
                <h5 style={{ fontSize: '16px', fontWeight: '700' }}>{isFood ? 'Ramesh Kumar' : 'Suresh Singh'}</h5>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{isFood ? 'Your delivery partner • Suzuki Access (White)' : 'Your driver • Swift Dzire (Silver)'}</p>
             </div>
             <div style={{ display: 'flex', gap: '10px' }}>
                <button style={{ background: 'rgba(255,255,255,0.05)', border: 'none', padding: '12px', borderRadius: '14px', cursor: 'pointer' }}>💬</button>
                <button style={{ background: 'var(--accent-purple)', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '14px', fontWeight: '700', cursor: 'pointer' }}>Call</button>
             </div>
          </div>
        </div>

        <div style={{ background: 'var(--panel-bg)', borderRadius: '28px', overflow: 'hidden', border: '1px solid var(--panel-border)', position: 'relative' }}>
           <div style={{ position: 'absolute', top: '20px', left: '20px', right: '20px', zIndex: 5, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', padding: '12px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>Current Location</div>
              <div style={{ fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={14} color="#ef4444" /> {isFood ? "Near Indiranagar Metro" : "Near Silk Board"}
              </div>
           </div>
           <img 
            src={isFood ? "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1500&auto=format&fit=crop" : "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1500&auto=format&fit=crop"} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} 
            alt="Map" 
           />
        </div>
      </div>
    </div>
  );
}
