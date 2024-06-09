"use client"
import React from 'react'
import { motion } from 'framer-motion'
export default function SlideFromLeft({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: .7, x: -1000 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    )
}