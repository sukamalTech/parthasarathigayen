"use client"
import React from 'react'
import { InputBox, TextArea } from './Inputs'
import { useForm } from 'react-hook-form'
export interface Review {
    name: string;
    designation: string;
    email?: string;
    bookName: string;
    review: string
}
export default function Review() {
    const { register, handleSubmit, formState: { errors } } = useForm<Review>({
        defaultValues: {
            name: "",
            designation: "",
            email: "",
            bookName: "",
            review: ""
        }
    })
    const onsubmit = (data: Review) => {
        console.log(data);

    }
    return (
        <section className='w-full min-h-screen px-5 md:px-10 lg:px-20 '>
            <h1 className='text-3xl md:text-4xl'>Have you read any book? submit a review</h1>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit(onsubmit)}>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <InputBox label='আপনার নাম' register={register} fieldname='name' errors={errors?.name} required={true} />
                </div>

                <button type='submit'>Submit</button>
            </form>


        </section>
    )
}
