

import React from 'react'
const services = [
    {
        label: "Calculated Weather",
        flag: false,
        icon: "/image/books/rabindranath.jpg",
        text: "Built Wicket longer admire do barton vanity itself do in it."
    },
    {
        label: "Best Flights",
        flag: true,
        icon: "/image/books/rabindranath.jpg",
        text: "Engrossed listening. Park gate sell they west hard for the."
    },
    {
        label: "Local Events",
        flag: false,
        icon: "/image/books/nibedita.jpg",
        text: "Barton vanity itself do in it. Preferd to men it engrossed listening."
    },
    {
        label: "Customization",
        flag: false,
        icon: "/image/books/kabita150.jpg",
        text: "We deliver outsourced aviation services for military customers"
    },
]
const color = ["bg-blue-500", "border-blue-500", "bg-green-500", "border-green-500", "bg-rose-500", "border-rose-500", "bg-orange-500", "border-orange-500",]
export default function RecentBooks() {
    return (
        <section className='w-full flex flex-col items-center  lg:px-20'>
            <h3 className='text-lg uppercase text-gray-500'>CATEGORY</h3>
            <h1 className='text-2xl lg:text-4xl font-bold max-w-lg text-center mb-[50px]'>উল্লেখযোগ্য গ্রন্থাবলী</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 w-full '>
                {services && services.map((item, i) =>
                    <div key={i} className='relative '>
                        <div className={` w-full relative  rounded-2xl  p-5 border-gray-700 overflow-hidden h-80  bg-white z-10 shadow-xl ${item.flag ? 'shadow-lg' : ''}`}>
                            <img src={item.icon} alt="" className={`h-full w-full object-cover rounded-2xl hover:scale-125 transition-all duration-300 ring-2`} />
                            {/* <h2 className='font-bold my-4'>{item.label}</h2>
                            <p className=' text-gray-500 '>{item.text}</p> */}
                        </div>
                        <div className={`${item.flag ? 'absolute -bottom-10 -left-10 h-24 w-24 bg-[#DF6951] rounded-t-2xl ' : ''}`} />
                    </div>
                )}

            </div>
        </section>
    )
}

