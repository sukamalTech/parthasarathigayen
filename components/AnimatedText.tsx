"use client"
import React from 'react';
import { motion } from 'framer-motion';
const quote = {
    initial: { opacity: 1 },
    animate: {
        opacity: 1,
        transition: { delay: .5, staggerChildren: .08 }
    }
}
const singleWord = {
    initial: { opacity: 0, y: 50 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.5, }
    }
}
type Props = {
    text: string;
    className: string
}
const AnimatedText = ({ text, className }: Props) => {
    return (
        <div
            className="flex items-center text-center justify-center overflow-hidden
         w-full mx-auto py-2"
        >
            <motion.h1
                variants={quote}
                initial="initial"
                animate="animate"
                className={`${className} w-full inline-block  font-bold text-6xl  `}
            // className={`${className} w-full inline-block  font-bold text-5xl bg-gradient-to-tr text-transparent bg-clip-text from-purple-600 to-pink-800 `}
            >
                {text.split(" ").map((word, index) => (
                    <motion.span variants={singleWord} key={word + index} className="inline-block py-1">
                        {word}&nbsp;
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
}

export default AnimatedText;
