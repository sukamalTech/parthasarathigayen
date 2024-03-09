import React from 'react'
const destinations = [
    { price: "$5,42k", place: "Rome, Italty", time: "10 Days Trip", url: "/image/books/rabindranath.jpg" },
    { price: "$5,42k", place: "London, UK", time: "12 Days Trip", url: "/image/books/mangrove.jpg" },
    { price: "$15k", place: "Full Europe", time: "15 Days Trip", url: "/image/books/gita1.jpg" },
]
export default function MostPopular() {
    return (
        <section className='relative w-full h-auto flex flex-col items-center mt-20 lg:px-32'>
            <h3 className='text-pink-500 text-center uppercase'>Top Selling</h3>
            <h2 className='text-3xl lg:text-5xl text-center'>উল্লেখযোগ্য গ্রন্থাবলী</h2>
            <div className='relative grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-20 md:gap-5 w-full mt-10'>
                {destinations && destinations.map((d, i) =>
                    <div key={i} className='w-full h-[400px] rounded-2xl overflow-hidden shadow-xl z-10 bg-white'>
                        <div className='h-[100%] w-full'>
                            <img src={d.url} alt="" className='h-full w-full object-cover' />
                        </div>
                        <div className='flex items-center justify-between text-gray-500 h-12 p-5'>
                            <p>{d.place}</p>
                            <p>{d.price}</p>
                        </div>
                        <div className='flex h-12 items-center justify-start gap-3 p-5'>
                            <img src="/travel/navigation1.svg" alt="Navigation icon" />
                            {d.time}
                        </div>
                    </div>
                )}

                <img src="/Decore.svg" alt="Decoration" className='absolute top-32 -right-16 hidden md:block  ' />
            </div>
            <div className="absolute -top-20 -left-10 size-[300px] bg-gradient-to-br from-orange-400 blur-[120px]" />

        </section>
    )
}