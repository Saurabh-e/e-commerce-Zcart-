import React from 'react'

const MidBanner = () => {
  return (
    <div className='bg-slate-900 py-16 sm:py-20'>
      <div className='max-w-7xl mx-auto grid gap-10 lg:grid-cols-2 items-center px-4 sm:px-6 lg:px-8'>
        <div className='space-y-6'>
          <span className='inline-flex rounded-full bg-red-500/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-red-200'>Curated for modern living</span>
          <h2 className='text-4xl font-bold tracking-tight text-white sm:text-5xl'>Next-gen electronics delivered with style.</h2>
          <p className='max-w-xl text-lg leading-8 text-slate-300'>Shop the latest devices with premium design, trusted brands, and fast shipping that keeps your setup ahead of the curve.</p>
          <div className='flex flex-wrap gap-4'>
            <button className='rounded-full bg-gradient-to-r from-red-500 to-purple-500 px-6 py-3 text-base font-semibold text-white shadow-xl shadow-red-500/20 transition hover:scale-[1.01]'>Browse deals</button>
            <button className='rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-white/90 transition hover:bg-white/10'>View collection</button>
          </div>
        </div>
        <div className='space-y-4'>
          <div className='rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl'>
            <h3 className='text-xl font-semibold text-white'>Fresh arrivals</h3>
            <p className='mt-2 text-slate-300'>Premium gadgets curated weekly so you never miss the best new technology.</p>
            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              <div className='rounded-3xl bg-slate-950/80 p-4'>
                <p className='text-sm uppercase tracking-[0.3em] text-slate-400'>Featured</p>
                <p className='mt-2 text-lg font-semibold text-white'>Noise-cancelling earbuds</p>
              </div>
              <div className='rounded-3xl bg-slate-950/80 p-4'>
                <p className='text-sm uppercase tracking-[0.3em] text-slate-400'>Popular</p>
                <p className='mt-2 text-lg font-semibold text-white'>Smart home monitors</p>
              </div>
            </div>
          </div>
          <div className='rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-slate-950/50 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200'>Fast support</p>
            <h3 className='mt-3 text-2xl font-semibold text-white'>Live support right when you need it</h3>
            <p className='mt-3 text-slate-300'>Our team is ready to help you choose the perfect device and keep your orders moving.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MidBanner