
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsAnimated(true);
    
    // Create isometric grid animation background
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const heroElement = heroRef.current;
    
    if (heroElement && ctx) {
      let animationFrameId: number;
      
      const resizeCanvas = () => {
        canvas.width = heroElement.offsetWidth;
        canvas.height = heroElement.offsetHeight;
      };
      
      const drawGrid = () => {
        if (!ctx) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Set grid properties
        const cellSize = 40;
        const lineWidth = 0.3;
        const lineColor = 'rgba(255, 255, 255, 0.1)';
        
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        
        const time = Date.now() * 0.0005;
        const offset = cellSize * Math.sin(time) * 0.3;
        
        // Draw horizontal lines
        for (let y = 0; y < canvas.height + cellSize; y += cellSize) {
          ctx.beginPath();
          ctx.moveTo(0, y + offset);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
        
        // Draw vertical lines
        for (let x = 0; x < canvas.width + cellSize; x += cellSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x + offset, canvas.height);
          ctx.stroke();
        }
        
        animationFrameId = requestAnimationFrame(drawGrid);
      };
      
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.opacity = '0.4';
      canvas.style.zIndex = '1';
      canvas.style.pointerEvents = 'none';
      
      heroElement.appendChild(canvas);
      
      resizeCanvas();
      drawGrid();
      
      window.addEventListener('resize', resizeCanvas);
      
      return () => {
        window.removeEventListener('resize', resizeCanvas);
        cancelAnimationFrame(animationFrameId);
        if (heroElement.contains(canvas)) {
          heroElement.removeChild(canvas);
        }
      };
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[88vh] bg-primary overflow-hidden pt-24"
      id="hero"
    >
      <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16 md:py-24 relative z-10">
          {/* Hero Content */}
          <div className="text-white space-y-6">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isAnimated ? "typed-text animate-typing" : ""}`}>
              挑戦を、もっと自由に。
            </h1>
            <p className="text-lg md:text-xl text-secondary font-light mb-4">
              With AI, we continue to open doors of possibility.
            </p>
            <p className="text-base md:text-lg max-w-xl">
              生成AIの革新的な力で、マーケティング戦略を次のレベルへ。
              データに基づく洞察と創造性を融合させ、
              あなたのビジネスの成長を加速させます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-secondary text-neutral-800 hover:bg-secondary-100">
                無料相談を予約する
              </Button>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                サービスを見る
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-lg animate-float">
              {/* Isometric cubes illustration */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-secondary/20 rounded-2xl transform rotate-45 -translate-y-10 translate-x-10"></div>
              <div className="absolute top-20 right-10 w-28 h-28 bg-primary-100/50 rounded-xl transform rotate-12"></div>
              <div className="absolute bottom-10 left-20 w-36 h-36 bg-secondary/30 rounded-full"></div>
              
              {/* AI Brain icon - stylized with cubes */}
              <div className="relative z-10 w-64 h-64 mx-auto">
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-secondary rounded-xl transform rotate-45 animate-pulse"></div>
                <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-white/50 rounded-lg transform -rotate-12"></div>
                {/* Connection lines */}
                <div className="absolute top-0 left-1/2 w-1 h-1/4 bg-white/30"></div>
                <div className="absolute bottom-0 left-1/2 w-1 h-1/4 bg-white/30"></div>
                <div className="absolute left-0 top-1/2 w-1/4 h-1 bg-white/30"></div>
                <div className="absolute right-0 top-1/2 w-1/4 h-1 bg-white/30"></div>
              </div>
              
              {/* Floating data elements */}
              <div className="absolute top-5 right-0 w-16 h-8 bg-white/10 rounded-md transform -rotate-12 animate-float"></div>
              <div className="absolute bottom-10 right-10 w-20 h-6 bg-white/10 rounded-md transform rotate-6 animate-float"></div>
              <div className="absolute top-40 left-0 w-12 h-12 bg-white/10 rounded-full transform animate-float"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Diagonal division */}
      <div className="section-divider purple-to-white"></div>
    </section>
  );
};

export default HeroSection;
