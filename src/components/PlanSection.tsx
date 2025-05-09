
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "スタンダード",
    price: "98,000円",
    description: "AIマーケティングの基本機能を搭載した、スタートアップや小規模ビジネスに最適なプラン",
    features: [
      "AIデータ分析（基本レポート）",
      "基本的なコンテンツ最適化",
      "月次戦略レポート",
      "メールサポート",
      "基本的なA/Bテスト"
    ],
    recommended: false
  },
  {
    name: "ビジネス",
    price: "298,000円",
    description: "成長中の企業向けの包括的なAIマーケティングソリューション",
    features: [
      "AIデータ分析（詳細レポート）",
      "高度なコンテンツ最適化と自動生成",
      "週次戦略レポートとコンサルティング",
      "優先メール・電話サポート",
      "高度なA/Bテストと自動最適化",
      "競合分析ダッシュボード",
      "SNSマーケティングAI支援"
    ],
    recommended: true
  },
  {
    name: "エンタープライズ",
    price: "要問い合わせ",
    description: "大規模企業向けの完全カスタマイズ可能なエンタープライズソリューション",
    features: [
      "AIデータ分析（企業専用カスタムモデル）",
      "完全カスタマイズされたコンテンツ戦略",
      "専任コンサルタントによる戦略立案",
      "24時間対応デディケイテッドサポート",
      "マーケティング全体の自動最適化",
      "包括的な市場・競合分析",
      "マルチチャネルAIマーケティング統合",
      "定期的な対面ミーティング"
    ],
    recommended: false
  }
];

const PlanSection = () => {
  return (
    <section id="plans" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            あなたのビジネスに最適なプラン
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            ビジネスの規模や目標に合わせて選べる、3つのプランをご用意しています。
            いつでもアップグレードやダウングレードが可能です。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`flex ${plan.recommended ? 'md:-mt-4 md:mb-4' : ''}`}>
              <Card className={`w-full border-2 ${plan.recommended ? 'border-secondary shadow-lg' : 'border-neutral-100'} isometric-card overflow-hidden`}>
                {plan.recommended && (
                  <div className="bg-secondary text-neutral-800 py-1 px-4 text-center font-medium">
                    おすすめプラン
                  </div>
                )}
                <CardHeader className={`${plan.recommended ? 'bg-secondary/10' : ''}`}>
                  <CardTitle className="text-2xl font-bold text-primary">{plan.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {!plan.price.includes('問い合わせ') && <span className="text-neutral-600 ml-1">/ 月</span>}
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-2 mt-1.5 w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${plan.recommended ? 'bg-secondary text-neutral-800 hover:bg-secondary-100' : 'bg-primary hover:bg-primary-100'}`}
                  >
                    お問い合わせ
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-neutral-600">
            上記にないご要望にも対応します。<a href="#contact" className="text-secondary font-medium hover:underline">カスタムプランについてご相談ください</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
