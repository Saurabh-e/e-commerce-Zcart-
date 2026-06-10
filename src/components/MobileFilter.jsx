import React from 'react'
import { FaFilter } from 'react-icons/fa6'
import { useData } from '../context/DataContext'


const MobileFilter = ({ openFilter, setOpenFilter, search, setSearch, brand, setBrand, rating, setRating, priceRange, setPriceRange, category, setCategory, handleBrandChange, handleCategoryChange }) => {
    const { categoryOnlyData, brandOnlyData } = useData()

    const toggleFilter = ()=>{
        setOpenFilter(!openFilter)
    }
    return (
        <>
            <div className='bg-slate-900 text-white flex justify-between items-center md:hidden px-4 py-3 mt-5 rounded-3xl border border-white/10 shadow-lg shadow-black/20'>
                <div>
                  <h1 className='font-semibold text-lg'>Filters</h1>
                  <p className='text-sm text-slate-400'>Tap to open filter panel</p>
                </div>
                <FaFilter onClick={toggleFilter} className='text-red-400 cursor-pointer' />
            </div>
            {
                openFilter ? <div className='bg-slate-950 text-slate-100 p-4 md:hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/30 mt-4'>
                    <input type="text"
                        placeholder='Search products'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className='bg-slate-900 w-full rounded-2xl border border-white/10 px-4 py-3 text-sm text-slate-100 outline-none'
                    />
                    <h1 className='mt-5 font-semibold text-lg'>Category</h1>
                    <div className='mt-3 grid gap-2'>
                        {
                            categoryOnlyData?.map((item, index) => {
                                return <button key={index} value={item} onClick={handleCategoryChange} className={`rounded-full px-4 py-3 text-left text-sm font-medium transition ${category === item ? 'bg-red-500 text-white' : 'bg-white/5 text-slate-200 hover:bg-white/10'}`}>{item}</button>
                            })
                        }
                    </div>
                    <h1 className='mt-5 font-semibold text-lg mb-3'>Brand</h1>
                    <select
                        className='bg-slate-900 w-full rounded-2xl border border-white/10 px-4 py-3 text-sm text-slate-100 outline-none'
                        value={brand}
                        onChange={handleBrandChange}
                    >
                        {
                            brandOnlyData?.map((item, index) => {
                                return <option key={index} value={item}>{item === 'All' ? 'All Brands' : item.toUpperCase()}</option>
                            })
                        }
                    </select>
                    <h1 className='mt-5 font-semibold text-lg mb-3'>Rating</h1>
                    <select
                        className='bg-slate-900 w-full rounded-2xl border border-white/10 px-4 py-3 text-sm text-slate-100 outline-none'
                        value={rating}
                        onChange={(e)=>setRating(e.target.value)}
                    >
                        <option value="">All Ratings</option>
                        <option value="4">4★ & above</option>
                        <option value="3">3★ & above</option>
                        <option value="2">2★ & above</option>
                    </select>
                    <h1 className='mt-5 font-semibold text-lg mb-3'>Price Range</h1>
                    <div className='flex flex-col gap-2'>
                        <label className='text-sm text-slate-400'>Up to ${priceRange[1]}</label>
                        <input type="range" min="0" max="5000" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} className='accent-red-500 w-full' />
                    </div>
                    <button className='bg-red-500 text-white rounded-full px-5 py-3 mt-6 w-full text-sm font-semibold'
                        onClick={() => { setSearch(''); setCategory('All'); setBrand('All'); setRating(''); setPriceRange([0, 5000]); setOpenFilter(false) }}
                    >Reset Filters</button>
                </div> : null
            }
        </>
    )
}

export default MobileFilter