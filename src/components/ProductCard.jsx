import React from 'react'
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({product}) => {
    const navigate = useNavigate()
    const {addToCart} = useCart()

  return (
    <div className='group overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/90 p-4 shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-red-500/20'>
      <div className='flex items-center justify-between mb-4 text-xs uppercase tracking-[0.25em] text-slate-400'>
        <span className='rounded-full bg-white/5 px-3 py-1'>{product.category}</span>
        <span className='rounded-full bg-amber-500/10 px-3 py-1 text-amber-200'>{product.rating?.rate ?? 'N/A'} ★</span>
      </div>
      <button onClick={()=>navigate(`/products/${product.id}`)} className='group relative mb-5 block h-72 md:h-80 w-full overflow-hidden rounded-[28px] bg-white/5 p-4 transition duration-300 hover:scale-[1.02]'>
        <img src={product.image} alt={product.title} className='mx-auto h-full w-full object-contain' />
      </button>
      <div className='space-y-3'>
        <h1 onClick={()=>navigate(`/products/${product.id}`)} className='cursor-pointer text-lg font-semibold text-white line-clamp-2 transition hover:text-red-400'>{product.title}</h1>
        <p className='text-sm leading-6 text-slate-400'>{product.description?.slice(0,80)}{product.description?.length > 80 ? '...' : ''}</p>
        <div className='flex items-center justify-between gap-4'>
          <p className='text-2xl font-bold text-white'>${product.price}</p>
          <button onClick={()=>addToCart(product)} className='inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:opacity-90'>
            <IoCartOutline className='mr-2 h-5 w-5' /> Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard