import { books } from "@/lib/books";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
    title: 'পার্থসারথি গায়েন উল্লেখযোগ্য গ্রন্থাবলী',
    description: `যুগনায়ক বিবেকানন্দ, ম্যানগ্রোভ, নব আলোকে নিবেদিতা, মৃত্যু শোক মৃত্যু লোক ও মৃত্যুঞ্জয় রবীন্দ্রনাথ ,শ্রীমদ ভগবদগীতা ও দিব্যজীবন,`,
    keywords: ['পার্থসারথি গায়েন', 'মৃত্যুঞ্জয় রবীন্দ্রনাথ', 'ম্যানগ্রোভ', 'শ্রীমদ ভগবদগীতা ও দিব্যজীবন'],
    alternates: {
        canonical: '/books',
        languages: {
            'en-US': '/en-US',
        },
    },
}

export default function Books() {
    const BookCard = ({ key1, book }: any) => {
        return (
            <div
                key={key1}
                className="  hover:shadow-xl border rounded-md w-full h-full "
            >
                <div className="  ">
                    <div className="relative overflow-hidden ">
                        <img src={book.imageLocation} alt={book.name} className="w-full h-[70%] object-cover hover:scale-110 overflow-hidden transition-all duration-300" />
                    </div>
                    <Link
                        href={book.pdfLocation}
                        target="_blank"
                        className="   "
                    >
                        <p className="text-sm text-center mt-3 text-gray-600 hover:text-blue-500 hover:underline   underline-offset-2 ">
                            View First 10 Page
                        </p>
                    </Link>
                </div>
                <div className=" p-1 md:p-5 flex flex-col justify-center">
                    <h1 className="text-purple-900 text-lg md:text-xl font-bold m-1 md:mt-3 md:mb-5 text-center">
                        {book.name}
                    </h1>
                    <div className="flex items-center justify-start gap-2">

                        <h1 className="text-dark/90 text-sm">প্রকাশক: </h1>
                        <p>প্রভা প্রকাশনী </p>
                    </div>
                    <p className="text-sm bg-dark/20 p-1 rounded text-gray-500">
                        {book.pubiserAddress}
                    </p>
                    <div
                        className="text-sm mt-3"
                    >
                        <p className="text-blue-600">মূল্য - {book.price} টাকা</p>
                        <p>পৃষ্ঠা সংখ্যা -{book.pageNumber}</p>
                    </div>

                </div>
            </div>
        );
    };
    const BookCardMobile = ({ key1, book }: any) => {
        return (
            <div
                key={key1}
                className="grid grid-cols-5 p-1 shadow-2xl hover:shadow-blue-200 border "
            >
                <div className="col-span-5 p-2">
                    <h1 className="text-purple-900 text-lg md:text-xl font-bold m-1 md:mt-3 md:mb-5 text-center">
                        {book.name}
                    </h1>
                </div>
                <div className="col-span-2 p-1 ">
                    <div className="relative ">
                        {/* <div className='bg-dark  top-0 -right-3 -z-10 absolute w-[102%] h-[102%] rounded-2xl'/> */}
                        <img
                            width="200"
                            height="300"
                            src={book.imageLocation}
                            // src={profilePic}
                            alt="Book"
                            className="border-r-2 border-b border-5 border-dark border-solid"
                        />
                    </div>
                </div>
                <div className="col-span-3 p-1 md:p-3">
                    <h1 className="text-dark/90 text-md font-semibold">প্রকাশক</h1>
                    <p>প্রভা প্রকাশনী </p>
                    <p className="text-sm bg-dark/20 p-1 rounded ">
                        {book.pubiserAddress}
                    </p>
                    <div
                        className="bg-dark text-white text-sm hover:bg-light hover:text-dark
           px-2 py-1 flex justify-between my-1"
                    >
                        <span>মূল্য - {book.price} টাকা</span>
                        <span>পৃষ্ঠা সংখ্যা -{book.pageNumber}</span>
                    </div>

                </div>
                <Link
                    href={book.pdfLocation}
                    target="_blank"
                    className=" col-span-5 text-md underline decoration-primary  underline-offset-4 text-primary  "
                >
                    <p className="first-letter:text-md first-letter:font-extrabold">
                        View First 10 Page
                    </p>
                </Link>
            </div>
        );
    };

    return (
        <>


            <div className="bg-light">
                <div className="hidden md:inline">
                    <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 p-10 gap-16 px-5 lg:px-20">
                        {books.map((book, index) => (
                            <div key={index} className="w-full h-full">

                                <BookCard key1={index} book={book} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className=" md:hidden">
                    <div className=" grid grid-cols-1   p-2 gap-4">
                        {books.map((book, index) => (
                            <BookCardMobile key={index} book={book} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
