import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function NewsSection() {
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

  // News data
  const news = [
    {
      title: '联盾科技发布2025网络安全趋势报告',
      date: '2025-06-15',
      category: '公司新闻',
      excerpt: '报告分析了当前网络安全威胁态势和未来发展趋势，为企业提供了前瞻性的安全防护建议。',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=cybersecurity%20report%20document&sign=2dbf468a69b7c292cfedb407db922663'
    },
    {
      title: '联盾科技荣获"2025年度最佳网络安全服务商"称号',
      date: '2025-05-28',
      category: '荣誉奖项',
      excerpt: '在2025年度网络安全峰会上，联盾科技凭借卓越的服务质量和技术创新能力获得此殊荣。',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=cybersecurity%20award%20trophy&sign=ac75fef7225d5505f0ec1b05601c84fb'
    },
    {
      title: '联盾科技推出新一代零信任安全解决方案',
      date: '2025-04-10',
      category: '产品发布',
      excerpt: '该解决方案采用最新的零信任架构设计，为企业提供更加安全、灵活的访问控制和数据保护机制。',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=zero%20trust%20security%20solution&sign=4835dd611bdbfb0933841ab549988488'
    }
  ];

  return (
    <section id="news" className="py-20 bg-white dark:bg-slate-800">
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
            新闻中心
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            最新<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">动态</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 dark:text-slate-300"
          >
            了解联盾科技的最新动态、行业资讯和技术分享。
          </motion.p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {news.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700 group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs font-medium">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{item.date}</span>
                </div>
                
                <h3 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300">{item.excerpt}</p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  阅读全文
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
          className="mt-12 text-center"
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            查看更多新闻
            <i className="fas fa-arrow-right ml-1"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
}