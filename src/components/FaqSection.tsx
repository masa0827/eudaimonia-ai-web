
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "AIマーケティングはどんな企業に適していますか？",
    answer: "AIマーケティングは、データを活用して顧客理解を深め、効率的なマーケティング戦略を立てたいと考えるあらゆる規模の企業に適しています。特に、顧客データを豊富に持つ企業、マーケティングプロセスを最適化したい企業、パーソナライズされたコンテンツ配信を強化したい企業にとって大きな価値を提供します。業種を問わず、顧客との関係強化を目指す企業であれば導入の効果が期待できます。"
  },
  {
    question: "AIの導入にはどのくらいの期間がかかりますか？",
    answer: "導入期間は、企業の規模やニーズにより異なります。スタンダードプランであれば約2週間程度、ビジネスプランで1ヶ月程度、エンタープライズプランでは1〜2ヶ月ほどかかることが一般的です。初期設定後も、データの蓄積と共にAIの精度は向上し続けます。当社では、スムーズな導入と早期効果創出のためのサポート体制を整えています。"
  },
  {
    question: "AIを活用するために特別な知識は必要ですか？",
    answer: "いいえ、特別な知識は必要ありません。当社のAIソリューションは、技術的な専門知識がない方でも簡単に操作できるよう設計されています。また、導入時のトレーニングセッションやオンラインサポート、詳細なマニュアルなど、必要なサポートを全て提供しています。データの解釈や戦略立案についても、当社のコンサルタントがサポートいたします。"
  },
  {
    question: "データセキュリティは大丈夫ですか？",
    answer: "データセキュリティは最優先事項として取り組んでいます。当社のAIシステムは、最新の暗号化技術を使用し、定期的なセキュリティ監査を実施しています。また、ISO27001認証を取得し、GDPR、CCPAなどの国際的なデータ保護規制にも準拠しています。お客様のデータは許可なく第三者と共有されることはなく、厳格なアクセス制御の下で管理されています。"
  },
  {
    question: "どのような結果が期待できますか？",
    answer: "AIマーケティングの導入により、顧客理解の深化、コンバージョン率の向上、マーケティングROIの改善、運用効率の向上などの成果が期待できます。具体的には、当社の導入企業では平均して顧客獲得コストが20%削減、コンバージョン率が35%向上、顧客維持率が25%改善などの実績があります。もちろん、結果は企業やプロジェクトによって異なりますので、詳細はご相談時に確認させていただきます。"
  }
];

const FaqSection = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral">
      <div className="section-divider white-to-gray"></div>
      
      <div className="container mx-auto px-4 md:px-6 pt-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            AIマーケティングに関する疑問にお答えします
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            よくあるご質問とその回答をまとめました。
            ここに無い質問については、お気軽にお問い合わせください。
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-neutral-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-neutral-50 transition-colors">
                  <span className="text-left font-medium text-primary">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white text-neutral-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
