'use client';

import { useEffect, useRef } from 'react';

interface Shape {
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  type: 'square' | 'triangle' | 'circle' | 'diamond' | 'ring';
  orbitRadius: number;
  orbitAngle: number;
  orbitSpeed: number;
  driftX: number;
  driftY: number;
  color: string;
  strokeOnly: boolean;
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let shapes: Shape[] = [];
    let time = 0;

    const goldColors = [
      'rgba(212, 168, 83,',
      'rgba(240, 200, 80,',
      'rgba(255, 255, 255,',
      'rgba(184, 150, 46,',
      'rgba(240, 214, 138,',
    ];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }

    function initShapes() {
      shapes = [];
      const count = Math.floor((canvas!.width * canvas!.height) / 25000);
      const cx = canvas!.width / 2;
      const cy = canvas!.height / 2;

      for (let i = 0; i < count; i++) {
        const types: Shape['type'][] = ['square', 'triangle', 'circle', 'diamond', 'ring'];
        const orbitRadius = 50 + Math.random() * Math.max(cx, cy) * 0.9;
        shapes.push({
          x: 0,
          y: 0,
          size: 3 + Math.random() * 18,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          opacity: 0.05 + Math.random() * 0.25,
          type: types[Math.floor(Math.random() * types.length)],
          orbitRadius,
          orbitAngle: Math.random() * Math.PI * 2,
          orbitSpeed: (0.0003 + Math.random() * 0.001) * (Math.random() > 0.5 ? 1 : -1),
          driftX: (Math.random() - 0.5) * 0.2,
          driftY: (Math.random() - 0.5) * 0.2,
          color: goldColors[Math.floor(Math.random() * goldColors.length)],
          strokeOnly: Math.random() > 0.4,
        });
      }
    }

    function drawShape(shape: Shape) {
      ctx!.save();
      ctx!.translate(shape.x, shape.y);
      ctx!.rotate(shape.rotation);

      const colorStr = `${shape.color} ${shape.opacity})`;

      if (shape.strokeOnly) {
        ctx!.strokeStyle = colorStr;
        ctx!.lineWidth = 0.8;
      } else {
        ctx!.fillStyle = colorStr;
      }

      const s = shape.size;

      switch (shape.type) {
        case 'square':
          if (shape.strokeOnly) {
            ctx!.strokeRect(-s / 2, -s / 2, s, s);
          } else {
            ctx!.fillRect(-s / 2, -s / 2, s, s);
          }
          break;
        case 'triangle':
          ctx!.beginPath();
          ctx!.moveTo(0, -s / 2);
          ctx!.lineTo(s / 2, s / 2);
          ctx!.lineTo(-s / 2, s / 2);
          ctx!.closePath();
          shape.strokeOnly ? ctx!.stroke() : ctx!.fill();
          break;
        case 'circle':
          ctx!.beginPath();
          ctx!.arc(0, 0, s / 2, 0, Math.PI * 2);
          shape.strokeOnly ? ctx!.stroke() : ctx!.fill();
          break;
        case 'diamond':
          ctx!.beginPath();
          ctx!.moveTo(0, -s / 2);
          ctx!.lineTo(s / 2, 0);
          ctx!.lineTo(0, s / 2);
          ctx!.lineTo(-s / 2, 0);
          ctx!.closePath();
          shape.strokeOnly ? ctx!.stroke() : ctx!.fill();
          break;
        case 'ring':
          ctx!.beginPath();
          ctx!.arc(0, 0, s / 2, 0, Math.PI * 2);
          ctx!.strokeStyle = colorStr;
          ctx!.lineWidth = 1;
          ctx!.stroke();
          ctx!.beginPath();
          ctx!.arc(0, 0, s / 4, 0, Math.PI * 2);
          ctx!.stroke();
          break;
      }
      ctx!.restore();
    }

    function drawVortex() {
      const cx = canvas!.width / 2;
      const cy = canvas!.height / 2;
      const maxR = Math.max(cx, cy) * 1.2;

      for (let i = 0; i < 12; i++) {
        const r = (i + 1) * (maxR / 12);
        const swirlOffset = time * (0.0005 + i * 0.0001) * (i % 2 === 0 ? 1 : -1);
        const opacity = 0.02 + (1 - i / 12) * 0.04;

        ctx!.save();
        ctx!.translate(cx, cy);
        ctx!.rotate(swirlOffset);
        ctx!.beginPath();
        ctx!.setLineDash([4 + i * 2, 8 + i * 3]);
        ctx!.ellipse(0, 0, r, r * 0.7, 0.2 + i * 0.05, 0, Math.PI * 2);
        ctx!.strokeStyle = i % 3 === 0
          ? `rgba(212, 168, 83, ${opacity})`
          : `rgba(255, 255, 255, ${opacity * 0.7})`;
        ctx!.lineWidth = 0.8;
        ctx!.stroke();
        ctx!.setLineDash([]);
        ctx!.restore();
      }

      const gradient = ctx!.createRadialGradient(cx, cy, 0, cx, cy, maxR * 0.4);
      gradient.addColorStop(0, 'rgba(212, 168, 83, 0.06)');
      gradient.addColorStop(0.3, 'rgba(212, 168, 83, 0.02)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx!.fillStyle = gradient;
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      time++;
      const cx = canvas!.width / 2;
      const cy = canvas!.height / 2;

      drawVortex();

      shapes.forEach((shape) => {
        shape.orbitAngle += shape.orbitSpeed;
        shape.rotation += shape.rotationSpeed;
        shape.x = cx + Math.cos(shape.orbitAngle) * shape.orbitRadius + shape.driftX * Math.sin(time * 0.005);
        shape.y = cy + Math.sin(shape.orbitAngle) * shape.orbitRadius * 0.7 + shape.driftY * Math.cos(time * 0.005);

        const pulseOpacity = shape.opacity * (0.7 + 0.3 * Math.sin(time * 0.003 + shape.orbitAngle));
        const original = shape.opacity;
        shape.opacity = pulseOpacity;
        drawShape(shape);
        shape.opacity = original;
      });

      for (let i = 0; i < shapes.length; i++) {
        for (let j = i + 1; j < shapes.length; j++) {
          const dx = shapes[i].x - shapes[j].x;
          const dy = shapes[i].y - shapes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.06;
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(212, 168, 83, ${alpha})`;
            ctx!.lineWidth = 0.5;
            ctx!.moveTo(shapes[i].x, shapes[i].y);
            ctx!.lineTo(shapes[j].x, shapes[j].y);
            ctx!.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    resize();
    initShapes();
    animate();

    const handleResize = () => { resize(); initShapes(); };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-70"
    />
  );
}
