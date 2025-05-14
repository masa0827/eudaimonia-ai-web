
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 pt-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            今すぐ、AIとWeb広告で成果を最大化しませんか？
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/90">
            革新的なAIマーケティングソリューションで、
            あなたのビジネスの可能性を広げましょう。
            まずは無料相談から始めてみませんか？
          </p>
          <Button className="bg-secondary text-neutral-800 hover:bg-secondary-100 text-lg py-6 px-8 flex items-center mx-auto">
            無料相談を予約する
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
