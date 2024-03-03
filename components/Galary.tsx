import React from 'react'
const works = ["galary1", "galary2", "galary3", "galary4", "galary5", "galary6", "galary7", "galary8",]
export default function Galary() {
    return (
        <section className='relative flex flex-col items-center w-full bg-white h-auto pt-5 md:pt-16 pb-16'>
            <h1 className='text-2xl md:text-4xl font-semibold text-center mb-5'>Our Beautiful Pictures</h1>
            <p className='text-gray-600 text-sm lg:text-base max-w-sm text-center'>Lorem ipsum dolor sit, amet consectetur umque libero unde, nesciunt at m</p>
            <p className='px-5 py-3 border rounded-md my-10'>Load More</p>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                {works && works.map((item, i) =>
                    <div className={`h-72 w-full rounded-md overflow-hidden ${i % 2 == 0 ? `hidden lg:block lg:translate-y-16` : ``}`} key={i}>
                        <img src={`/image/galary/${item}.jpg`} alt={item} className='h-full w-full object-cover' />
                    </div>
                )}

            </div>
            <div className="absolute top-0 -right-10 size-[200px] bg-gradient-to-br from-lime-400 blur-[120px]" />

        </section>
    )
}