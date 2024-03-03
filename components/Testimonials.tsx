import { testimonials } from '@/lib/testimonials'
import { Grip, MoveLeft, MoveRight, QuoteIcon, Star } from 'lucide-react'
import React from 'react'

export default function Testimonials() {
    return (
        <section className='w-full h-auto p-5 md:p-10 lg:p-20 flex flex-col items-center gap-3'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-mono'>What our customer says</h2>
            <p className='max-w-sm text-center text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quibusdam recusandae assumenda corrupti excepturi dolor!</p>
            <div className='relative flex flex-col lg:flex-row w-full mt-10 '>
                <QuoteIcon className='rotate-180 absolute top-2 left-5 fill-sky-500 stroke-sky-500' />
                <div className='absolute bottom-2 left-2 hidden lg:grid grid-cols-2 gap-0'>
                    <Grip size={60} className=' stroke-sky-500' />


                </div>
                <div className=' w-[70%] lg:w-[30%] overflow-hidden h-72 max-w-xs  rounded-bl-full rounded-tl-full rounded-br-full '>
                    <img src={testimonials[0].imageUrl} alt="" className='w-full h-full rounded-tr-xl' />
                </div>
                <div className='w-full lg:w-[70%] flex flex-col px-5 lg:px-10 pt-10'>
                    <div className='w-full h-12 flex items-center justify-between'>
                        <div>
                            <p className='font-bold'>{testimonials[0].name}</p>
                            <p className='text-gray-500 text-sm'>{testimonials[0].designation}</p>
                        </div>
                        <div className='flex h-full items-center justify-end gap-2'>
                            <Star className='fill-orange-500 stroke-orange-500' />
                            <Star className='fill-orange-500 stroke-orange-500' />
                            <Star className='fill-orange-500 stroke-orange-500' />
                            <Star className='fill-orange-500 stroke-orange-500' />
                            <Star className='fill-gray-500 stroke-gray-500' />
                            <p className='font-semibold pl-3'>4.5</p>
                        </div>
                    </div>
                    <p className='text-gray-500 text-sm mt-5'>{testimonials[0].text}</p>
                    <div className='w-full h-12 flex items-center justify-between mt-10'>
                        <div className='flex h-10 gap-5'>
                            <div className='h-8 w-8 rounded-full hover:bg-sky-500 hover:text-white flex items-center justify-center'><MoveLeft size={15} /></div>
                            <div className='h-8 w-8 rounded-full bg-sky-500 text-white flex items-center justify-center'><MoveRight size={15} /></div>
                        </div>
                        <div className='flex h-full items-center justify-end gap-2'>
                            <div className='relative h-10 w-40'>
                                <img src="/avatar1.jpg" alt="Avatar Image" className='h-10 w-10 rounded-full ring-2 ring-gray-300 absolute top-0 left-0 z-10' />
                                <img src="/avatar20.jpg" alt="Avatar Image" className='h-10 w-10 rounded-full ring-2 ring-gray-300 absolute top-0 left-7 z-20' />
                                <img src="/avatar24.jpg" alt="Avatar Image" className='h-10 w-10 rounded-full ring-2 ring-gray-300 absolute top-0 left-14 z-30' />
                                <img src="/avatar30.jpg" alt="Avatar Image" className='h-10 w-10 rounded-full ring-2 ring-gray-300 absolute top-0 left-20 z-40' />
                                <div className='h-10 w-10 rounded-full ring-2 ring-gray-300 bg-sky-500 absolute top-0 left-28 z-50 flex items-center justify-center text-xs font-bold text-white'>1K+</div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

