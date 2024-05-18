import { BookOpenCheck, Github, Home, Instagram, Linkedin, Notebook, PaperclipIcon, Phone, Pointer, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const NavButton = ({ x, y, label, link, icon, newTab }) => {
    const getIcon = (icon) => {
        switch (icon) {
            case "home":
                return <Home className='w-full h-auto' strokeWidth={1.5} />
            case "about":
                return <User className='w-full h-auto' strokeWidth={1.5} />
            case "courses":
                return <BookOpenCheck className='w-full h-auto' strokeWidth={1.5} />
            case "contact":
                return <Phone className='w-full h-auto' strokeWidth={1.5} />
            case "github":
                return <Github className='w-full h-auto' strokeWidth={1.5} />
            case "linkedin":
                return <Linkedin className='w-full h-auto' strokeWidth={1.5} />
            case "resume":
                return <PaperclipIcon className='w-full h-auto' strokeWidth={1.5} />
            case "insta":
                return <Instagram className='w-full h-auto' strokeWidth={1.5} />
            default:
                return <Home className='w-full h-auto' strokeWidth={1.5} />
        }
    }
    // console.log(x, y, label, link, icon, newTab);
    return (
        <div className='absolute cursor-pointer z-45' style={{ transform: `translate(${x},${y})` }}>
            <Link href={link}
                target={newTab ? "_blank" : "_self"}
                className='text-foreground rounded-full flex items-center bg-background/20 z-45 backdrop-blur-[6px]
                border-yellow-200/30 border-solid border-[1px] shadow-glass-inset hover:shadow-glass-sm'
                aria-label={label} name={label} >
                <span className='p-4 relative peer w-14 h-14 animate-spin-slow-reverse hover:text-accent group-hover:pause'>
                    {getIcon(icon)}
                    <span className='peer bg-transparent absolute top-0 left-0 w-full h-full'></span>
                    <span className='absolute hidden peer-hover:block px-2 py-1 left-full top-1/2 mx-2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap'>
                        {label}
                    </span>
                </span>


            </Link>
        </div>
    )
}

export default NavButton
