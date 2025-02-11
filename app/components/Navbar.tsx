"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {isOpen && (
                <div className="fixed inset-1 bg-black/30 backdrop-blur-sm z-30" />
            )}
            <div className='flex flex-col gap-2 lg:hidden justify-center active:z-50 selection:' onClick={() => { setIsOpen(!isOpen) }}>
                <div className='h-[1px] w-6 bg-white'></div>
                <div className='h-[1px] w-6 bg-white'></div>

            </div>
            <nav className={`bg-black w-[90vw] h-full flex items-center justify-center lg:hidden absolute z-40 rounded-xl ${isOpen ? `bottom-0 ` : `bottom-full`} transition-all`}>
                <div className={`flex flex-col gap-16 items-center justify-center py-16`}>
                    <Link href="/" className=' transition-all focus:text-2xl'>Home</Link>
                    <Link href='./project-page' className='hover:font-black transition-all focus:text-2xl'>Projects</Link>
                    <Link href="/contacts" className='hover:font-black transition-all focus:text-2xl'>Contact</Link>
                    <Link href="/about" className='hover:font-black transition-all focus:text-2xl'>About</Link>
                    <button className='bg-stone-800 rounded-lg p-4 h-10 w-20 m-2 flex items-center justify-center lg:hidden' onClick={() => setIsOpen(!isOpen)}>
                        <h1 className='font-thin'>Close</h1>
                    </button>
                </div>
            </nav>
        </>
    );
}
