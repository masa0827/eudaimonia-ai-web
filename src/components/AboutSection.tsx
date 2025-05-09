
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-24 bg-neutral">
      <div className="section-divider white-to-gray"></div>
      
      <div className="container mx-auto px-4 md:px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Isometric Team Illustration */}
          <div className="order-2 lg:order-1 relative mx-auto w-full max-w-md h-96">
            {/* Buildings */}
            <div className="absolute left-10 bottom-0 w-16 h-48 bg-primary/20 transform perspective-800 rotateX(10deg) rotateY(-30deg)"></div>
            <div className="absolute left-24 bottom-0 w-20 h-64 bg-secondary/20 transform perspective-800 rotateX(10deg) rotateY(-30deg)"></div>
            <div className="absolute left-40 bottom-0 w-24 h-32 bg-primary/10 transform perspective-800 rotateX(10deg) rotateY(-30deg)"></div>
            
            {/* Team silhouettes */}
            <div className="absolute bottom-0 left-20 w-12 h-24 bg-primary/30 rounded-t-full"></div>
            <div className="absolute bottom-0 left-32 w-10 h-20 bg-secondary/40 rounded-t-full"></div>
            <div className="absolute bottom-0 left-42 w-12 h-28 bg-primary/40 rounded-t-full"></div>
            
            {/* Connection lines - suggesting collaboration */}
            <div className="absolute bottom-20 left-26 w-16 h-1 bg-secondary/30"></div>
            <div className="absolute bottom-24 left-36 w-10 h-1 bg-secondary/30 transform rotate-45"></div>
            
            {/* Abstract elements */}
            <div className="absolute top-20 left-24 w-20 h-20 rounded-full bg-secondary/10 animate-float"></div>
            <div className="absolute top-10 left-48 w-16 h-16 rounded-md bg-primary/20 transform rotate-12 animate-float"></div>
            <div className="absolute top-40 left-10 w-12 h-12 rounded-md bg-secondary/30 transform -rotate-12 animate-float"></div>
          </div>
          
          {/* About Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <span className="text-secondary font-medium">私たちについて</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-primary">
                多様な経験から生まれた<br />挑戦への情熱
              </h2>
            </div>
            
            <p className="text-neutral-800">
              ユーダイモニアは、多様なバックグラウンドを持つ創業メンバーによって設立されました。看護師、カフェマネージャー、企業経営といった異なる分野での経験を持つ私たちだからこそ、革新的な視点でAIの可能性を引き出すことができます。
            </p>
            
            <p className="text-neutral-800">
              テクノロジーの力で人々の「挑戦」を支援したいという想いのもと、私たちは生成AIを活用したマーケティングソリューションを開発。データ解析の正確さと人間の創造性を融合させ、クライアントビジネスの成長を加速させています。
            </p>
            
            <Button className="bg-primary hover:bg-primary-100 mt-4">
              チームについて詳しく
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
