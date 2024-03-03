import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CircularText from './CircularText'
import AnimatedText from './AnimatedText'

export default function HeroSection({ font }: any) {
    return (

        <section className=" w-full grid grid-cols-1 md:grid-cols-2 ">
            <div>
                <div className="flex items-center justify-center z-40 relative">
                    <CircularText
                        className={"animate-spin-slow stroke-cyan-500 fill-cyan-600"}
                    />
                    <Link
                        href="/"
                        target="_Blank"
                        className="top-1/2 left-1/2 absolute flex items-center justify-center
               -translate-x-1/2 -translate-y-1/2 bg-primary w-48 h-48 rounded-full"
                    >
                        <Image
                            src="/image/final.png"
                            height={250}
                            width={250}
                            alt='Image of writer'
                            className="overflow-hidden rounded-full h-48 w-auto"
                        />
                    </Link>
                </div>
            </div>
            <div className="relative">
                <div className="absolute top-0 -left-20 h-80 w-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
                <div className="absolute top-10 -right-10 h-80 w-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
                <div className="absolute top-0 -bottom-4 left-10 h-80 w-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 "></div>
                <div className="flex flex-col justify-start mt-5   ">
                    <AnimatedText
                        text="রক্তঝরা পথে রক্তের আলপনা আঁকতে আঁকতে তিনি রক্তকরবীর সন্ধানে
                   বাউল পথিক"
                        className="text-left !text-3xl "
                    />
                    <p className={`text-dark/80 font-thin first-letter:text-2xl ${font} `}>
                        চড়াই উৎরাইময় প্রবহমান জীবনের নানা কৌণিক প্রান্তবিন্দু ছুঁয়ে
                        ছুঁয়ে তাঁর অফুরাণ পথ চলা। চলার নেশায় তিনি চল-চঞ্চল। নানা
                        বর্ণে, নানা ছন্দে কুাটিকাময় সমকাল তাঁর কবিতায় গল্পে-উপন্যাসে
                        প্রবন্ধে ও নাটকে স্পন্দিত-নন্দিত। তাঁর লিখিত নাটক রাশিয়াতেও
                        অভিনীত ও প্রশংসিত।
                    </p>
                </div>
            </div>
        </section>
    )
}
