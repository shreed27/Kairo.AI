"use client";

import { AudioLines, Sparkles } from 'lucide-react';

interface VoiceArenaProps {
  statusText: string;
  isListening: boolean;
  isProcessing: boolean;
  message: string;
}

export default function VoiceArena({ statusText, isListening, isProcessing, message }: VoiceArenaProps) {
  return (
    <div className="voice-arena">
      <div style={{ marginBottom: '24px', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
          {statusText}
        </p>
        <h3 style={{ fontSize: '24px', fontWeight: '500', maxWidth: '600px', margin: '0 auto', opacity: isListening || isProcessing ? 1 : 0.5 }}>
          {message}
        </h3>
      </div>
      
      <div className={`orb ${isProcessing ? 'processing' : ''}`} style={{ 
        transform: isListening ? 'scale(1.2)' : 'scale(1)',
        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        cursor: 'pointer'
      }}>
        {isListening ? (
          <AudioLines size={32} color="white" />
        ) : isProcessing ? (
          <Sparkles size={32} color="white" />
        ) : (
          <div className="logo-inner"></div>
        )}
      </div>

      {isListening && (
        <div style={{ marginTop: '24px', display: 'flex', gap: '4px' }}>
          {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} className="sound-bar" style={{ 
              width: '4px', 
              height: `${Math.random() * 30 + 10}px`, 
              background: 'var(--accent-purple)', 
              borderRadius: '2px',
              animation: 'pulse 0.5s infinite alternate'
            }}></div>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes pulse {
          from { transform: scaleY(0.5); opacity: 0.5; }
          to { transform: scaleY(1.5); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
