import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AboutSection() {
    const controls = useAnimation();
    const ref = useRef(null);

    const isInView = useInView(ref, {
        once: true,
        threshold: 0.1
    });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);

    const containerVariants = {
        hidden: {},

        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },

        visible: {
            opacity: 1,
            y: 0,

            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const companyStats = [{
        number: "10+",
        label: "行业经验",
        icon: "fas fa-calendar-check"
    }, {
        number: "500+",
        label: "企业客户",
        icon: "fas fa-building"
    }, {
        number: "200+",
        label: "专业人才",
        icon: "fas fa-users"
    }, {
        number: "99.9%",
        label: "客户满意度",
        icon: "fas fa-star"
    }];

    return (
        <section id="about" className="py-20 bg-white dark:bg-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="max-w-3xl mx-auto text-center mb-16">
                    <motion.span
                        variants={itemVariants}
                        className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">关于我们
                                  </motion.span>
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">打造<span
                            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">安全可信</span>的数字世界
                                   </motion.h2>
                     <motion.p
                         variants={itemVariants}
                         className="text-lg text-slate-600 dark:text-slate-300">联盾科技成立于2019年，是国内领先的网络安全解决方案提供商，专注于为企业客户提供全方位、多层次的网络安全防护体系。
                                   </motion.p>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                        className="relative">
                        <motion.div
                            variants={itemVariants}
                            className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700">
                            <img
                                src="https://space-static.coze.site/coze_space/7582856591604433171/upload/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20251106130641_216_93_960x540.jpg?sign=1768114379-a0022f5c07-0-0820b209303f58da382699fe30c97fcc0fe4e6f6e16075985ee3a63ad42c773b"
                                alt="联盾科技团队"
                                className="w-full h-auto" />
                        </motion.div>
                        {}
                        <div
                            className="absolute top-1/4 -right-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 animate-float">
                            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                            <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">年行业经验</div>
                        </div>
                        {}
                        <div
                            className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-full z-0"></div>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                        className="space-y-8">
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold mb-4">我们的使命与愿景</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-6">联盾科技以"守护数字世界安全"为使命，致力于成为全球领先的网络安全服务提供商。我们通过持续创新和技术突破，为客户构建坚不可摧的网络安全防线。
                                              </p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div
                                    className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                                    <i className="fas fa-shield-alt text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">核心价值</h4>
                                    <p className="text-slate-600 dark:text-slate-300">安全、创新、专业、诚信是我们的核心价值观，也是我们为客户创造价值的基础。
                                                          </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div
                                    className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                                    <i className="fas fa-lightbulb text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">创新理念</h4>
                                    <p className="text-slate-600 dark:text-slate-300">我们不断探索前沿技术，将人工智能、大数据分析等创新技术应用于网络安全领域。
                                                          </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div
                                    className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                                    <i className="fas fa-users text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">专业团队</h4>
                                    <p className="text-slate-600 dark:text-slate-300">我们拥有一支由网络安全专家组成的专业团队，平均从业经验超过8年。
                                                          </p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.a
                            variants={itemVariants}
                            href="#contact"
                            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">了解更多
                                          <i className="fas fa-arrow-right"></i>
                        </motion.a>
                    </motion.div>
                </div>
                {}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {companyStats.map((stat, index) => <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6 text-center">
                        <div
                            className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-4">
                            <i className={stat.icon}></i>
                        </div>
                        <div className="text-3xl font-bold mb-2">{stat.number}</div>
                        <div className="text-slate-600 dark:text-slate-300 text-sm">{stat.label}</div>
                    </motion.div>)}
                </motion.div>
            </div>
        </section>
    );
}