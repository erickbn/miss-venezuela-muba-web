import React from 'react';

export function Card({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <div className={`rounded-2xl border border-rose-100/60 bg-white/70 backdrop-blur shadow-xl ${className}`}>{children}</div>;
}

export function CardContent({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <div className={`p-5 md:p-8 ${className}`}>{children}</div>;
}
