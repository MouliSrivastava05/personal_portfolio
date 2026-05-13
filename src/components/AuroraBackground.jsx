import { useEffect, useRef } from 'react';

const AuroraBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const drawAurora = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Base dark background
      ctx.fillStyle = '#050510';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Aurora layers
      const layers = [
        { color1: 'rgba(59, 130, 246, 0.12)', color2: 'rgba(59, 130, 246, 0)', offsetX: 0.3, offsetY: 0.2, speed: 0.0008, scale: 1.2 },
        { color1: 'rgba(139, 92, 246, 0.1)', color2: 'rgba(139, 92, 246, 0)', offsetX: 0.6, offsetY: 0.4, speed: 0.0005, scale: 1.5 },
        { color1: 'rgba(6, 182, 212, 0.08)', color2: 'rgba(6, 182, 212, 0)', offsetX: 0.1, offsetY: 0.6, speed: 0.0012, scale: 0.9 },
        { color1: 'rgba(99, 102, 241, 0.07)', color2: 'rgba(99, 102, 241, 0)', offsetX: 0.8, offsetY: 0.3, speed: 0.0007, scale: 1.8 },
      ];

      layers.forEach((layer) => {
        const x = canvas.width * (layer.offsetX + Math.sin(time * layer.speed * 1000 + layer.offsetX * 10) * 0.15);
        const y = canvas.height * (layer.offsetY + Math.cos(time * layer.speed * 800 + layer.offsetY * 8) * 0.12);
        const radius = Math.max(canvas.width, canvas.height) * layer.scale * 0.7;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, layer.color1);
        gradient.addColorStop(1, layer.color2);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Grid overlay
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      time++;
      animationId = requestAnimationFrame(drawAurora);
    };

    drawAurora();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
};

export default AuroraBackground;
