
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsAnimated(true);

    // アイソメトリックグリッドアニメーション背景を作成
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

        // グリッドプロパティを設定
        const cellSize = 40;
        const lineWidth = 0.3;
        const lineColor = 'rgba(255, 255, 255, 0.1)';
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        const time = Date.now() * 0.0005;
        const offset = cellSize * Math.sin(time) * 0.3;

        // 水平線を描画
        for (let y = 0; y < canvas.height + cellSize; y += cellSize) {
          ctx.beginPath();
          ctx.moveTo(0, y + offset);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }

        // 垂直線を描画
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
    <section ref={heroRef} className="relative min-h-[90vh] bg-primary overflow-hidden pt-24" id="hero">
      <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16 md:py-24 relative z-10">
          {/* ヒーローコンテンツ */}
          <div className="text-white space-y-6">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isAnimated ? "typed-text animate-typing" : ""}`}>
              生成AI × Web広告で、中小企業の"挑戦"をもっと身近に
            </h1>
            <p className="text-lg md:text-xl text-secondary font-light mb-4">
              戦略立案から広告運用・内製化・研修まで――
            </p>
            <p className="text-base md:text-lg max-w-xl">
              AIとノーコードを武器に、御社のデジタルマーケティングを一気通貫で支援します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-secondary text-neutral-800 hover:bg-secondary-100 flex items-center">
                無料相談を予約する
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                サービスを見る
              </Button>
            </div>
          </div>
          
          {/* ヒーローイメージ */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-lg animate-float">
              {/* アイソメトリックキューブのイラスト */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-secondary/20 rounded-2xl transform rotate-45 -translate-y-10 translate-x-10"></div>
              <div className="absolute top-20 right-10 w-28 h-28 bg-primary-100/50 rounded-xl transform rotate-12"></div>
              <div className="absolute bottom-10 left-20 w-36 h-36 bg-secondary/30 rounded-full"></div>
              
              {/* AIブレーンアイコン - キューブでスタイリング */}
              <div className="relative z-10 w-64 h-64 mx-auto">
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-secondary rounded-xl transform rotate-45 animate-pulse"></div>
                <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-white/50 rounded-lg transform -rotate-12"></div>
                {/* 接続線 */}
                <div className="absolute top-0 left-1/2 w-1 h-1/4 bg-white/30"></div>
                <div className="absolute bottom-0 left-1/2 w-1 h-1/4 bg-white/30"></div>
                <div className="absolute left-0 top-1/2 w-1/4 h-1 bg-white/30"></div>
                <div className="absolute right-0 top-1/2 w-1/4 h-1 bg-white/30"></div>
              </div>
              
              {/* 浮遊データ要素 */}
              <div className="absolute top-5 right-0 w-16 h-8 bg-white/10 rounded-md transform -rotate-12 animate-float"></div>
              <div className="absolute bottom-10 right-10 w-20 h-6 bg-white/10 rounded-md transform rotate-6 animate-float"></div>
              <div className="absolute top-40 left-0 w-12 h-12 bg-white/10 rounded-full transform animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
