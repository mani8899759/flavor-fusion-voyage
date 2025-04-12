
import React, { useEffect, useRef } from 'react';

interface SmokeParticle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  life: number;
}

const SmokeEffect: React.FC<{
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
  color?: string;
}> = ({ className = '', intensity = 'medium', color = '#888888' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<SmokeParticle[]>([]);
  
  // Set intensity levels
  const particleCount = intensity === 'light' ? 15 : intensity === 'medium' ? 25 : 40;
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Initialize particles
    const initParticles = () => {
      particles.current = [];
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: canvas.height + Math.random() * 10,
          size: Math.random() * 15 + 5,
          speed: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
          life: Math.random() * 0.5 + 0.5
        });
      }
    };
    
    initParticles();
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.current.forEach((particle, index) => {
        particle.y -= particle.speed;
        particle.x += Math.sin(particle.y / 30) * 0.5;
        particle.opacity -= 0.003 * particle.life;
        particle.size += 0.1;
        
        if (particle.opacity <= 0) {
          // Reset particle when it fades out
          particle.x = Math.random() * canvas.width;
          particle.y = canvas.height + Math.random() * 10;
          particle.size = Math.random() * 15 + 5;
          particle.opacity = Math.random() * 0.4 + 0.1;
        }
        
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        
        gradient.addColorStop(0, `${color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${color}00`);
        
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [intensity, color]);
  
  return (
    <canvas
      ref={canvasRef}
      className={`absolute pointer-events-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default SmokeEffect;
