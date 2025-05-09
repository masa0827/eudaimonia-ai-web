
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.privacy) {
      toast.error("必須項目を入力してください");
      return;
    }
    
    // Form submission would go here in a real implementation
    console.log("Form submitted:", formData);
    
    toast.success("お問い合わせが送信されました。担当者より連絡いたします。", {
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
      privacy: false,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            あなたのビジネスの可能性を開く
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            AIマーケティングについてのご質問やお見積もりのご依頼は、
            下記フォームよりお気軽にお問い合わせください。
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 bg-neutral rounded-lg p-8 isometric-card">
            <h3 className="text-xl font-bold mb-6 text-primary">お問い合わせ先</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-secondary mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-primary">所在地</h4>
                  <p className="text-neutral-700">〒106-0032<br />東京都港区六本木6-10-1<br />六本木ヒルズ森タワー</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-secondary mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-primary">電話番号</h4>
                  <p className="text-neutral-700">03-1234-5678</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-secondary mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-primary">メールアドレス</h4>
                  <p className="text-neutral-700">info@eudaimonia-ai.co.jp</p>
                </div>
              </div>
            </div>
            
            {/* Social Media - placeholder for future implementation */}
            <div className="mt-8 pt-6 border-t border-neutral-200">
              <h4 className="font-medium mb-3 text-primary">ソーシャルメディア</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  {/* Twitter icon placeholder */}
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  {/* LinkedIn icon placeholder */}
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-primary">お名前 <span className="text-red-500">*</span></Label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="鈴木 太郎"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-primary">会社名</Label>
                  <Input 
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="株式会社〇〇"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-primary">メールアドレス <span className="text-red-500">*</span></Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@example.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-primary">電話番号</Label>
                  <Input 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="03-1234-5678"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="interest" className="text-primary">ご興味のある内容</Label>
                <Select
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, interest: value }))}
                  value={formData.interest}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="お選びください" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="analysis">AIによる顧客分析</SelectItem>
                    <SelectItem value="content">パーソナライズされたコンテンツ</SelectItem>
                    <SelectItem value="strategy">戦略立案</SelectItem>
                    <SelectItem value="consultation">無料相談</SelectItem>
                    <SelectItem value="other">その他</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-primary">ご質問・ご要望</Label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="ご質問やご要望をご記入ください。"
                  rows={5}
                />
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="privacy" 
                  checked={formData.privacy}
                  onCheckedChange={(checked) => 
                    setFormData((prev) => ({ ...prev, privacy: checked === true }))
                  }
                  className="mt-1"
                />
                <Label htmlFor="privacy" className="text-sm text-neutral-700">
                  <span className="text-red-500 mr-1">*</span>
                  プライバシーポリシーに同意します。個人情報は当社のプライバシーポリシーに従って処理されます。
                </Label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-secondary text-neutral-800 hover:bg-secondary-100"
              >
                無料相談を申し込む
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
