import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function SolutionsSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  const [activeSolution, setActiveSolution] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Solutions data
  const solutions = [
    {
      title: '企业网络安全解决方案',
      description: '为企业提供全面的网络安全防护，包括边界安全、终端安全、应用安全等多层次防护体系，确保企业网络和数据资产的安全。',
      features: [
        '全方位威胁检测与防御',
        '实时安全监控与响应',
        '数据加密与访问控制',
        '漏洞管理与补丁更新',
        '安全合规与审计'
      ],
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=enterprise%20network%20security%20solution&sign=083906cbfb742988c6c6832fd239d561'
    },
    {
      title: '金融行业安全解决方案',
      description: '针对金融行业的特殊安全需求，提供符合金融监管要求的安全解决方案，保障金融交易和客户数据的安全。',
      features: [
        '交易安全防护',
        '敏感数据保护',
        '反欺诈系统',
        '金融合规审计',
        '移动银行安全'
      ],
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=financial%20security%20solution&sign=01e96e677605b2f17480e2e268a00085'
    },
    {
      title: '医疗行业安全解决方案',
      description: '为医疗行业提供专业的安全解决方案，保护患者数据隐私和医疗系统安全，确保医疗服务的连续性和可靠性。',
      features: [
        '患者数据隐私保护',
        '医疗设备安全',
        'HIPAA合规咨询',
        '医疗应用安全',
        '远程医疗安全'
      ],
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=healthcare%20security%20solution&sign=e0a0d291844350953ad141d9532d1d93'
    },
    {
      title: '政府机构安全解决方案',
      description: '为政府机构提供高等级的安全防护解决方案，保护敏感信息和关键基础设施安全，防范各类网络攻击和威胁。',
      features: [
        '等级保护合规建设',
        '关键信息基础设施保护',
        '数据安全与隐私保护',
        '安全监控与应急响应',
        '供应链安全'
      ],
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=government%20security%20solution&sign=97afe93e7e12e0cfe3b2d4f0a84ab67b'
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4"
          >
            解决方案
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            行业<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">定制化</span>安全解决方案
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 dark:text-slate-300"
          >
            联盾科技针对不同行业的安全需求，提供定制化的安全解决方案，帮助企业有效应对各类网络安全挑战。
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-8"
          >
            {/* Solution tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {solutions.map((solution, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSolution(index)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSolution === index 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 dark:bg-blue-500 dark:shadow-blue-500/20' 
                      : 'bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {solution.title}
                </button>
              ))}
            </div>
            
            {/* Solution content */}
            <motion.div
              key={activeSolution}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">{solutions[activeSolution].title}</h3>
              
              <p className="text-slate-600 dark:text-slate-300">{solutions[activeSolution].description}</p>
              
              <ul className="space-y-3">
                {solutions[activeSolution].features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                      <i className="fas fa-check text-xs"></i>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-600/20 dark:shadow-blue-500/20"
              >
                咨询详情
                <i className="fas fa-arrow-right"></i>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="relative"
          >
            <motion.div 
              key={activeSolution}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700"
            >
              <img 
                src={solutions[activeSolution].image} 
                alt={solutions[activeSolution].title} 
                className="w-full h-auto"
              />
              
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white font-bold text-xl">{solutions[activeSolution].title}</h3>
                </div>
              </div>
            </motion.div>
            
            {/* Background decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 dark:bg-blue-900/30 rounded-full z-0"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-100 dark:bg-indigo-900/30 rounded-full z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}