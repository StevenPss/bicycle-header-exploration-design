import React, { useEffect, useState } from 'react'
import gsap, {Expo} from 'gsap'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleHamburger = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        gsap.from(
            ".navbar > div > div",
            {
                duration: 2,
                opacity: 0,     
                y: 30,
                ease: Expo.easeInOut,
                delay: 4.2,
                stagger: 0.1
            } 
        )
    }, [])

    return (
        <nav className="navbar bg-transparent sm:navbar-bg">
            <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button onClick={toggleHamburger} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                        
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <h1 className="font-bold text-xl text-yellow-500">Conceptride</h1>
                        </div>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4 navbar-links">
                                <a href="#home" className="text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>
                                <a href="#shop" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Shop</a>
                                <a href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="#home" className="text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>
                    <a href="#shop" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Shop</a>
                    <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
