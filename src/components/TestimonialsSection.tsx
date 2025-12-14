import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function TestimonialsSection() {
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

  // Testimonials data
  const testimonials = [
    {
      name: '张总监',
      company: '某大型金融集团',
      role: '信息安全总监',
      content: '联盾科技的安全解决方案帮助我们有效应对了各类网络威胁，他们的专业团队和快速响应给我们留下了深刻印象。',
      avatar: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=business%20man%20executive%20portrait&sign=de4902f4758ded9dabe5b79e0993f3ef'
    },
    {
      name: '李经理',
      company: '某知名医疗机构',
      role: 'IT运维经理',
      content: '联盾科技不仅为我们提供了专业的安全服务，还帮助我们提升了整体的安全意识和管理水平，是值得信赖的合作伙伴。',
      avatar: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=it%20manager%20portrait&sign=4470300d3bfd7d7970a4aef3c24f6441'
    },
    {
      name: '王主任',
      company: '某政府部门',
      role: '信息中心主任',
      content: '在等级保护建设过程中，联盾科技提供了全程支持和专业指导，帮助我们顺利通过了合规认证，他们的专业能力令人钦佩。',
      avatar: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=government%20official%20portrait&sign=daeffd9c85e69d7b15ea34d012b0fee5'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-900">
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
            客户评价
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            客户对我们的<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">评价</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 dark:text-slate-300"
          >
            听听我们的客户怎么说，他们的成功就是我们最大的动力。
          </motion.p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-4xl text-blue-100 dark:text-blue-900/30 opacity-50">
                <i className="fas fa-quote-right"></i>
              </div>
              
              <div className="space-y-6">
                {/* Star rating */}
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                
                {/* Testimonial content */}
                <p className="text-slate-600 dark:text-slate-300 italic">{testimonial.content}</p>
                
                {/* Client info */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-100 dark:border-blue-900/30">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}，{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Stats indicators */}
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {[
            { label: '安全事件', value: '99.9%', desc: '降低率' },
            { label: '客户满意度', value: '98%', desc: '以上' },
            { label: '安全专家', value: '200+', desc: '团队成员' },
            { label: '成功案例', value: '500+', desc: '企业客户' },
            { label: '安全评估', value: '1000+', desc: '项目经验' },
            { label: '技术专利', value: '30+', desc: '核心技术' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
              <div className="font-medium mt-1">{stat.label}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{stat.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}