import React from 'react';
import { cn } from '@/lib/utils';

export default function Footer() {
  // Navigation links
  const navLinks = [
    { name: '首页', href: '#' },
    { name: '关于我们', href: '#about' },
    { name: '产品服务', href: '#services' },
    { name: '解决方案', href: '#solutions' },
    { name: '客户案例', href: '#testimonials' },
    { name: '新闻中心', href: '#news' },
    { name: '联系我们', href: '#contact' },
  ];

  // Quick links
  const quickLinks = [
    { name: '隐私政策', href: '#' },
    { name: '服务条款', href: '#' },
    { name: '招聘信息', href: '#' },
    { name: '常见问题', href: '#' },
    { name: '安全公告', href: '#' },
  ];

  // Solutions list
  const solutionsList = [
    { name: '企业网络安全', href: '#' },
    { name: '金融行业安全', href: '#' },
    { name: '医疗行业安全', href: '#' },
    { name: '政府机构安全', href: '#' },
    { name: '云安全解决方案', href: '#' },
  ];

  // Contact information
  const contactInfo = [
    { icon: 'fas fa-map-marker-alt', text: '江苏省南通市崇川区国际大厦' },
    { icon: 'fas fa-phone-alt', text: '400-166-0586' },
    { icon: 'fas fa-envelope', text: 'liandunqingniao@aliyun.com' },
    { icon: 'fas fa-clock', text: '周一至周五 9:00-18:00' },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">联</span>
              </div>
              <span className="text-xl font-bold">联盾科技</span>
            </div>
            
            <p className="text-slate-300">
              联盾科技专注于为企业提供全方位的网络安全防护，从风险评估到威胁检测，从数据加密到安全合规，守护您的数字资产安全。
            </p>
            
            <div className="flex gap-4">
              {['weixin', 'weibo', 'linkedin', 'twitter'].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label={`Follow us on ${social}`}
                >
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-6">导航</h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Solutions */}
          <div>
            <h4 className="text-lg font-bold mb-6">解决方案</h4>
            <ul className="space-y-3">
              {solutionsList.map((solution, index) => (
                <li key={index}>
                  <a 
                    href={solution.href} 
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {solution.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">联系我们</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3">
                  <i className={`${info.icon} text-blue-400 mt-1`}></i>
                  <span className="text-slate-300">{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-slate-800 pt-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-2">
              <h4 className="text-lg font-bold">订阅安全资讯</h4>
              <p className="text-slate-300 text-sm">
                获取最新的网络安全资讯、技术分享和产品更新
              </p>
            </div>
            
            <div className="md:col-span-2">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="请输入您的邮箱地址"
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                />
                <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                  订阅
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            &copy; 2025 联盾科技有限公司. 保留所有权利.
          </div>
          
          <div className="flex gap-6">
            {quickLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-slate-400 text-sm hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}