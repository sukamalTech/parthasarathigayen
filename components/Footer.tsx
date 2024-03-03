import { Facebook, Globe, Linkedin, Mail, PhoneCall, Youtube } from 'lucide-react'
import React from 'react'
const footers = ["Process", "Benefits", "Services", "Portfolio", "FAQ"]
export default function Footer() {
    return (
        <section className='h-[300px] relative bg-zinc-800 text-white'>

            <div className=' w-[80%] flex justify-between items-center mx-auto pt-10  border-b pb-20 border-gray-300'>
                <div className='z-10'>
                    <h3 className='text-3xl text-gray-100 mb-3'>P S <span className='text-lime-500'>Gyan</span> </h3>
                    <p className='text-gray-100 text-sm max-w-xs'>Koronix is a degital marketing agency based on USA and various branch office at India, UK and any leading countries</p>
                </div>
                <div className='flex flex-col w-60 h-full gap-3 text-gray-100 '>
                    <div className='flex items-center justify-start gap-5 z-10'>
                        <Mail size={20} /> psgyan@gmail.com
                    </div>
                    <div className='flex items-center justify-start gap-5 z-10'>
                        <PhoneCall size={20} /> {`(002)-2157 2736`}
                    </div>
                    <div className='flex items-center justify-start gap-6 z-10'>
                        <Facebook />
                        <Youtube />
                        <Globe />
                        <Linkedin />
                    </div>
                </div>

            </div>

            <div className='flex items-center justify-between px-5 lg:px-32 mt-5 '>
                <div className='flex items-center justify-start gap-5 z-10'>

                    {footers && footers.map((item, i) => <p className='text-gray-100' key={i}>{item}</p>)}
                </div>
                <div className='text-gray-100 z-10'>
                    @2024 psgyan- All Right Reserved
                </div>
            </div>
            {/* Decoration image */}
            <img src="/abstract2.svg" alt="" className='h-full w-auto absolute top-0 left-0 ' />
            <img src="/abstract1.svg" alt="" className='h-full w-auto absolute top-0 right-0' />

        </section>
    )
}

