import React, { useEffect, useRef, useCallback } from 'react';

const InteractiveParticles = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef();

  const handleMouseMove = useCallback((e) => {
    mouseRef.current.x = e.clientX;
    mouseRef.current.y = e.clientY;
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

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 60; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.5 + 0.8,
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: (Math.random() - 0.5) * 1.5,
          opacity: Math.random() * 0.4 + 0.15,
          color: Math.random() > 0.6 ? 'rgba(185, 28, 28, ' : Math.random() > 0.3 ? 'rgba(127, 29, 29, ' : 'rgba(220, 38, 38, ',
          trail: [],
        });
      }
    };

    initParticles();
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Store previous position for trail
        particle.trail.push({ x: particle.x, y: particle.y });
        if (particle.trail.length > 8) {
          particle.trail.shift();
        }

        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          const force = (120 - distance) / 120;
          particle.x -= dx * force * 0.008;
          particle.y -= dy * force * 0.008;
          particle.opacity = Math.min(0.7, particle.opacity + force * 0.015);
          particle.size = Math.min(4, particle.size + force * 0.5);
        } else {
          particle.opacity = Math.max(0.15, particle.opacity - 0.008);
          particle.size = Math.max(0.8, particle.size - 0.02);
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw trail
        particle.trail.forEach((point, index) => {
          const trailOpacity = (index / particle.trail.length) * particle.opacity * 0.3;
          const trailSize = particle.size * (index / particle.trail.length) * 0.5;
          ctx.beginPath();
          ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2);
          ctx.fillStyle = particle.color + trailOpacity + ')';
          ctx.fill();
        });

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + particle.opacity + ')';
        ctx.fill();

        // Draw connections
        particlesRef.current.forEach((otherParticle) => {
          const dx2 = particle.x - otherParticle.x;
          const dy2 = particle.y - otherParticle.y;
          const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (distance2 < 80) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(185, 28, 28, ${0.15 * (1 - distance2 / 80)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

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
      className="fixed inset-0 z-1 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default InteractiveParticles;