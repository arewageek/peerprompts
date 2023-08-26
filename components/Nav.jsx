'use client'
import Link from "next/link"
import { useState, useEffect } from "react"
import { signIn, Signout, useSession, getProviders } from 'next-auth/react'

export const Nav = () => {
    const [showMobileNav, setShowMobileNav] = useState(false)
    const [authenticated, setAuthenticated] = useState(true)
    const [providers, setProviders] = useState(null)

    useEffect(() => {
        const updateProviders = async () => {
            const response = await getProviders();
            setProviders(response)
        }
        updateProviders()
    }, [])
    
    return (
        <nav className="w-full py-6 px-5 bg-transparent backdrop-blur-sm shadow-md">
            <div className="flex justify-between items-center">
                <div className="brand font-bold text-blue-600 text-xl flex space-x-2 items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                        </svg>
                    </span>
                    <span className="hidden md:block"  onClick={() => setAuthenticated(e => !e)}>
                        Peer Prompts
                    </span>
                </div>

                <div className="nav-links">
                    {/* desktop nav */}
                    <div className="hidden md:flex justify-end space-x-4 items-center text-sm font-bold">
                        <Link href="/feeds" className="nav-btn flex justify-center items-center space-x-1 hover:animate-pulse transition-all">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                                    <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                                </svg>
                            </span>
                            <span>
                                Create Prompt
                            </span>
                        </Link>
                        {
                            authenticated ? <>
                                <Link href="/feeds" className="nav-btn-black flex justify-center items-center space-x-1 hover:animate-pulse transition-all">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" clipRule="evenodd" />
                                            <path fillRule="evenodd" d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z" clipRule="evenodd" />
                                        </svg>

                                    </span>
                                    <span>
                                        Logout
                                    </span>
                                </Link>
                            </>: (
                                providers && Object.values(providers).map(provider => <>
                                    <button 
                                        type="button" 
                                        key={provider.name} 
                                        className="nav-btn-black flex justify-center items-center space-x-1 hover:animate-pulse transition-all"
                                        onClick={() => signIn(provider.id)}
                                    >
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" clipRule="evenodd" />
                                                <path fillRule="evenodd" d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z" clipRule="evenodd" />
                                            </svg>

                                        </span>
                                        <span>
                                            Signin
                                        </span>
                                    </button>
                                </>)
                                
                            )
                        }
                        
                    </div>


                    {/* mobile nav */}
                    <div className="block md:hidden" onClick={() => setShowMobileNav(e => !e)}>
                        <div className="hamburger relative">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>

                        
                        {showMobileNav && <div className="absolute right-5 px-4 py-5 backdrop-blur-sm bg-white shadow-lg m-2 rounded-l-2xl rounded-br-2xl text-xs z-auto">
                            <div className="mobile-menu-items flex flex-col space-y-2 font-bold">
                                <Link href="/">Create Prompt</Link>
                                <Link href="/">Logout</Link>
                            </div>
                        </div> }
                    </div>
                </div>
            </div>
        </nav>
    )
}
