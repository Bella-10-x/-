import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function ContactSection() {
    const controls = useAnimation();
    const ref = useRef(null);

    const isInView = useInView(ref, {
        once: true,
        threshold: 0.1
    });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const handleChange = e => {
        const {
            name,
            value
        } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ""
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "请输入您的姓名";
        }

        if (!formData.email.trim()) {
            newErrors.email = "请输入您的邮箱";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "请输入有效的邮箱地址";
        }

        if (!formData.message.trim()) {
            newErrors.message = "请输入您的留言";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async e => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            toast.success("提交成功，我们将尽快与您联系！");

            setFormData({
                name: "",
                email: "",
                company: "",
                message: ""
            });
        } catch (error) {
            toast.error("提交失败，请稍后再试");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="max-w-3xl mx-auto text-center mb-16">
                    <motion.span
                        variants={itemVariants}
                        className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">联系我们
                                                          </motion.span>
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">随时为您提供<span
                            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">专业支持</span>
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-slate-600 dark:text-slate-300">无论您有任何问题或需求，都可以通过以下方式联系我们，我们的专业团队将为您提供及时的支持和服务。
                                                          </motion.p>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {}
                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                        className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
                        <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6">发送留言
                                                                    </motion.h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <motion.div variants={itemVariants} className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-slate-700 dark:text-slate-300">姓名 *
                                                                                                  </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? "border-red-500 dark:border-red-500" : "border-slate-300 dark:border-slate-600"} bg-white dark:bg-slate-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-colors`}
                                        placeholder="请输入您的姓名" />
                                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                </motion.div>
                                <motion.div variants={itemVariants} className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-slate-700 dark:text-slate-300">邮箱 *
                                                                                                  </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500 dark:border-red-500" : "border-slate-300 dark:border-slate-600"} bg-white dark:bg-slate-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-colors`}
                                        placeholder="请输入您的邮箱" />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </motion.div>
                            </div>
                            <motion.div variants={itemVariants} className="space-y-2">
                                <label
                                    htmlFor="company"
                                    className="block text-sm font-medium text-slate-700 dark:text-slate-300">公司名称
                                                                                        </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-colors"
                                    placeholder="请输入您的公司名称" />
                            </motion.div>
                            <motion.div variants={itemVariants} className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-slate-700 dark:text-slate-300">留言内容 *
                                                                                        </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-500 dark:border-red-500" : "border-slate-300 dark:border-slate-600"} bg-white dark:bg-slate-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-colors resize-none`}
                                    placeholder="请输入您的留言内容" />
                                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                            </motion.div>
                            <motion.button
                                variants={itemVariants}
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-6 py-3.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-600/20 dark:shadow-blue-500/20 flex items-center justify-center gap-2">
                                {isSubmitting ? <>
                                    <i className="fas fa-spinner fa-spin"></i>提交中...
                                                                                          </> : <>提交留言
                                                                                            <i className="fas fa-paper-plane"></i>
                                </>}
                            </motion.button>
                        </form>
                    </motion.div>
                    {}
                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                        className="space-y-8">
                        {}
                        <motion.div
                            variants={itemVariants}
                            className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 h-64 relative">
                            <img
                                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=modern%20office%20building%20exterior&sign=fb13f1641367006342253113b92f1289"
                                alt="联盾科技总部地址"
                                className="w-full h-full object-cover" />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                                <div className="p-6">
                                    <h3 className="text-white font-bold text-xl">联盾科技总部</h3>
                                    <p className="text-white/80 text-sm">江苏省南通市崇川区国际大厦</p>
                                </div>
                            </div>
                        </motion.div>
                        {}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <div
                                className="flex items-start gap-4 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-700">
                                <div
                                    className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                                    <i className="fas fa-map-marker-alt text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">总部地址</h4>
                                    <p className="text-slate-600 dark:text-slate-300">江苏省南通市崇川区跃龙路国际大厦8楼</p>
                                </div>
                            </div>
                            <div
                                className="flex items-start gap-4 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-700">
                                <div
                                    className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                                    <i className="fas fa-phone-alt text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">联系电话</h4>
                                    <p className="text-slate-600 dark:text-slate-300">400-166-0586</p>
                                    <></>
                                </div>
                            </div>
                            <div
                                className="flex items-start gap-4 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-700">
                                <div
                                    className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                                    <i className="fas fa-envelope text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">电子邮箱</h4>
                                    <p className="text-slate-600 dark:text-slate-300">liandunqingniao@aliyun.com</p>
                                    <></>
                                </div>
                            </div>
                        </motion.div>
                        {}
                        <motion.div
                            variants={itemVariants}
                            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-700">
                            <h4 className="font-bold text-lg mb-4">关注我们</h4>
                            <div className="flex gap-4">
                                {["weixin", "weibo", "linkedin", "twitter"].map((social, index) => <a
                                    key={index}
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    aria-label={`Follow us on ${social}`}>
                                    <i className={`fab fa-${social} text-xl`}></i>
                                </a>)}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}