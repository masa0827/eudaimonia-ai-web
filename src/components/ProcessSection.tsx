
import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "ヒアリング / 現状分析",
    description: "広告費・ROAS などを把握します。"
  },
  {
    number: "02",
    title: "プラン提案",
    description: "KPI と施策ロードマップを策定します。"
  },
  {
    number: "03",
    title: "導入準備",
    description: "アカウント設定・制作体制構築・研修計画を行います。"
  },
  {
    number: "04", 
    title: "運用・研修開始",
    description: "週次・月次レポートで高速 PDCA を回します。"
  },
  {
    number: "05",
    title: "成果検証 & 追加提案",
    description: "新チャネルや改善策を随時投入します。"
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">導入フロー</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            お客様と二人三脚で、最短で成果を出すためのプロセスを大切にしています
          </p>
        </div>
        
        <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between md:items-start relative">
          {/* ステップを繋ぐライン（デスクトップのみ表示） */}
          <div className="hidden md:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-neutral-200"></div>
          
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={`md:w-1/5 relative z-10 ${index === steps.length - 1 ? "" : "md:mr-4"}`}
            >
              {/* ステップ番号 */}
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
              </div>
              
              {/* ステップ内容 */}
              <Card className="text-center p-6 border border-neutral-200 bg-white h-full">
                <h3 className="text-lg font-bold mb-2 text-primary">{step.title}</h3>
                <p className="text-neutral-600 text-sm">{step.description}</p>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 border border-dashed border-primary/50 rounded-lg bg-neutral-50">
          <h3 className="text-xl font-bold mb-3 text-primary text-center">スケジュール目安</h3>
          <p className="text-center">
            <span className="inline-block mx-2 my-1 p-2 bg-white rounded shadow-sm">1–2ヶ月：ヒアリング〜導入準備</span>
            <span className="inline-block mx-2 my-1 p-2 bg-white rounded shadow-sm">3–6ヶ月：本格運用 / 研修</span>
            <span className="inline-block mx-2 my-1 p-2 bg-white rounded shadow-sm">6ヶ月〜：成果検証・継続改善</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
