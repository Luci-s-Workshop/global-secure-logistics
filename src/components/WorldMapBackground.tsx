import React, { useEffect, useRef } from 'react';

const WorldMapBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Map data (simplified world map points)
    const mapPoints: [number, number][] = [];
    
    // Generate random points to simulate a world map
    for (let i = 0; i < 200; i++) {
      mapPoints.push([
        Math.random() * canvas.width,
        Math.random() * canvas.height * 0.6 + canvas.height * 0.2
      ]);
    }

    // Animation variables
    let scrollOffset = 0;
    let animationFrame: number;

    const draw = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Get scroll position
      scrollOffset = window.scrollY * 0.2;

      // Draw map points
      ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
      mapPoints.forEach(([x, y]) => {
        const adjustedX = (x + scrollOffset) % canvas.width;
        ctx.beginPath();
        ctx.arc(adjustedX, y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connecting lines
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < mapPoints.length; i++) {
        for (let j = i + 1; j < mapPoints.length; j++) {
          const [x1, y1] = mapPoints[i];
          const [x2, y2] = mapPoints[j];
          const adjustedX1 = (x1 + scrollOffset) % canvas.width;
          const adjustedX2 = (x2 + scrollOffset) % canvas.width;
          
          const distance = Math.sqrt(
            Math.pow(adjustedX2 - adjustedX1, 2) + Math.pow(y2 - y1, 2)
          );
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(adjustedX1, y1);
            ctx.lineTo(adjustedX2, y2);
            ctx.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  );
};

export default WorldMapBackground;
