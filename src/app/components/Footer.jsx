"use client";

import { motion } from "framer-motion";
import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

export default function ElegantFooter() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const socialLinks = [
        { icon: <FiGithub />, url: "https://github.com" },
        { icon: <FiTwitter />, url: "https://twitter.com" },
        { icon: <FiLinkedin />, url: "https://linkedin.com" },
        { icon: <FiMail />, url: "mailto:contact@example.com" }
    ];

    const footerLinks = [
        { title: "About", links: ["Team", "Careers", "Blog"] },
        { title: "Resources", links: ["Documentation", "Tutorials", "API Status"] },
        { title: "Legal", links: ["Privacy", "Terms", "Cookies"] }
    ];

    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Logo and description */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-1"
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">PDFBooks</h2>
                        <p className="mb-6">Your gateway to thousands of free and premium PDF books.</p>

                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3, color: "#ffffff" }}
                                    className="text-xl text-gray-400 hover:text-white transition-colors"
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Footer links */}
                    {footerLinks.map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="space-y-4"
                        >
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <motion.a
                                            href="#"
                                            whileHover={{ x: 5, color: "#ffffff" }}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6 }}
                    className="border-t border-gray-700 my-8"
                />

                {/* Bottom section */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-sm text-gray-500 mb-4 md:mb-0"
                    >
                        © {new Date().getFullYear()} CoCloudNine Academy.All rights reserved.
                    </motion.p>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.05, backgroundColor: "#4f46e5" }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-white"
                        aria-label="Back to top"
                    >
                        <FiArrowUp className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>
        </motion.footer>
    );
}