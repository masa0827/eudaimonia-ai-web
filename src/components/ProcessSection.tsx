
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    id: 1,
    title: "ヒアリング / 現状分析",
    description: "広告費・ROAS などを把握し、現状の課題を明確化します。",
    icon: "1"
  },
  {
    id: 2,
    title: "プラン提案",
    description: "KPI と施策ロードマップを策定し、最適な戦略を提案します。",
    icon: "2"
  },
  {
    id: 3,
    title: "導入準備",
    description: "アカウント設定・制作体制構築・研修計画を行います。",
    icon: "3"
  },
  {
    id: 4,
    title: "運用・研修開始",
    description: "週次・月次レポートで高速 PDCA を実施し、効果を測定します。",
    icon: "4"
  },
  {
    id: 5,
    title: "成果検証 & 追加提案",
    description: "新チャネルや改善策を随時投入し、長期的な成長をサポートします。",
    icon: "5"
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">導入フロー</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            最短で成果を出すための、当社の5ステッププロセス
          </p>
        </div>
        
        <div className="relative">
          {/* PC用のつながる線 */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-neutral-200 -translate-y-1/2 z-0"></div>
          
          {/* プロセスステップ */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="flex">
                <Card className="border border-neutral-100 shadow-md hover:shadow-lg transition-all duration-300 w-full">
                  <CardHeader className="flex flex-col items-center text-center pb-2">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-4">
                      {step.icon}
                    </div>
                    <CardTitle className="text-lg font-bold text-primary">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-neutral-600">{step.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {/* 料金とスケジュール */}
        <div className="mt-20 bg-neutral-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-primary text-center">料金 & スケジュール</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow border border-neutral-100">
              <h4 className="text-xl font-bold mb-4 text-primary">料金プラン</h4>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>広告運用代行</span>
                  <span className="font-medium">広告費の20%（初期設定費 3万円）</span>
                </li>
                <li className="flex justify-between">
                  <span>内製化支援</span>
                  <span className="font-medium">10万円/月〜（内容に応じて）</span>
                </li>
                <li className="flex justify-between">
                  <span>生成AI研修</span>
                  <span className="font-medium">1回 3万円〜</span>
                </li>
                <li className="flex justify-between">
                  <span>LP・バナー制作</span>
                  <span className="font-medium">1LP 4万円〜（従来比30〜40%削減）</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border border-neutral-100">
              <h4 className="text-xl font-bold mb-4 text-primary">スケジュール目安</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-primary text-white text-sm px-2 py-1 rounded mr-2">STEP 1</span>
                  <span>1–2ヶ月：ヒアリング〜導入準備</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white text-sm px-2 py-1 rounded mr-2">STEP 2</span>
                  <span>3–6ヶ月：本格運用 / 研修</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white text-sm px-2 py-1 rounded mr-2">STEP 3</span>
                  <span>6ヶ月〜：成果検証・継続改善</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-neutral-600">
                ※案件の規模や緊急性によってスケジュールは調整可能です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
