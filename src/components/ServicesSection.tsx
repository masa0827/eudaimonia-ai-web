
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

// サービスデータを作成
const services = [
  {
    id: 1,
    title: "Webマーケティング戦略設計",
    icon: "strategy",
    description: "現状分析からKPI設定、チャネル選定まで上流工程を設計。",
    price: "30万円〜/一式"
  },
  {
    id: 2,
    title: "Web広告運用代行",
    icon: "content-generation",
    description: "Google / Meta 広告を中心に、AIコピー・クリエイティブで成果を最大化。",
    price: "広告費の20% + 初期3万円"
  },
  {
    id: 3,
    title: "広告運用 内製化支援",
    icon: "data-analysis",
    description: "チャット＆オンラインで伴走。広告運用を自社の武器に。",
    price: "10万円〜/月"
  },
  {
    id: 4,
    title: "生成AI活用研修 / WS",
    icon: "workshop",
    description: "ChatGPT・Stable Diffusionなどを実践形式で習得。",
    price: "1回 3万円〜"
  }
];

const challenges = [
  "広告費は掛けているのに成果が伸びない…",
  "社内に運用ノウハウがなく、外注コストが膨らむ…",
  "生成AIを活用したいが、何から始めればいいか分からない…"
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* 課題共感セクション */}
        <div className="mb-16 bg-neutral-100 p-8 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary text-center">こんなお悩みはありませんか？</h2>
          <div className="grid gap-4 mb-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-lg text-center font-medium text-neutral-800">"{challenge}"</p>
              </div>
            ))}
          </div>
          <p className="text-xl font-bold text-center text-primary">
            ユーダイモニアなら、最小コストで最大成果を実現できます。
          </p>
        </div>
        
        {/* サービスセクション */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">AIマーケティングサービス</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            生成AIとWeb広告の力で、中小企業のマーケティング課題を解決します
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="flex">
              <Card className="w-full border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    {/* サービスアイコン */}
                    {service.icon === "data-analysis" && (
                      <div className="w-10 h-10 relative">
                        <div className="absolute inset-0 bg-primary/20 rounded"></div>
                        <div className="absolute inset-1 bg-secondary/30 rounded-sm"></div>
                        <div className="absolute bottom-1 right-1 w-4 h-4 bg-primary rounded-full"></div>
                      </div>
                    )}
                    {service.icon === "content-generation" && (
                      <div className="w-10 h-10 relative">
                        <div className="absolute inset-0 bg-secondary/20 rounded"></div>
                        <div className="absolute top-1 left-1 w-4 h-4 bg-primary rounded-sm"></div>
                        <div className="absolute bottom-1 right-1 w-6 h-3 bg-primary/40 rounded-full"></div>
                      </div>
                    )}
                    {service.icon === "strategy" && (
                      <div className="w-10 h-10 relative">
                        <div className="absolute inset-0 bg-primary/30 rounded"></div>
                        <div className="absolute inset-2 bg-secondary/20 rounded-sm"></div>
                        <div className="absolute top-2 left-2 w-3 h-3 bg-white/80 rounded-full"></div>
                      </div>
                    )}
                    {service.icon === "workshop" && (
                      <div className="w-10 h-10 relative">
                        <div className="absolute inset-0 bg-secondary/30 rounded-md"></div>
                        <div className="absolute inset-2 bg-primary/20 rounded-sm"></div>
                        <div className="absolute top-5 left-2 w-6 h-2 bg-white/70 rounded-full"></div>
                      </div>
                    )}
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                  <CardDescription className="text-neutral-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-neutral-50 p-3 rounded-md mb-4">
                    <p className="text-primary font-medium">{service.price}</p>
                  </div>
                  <a href="#contact" className="inline-flex items-center text-primary hover:text-primary-100 transition-colors text-sm font-medium">
                    詳しく見る
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* 強み・特徴セクション */}
        <div className="mt-24 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary text-center">
            ユーダイモニアが選ばれる理由
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100">
              <h3 className="text-xl font-bold mb-2 text-primary">幅広い予算に対応</h3>
              <p>20万〜300万円の幅広い予算に対応 – 中小からエンタープライズまで最適設計。</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100">
              <h3 className="text-xl font-bold mb-2 text-primary">コスト削減</h3>
              <p>AI & ノーコードでコスト30〜40%削減 – LPやバナー制作費 15万円 → 4万円の実績。</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100">
              <h3 className="text-xl font-bold mb-2 text-primary">数値の見える化</h3>
              <p>リアルタイム BI レポート – Looker Studioで数値を"見える化"。</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100">
              <h3 className="text-xl font-bold mb-2 text-primary">徹底した運用体制</h3>
              <p>サボらない運用体制 – 週次〜月次でPDCA、2〜4週ごとにレポーティング。</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100">
              <h3 className="text-xl font-bold mb-2 text-primary">ワンストップ対応</h3>
              <p>一気通貫サポート – 上流戦略、運用、内製化、研修までワンストップ。</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100">
              <h3 className="text-xl font-bold mb-2 text-primary">成果にコミット</h3>
              <p>具体的な数値成果で、貴社のKPI達成をコミットします。</p>
            </div>
          </div>
        </div>
        
        {/* 成果事例セクション */}
        <div className="mt-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary text-center">
            導入成果事例
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100">
              <div className="bg-primary/10 text-primary font-bold py-1 px-3 rounded inline-block mb-2">
                美容資格講座
              </div>
              <p className="text-lg font-medium mb-2">ROAS 110% → 300% に改善</p>
              <p className="text-neutral-600">広告運用の最適化により、投資対効果を大幅に向上させました。</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100">
              <div className="bg-primary/10 text-primary font-bold py-1 px-3 rounded inline-block mb-2">
                B2B SaaS
              </div>
              <p className="text-lg font-medium mb-2">リード獲得単価 10,000円 → 3,000円</p>
              <p className="text-neutral-600">月10件 → 30件超のリード獲得数に増加しました。</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100">
              <div className="bg-primary/10 text-primary font-bold py-1 px-3 rounded inline-block mb-2">
                人材紹介
              </div>
              <p className="text-lg font-medium mb-2">広告運用内製化で大幅改善</p>
              <p className="text-neutral-600">求職者登録数 40%増、広告コスト 15%削減を実現しました。</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100">
              <div className="bg-primary/10 text-primary font-bold py-1 px-3 rounded inline-block mb-2">
                ファッション EC
              </div>
              <p className="text-lg font-medium mb-2">AI導入で制作コスト削減</p>
              <p className="text-neutral-600">画像生成AIモデル導入で撮影コスト・時間を大幅削減しました。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
