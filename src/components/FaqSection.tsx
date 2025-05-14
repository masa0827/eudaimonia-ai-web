
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "小規模予算でも依頼できますか？",
    answer: "月20万円程度の広告費から運用が可能です。まずはご相談ください。"
  },
  {
    question: "生成AI研修だけ依頼したいのですが？",
    answer: "研修のみの単発・継続どちらも対応しております。お気軽にご相談ください。"
  },
  {
    question: "広告運用を自社で回したいのですが、どのくらいで習得できますか？",
    answer: "平均3ヶ月の伴走で、広告配信〜レポートまで社内完結できる体制を構築できます。当社の内製化支援プログラムでは、実践的なノウハウを段階的に習得できるカリキュラムを用意しています。"
  },
  {
    question: "どのような広告メディアに対応していますか？",
    answer: "主にGoogle広告（リスティング、ディスプレイ、YouTube）、Meta広告（Facebook、Instagram）を中心に、LinkedIn、Twitter、TikTokなど各種SNS広告にも対応しています。どのメディアがビジネスに最適かは、無料相談の際にご提案します。"
  },
  {
    question: "導入までどのくらいの期間がかかりますか？",
    answer: "スケジュール目安は、1〜2ヶ月：ヒアリング〜導入準備、3〜6ヶ月：本格運用/研修、6ヶ月〜：成果検証・継続改善となります。ただし、案件の規模や緊急性によって調整可能ですので、まずはご相談ください。"
  }
];

const FaqSection = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral">
      <div className="container mx-auto px-4 md:px-6 pt-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            よくあるご質問
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            AIマーケティングに関する疑問にお答えします。
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
