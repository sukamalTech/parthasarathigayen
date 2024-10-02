import { awards } from '@/lib/awards'
import React from 'react'

export default function Awards() {
    return (
        <section className='w-full h-auto flex flex-col items-center bg-black mt-20'>
            {/* <h4 className='text-sm lg:text-base uppercase  mt-10 lg:mt-20'>Blog</h4> */}
            <h2 className='text-lime-500 font-bold text-2xl md:text-3xl  px-5 lg:px-0 text-center lg:mb-12 mt-10'>
                উল্লেখযোগ্য পুরস্কার
            </h2>
            <div className=' w-full h-auto pb-20 grid grid-cols-1 lg:grid-cols-2 px-5 lg:px-20 gap-10'>
                {awards && awards.map((item, i) =>

                    <div key={i} className='w-full h-auto  border border-gray-700 rounded-md grid grid-cols-12 overflow-hidden'>
                        <img src={item.picUrl} alt={item.label} className='h-full max-h-[200px] col-span-4 object-fill' />
                        <div className='p-10 flex flex-col items-start gap-2 col-span-8'>
                            <h6 className='text-lime-500 text-sm'>{item.label}</h6>
                            <h6 className='text-white font-bold'>{item.heading}</h6>
                            <h6 className='text-gray-500 text-sm'>{item.text}</h6>

                        </div>
                    </div>
                )}

            </div>
        </section>
    )
}
