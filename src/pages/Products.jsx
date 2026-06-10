import React, { useEffect, useState } from 'react'
import { useData } from '../context/DataContext'
import FilterSection from '../components/FilterSection'
import Loading from "../assets/Loading4.webm"
import ProductCard from '../components/ProductCard'
import Pagination from '../components/Pagination'
import Lottie from 'lottie-react'
import notfound from "../assets/notfound.json"
import MobileFilter from '../components/MobileFilter'

const Products = () => {
  const { data, fetchAllProducts } = useData()
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [brand, setBrand] = useState("All")
  const [rating, setRating] = useState("")
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [page, setPage] = useState(1)
  const [openFilter, setOpenFilter] = useState(false)

  useEffect(() => {
    fetchAllProducts()
    window.scrollTo(0,0)
  }, [fetchAllProducts])

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
    setPage(1)
    setOpenFilter(false)

  }
  const handleBrandChange = (e) => {
    setBrand(e.target.value)
    setPage(1)
    setOpenFilter(false)
  }

  const pageHandler = (selectedPage) => {
    setPage(selectedPage)
    window.scrollTo(0,0)
  }

  const filteredData = data?.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || item.category === category) &&
    (brand === "All" || item.brand === brand) &&
    (rating === "" || item.rating?.rate >= rating) &&
    item.price >= priceRange[0] && item.price <= priceRange[1]

  )
  const dynamicPage = Math.ceil(filteredData?.length / 8)


  return (
    <div className='bg-slate-950 py-10 text-slate-100'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl'>
          <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
            <div className='space-y-3'>
              <p className='text-sm uppercase tracking-[0.35em] text-red-400'>Shop the latest</p>
              <h1 className='text-4xl font-bold tracking-tight text-white'>Explore Products</h1>
              <p className='max-w-2xl text-sm leading-6 text-slate-300'>Find top electronics across categories, filtered in real time for fast and easy browsing.</p>
            </div>
            <div className='inline-flex items-center gap-3 rounded-full bg-slate-900/80 px-5 py-3 text-sm text-slate-200 ring-1 ring-white/10'>
              <span className='text-red-300 font-semibold'>{filteredData?.length ?? 0}</span>
              products available
            </div>
          </div>
        </div>

        <MobileFilter openFilter={openFilter} setOpenFilter={setOpenFilter} search={search} setSearch={setSearch} brand={brand} setBrand={setBrand} rating={rating} setRating={setRating} priceRange={priceRange} setPriceRange={setPriceRange} category={category} setCategory={setCategory} handleCategoryChange={handleCategoryChange} handleBrandChange={handleBrandChange} />

        {
          data?.length > 0 ? (
            <div className='grid gap-8 lg:grid-cols-[380px_minmax(0,1fr)]'>
              <FilterSection search={search} setSearch={setSearch} brand={brand} setBrand={setBrand} rating={rating} setRating={setRating} priceRange={priceRange} setPriceRange={setPriceRange} category={category} setCategory={setCategory} handleCategoryChange={handleCategoryChange} handleBrandChange={handleBrandChange} />
              {
                filteredData?.length > 0 ? (
                  <div className='space-y-8'>
                    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3'>
                      {
                        filteredData?.slice(page * 8 - 8, page * 8).map((product, index) => {
                          return <ProductCard key={index} product={product} />
                        })
                      }
                    </div>
                    <Pagination pageHandler={pageHandler} page={page} dynamicPage={dynamicPage} />
                  </div>
                ) : (
                  <div className='flex min-h-[500px] items-center justify-center rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 text-center text-slate-300 shadow-2xl shadow-black/20'>
                    <Lottie animationData={notfound} classID='w-[300px]' />
                  </div>
                )
              }
            </div>
          ) : (
            <div className='flex min-h-[400px] items-center justify-center rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-black/20'>
              <video muted autoPlay loop className='h-44 w-44'>
                <source src={Loading} type='video/webm' />
              </video>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Products