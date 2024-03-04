import { Facebook, Globe, Linkedin, Mail, PhoneCall, Youtube } from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link'
import React from 'react'
const footers = [
    {
        label: "Books",
        href: "/books"
    },
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Awards",
        href: "/award"
    },
]
export default function Footer() {
    return (
        <section className='h-[300px] relative bg-zinc-800 text-white'>

            <div className=' w-[80%] flex justify-between items-center mx-auto pt-10  border-b pb-20 border-gray-300'>
                <div className='z-10'>
                    <h3 className='text-3xl text-gray-100 mb-3'>P S <span className='text-lime-500'>Gyan</span> </h3>
                    <p className='text-gray-100 text-sm max-w-xs'>রবীন্দ্র গবেষক ও গীতা আলোচক, </p>
                </div>
                <div className='flex flex-col w-80 h-full gap-3 text-gray-100 '>
                    <div className='flex items-center justify-start gap-5 z-10'>
                        <Mail size={20} /> parthasarathi.jajabor@gmail.com
                    </div>
                    <div className='flex items-center justify-start gap-5 z-10'>
                        <PhoneCall size={20} /> {`(+91)-9477279170`}
                    </div>
                    <div className='flex items-center justify-start gap-6 z-10'>
                        <Facebook className='hover:text-blue-500' />
                        <Youtube className='hover:text-red-500' />
                        <Link href={`https://web.whatsapp.com/`}><FaWhatsapp size={24} className='hover:text-lime-500' /></Link>
                    </div>
                </div>

            </div>

            <div className='flex items-center justify-between px-5 lg:px-32 mt-5 '>
                <div className='flex items-center justify-start gap-5 z-10'>

                    {footers && footers.map((item, i) => <Link href={item.href}
                        className='text-gray-100 hover:underline hover:text-lime-500' key={i}>{item.label}</Link>)}
                </div>
                <div className='text-gray-100 z-10'>
                    @2024 parthasarathi gayen- All Right Reserved
                </div>
            </div>
            {/* Decoration image */}
            <img src="/abstract2.svg" alt="" className='h-full w-auto absolute top-0 left-0 ' />
            <img src="/abstract1.svg" alt="" className='h-full w-auto absolute top-0 right-0' />

        </section>
    )
}

