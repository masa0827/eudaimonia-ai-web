
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-neutral">
      <div className="container mx-auto px-4 md:px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* イラスト要素 */}
          <div className="order-2 lg:order-1 relative mx-auto w-full max-w-md h-96">
            {/* チームのビジュアル要素 */}
            <div className="absolute left-10 bottom-0 w-16 h-48 bg-primary/20"></div>
            <div className="absolute left-24 bottom-0 w-20 h-64 bg-secondary/20"></div>
            <div className="absolute left-40 bottom-0 w-24 h-32 bg-primary/10"></div>
            
            {/* チームシルエット */}
            <div className="absolute bottom-0 left-20 w-12 h-24 bg-primary/30 rounded-t-full"></div>
            <div className="absolute bottom-0 left-32 w-10 h-20 bg-secondary/40 rounded-t-full"></div>
            <div className="absolute bottom-0 left-42 w-12 h-28 bg-primary/40 rounded-t-full"></div>
            
            {/* 接続線 - コラボレーションを表現 */}
            <div className="absolute bottom-20 left-26 w-16 h-1 bg-secondary/30"></div>
            <div className="absolute bottom-24 left-36 w-10 h-1 bg-secondary/30 transform rotate-45"></div>
            
            {/* 抽象的要素 */}
            <div className="absolute top-20 left-24 w-20 h-20 rounded-full bg-secondary/10 animate-float"></div>
            <div className="absolute top-10 left-48 w-16 h-16 rounded-md bg-primary/20 animate-float"></div>
            <div className="absolute top-40 left-10 w-12 h-12 rounded-md bg-secondary/30 animate-float"></div>
          </div>
          
          {/* コンテンツ */}
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
            
            <div className="mt-6">
              <div className="bg-white p-4 rounded-lg border border-neutral-200 mb-4">
                <h3 className="font-bold text-primary mb-2">会社情報</h3>
                <ul className="space-y-2">
                  <li><span className="font-medium">社名：</span>株式会社ユーダイモニア</li>
                  <li><span className="font-medium">所在地：</span>東京都渋谷区道玄坂1-10-8 渋谷道玄坂東急ビル2F-C</li>
                  <li><span className="font-medium">代表取締役：</span>大塚 賢弘</li>
                  <li><span className="font-medium">メール：</span>info@eudaimonia.co.jp</li>
                </ul>
              </div>
            </div>
            
            <Button className="bg-primary hover:bg-primary-100 mt-4 flex items-center">
              チームについて詳しく
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
