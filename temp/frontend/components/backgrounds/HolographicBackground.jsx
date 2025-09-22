import React, { useEffect, useRef, useCallback } from 'react';

const HolographicBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef();

  const handleMouseMove = useCallback((e) => {
    mouseRef.current.x = e.clientX / window.innerWidth;
    mouseRef.current.y = e.clientY / window.innerHeight;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const animate = () => {
      time += 0.005;
      
      // Clear canvas with deep black
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create holographic grid effect
      const gridSize = 60;
      const mouseInfluence = 0.3;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const distanceToMouse = Math.sqrt(
            Math.pow((x / canvas.width) - mouseRef.current.x, 2) + 
            Math.pow((y / canvas.height) - mouseRef.current.y, 2)
          );
          
          const wave = Math.sin(time + distanceToMouse * 5) * 0.5 + 0.5;
          const intensity = Math.max(0, 1 - distanceToMouse * 2) * mouseInfluence + 0.1;
          
          // Holographic red lines
          ctx.strokeStyle = `rgba(${139 + wave * 80}, ${0 + wave * 40}, ${0 + wave * 20}, ${intensity * 0.6})`;
          ctx.lineWidth = 1 + intensity * 2;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + gridSize, y);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + gridSize);
          ctx.stroke();
          
          // Holographic nodes
          if (intensity > 0.3) {
            ctx.fillStyle = `rgba(${220 + wave * 35}, ${38 + wave * 20}, ${38 + wave * 20}, ${intensity * 0.8})`;
            ctx.beginPath();
            ctx.arc(x, y, 2 + intensity * 3, 0, Math.PI * 2);
            ctx.fill();
            
            // Glow effect
            ctx.shadowColor = `rgba(220, 38, 38, ${intensity * 0.5})`;
            ctx.shadowBlur = 10 + intensity * 20;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      }

      // Animated holographic waves
      for (let i = 0; i < 3; i++) {
        const waveY = (canvas.height / 4) * (i + 1) + Math.sin(time * 2 + i) * 50;
        const gradient = ctx.createLinearGradient(0, waveY - 50, 0, waveY + 50);
        gradient.addColorStop(0, 'rgba(139, 0, 0, 0)');
        gradient.addColorStop(0.5, `rgba(220, 38, 38, ${0.1 + mouseRef.current.x * 0.2})`);
        gradient.addColorStop(1, 'rgba(139, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(0, waveY);
        
        for (let x = 0; x <= canvas.width; x += 10) {
          const y = waveY + Math.sin((x * 0.01) + time * 3 + i) * 30;
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
      }

      // Holographic scanlines
      for (let y = 0; y < canvas.height; y += 4) {
        const opacity = (Math.sin(time * 10 + y * 0.1) * 0.5 + 0.5) * 0.03;
        ctx.fillStyle = `rgba(220, 38, 38, ${opacity})`;
        ctx.fillRect(0, y, canvas.width, 1);
      }

      requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default HolographicBackground;