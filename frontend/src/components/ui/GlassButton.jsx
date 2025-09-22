import React from 'react';

const GlassButton = ({
  children,
  variant = 'default',
  size = 'default',
  translucent = false, // new prop
  className = '',
  ...props
}) => {
  const baseClasses = `glass-button transition-all duration-300 text-white font-medium rounded-xl`;

  const variantClasses = {
    default: 'hover:bg-red-600/15 hover:border-red-400/50 border-red-500/25',
    primary: 'bg-red-600/20 border-red-400/40 hover:bg-red-500/30 hover:border-red-300/60 glow-red',
    outline: 'border-red-500/40 hover:bg-red-600/10',
  };

  const sizeClasses = {
    default: 'px-4 py-2 text-base',
    lg: 'px-10 py-5 text-xl',
    sm: 'px-3 py-1 text-sm',
  };

  // Translucent override: more opaque and backdrop blur
  const translucentClasses = translucent
    ? 'bg-red-600/80 border-red-500/60 backdrop-blur-sm hover:bg-red-600/90'
    : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${translucentClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default GlassButton;
