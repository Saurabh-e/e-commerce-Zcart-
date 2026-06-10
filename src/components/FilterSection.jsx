import React from 'react'
import { useData } from '../context/DataContext'

const FilterSection = ({search, setSearch, brand, setBrand, rating, setRating, priceRange, setPriceRange, category, setCategory, handleBrandChange, handleCategoryChange}) => {
    const { categoryOnlyData,brandOnlyData } = useData()
    return (
        <div className='bg-slate-900/70 mt-6 p-5 rounded-[2rem] shadow-2xl shadow-black/30 hidden md:block border border-white/10'>
            <div className='space-y-3'>
              <input type="text" 
                placeholder='Search products' 
                value={search}
                onChange={(e)=>setSearch(e.target.value)} 
                className='w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-2.5 text-sm text-slate-100 outline-none transition focus:border-red-500/80' 
              />

              <div>
                <h1 className='font-semibold text-lg text-white'>Category</h1>
                <div className='mt-3 grid gap-2'>
                  {categoryOnlyData?.map((item, index) => {
                    return <button key={index} onClick={handleCategoryChange} value={item} className={`rounded-full px-4 py-2 text-left text-sm font-medium transition ${category === item ? 'bg-red-500 text-white' : 'bg-white/5 text-slate-200 hover:bg-white/10'}`}>{item}</button>
                  })}
                </div>
              </div>

              <div>
                <h1 className='font-semibold text-lg text-white'>Brand</h1>
                <select
                  className='mt-3 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-red-500/80'
                  value={brand}
                  onChange={handleBrandChange}
                >
                  {brandOnlyData?.map((item, index)=>{
                      return <option key={index} value={item}>{item === 'All' ? 'All Brands' : item.toUpperCase()}</option>
                  })}
                </select>
              </div>

              <div>
                <h1 className='font-semibold text-lg text-white'>Rating</h1>
                <select
                  className='mt-3 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-red-500/80'
                  value={rating}
                  onChange={(e)=>setRating(e.target.value)}
                >
                  <option value="">All Ratings</option>
                  <option value="4">4★ & above</option>
                  <option value="3">3★ & above</option>
                  <option value="2">2★ & above</option>
                </select>
              </div>

              <div>
                <h1 className='font-semibold text-lg text-white'>Price Range</h1>
                <p className='mt-2 text-sm text-slate-400'>Up to ${priceRange[1]}</p>
                <input type="range" min="0" max="5000" value={priceRange[1]} onChange={(e)=>setPriceRange([priceRange[0], Number(e.target.value)])} className='mt-3 w-full accent-red-500' />
              </div>

              <button className='w-full rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-400'
                onClick={()=>{setSearch(''); setCategory('All'); setBrand('All'); setRating(''); setPriceRange([0,5000])}}
              >Reset Filters</button>
            </div>
        </div>
    )
}

export default FilterSection