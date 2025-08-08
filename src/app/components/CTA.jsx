"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

function CallToAction() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl mx-4 sm:mx-8 lg:mx-16 my-16"
        >
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-bold text-white mb-6"
                >
                    Ready to Explore Our Collection?
                </motion.h2>

                <motion.p
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-lg text-indigo-100 max-w-3xl mx-auto mb-8"
                >
                    Join thousands of readers accessing our premium PDF books. Sign up now and get your first 3 books free!
                </motion.p>

                <motion.div
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                        Get Started
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-all flex items-center justify-center gap-2"
                    >
                        Learn More <FiArrowRight className="w-4 h-4" />
                    </motion.button>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default  CallToAction