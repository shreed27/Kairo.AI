"use client";

import { useState } from 'react';
import { Sun, Check, Edit2, XCircle, MapPin, Navigation, Car, Activity, Map, Train, ChevronDown, ChevronUp, User, Phone, Shield } from 'lucide-react';
import Link from 'next/link';
import { speak } from '@/lib/voice';

export default function RidesPage() {
  const [bookedRide, setBookedRide] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const rideOptions = [
    {
      id: 'Namma Yatri Auto',
      name: 'Namma Yatri Auto',
      desc: 'Direct auto from Koramangala',
      logo: 'NY', logoBg: '#ffe4b5', logoColor: '#d97706', type: 'text',
      badge: 'Best Value', badgeColor: '#34d399', badgeBg: 'rgba(16, 185, 129, 0.2)',
      time: '35–40 mins', timeSub: 'Est 5 mins arrival',
      surge: '₹0 Surge', surgeColor: '#34d399', surgeBg: 'rgba(16, 185, 129, 0.1)', surgeSub: 'Driver gets 100%',
      price: '₹140–₹160', priceSub: 'Estimate',
      borderColor: '#10b981',
      driverName: 'Ramesh Gowda', driverRating: '4.9 ★', vehicle: 'KA-05-MH-8812', otp: '8192', mins: 5
    },
    {
      id: 'Rapido Bike',
      name: 'Rapido Bike',
      desc: 'Weave through traffic',
      logo: 'R', logoBg: '#fef08a', logoColor: '#000', type: 'text',
      badge: '', badgeColor: '', badgeBg: '',
      time: '25–30 mins', timeSub: 'Est 2 mins arrival',
      surge: 'Fastest', surgeColor: '#fbbf24', surgeBg: 'rgba(245, 158, 11, 0.1)', surgeSub: 'Avoids jams',
      price: '₹80–₹95', priceSub: 'Estimate',
      borderColor: 'var(--panel-border)',
      driverName: 'Suresh Kumar', driverRating: '4.7 ★', vehicle: 'KA-01-EQ-9121', otp: '1432', mins: 2
    },
    {
      id: 'Ola Mini',
      name: 'Ola Mini',
      desc: '4.5 ★ | 11,876 rides',
      logo: 'O', logoBg: '#fff', logoColor: '#000', type: 'text',
      badge: '', badgeColor: '', badgeBg: '',
      time: '50–55 mins', timeSub: 'Est 8 mins arrival',
      surge: '1.2x Surge', surgeColor: '#fbbf24', surgeBg: 'rgba(245, 158, 11, 0.1)', surgeSub: 'Moderate demand',
      price: '₹280–₹340', priceSub: 'Estimate',
      borderColor: 'var(--panel-border)',
      driverName: 'Mohammed Ali', driverRating: '4.8 ★', vehicle: 'Swift Dzire • KA-51-AB-1029', otp: '9901', mins: 8
    },
    {
      id: 'Uber Go',
      name: 'Uber Go',
      desc: 'Comfortable AC',
      logo: 'Uber', logoBg: '#000', logoColor: '#fff', type: 'text',
      badge: '', badgeColor: '', badgeBg: '',
      time: '45–55 mins', timeSub: 'Est 6 mins arrival',
      surge: '1.5x Surge', surgeColor: '#ef4444', surgeBg: 'rgba(239, 68, 68, 0.1)', surgeSub: 'High demand',
      price: '₹420–₹480', priceSub: 'Surge Pricing Active',
      borderColor: 'var(--panel-border)',
      driverName: 'Ravi Teja', driverRating: '4.6 ★', vehicle: 'WagonR • KA-03-NV-5510', otp: '4451', mins: 6
    },
    {
      id: 'Metro + Walk',
      name: 'Metro + Walk',
      desc: 'Yellow Line from Silk Board',
      logo: '🚇', logoBg: '#3b82f6', logoColor: '#fff', type: 'icon',
      badge: 'Eco', badgeColor: '#d8b4fe', badgeBg: 'rgba(168, 85, 247, 0.2)',
      time: '30–35 mins', timeSub: 'Skips Silkboard Traffic',
      surge: 'Save 20 mins', surgeColor: '#3b82f6', surgeBg: 'rgba(59, 130, 246, 0.1)', surgeSub: 'Traffic avoidance',
      price: '₹45', priceSub: 'Fixed fare',
      borderColor: 'var(--panel-border)',
      driverName: 'Namma Metro', driverRating: '', vehicle: 'Platform 2 • Yellow Line', otp: 'QR Ticket', mins: 0
    }
  ];

  const handleBooking = (service: string, minutes: number) => {
    setBookedRide(service);
    setIsExpanded(true); // Auto expand details
    speak(`Cool boss, booked ${service}. Your ride will reach in ${minutes} minutes. Hey Aryan, should I order food for you? It'll arrive by the time you reach home.`);
  };

  const cancelBooking = () => {
    setBookedRide(null);
    setIsExpanded(false);
    speak('Alright, your ride has been cancelled.');
  };

  // Filter rides based on booking state
  const visibleRides = bookedRide ? rideOptions.filter(r => r.id === bookedRide) : rideOptions;

  return (
    <>
      <main className="main-area" style={{ padding: '32px' }}>
        {/* Suggestion Card */}
        <div className="suggestion-card" style={{ marginBottom: '32px', display: 'flex', padding: 0, overflow: 'hidden', background: 'linear-gradient(to right, var(--panel-bg) 60%, rgba(139, 92, 246, 0.05) 100%)', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
          
          <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column' }}>
              <div className="card-header" style={{ marginBottom: '16px' }}>
                <div className="proactive-badge">✨ PROACTIVE SUGGESTION</div>
              </div>

              <div className="card-title">
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>Commute to Razorpay HQ 💼</h3>
                <p style={{ color: 'var(--text-muted)' }}>Heavy traffic near Silk Board. Leaving now via Metro or Namma Yatri<br/>will save you ~25 mins and avoid surge pricing.</p>
              </div>

              <div className="info-pills" style={{ marginTop: 'auto', marginBottom: '24px' }}>
                <div className="pill">
                  <div className="pill-icon pizza" style={{ background: 'rgba(139, 92, 246, 0.2)', color: '#a855f7' }}>⏱</div>
                  <div className="pill-text">
                    <span>Departure Window</span>
                    <strong>9:10 - 9:15 AM</strong>
                  </div>
                </div>
                <div className="pill">
                  <div className="pill-icon time" style={{ background: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8' }}><Car size={16}/></div>
                  <div className="pill-text">
                    <span>Est. Travel Time</span>
                    <strong>35-40 mins</strong>
                  </div>
                </div>
                <div className="pill">
                  <div className="pill-icon star" style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#ef4444' }}><Activity size={16}/></div>
                  <div className="pill-text">
                    <span>Traffic Status</span>
                    <strong style={{ color: '#ef4444' }}>Heavy at Silk Board</strong>
                  </div>
                </div>
              </div>

              <div className="card-actions" style={{ justifyContent: 'flex-start', marginTop: 0 }}>
                {bookedRide === 'Namma Yatri Auto' ? (
                  <button onClick={cancelBooking} className="btn btn-primary" style={{ flex: 'none', padding: '12px 32px', background: '#ef4444' }}>Cancel Ride</button>
                ) : (
                  <button onClick={() => handleBooking('Namma Yatri Auto', 4)} className="btn btn-primary" style={{ flex: 'none', padding: '12px 32px' }}>Book Namma Yatri →</button>
                )}
                <button className="btn btn-secondary" style={{ flex: 'none', padding: '12px 32px', background: 'rgba(255,255,255,0.05)', border: 'none' }}>See Route Options</button>
              </div>
          </div>

          <div style={{ width: '300px', flexShrink: 0, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000' }}>
             {/* Realistic aesthetic dark map graphic */}
             <img 
               src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop" 
               alt="Aesthetic Dark Map Night View" 
               style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8, filter: 'grayscale(20%) contrast(1.2)' }}
             />
             <div style={{ position: 'absolute', width: '100%', height: '100%', background: 'linear-gradient(to right, var(--panel-bg) 0%, transparent 40%), linear-gradient(to top, var(--panel-bg) 0%, transparent 20%)', zIndex: 1 }}></div>
             
             {/* Overlay Route Pins */}
             <div style={{ position: 'absolute', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', transform: 'rotate(15deg)' }}>
                <div style={{ width: '16px', height: '16px', background: '#3b82f6', borderRadius: '50%', boxShadow: '0 0 15px #3b82f6', border: '3px solid #000' }}></div>
                <div style={{ width: '2px', height: '40px', background: 'linear-gradient(to bottom, #3b82f6, #a855f7)', opacity: 0.8 }}></div>
                <div style={{ width: '20px', height: '20px', background: '#a855f7', borderRadius: '50%', boxShadow: '0 0 15px #a855f7', border: '4px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
             </div>
          </div>
        </div>

        {/* Ride Options */}
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600' }}>{bookedRide ? 'Your Active Ride' : 'Recommended Ride Options'}</h3>
            {!bookedRide && <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Sorted by: <strong style={{color: '#fff'}}>Smartest</strong></span>}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {visibleRides.map((ride, idx) => (
              <div key={ride.id} style={{ display: 'flex', flexDirection: 'column', background: 'var(--panel-bg)', borderRadius: '16px', border: `1px solid ${bookedRide ? 'var(--accent-purple)' : ride.borderColor}` }}>
                {/* Main Row */}
                <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '25%' }}>
                        <div style={{ width: '48px', height: '48px', background: ride.logoBg, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {ride.type === 'icon' ? <Train size={24} color={ride.logoColor} /> : <strong style={{color: ride.logoColor, fontSize: ride.logo.length > 2 ? '14px' : '20px'}}>{ride.logo}</strong>}
                        </div>
                        <div>
                            <h4 style={{ fontSize: '15px', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                              {ride.name} 
                              {ride.badge && <span style={{ background: ride.badgeBg, color: ride.badgeColor, padding: '2px 8px', borderRadius: '4px', fontSize: '10px' }}>{ride.badge}</span>}
                            </h4>
                            <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{ride.desc}</p>
                        </div>
                    </div>
                    <div style={{ width: '20%' }}>
                        <h4 style={{ fontSize: '15px', color: '#fff' }}>{bookedRide ? `Arriving in ${ride.mins} mins` : ride.time}</h4>
                        <p style={{ fontSize: '12px', color: bookedRide ? '#34d399' : 'var(--text-muted)' }}>{bookedRide ? 'Driver on the way' : ride.timeSub}</p>
                    </div>
                    <div style={{ width: '20%' }}>
                        <h4 style={{ fontSize: '13px', color: ride.surgeColor, background: ride.surgeBg, display: 'inline-block', padding: '4px 8px', borderRadius: '6px' }}>{ride.surge}</h4>
                        <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>{ride.surgeSub}</p>
                    </div>
                    <div style={{ width: '20%' }}>
                        <h4 style={{ fontSize: '15px', color: '#fff' }}>{ride.price}</h4>
                        <p style={{ fontSize: '12px', color: ride.surgeColor }}>{ride.priceSub}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        {bookedRide === ride.id ? (
                          <>
                             <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '10px 16px', borderRadius: '8px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16}/> Booked</div>
                             <button onClick={() => setIsExpanded(!isExpanded)} style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid var(--panel-border)', padding: '10px', borderRadius: '8px', cursor: 'pointer' }}>
                               {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                             </button>
                          </>
                        ) : (
                          <button onClick={() => handleBooking(ride.id, ride.mins)} style={{ background: ride.logo === '🚇' ? 'rgba(255,255,255,0.05)' : 'var(--accent-purple)', color: '#fff', border: ride.logo === '🚇' ? '1px solid var(--panel-border)' : 'none', padding: '10px 32px', borderRadius: '8px', cursor: 'pointer', fontWeight: '500' }}>
                            {ride.logo === '🚇' ? 'View Route' : 'Book'}
                          </button>
                        )}
                    </div>
                </div>

                {/* Expanded Details (Only visible if expanded AND booked) */}
                {bookedRide === ride.id && isExpanded && (
                  <div style={{ borderTop: '1px solid var(--panel-border)', padding: '20px', display: 'flex', justifyContent: 'space-between', background: 'rgba(255,255,255,0.02)' }}>
                      <div style={{ display: 'flex', gap: '24px' }}>
                         <div style={{ width: '60px', height: '60px', background: 'var(--panel-bg)', borderRadius: '50%', border: '2px solid var(--panel-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                             <User size={30} color="var(--text-muted)" />
                         </div>
                         <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', justifyContent: 'center' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#fff' }}>{ride.driverName} <span style={{ fontSize: '14px', color: '#fbbf24', marginLeft: '6px' }}>{ride.driverRating}</span></h4>
                            <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{ride.vehicle}</p>
                         </div>
                      </div>

                      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                          <div style={{ textAlign: 'center', background: 'rgba(139, 92, 246, 0.1)', padding: '12px 24px', borderRadius: '12px', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
                              <p style={{ fontSize: '11px', color: '#d8b4fe', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>PIN/OTP</p>
                              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff', letterSpacing: '4px' }}>{ride.otp}</h3>
                          </div>
                      </div>

                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                          <button style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Phone size={20} /></button>
                          <button style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Shield size={20} /></button>
                          <button onClick={cancelBooking} style={{ padding: '0 20px', height: '48px', borderRadius: '24px', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: 'none', fontWeight: '600', cursor: 'pointer' }}>Cancel</button>
                      </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </main>

      {/* Right Sidebar for Rides */}
      <aside className="right-sidebar">
        <div className="widget" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="widget-header" style={{ padding: '16px 16px 0 16px' }}>
            <h4>Koramangala Traffic</h4>
          </div>
          <div style={{ padding: '16px' }}>
            <div style={{ width: '100%', height: '180px', background: '#1c1c26', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.49830508671!2d77.61863584824244!3d12.931835706536371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144e45d16a8d%3A0xed49d1078ebd8b53!2sRazorpay%20Software%20Private%20Limited!5e0!3m2!1sen!2sin!4v1713593333311!5m2!1sen!2sin&dark=1" width="100%" height="100%" style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)', opacity: 0.8 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginTop: '12px', color: '#8A8A9E' }}>
                <span style={{display:'flex', alignItems:'center', gap:'4px'}}><div style={{width:'8px',height:'8px',background:'#ef4444',borderRadius:'50%'}}></div> Heavy</span>
                <span style={{display:'flex', alignItems:'center', gap:'4px'}}><div style={{width:'8px',height:'8px',background:'#fbbf24',borderRadius:'50%'}}></div> Moderate</span>
                <span style={{display:'flex', alignItems:'center', gap:'4px'}}><div style={{width:'8px',height:'8px',background:'#10b981',borderRadius:'50%'}}></div> Clear</span>
            </div>
          </div>
        </div>

        <div className="widget">
          <div className="widget-header">
            <h4>Recent Rides</h4>
            <a href="#">View all</a>
          </div>
          <div className="widget-list">
            <div className="widget-item" style={{alignItems: 'flex-start'}}>
              <div className="widget-icon" style={{background: 'rgba(255,255,255,0.05)'}}>
                <Car size={16} />
              </div>
              <div className="widget-text" style={{ flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <p style={{fontSize:'10px'}}>Mon, Apr 21</p>
                    <p style={{fontSize:'10px'}}>9:12 AM</p>
                </div>
                <h5 style={{fontSize: '13px', marginBottom: '2px'}}>Home → Office</h5>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p style={{fontSize:'11px'}}>45 mins</p>
                    <p style={{fontSize:'13px', color: '#fff'}}>₹312</p>
                </div>
              </div>
            </div>
            <div className="widget-item" style={{alignItems: 'flex-start'}}>
              <div className="widget-icon" style={{background: 'rgba(255,255,255,0.05)'}}>
                <Car size={16} />
              </div>
              <div className="widget-text" style={{ flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <p style={{fontSize:'10px'}}>Fri, Apr 18</p>
                    <p style={{fontSize:'10px'}}>6:20 PM</p>
                </div>
                <h5 style={{fontSize: '13px', marginBottom: '2px'}}>Office → Home</h5>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p style={{fontSize:'11px'}}>48 mins</p>
                    <p style={{fontSize:'13px', color: '#fff'}}>₹298</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="widget" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(217, 70, 239, 0.1) 100%)', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
             <span style={{ fontSize: '20px' }}>👑</span>
             <h4 style={{ fontWeight: 600 }}>Kairo Premium</h4>
          </div>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>Unlock smarter suggestions, priority support & more.</p>
          <button style={{ width: '100%', padding: '10px', background: 'var(--accent-purple)', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>Upgrade Now</button>
        </div>
      </aside>
    </>
  );
}
