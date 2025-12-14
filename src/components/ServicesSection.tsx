import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function ServicesSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

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
        staggerChildren: 0.15
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

  // Services data
  const services = [
    {
      title: '网络安全评估',
      description: '全面评估您的网络安全状况，识别潜在风险和漏洞，提供专业的修复建议和安全加固方案。',
      icon: 'fas fa-search',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=cybersecurity%20risk%20assessment&sign=e02319a546c69cafb787dfe08042fc30'
    },
    {
      title: '威胁检测与响应',
      description: '24/7实时监控网络流量和系统活动，快速检测和响应各类安全威胁，最小化安全事件影响。',
      icon: 'fas fa-shield-alt',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=threat%20detection%20system&sign=5bb3a6162ad71cf47e1b6411ea4ff874'
    },
    {
      title: '数据加密与隐私保护',
      description: '采用先进的加密技术保护您的敏感数据，确保数据在传输和存储过程中的安全性和隐私性。',
      icon: 'fas fa-lock',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=data%20encryption%20security&sign=37b786551c781017399dc9587ef78a87'
    },
    {
      title: '安全合规咨询',
      description: '提供专业的安全合规咨询服务，帮助企业符合行业标准和法规要求，规避合规风险。',
      icon: 'fas fa-file-contract',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=security%20compliance%20document&sign=a0174911db173ad8da007eaeb28cf08c'
    },
    {
      title: '安全培训与意识提升',
      description: '为企业员工提供专业的安全培训，提升员工安全意识和技能，构建全面的安全防线。',
      icon: 'fas fa-chalkboard-teacher',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=security%20training%20workshop&sign=8bbc0175f4da4beb25b064c903b2f4bc'
    },
    {
      title: '安全运维服务',
      description: '提供专业的安全运维服务，确保您的系统和网络持续安全运行，及时处理各类安全问题。',
      icon: 'fas fa-server',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=security%20operations%20center&sign=d71fb1a1a5b2c7f38e88712919d4d4bf'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-900">
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
            我们的服务
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            全方位的<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">网络安全服务</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 dark:text-slate-300"
          >
            联盾科技提供从安全评估、威胁检测到合规咨询的全方位网络安全服务，为您的企业保驾护航。
          </motion.p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700 group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-2">
                  <i className={service.icon}></i>
                </div>
                
                <h3 className="text-xl font-bold">{service.title}</h3>
                
                <p className="text-slate-600 dark:text-slate-300">{service.description}</p>
                
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  了解详情
                  <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          ref={ref}
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="mt-16 text-center"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-600/20 dark:shadow-blue-500/20"
          >
            获取定制方案
            <i className="fas fa-arrow-right ml-1"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
}