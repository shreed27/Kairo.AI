"use client";

import { useState, useEffect } from 'react';
import { Mic, X } from 'lucide-react';

interface VoiceArenaProps {
  statusText?: string;
  isListening?: boolean;
  isProcessing?: boolean;
  message?: string;
}

export default function VoiceArena({ statusText, isListening, isProcessing, message }: VoiceArenaProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderBars = () => {
    if (!mounted) return [...Array(20)].map((_, i) => (
      <div key={i} className="wave-bar" style={{ height: '20px' }}></div>
    ));

    return [...Array(20)].map((_, i) => (
      <div key={i} className="wave-bar" style={{ animationDelay: `${i * 0.1}s`, height: `${Math.random() * 40 + 10}px` }}></div>
    ));
  };

  return (
    <div className="voice-arena-container">
      {/* Voice Bubble */}
      <div className="voice-bubble">
        <p>{message || "How can I help you today?"}</p>
        <div className="bubble-tail"></div>
      </div>

      {/* Main Visualizer */}
      <div className="visualizer-main">
        <div className="wave-container left">
          {renderBars()}
        </div>
        
        <div className="orb-centered">
          <div className="orb-glow"></div>
          <div className="orb-core">
            <div className="orb-bars">
               <div className="bar"></div>
               <div className="bar"></div>
               <div className="bar"></div>
               <div className="bar"></div>
            </div>
          </div>
        </div>

        <div className="wave-container right">
          {renderBars()}
        </div>
      </div>

      <div className="status-indicator">
        <span className={`status-dot ${statusText === 'Offline' ? 'offline' : ''}`}></span>
        <p style={{ color: statusText === 'Offline' ? '#ef4444' : 'var(--accent-purple)' }}>
          {statusText || "Listening... you can speak"}
        </p>
      </div>

      <style jsx>{`
        .voice-arena-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 0;
          position: relative;
          width: 100%;
        }

        .voice-bubble {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 12px 32px;
          border-radius: 20px;
          margin-bottom: 30px;
          position: relative;
          animation: float 3s ease-in-out infinite;
        }

        .voice-bubble p {
          color: #fff;
          font-size: 18px;
          font-weight: 500;
        }

        .bubble-tail {
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 10px;
          background: rgba(255, 255, 255, 0.03);
          clip-path: polygon(0 0, 100% 0, 50% 100%);
        }

        .visualizer-main {
          display: flex;
          align-items: center;
          gap: 40px;
          width: 100%;
          justify-content: center;
        }

        .wave-container {
          display: flex;
          align-items: center;
          gap: 4px;
          height: 60px;
          width: 200px;
          mask-image: linear-gradient(to right, transparent, black 50%, transparent);
        }

        .wave-container.right {
          transform: scaleX(-1);
        }

        .wave-bar {
          width: 3px;
          background: var(--accent-purple);
          border-radius: 10px;
          opacity: 0.3;
          animation: wavePulse 1.5s ease-in-out infinite;
        }

        .orb-centered {
          position: relative;
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orb-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, var(--accent-purple) 0%, transparent 70%);
          opacity: 0.4;
          filter: blur(20px);
          animation: orbGlow 4s infinite;
        }

        .orb-core {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #a855f7 0%, #d946ef 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 40px rgba(168, 85, 247, 0.5);
          position: relative;
          z-index: 2;
        }

        .orb-bars {
          display: flex;
          gap: 4px;
          align-items: center;
        }

        .bar {
          width: 4px;
          height: 20px;
          background: #fff;
          border-radius: 10px;
          animation: barPulse 1s infinite ease-in-out;
        }

        .bar:nth-child(2) { height: 32px; animation-delay: 0.1s; }
        .bar:nth-child(3) { height: 24px; animation-delay: 0.2s; }
        .bar:nth-child(4) { height: 16px; animation-delay: 0.3s; }

        .status-indicator {
          margin-top: 24px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: var(--accent-purple);
          border-radius: 50%;
          animation: blink 1s infinite;
        }

        .status-dot.offline {
          background: #ef4444;
          animation: none;
        }

        .status-indicator p {
          color: var(--accent-purple);
          font-size: 14px;
          font-weight: 600;
        }

        @keyframes wavePulse {
          0%, 100% { transform: scaleY(1); opacity: 0.3; }
          50% { transform: scaleY(1.5); opacity: 0.6; }
        }

        @keyframes orbGlow {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.2); opacity: 0.6; }
        }

        @keyframes barPulse {
          0%, 100% { height: 16px; }
          50% { height: 32px; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
