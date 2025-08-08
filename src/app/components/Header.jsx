'use client';

import React, {useState} from 'react';
import Link from "next/link";
import { Menu, X ,Activity} from 'lucide-react';
import {motion, AnimatePresence} from 'framer-motion';

function Header(props) {

    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        {name: 'Home', href: '/'},
        {name: 'Store', href: '/projects'},
        {name: 'About', href: '/about'},
        {name: 'Contact', href: '/contact'},
    ];

    return (

        <header className="w-full shadow-md bg-white dark:bg-[#280A3E] fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                    <div className={"flex items-center justify-between"}>
                        <Activity color={"#c30e0e"}/>
                        <span className={"ml-3"}> OnCloudNine</span>
                    </div>

                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-700 dark:text-white focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                </button>

            </div>

            {/* Mobile Nav Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{height: 0, opacity: 0}}
                        animate={{height: 'auto', opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        className="md:hidden bg-white dark:bg-gray-900 overflow-hidden"
                    >
                        <ul className="flex flex-col space-y-4 px-6 py-4">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>

    )

};


export default Header;