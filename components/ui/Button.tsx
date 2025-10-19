import React from 'react';
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' };
export function Button({ variant = 'primary', className = '', ...props }: Props) {
  const base = 'px-4 py-2 rounded-full text-sm font-medium transition shadow-sm';
  const styles = variant === 'secondary' ? 'bg-rose-100 text-rose-700 hover:bg-rose-200' : 'bg-rose-500 text-white hover:bg-rose-600';
  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
