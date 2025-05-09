
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <a href="#" className="inline-block mb-6">
              <h1 className="text-2xl font-bold">
                eud<span className="text-secondary">AI</span>monia
              </h1>
              <span className="text-sm text-white/60 block mt-1">株式会社ユーダイモニア</span>
            </a>
            <p className="text-white/80 mb-6">
              私たちは、生成AIを活用した次世代マーケティングソリューションを提供し、
              企業の挑戦を支援します。データの力と人間の創造性を融合し、
              ビジネスの成長を加速させるパートナーを目指しています。
            </p>
            <div className="text-white/60">
              &copy; {new Date().getFullYear()} 株式会社ユーダイモニア All Rights Reserved.
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">クイックリンク</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/80 hover:text-secondary transition-colors">サービス</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-secondary transition-colors">私たちについて</a>
              </li>
              <li>
                <a href="#cases" className="text-white/80 hover:text-secondary transition-colors">導入事例</a>
              </li>
              <li>
                <a href="#plans" className="text-white/80 hover:text-secondary transition-colors">料金プラン</a>
              </li>
              <li>
                <a href="#faq" className="text-white/80 hover:text-secondary transition-colors">よくあるご質問</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-secondary transition-colors">お問い合わせ</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">お問い合わせ</h3>
            <div className="space-y-4">
              <div className="flex">
                <MapPin className="text-secondary mr-3 shrink-0 mt-1" />
                <div>
                  <p className="text-white/80">〒106-0032</p>
                  <p className="text-white/80">東京都港区六本木6-10-1</p>
                  <p className="text-white/80">六本木ヒルズ森タワー</p>
                </div>
              </div>
              
              <div className="flex">
                <Phone className="text-secondary mr-3 shrink-0" />
                <p className="text-white/80">03-1234-5678</p>
              </div>
              
              <div className="flex">
                <Mail className="text-secondary mr-3 shrink-0" />
                <p className="text-white/80">info@eudaimonia-ai.co.jp</p>
              </div>
              
              <div className="pt-4 mt-4 border-t border-white/20">
                <h4 className="font-medium mb-3 text-white/80">ソーシャルメディア</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary/80 transition-colors">
                    {/* Twitter icon placeholder */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary/80 transition-colors">
                    {/* LinkedIn icon placeholder */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Links */}
        <div className="pt-8 border-t border-white/10 text-center md:text-left">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 justify-center md:justify-start text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-white transition-colors">利用規約</a>
            <a href="#" className="hover:text-white transition-colors">特定商取引法に基づく表記</a>
            <a href="#" className="hover:text-white transition-colors">サイトマップ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
