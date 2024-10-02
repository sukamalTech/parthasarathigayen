// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import CircularText from './CircularText'
// import AnimatedText from './AnimatedText'

import Link from "next/link";

// export default function HeroSection({ font }: any) {
//     return (

//         <section className=" w-full grid grid-cols-1 md:grid-cols-2 ">
//             <div>
//                 <div className="flex items-center justify-center z-40 relative">
//                     <CircularText
//                         className={"animate-spin-slow stroke-cyan-500 fill-cyan-600"}
//                     />
//                     <Link
//                         href="/"
//                         target="_Blank"
//                         className="top-1/2 left-1/2 absolute flex items-center justify-center
//                -translate-x-1/2 -translate-y-1/2 bg-primary w-48 h-48 rounded-full"
//                     >
//                         <Image
//                             src="/image/final.png"
//                             height={250}
//                             width={250}
//                             alt='Image of writer'
//                             className="overflow-hidden rounded-full h-48 w-auto"
//                         />
//                     </Link>
//                 </div>
//             </div>
//             <div className="relative">
//                 <div className="absolute top-0 -left-20 h-80 w-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
//                 <div className="absolute top-10 -right-10 h-80 w-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
//                 <div className="absolute top-0 -bottom-4 left-10 h-80 w-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 "></div>
//                 <div className="flex flex-col justify-start mt-5   ">
//                     <AnimatedText
//                         text="রক্তঝরা পথে রক্তের আলপনা আঁকতে আঁকতে তিনি রক্তকরবীর সন্ধানে
//                    বাউল পথিক"
//                         className="text-left !text-3xl "
//                     />
//                     <p className={`text-dark/80 font-thin first-letter:text-2xl ${font} `}>
//                         চড়াই উৎরাইময় প্রবহমান জীবনের নানা কৌণিক প্রান্তবিন্দু ছুঁয়ে
//                         ছুঁয়ে তাঁর অফুরাণ পথ চলা। চলার নেশায় তিনি চল-চঞ্চল। নানা
//                         বর্ণে, নানা ছন্দে কুাটিকাময় সমকাল তাঁর কবিতায় গল্পে-উপন্যাসে
//                         প্রবন্ধে ও নাটকে স্পন্দিত-নন্দিত। তাঁর লিখিত নাটক রাশিয়াতেও
//                         অভিনীত ও প্রশংসিত।
//                     </p>
//                 </div>
//             </div>
//         </section>
//     )
// }


export default function HeroSection() {
    return (
        <section className='h-fit w-full flex flex-col  lg:flex-row   lg:px-16  px-2'>
            <div className='w-full lg:w-[42%] flex flex-col items-start lg:pr-10 relative pt-20 '>
                <div className='text-pink-500 text-xs lg:text-sm font-semibold flex items-center justify-center gap-3 py-3 rounded-full w-52 bg-white px-5 mb-10'>
                    লেখকের জীবন দর্শন

                </div>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold  w-full mb-4'>নিরন্তর <span className='text-pink-500'>প্রচেষ্টা দ্বারা</span></h1>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold w-full mb-4'> <span className='text-pink-500'> নিজেকে উন্নীত</span></h1>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold w-full mb-4'> করাই জীবনের ধর্ম</h1>
                <p className='text-gray-500 mt-5 text-2xl'>অসফল হয়নি  বলে কখনো কোন মানুষ বিখ্যাত হয়না , বিখ্যাত হয় অসফলতা তাকে হতোদ্যম করতে পারেনি বলে </p>
                <div className='flex flex-row  mt-5 items-center justify-start gap-5   w-full'>
                    <Link href="/books"
                        className='bg-purple-600 hover:bg-purple-700 text-white h-12 px-10 rounded-full  flex items-center justify-center'>
                        লেখকের বই
                    </Link>
                    <Link href="/about" className='h-12 w-auto px-4 flex items-center justify-center gap-3 rounded-full border border-purple-600 text-purple-600 hover:bg-purple-50'>
                        লেখকের জীবনী
                    </Link>
                </div>

            </div>
            <div className='relative w-full h-full lg:h-[700px] lg:w-[58%] p-5 lg:p-16 grid grid-cols-2 gap-3 '>
                <img src="/layer.svg" alt="Image"
                    className='w-full h-auto object-contain absolute  ' />
                <div className='flex flex-col items-center gap-5'>
                    <img src="/hero1.jpeg" alt="travel Image"
                        className='h-1/2 w-full object-cover z-10 rounded-3xl ' />
                    <img src="/hero2.jpeg" alt="travel Image"
                        className='h-1/2 w-full object-cover z-10 rounded-3xl' />
                </div>
                <div className='relative flex flex-col justify-center '>
                    <img src="/hero3.jpeg" alt="travel Image"
                        className='h-auto w-full object-cover z-10 rounded-3xl ' />
                    <div className=' absolute z-20 bg-white right-0 top-[65%] translate-x-20 h-10 w-40 px-4 flex items-center justify-center gap-3 rounded-full border '>
                        <img src="/travel2/location.svg" alt="svg icon" className='h-7 w-7 object-contain' />
                        Top place
                    </div>

                </div>
                <div className='h-12 w-12 flex items-center justify-center absolute left-10 top-[45%] bg-pink-500 rounded-full text-white z-20'>
                    <img src="/travel2/send.svg" alt="travel Image"
                        className='h-7 w-7 object-cover ' />
                </div>
                <div className='h-12 w-12 flex items-center justify-center absolute left-2/3 bottom-10 bg-orange-500 rounded-full text-white z-20'>
                    <img src="/travel2/user-plus.svg" alt="travel Image"
                        className='h-7 w-7 object-cover ' />
                </div>


            </div>
        </section>
    )
}
