import React, { useEffect, useRef } from 'react';

const FloatingShapes = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating shapes
    const shapes = [];
    for (let i = 0; i < 12; i++) {
      const shape = document.createElement('div');
      const size = Math.random() * 60 + 20;
      const isCircle = Math.random() > 0.5;
      
      shape.className = `absolute ${isCircle ? 'rounded-full' : 'rounded-xl rotate-45'} 
        bg-gradient-to-r from-red-600/10 to-red-800/5 backdrop-blur-sm
        border border-red-500/20 floating-shape`;
      
      shape.style.width = size + 'px';
      shape.style.height = size + 'px';
      shape.style.left = Math.random() * window.innerWidth + 'px';
      shape.style.top = Math.random() * window.innerHeight + 'px';
      shape.style.animationDelay = Math.random() * 20 + 's';
      shape.style.animationDuration = (Math.random() * 20 + 15) + 's';
      
      container.appendChild(shape);
      shapes.push(shape);
    }

    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% {
          transform: translateY(0px) translateX(0px) rotate(0deg);
        }
        25% {
          transform: translateY(-20px) translateX(10px) rotate(90deg);
        }
        50% {
          transform: translateY(0px) translateX(-10px) rotate(180deg);
        }
        75% {
          transform: translateY(20px) translateX(5px) rotate(270deg);
        }
      }
      
      .floating-shape {
        animation: float linear infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      shapes.forEach(shape => shape.remove());
      style.remove();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-1 pointer-events-none" />;
};

export default FloatingShapes;