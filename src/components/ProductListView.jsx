import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ProductListView = ({product}) => {
  const navigate = useNavigate()
  const {addToCart} = useCart()

  return (
    <div className='rounded-[2rem] border border-white/10 bg-slate-950/90 p-5 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1'>
      <div className='md:flex md:items-center md:gap-6'>
        <div className='mb-5 overflow-hidden rounded-[2rem] bg-white/5 p-4 md:mb-0 md:min-w-[240px]'>
          <img src={product.image} alt={product.title} className='mx-auto h-48 w-full object-contain' onClick={()=>navigate(`/products/${product.id}`)} />
        </div>
        <div className='space-y-4 text-slate-100'>
          <div className='flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400'>
            <span className='rounded-full bg-white/5 px-3 py-1'>{product.category}</span>
            <span className='rounded-full bg-amber-500/10 px-3 py-1 text-amber-200'>{product.rating?.rate ?? 'N/A'} ★</span>
          </div>
          <h1 onClick={()=>navigate(`/products/${product.id}`)} className='cursor-pointer text-2xl font-semibold text-white transition hover:text-red-400 line-clamp-2'>{product.title}</h1>
          <p className='text-sm leading-6 text-slate-400'>{product.description?.slice(0,120)}{product.description?.length > 120 ? '...' : ''}</p>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
            <div>
              <p className='text-sm text-slate-400'>Price</p>
              <p className='text-3xl font-bold text-white'>${product.price}</p>
            </div>
            <button onClick={()=>addToCart(product)} className='inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:opacity-90'>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListView