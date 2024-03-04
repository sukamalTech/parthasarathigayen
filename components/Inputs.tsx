"use client"
import { cn } from "@/lib/tw-merge";
import { ChevronDown } from "lucide-react";
import { useState } from "react"
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Review } from "./Review";
import { constants } from "buffer";
interface DropdownProps {
    placeholder: string;
    options?: {
        label: string;
        value: string;
    }[];
    icon?: string;
    label?: string;
    className?: string;

}
interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    fieldname: "name" | "designation" | "email" | "bookName" | "review";
    required: boolean
    errors: FieldErrors<Review> | undefined
    placeholder?: string;
    icon?: string;
    label?: string;
    className?: string;
    register: UseFormRegister<Review>

}
interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
    fieldname: "name" | "designation" | "email" | "bookName" | "review";
    errors: any
    placeholder?: string;
    icon?: string;
    label?: string;
    className?: string;
    register: UseFormRegister<Review>

}
export function Dropdown({ placeholder, options, icon, label, className }: DropdownProps) {
    const [selected, setSelected] = useState(placeholder)

    return (
        <div>
            {label ? <p className="text-sm text-white mb-2">{label}</p> : <></>}
            <details className="relative group w-full" >
                <summary className={cn("text-gray-400 bg-zinc-950 hover:opacity-80 h-11  w-full font-medium rounded-lg text-sm px-5 py-2.5  flex items-center justify-between border border-gray-700", className)}>
                    <p className="flex items-center justify-start gap-2 divide-y-0">{icon ? <img src={icon} className="size-4 " /> : <></>}
                        <span className={icon ? 'pl-2 border-l border-gray-800 text-sm' : ''}>{selected}</span> </p>

                    <ChevronDown size={20} className="group-open:rotate-180 transition-all duration-300" />
                </summary>
                <div className="z-10  bg-zinc-800 divide-y divide-gray-700 rounded-md w-full dark:bg-gray-700">
                    <div className="py-2 text-sm text-gray-500 dark:text-gray-200  ">
                        {options && options.map((item, i) =>

                            <div onClick={() => setSelected(item.label)}
                                className=" w-full inline-flex h-10 px-4 items-center py-2 focus:bg-zinc-950 focus:text-white cursor-pointer hover:bg-zinc-950 ">
                                {item.label}
                            </div>
                        )}


                    </div>
                </div>
            </details>
        </div>
    )
}


export function InputBox({ placeholder, icon, label, className, register, fieldname, errors, required, ...props }: InputProps) {
    return (
        <div className="relative w-full h-auto ">
            {label ? <p className="text-xl text-gray-700 mb-2">{label}</p> : <></>}
            <input type="text" id="" placeholder={placeholder} {...props}
                className={cn("h-11 w-full focus:outline-none  text-gray-700 border border-gray-500 rounded-md px-3", className, icon && 'px-10')}
                {...register(`${fieldname}`, { required: required })}
            />
            {errors && <span className="text-sm text-red-500">This field is required</span>}
            {icon ? <img src={icon} alt="" className="size-5 absolute left-2 top-1/2 -translate-y-1/2" /> : <></>}

        </div>
    )
}
export function TextArea({ placeholder, icon, label, className, register, fieldname, errors, ...props }: TextAreaProps) {
    return (
        <div className="relative w-full h-auto ">
            {label ? <p className="text-xl text-gray-700 mb-2">{label}</p> : <></>}
            <textarea id="" placeholder={placeholder} {...props}
                className={cn("h-32 w-full focus:outline-none  text-gray-700 border border-gray-500 rounded-md px-3", className, icon && 'px-10')}
                {...register(`${fieldname}`)}
            />
            {icon ? <img src={icon} alt="" className="size-5 absolute left-2 top-1/2 -translate-y-1/2" /> : <></>}

        </div>
    )
}
