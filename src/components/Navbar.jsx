import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { MapPin } from 'lucide-react'
import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { FaCaretDown } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'

const Navbar = ({location, getLocation, openDropdown, setOpenDropdown}) => {

    const {cartItem} = useCart()
    const [openNav, setOpenNav] = useState(false)
    
    const toggleDropdown = ()=>{
        setOpenDropdown(!openDropdown)
    }
    return (
        <div className='bg-slate-950/95 text-white shadow-2xl shadow-black/25 backdrop-blur-xl border-b border-white/10 py-4 px-4 md:px-0'>
            <div className='max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4'>
                {/* logo section */}
                <div className='flex flex-wrap items-center gap-4'>
                    <Link to={'/'} className='flex items-center gap-3'>
                        <div className='rounded-2xl bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 p-3 shadow-lg shadow-red-500/20'>
                            <span className='text-2xl font-black tracking-tight'>Z</span>
                        </div>
                        <div className='leading-tight'>
                            <h1 className='text-2xl font-bold tracking-tight'>Zcart</h1>
                            <p className='text-xs uppercase tracking-[0.35em] text-slate-400'>Tech marketplace</p>
                        </div>
                    </Link>

                    <div className='hidden md:flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-slate-200 shadow-sm shadow-black/10'>
                        <MapPin className='text-red-400' />
                        <div className='text-sm'>
                            {location ? <div className='space-y-0.5'>
                                <p className='font-semibold'>{location.county}</p>
                                <p className='text-xs text-slate-400'>{location.state}</p>
                            </div> : <span>Add Address</span>}
                        </div>
                        <FaCaretDown onClick={toggleDropdown} className='cursor-pointer text-slate-200 hover:text-white transition'/>
                    </div>

                    {openDropdown && (
                        <div className='absolute top-24 left-8 z-50 w-[280px] rounded-3xl border border-white/10 bg-slate-900/95 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl'>
                            <div className='mb-4 flex items-center justify-between gap-2'>
                                <h1 className='font-semibold text-white'>Change Location</h1>
                                <CgClose onClick={toggleDropdown} className='cursor-pointer text-slate-300 hover:text-white' />
                            </div>
                            <button onClick={getLocation} className='w-full rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 hover:opacity-95 transition'>Detect my location</button>
                        </div>
                    )}
                </div>

                {/* menu section */}
                <nav className='flex items-center gap-4'>
                    <ul className='hidden items-center gap-8 text-sm font-semibold uppercase tracking-wide md:flex'>
                        <NavLink to={'/'} className={({ isActive }) => `${isActive ? 'text-white border-b-2 border-red-500 pb-2' : 'text-slate-300 hover:text-white'} transition`}><li>Home</li></NavLink>
                        <NavLink to={'/products'} className={({ isActive }) => `${isActive ? 'text-white border-b-2 border-red-500 pb-2' : 'text-slate-300 hover:text-white'} transition`}><li>Products</li></NavLink>
                        <NavLink to={'/about'} className={({ isActive }) => `${isActive ? 'text-white border-b-2 border-red-500 pb-2' : 'text-slate-300 hover:text-white'} transition`}><li>About</li></NavLink>
                        <NavLink to={'/contact'} className={({ isActive }) => `${isActive ? 'text-white border-b-2 border-red-500 pb-2' : 'text-slate-300 hover:text-white'} transition`}><li>Contact</li></NavLink>
                    </ul>

                    <div className='flex items-center gap-3'>
                        <Link to={'/cart'} className='relative rounded-2xl bg-white/10 p-3 text-white transition hover:bg-white/20'>
                            <IoCartOutline className='h-6 w-6' />
                            <span className='absolute -top-2 -right-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-red-500 px-2 text-xs font-semibold text-white'>{cartItem.length}</span>
                        </Link>

                        <div className='hidden md:block'>
                            <SignedOut>
                                <SignInButton className='rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-500/20 hover:opacity-95 transition' />
                            </SignedOut>
                            <SignedIn>
                                <UserButton afterSignOutUrl='/' />
                            </SignedIn>
                        </div>

                        <button onClick={() => setOpenNav(!openNav)} className='rounded-2xl bg-white/10 p-3 text-white transition hover:bg-white/20 md:hidden'>
                            {openNav ? <HiMenuAlt3 className='h-6 w-6' /> : <HiMenuAlt1 className='h-6 w-6' />}
                        </button>
                    </div>
                </nav>
            </div>
            <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav}/>
        </div>
    )
}

export default Navbar