"use client";

interface ReasonListProps {
  reasons: string[];
}

export default function ReasonList({ reasons }: ReasonListProps) {
  return (
    <ul className="reasonList">
      {reasons.map((reason, index) => (
        <li key={index} className="reasonItem">
          {reason}
        </li>
      ))}
    </ul>
  );
}
