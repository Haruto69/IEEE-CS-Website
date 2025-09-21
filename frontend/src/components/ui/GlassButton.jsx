import React from 'react';

const GlassButton = ({ children, variant = 'default', size = 'default', className = '', ...props }) => {
  const baseClasses = `glass-button transition-all duration-300 border-red-500/25 text-white font-medium`;

  const variantClasses = {
    default: 'hover:bg-red-600/15 hover:border-red-400/50',
    primary: 'bg-red-600/20 border-red-400/40 hover:bg-red-500/30 hover:border-red-300/60 glow-red',
    outline: 'border-red-500/40 hover:bg-red-600/10',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default GlassButton;
