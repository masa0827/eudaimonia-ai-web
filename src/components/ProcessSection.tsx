
import { ArrowRight } from "lucide-react";

const processSteps = [
  {
    number: 1,
    title: "無料相談",
    description: "あなたのビジネス課題をヒアリングし、最適なAIソリューションを提案します。"
  },
  {
    number: 2,
    title: "戦略設計",
    description: "データ分析に基づいた、あなたのビジネスに最適な戦略を設計します。"
  },
  {
    number: 3,
    title: "導入・運用",
    description: "AIシステムの導入からその後の運用まで、一貫してサポートします。"
  },
  {
    number: 4,
    title: "改善と発展",
    description: "継続的なデータ分析により、さらなる効果向上とビジネス発展を実現します。"
  }
];

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            あなたのビジネスにAIの力を
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            ユーダイモニアのAIマーケティングソリューション導入は、
            わずか4ステップで完了します。
          </p>
        </div>
        
        {/* プロセスステップ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {processSteps.map((step, index) => (
            <div 
              key={step.number} 
              className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* ステップ番号をアイソメトリックデザインで */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded transform rotate-45 absolute top-0 left-0"></div>
                <div className="w-16 h-16 flex items-center justify-center relative z-10">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
                
                {/* 接続線 */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-secondary/30"></div>
                )}
              </div>
              
              {/* ステップ内容 */}
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2 text-primary">{step.title}</h3>
                <p className="text-neutral-700 mb-4">{step.description}</p>
                
                {/* 詳細リンク */}
                <a href="#contact" className="inline-flex items-center text-primary hover:text-primary-100 transition-colors text-sm font-medium">
                  詳しく見る
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="section-divider gray-to-white mt-16"></div>
    </section>
  );
};

export default ProcessSection;
