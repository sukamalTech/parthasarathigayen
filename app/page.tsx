import { Noto_Serif_Bengali, Tiro_Bangla, Noto_Sans_Bengali } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import RecentBooks from "@/components/RecentBooks";
import Galary from "@/components/Galary";
import MostPopular from "@/components/MostPopular";
import Review from "@/components/Review";
import { Metadata } from "next";
import WhileInView from "@/components/WhileInView";
import SlideFromLeft from "@/components/SlideFromLeft";
export const metadata: Metadata = {
  title: 'পার্থসারথি গায়েন',
  description: `রবীন্দ্র গবেষক ও গীতা আলোচক- কবি, উপনাসিক, প্রাবন্ধিক শ্রী পার্থসারথি গায়েন বাংলা সাহিত্যর অন্যতম উল্লেখযোগ্য নাম`,
  keywords: ['পার্থসারথি গায়েন', 'মৃত্যুঞ্জয় রবীন্দ্রনাথ', 'ম্যানগ্রোভ', 'শ্রীমদ ভগবদগীতা ও দিব্যজীবন'],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
}
const font1 = Noto_Serif_Bengali({ subsets: ["latin"], weight: ["400"] });
const font3 = Noto_Sans_Bengali({ subsets: ["latin"], weight: ["800"] });
const font2 = Tiro_Bangla({ subsets: ["latin"], weight: ["400"] });
export default function Home() {
  return (

    <main className=" h-full w-full px-5 ">

      <HeroSection font={font3.className} />
      <div className="h-32 w-52 translate-y-44">
        <img src="/Group70.svg" alt="" className="h-full w-full object-contain  " />
      </div>
      <WhileInView>

        <RecentBooks />
      </WhileInView>
      <div className="flex justify-end w-full fill-sky-700">

        <div className="h-32 w-52 -translate-y-16">
          <img src="/Group70.svg" alt="" className="h-full w-full object-contain  " />
        </div>
      </div>
      <WhileInView>

        <MostPopular />
      </WhileInView>
      <SlideFromLeft>

        <Galary />
      </SlideFromLeft>
      <Testimonials />
      {/* <Review /> */}


    </main>
  );
}
