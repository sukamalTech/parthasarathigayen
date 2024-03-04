import { Noto_Serif_Bengali, Tiro_Bangla, Noto_Sans_Bengali } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import RecentBooks from "@/components/RecentBooks";
import Galary from "@/components/Galary";
import MostPopular from "@/components/MostPopular";
import Review from "@/components/Review";

const font1 = Noto_Serif_Bengali({ subsets: ["latin"], weight: ["400"] });
const font3 = Noto_Sans_Bengali({ subsets: ["latin"], weight: ["800"] });
const font2 = Tiro_Bangla({ subsets: ["latin"], weight: ["400"] });
export default function Home() {
  return (

    <main className=" h-full w-full px-5 ">

      <HeroSection font={font3.className} />
      <div className="h-32 w-52 translate-y-20">
        <img src="/Group70.svg" alt="" className="h-full w-full object-contain  " />
      </div>
      <RecentBooks />
      <div className="flex justify-end w-full fill-sky-700">

        <div className="h-32 w-52 translate-y-20">
          <img src="/Group70.svg" alt="" className="h-full w-full object-contain  " />
        </div>
      </div>
      <MostPopular />
      <Galary />
      <Testimonials />
      {/* <Review /> */}


    </main>
  );
}
