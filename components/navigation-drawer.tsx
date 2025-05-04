'use client'

import * as React from "react"
import { Menu } from "lucide-react"
import Link from "next/link"
import Logo from "@/components/logo.webp"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const navigationItems = [
    { title: 'Home', href: '/' },
    { title: 'Discord', href: 'https://discord.gg/gyCxmDDdJH' },
    { title: 'Resources', href: '/resources/sw' },
    //{ title: 'Halo Resources', href: '/resources/halo' },
    //{ title: 'BSG Resources', href: '/resources/bsg' },
    { title: 'Tabletop Simulator', href: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3281524362/' },
    { title: 'Star Forge Fleet Builder', href: 'https://star-forge.tools/' },
    { title: 'Armada Legacy', href: 'https://www.armadalegacy.com/' },
];

export function NavigationDrawer() {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleDrawer = () => setIsOpen(!isOpen)

    React.useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsOpen(false)
        }

        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [])

    return (
        <>
            <div className="w-full flex gap-4 p-2 absolute top-0 z-30">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleDrawer}
                    aria-label="Open navigation menu"
                    className="p-2"
                >
                    <Menu className="h-6 w-6" color="white" />
                </Button>
            </div>

            <div
                className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
            />

            <div
                className={`fixed top-0 left-0 h-full w-[300px] sm:w-[400px] bg-black z-40 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                aria-label="Navigation menu"
                role="dialog"
                aria-modal="true"
            >
                <div className="py-8 px-16 border-b">
                    <Image src={Logo} alt="" className="invert-[100%]" />
                </div>
                <nav className="px-4 pb-2 pt-4">
                    <ul className="space-y-2">
                        {navigationItems.map((item) => (
                            <li key={item.title}>
                                <Link
                                    href={item.href}
                                    className="block py-2 px-4 text-lg hover:bg-accent text-white hover:text-accent-foreground rotransition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}