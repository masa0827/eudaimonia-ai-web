
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

// サービスデータを作成
const services = [
  {
    id: 1,
    title: "AIによる高度な顧客分析",
    icon: "data-analysis",
    description: "AIの力でデータを読み解き、顧客理解を深めます。",
    benefits: [
      "購買行動パターンの正確な予測",
      "セグメント別の詳細な顧客分析",
      "隠れたマーケットトレンドの発見"
    ]
  },
  {
    id: 2,
    title: "パーソナライズされたコンテンツ",
    icon: "content-generation",
    description: "一人ひとりに最適化されたコンテンツで顧客体験を向上させます。",
    benefits: [
      "ターゲット別の最適メッセージ生成",
      "コンテンツ制作時間の大幅短縮",
      "A/Bテスト効率の劇的向上"
    ]
  },
  {
    id: 3,
    title: "戦略立案の効率化と高度化",
    icon: "strategy",
    description: "膨大なデータから最適な戦略を導き出します。",
    benefits: [
      "競合分析の自動化と深掘り",
      "市場動向に基づく迅速な戦略調整",
      "ROI予測精度の向上"
    ]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">AIがもたらす3つのマーケティング革新</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            生成AIの力を活用し、マーケティングの課題を解決。
            データ分析から戦略立案まで、あらゆるプロセスを革新します。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="flex">
              <Card className="isometric-card border-2 border-neutral-100 shadow-lg w-full hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 isometric-icon">
                    {/* アイソメトリックアイコン */}
                    {service.icon === "data-analysis" && (
                      <div className="w-10 h-10 relative">
                        <div className="absolute inset-0 bg-primary/20 rounded transform rotate-45"></div>
                        <div className="absolute inset-1 bg-secondary/30 rounded-sm transform rotate-12"></div>
                        <div className="absolute bottom-1 right-1 w-4 h-4 bg-primary rounded-full"></div>
                      </div>
                    )}
                    {service.icon === "content-generation" && (
                      <div className="w-10 h-10 relative">
                        <div className="absolute inset-0 bg-secondary/20 rounded transform rotate-12"></div>
                        <div className="absolute top-1 left-1 w-4 h-4 bg-primary rounded-sm"></div>
                        <div className="absolute bottom-1 right-1 w-6 h-3 bg-primary/40 rounded-full"></div>
                      </div>
                    )}
                    {service.icon === "strategy" && (
                      <div className="w-10 h-10 relative">
                        <div className="absolute inset-0 bg-primary/30 rounded"></div>
                        <div className="absolute inset-2 bg-secondary/20 rounded-sm transform rotate-45"></div>
                        <div className="absolute top-2 left-2 w-3 h-3 bg-white/80 rounded-full"></div>
                      </div>
                    )}
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                  <CardDescription className="text-neutral-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 mt-1 w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></div>
                        <span className="text-neutral-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="inline-flex items-center text-primary hover:text-primary-100 transition-colors text-sm font-medium">
                    詳しく見る
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
