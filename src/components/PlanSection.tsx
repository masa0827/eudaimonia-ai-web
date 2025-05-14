
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "広告運用代行",
    price: "広告費の20%",
    setupFee: "初期設定費 3万円",
    features: [
      "Google/Meta広告の運用代行",
      "AIを活用したクリエイティブ制作",
      "週次〜月次のレポーティング",
      "広告効果の継続的な改善"
    ]
  },
  {
    name: "内製化支援",
    price: "10万円/月〜",
    setupFee: "内容に応じて設定",
    features: [
      "広告運用のノウハウ提供",
      "社内担当者へのトレーニング",
      "チャット＆オンラインでの伴走支援",
      "段階的な内製化移行プラン"
    ]
  },
  {
    name: "生成AI研修",
    price: "1回 3万円〜",
    setupFee: "人数・内容により変動",
    features: [
      "ChatGPT実践活用法",
      "Stable Diffusion基礎講座",
      "業務効率化のためのAI活用法",
      "ハンズオン形式の実践トレーニング"
    ]
  },
  {
    name: "LP・バナー制作",
    price: "1LP 4万円〜",
    setupFee: "従来比30〜40%削減",
    features: [
      "AI活用による高速制作",
      "SEO対策済みのコンテンツ",
      "レスポンシブデザイン対応",
      "A/Bテスト用バリエーション作成"
    ]
  }
];

const PlanSection = () => {
  return (
    <section id="plans" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            料金プラン
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            ビジネスの規模や目的に合わせて、最適なプランをご提案します
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="border border-neutral-200 hover:border-primary/30 transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-neutral-50 pb-4">
                <CardTitle className="text-xl font-bold text-primary">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <p className="text-2xl font-bold text-primary">{plan.price}</p>
                  <p className="text-sm text-neutral-600">{plan.setupFee}</p>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="text-primary h-5 w-5 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-neutral-600">
            ※ 上記は基本料金です。詳細なお見積りは、お客様の状況をヒアリングした上でご提案いたします。
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
