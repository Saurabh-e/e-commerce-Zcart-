import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ResponsiveMenu = ({ openNav, setOpenNav }) => {
    const { user } = useUser()
    return (
        <div className={`${openNav ? 'left-0' : '-left-[100%]'} fixed inset-y-0 z-20 flex h-screen w-[80%] flex-col justify-between bg-slate-950 text-white px-6 pb-8 pt-16 shadow-2xl shadow-black/40 transition-all duration-300 md:hidden`}>
            <div>
                <div className='flex items-center gap-4 rounded-3xl bg-white/5 p-4 shadow-lg shadow-black/20'>
                    {user ? <UserButton size={50} /> : <FaUserCircle size={50} className='text-slate-300' />}
                    <div>
                        <h1 className='text-lg font-semibold'>{user ? `Hello, ${user.firstName}` : 'Welcome Guest'}</h1>
                        <p className='text-sm text-slate-400'>Explore deals in the mobile menu</p>
                    </div>
                </div>
                <nav className='mt-12'>
                    <ul className='flex flex-col gap-6 text-2xl font-semibold'>
                        <Link to={'/'} onClick={()=>setOpenNav(false)} className='rounded-3xl bg-white/5 px-4 py-3 transition hover:bg-white/10'><li>Home</li></Link>
                        <Link to={'/products'} onClick={()=>setOpenNav(false)} className='rounded-3xl bg-white/5 px-4 py-3 transition hover:bg-white/10'><li>Products</li></Link>
                        <Link to={'/about'} onClick={()=>setOpenNav(false)} className='rounded-3xl bg-white/5 px-4 py-3 transition hover:bg-white/10'><li>About</li></Link>
                        <Link to={'/contact'} onClick={()=>setOpenNav(false)} className='rounded-3xl bg-white/5 px-4 py-3 transition hover:bg-white/10'><li>Contact</li></Link>
                    </ul>
                </nav>
            </div>
            <div className='space-y-4'>
                <div className='rounded-3xl bg-gradient-to-r from-red-500 to-pink-500 px-4 py-4 text-sm font-semibold text-white shadow-lg shadow-red-500/30'>
                    <p className='uppercase tracking-[0.2em]'>Weekly flash sale</p>
                    <p className='mt-1 text-xs opacity-90'>Up to 30% off selected electronics.</p>
                </div>
                <Link to={'/cart'} onClick={()=>setOpenNav(false)} className='block rounded-3xl bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/20'>View Cart</Link>
            </div>
        </div>
    )
}

export default ResponsiveMenu