"use client"
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/tw-merge'
import Link from 'next/link'
import React from 'react'
const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Books", href: "/books" },
    { label: "Awards", href: "/award" },
]

export default function Menubar({ font }: { font: string }) {
    const pathname = usePathname()

    return (
        <nav className='h-32 w-full px-5 lg:px-20 flex flex-col items-center justify-center mb-10'>
            <img src="/image/logo.png" alt="Picture" className='h-24 w-full object-contain mx-auto hover:scale-95 transition duration-300' />
            <ul className='flex items-center justify-center gap-5'>
                {
                    items && items.map((item, i) => (
                        <Link href={item.href} key={i}
                            className={cn(`hover:bg-yellow-500 px-5 py-2 ${font} hover:text-white font-semibold rounded-r-3xl rounded-bl-3xl transition-all duration-300`, pathname === item.href && 'bg-yellow-500 text-white')}>{item.label}</Link>

                    ))
                }

            </ul>

        </nav>
    )
}
