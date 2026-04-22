"use client";

import { useState } from 'react';
import ReasonList from './ReasonList';

export interface SuggestionData {
  id: string;
  type: string;
  title: string;
  option: string;
  reasons: string[];
  live: {
    eta: number;
    price: number;
    delay: number;
    reason?: string;
    source: string;
  };
}

interface SuggestionCardProps {
  data: SuggestionData;
  onConfirm: () => void;
  onDismiss: () => void;
}

export default function SuggestionCard({ data, onConfirm, onDismiss }: SuggestionCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [option, setOption] = useState(data.option);

  return (
    <div className="suggestionCard">
      <div className="cardTitle">{data.type} Suggestion</div>
      
      <div className="mainOption">
        {isEditing ? (
          <input 
            type="text" 
            value={option} 
            onChange={(e) => setOption(e.target.value)}
            className="inputEdit"
            autoFocus
          />
        ) : (
          option
        )}
      </div>

      <div className={`liveBadge ${data.live.source === 'live' ? 'pulse' : ''}`}>
        {data.live.source === 'live' ? 'LIVE DATA' : 'ESTIMATED'}
      </div>

      <ReasonList reasons={data.reasons} />

      <div className="cardDetails">
        <div className="detailItem">
          <span className="detailLabel">ETA</span>
          <span className="detailValue">{data.live.eta} mins</span>
        </div>
        <div className="detailItem">
          <span className="detailLabel">Price</span>
          <span className="detailValue">${data.live.price.toFixed(2)}</span>
        </div>
      </div>

      <div className="actions">
        <button className="btn btnConfirm" onClick={onConfirm}>Confirm</button>
        <button className="btn btnDismiss" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Save" : "Edit"}
        </button>
        <button className="btn btnDismiss" onClick={onDismiss}>Dismiss</button>
      </div>

      <style jsx>{`
        .inputEdit {
          background: #333;
          border: 1px solid #444;
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
          width: 100%;
          border-radius: 8px;
          padding: 4px 8px;
        }
      `}</style>
    </div>
  );
}
