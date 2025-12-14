import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export default function HeroSection() {
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

    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
            {}
            <div className="absolute inset-0 overflow-hidden">
                {/* Background decorative elements */}
                <div
                    className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 dark:bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
                <div
                    className="absolute top-1/3 -left-20 w-72 h-72 bg-indigo-400 dark:bg-indigo-500 rounded-full filter blur-3xl opacity-10"></div>
                <div
                    className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-400 dark:bg-cyan-500 rounded-full filter blur-3xl opacity-10"></div>
                
                {/* Decorative lines */}
                <div className="absolute top-1/4 left-1/4 w-40 h-px bg-gradient-to-r from-blue-400/20 to-transparent"></div>
                <div className="absolute top-1/3 right-1/4 w-40 h-px bg-gradient-to-l from-indigo-400/20 to-transparent"></div>
                <div className="absolute bottom-1/4 left-1/3 w-px h-40 bg-gradient-to-b from-cyan-400/20 to-transparent"></div>
                
                {/* Security pattern elements */}
                <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-blue-400/20 rounded-lg transform rotate-45"></div>
                <div className="absolute bottom-1/3 right-1/3 w-8 h-8 border border-indigo-400/20 rounded-full"></div>
                <div className="absolute top-1/4 right-1/3 w-16 h-1 bg-blue-400/20"></div>
                <div className="absolute bottom-1/4 left-1/2 w-16 h-1 bg-indigo-400/20"></div>
            </div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                        className="space-y-8">
                        <motion.div variants={itemVariants}>
                            <span
                                className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
                                <i className="fas fa-shield-alt mr-2"></i>专业网络安全解决方案提供商
                                                                                                              </span>
                        </motion.div>
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                            <span className="block">构建安全可信的</span>
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">数字化未来</span>
                        </motion.h1>
                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-lg">联盾科技专注于为企业提供全方位的网络安全防护，从风险评估到威胁检测，从数据加密到安全合规，守护您的数字资产安全。
                                                                                                </motion.p>
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="#contact"
                                className="px-8 py-3.5 rounded-full bg-blue-600 text-white font-medium text-center hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-600/20 dark:shadow-blue-500/20 transform hover:-translate-y-0.5">咨询方案
                                                                                                              </a>
                            <a
                                href="#services"
                                className="px-8 py-3.5 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-medium text-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-md shadow-slate-200 dark:shadow-slate-700/30 border border-slate-200 dark:border-slate-700 transform hover:-translate-y-0.5">了解服务
                                                                                                              </a>
                        </motion.div>
                        <motion.div variants={itemVariants} className="flex items-center gap-6 pt-6">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map(index => <div
                                    key={index}
                                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden">
                                    <img
                                        src={`https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=business%20professional%20portrait%20${index}`}
                                        alt={`Client ${index}`}
                                        className="w-full h-full object-cover" />
                                </div>)}
                            </div>
                            <div className="text-sm text-slate-600 dark:text-slate-300">
                                <span className="font-bold text-slate-900 dark:text-white">500+</span>企业客户的共同选择
                                                                                                              </div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                        className="relative">
                        <motion.div
                            variants={itemVariants}
                            className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-blue-600/10 dark:shadow-blue-500/5 border border-slate-200 dark:border-slate-700">
                            <img
                                src="https://space-static.coze.site/coze_space/7582856591604433171/upload/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250910191829_1200_30_1080x595.jpg?sign=1768114362-1400cd0359-0-720e79a3d5ae392da9427d2dbe49586b95b1b7a37e6700b0b0ab9e478849575b"
                                alt="联盾科技网络安全解决方案"
                                className="w-full h-auto" />
                            {}
                            <div
                                className="absolute -bottom-12 -left-6 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700">
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">99.9%</div>
                                <div className="text-sm text-slate-600 dark:text-slate-300">安全防护成功率</div>
                            </div>
                            <div
                                className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700">
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
                                <div className="text-sm text-slate-600 dark:text-slate-300">全天候安全监控</div>
                            </div>
                        </motion.div>
                        {}
                        <div
                            className="absolute top-1/2 -left-10 -translate-y-1/2 w-20 h-20 bg-blue-500 dark:bg-blue-600 rounded-full filter blur-xl opacity-20 animate-pulse"></div>
                        <div
                            className="absolute bottom-1/4 -right-8 w-16 h-16 bg-indigo-500 dark:bg-indigo-600 rounded-full filter blur-xl opacity-20 animate-pulse"
                            style={{
                                animationDelay: "1s"
                            }}></div>
                    </motion.div>
                </div>
                {}
                <motion.div
                    ref={ref}
                    variants={itemVariants}
                    initial="hidden"
                    animate={controls}
                    className="mt-24">
                    <div className="text-center mb-8">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">受到行业领先企业的信赖</h3>
                        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">我们的客户遍布金融、医疗、政府、教育等多个行业，与500+企业建立了长期合作关系，共同构建安全可信的数字化未来。
                                                    </p>
                    </div>
                    <></>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        {[1, 2, 3, 4, 5].map(index => <></>)}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}