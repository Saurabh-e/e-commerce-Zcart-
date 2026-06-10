import React from 'react'
import Carousel from '../components/Carousel'
import MidBanner from '../components/MidBanner'
import Features from '../components/Features'

const Home = () => {
  return (
    <div className='overflow-x-hidden bg-slate-950 text-white'>
      <section className='relative isolate overflow-hidden pt-16 pb-12 sm:pt-24 sm:pb-20'>
        <div className='absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-br from-fuchsia-500/20 via-cyan-400/10 to-transparent blur-3xl'></div>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center'>
            <div className='space-y-6'>
              <span className='inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-slate-200 ring-1 ring-white/10'>Welcome to Zcart</span>
              <h1 className='max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>Premium electronics, smarter shopping, instant delivery.</h1>
              <p className='max-w-2xl text-lg leading-8 text-slate-300'>Discover a curated collection of cutting-edge gadgets for home, work, and play—powered by fast delivery, secure checkout, and trusted support from Zcart.</p>
              <div className='flex flex-col gap-4 sm:flex-row'>
                <a href='/products' className='inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-purple-500 px-6 py-3 text-base font-semibold text-white shadow-xl shadow-red-500/20 transition hover:-translate-y-0.5'>Shop products</a>
                <a href='/about' className='inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-white/90 transition hover:bg-white/10'>Why choose us</a>
              </div>
            </div>
            <div className='relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl'>
              <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_45%)]'></div>
              <div className='relative grid gap-4 sm:grid-cols-2'>
                <div className='space-y-4 rounded-3xl bg-slate-950/90 p-5 ring-1 ring-white/10'>
                  <p className='text-sm uppercase tracking-[0.3em] text-slate-400'>Featured</p>
                  <h2 className='text-2xl font-semibold'>Smart home hub</h2>
                  <p className='text-sm text-slate-300'>Control your home from one premium dashboard with voice and app access.</p>
                </div>
                <div className='space-y-4 rounded-3xl bg-slate-950/90 p-5 ring-1 ring-white/10'>
                  <p className='text-sm uppercase tracking-[0.3em] text-slate-400'>New arrival</p>
                  <h2 className='text-2xl font-semibold'>Noise-cancelling earbuds</h2>
                  <p className='text-sm text-slate-300'>Immersive sound with up to 40 hours battery life.</p>
                </div>
                <div className='space-y-4 rounded-3xl bg-slate-950/90 p-5 ring-1 ring-white/10'>
                  <p className='text-sm uppercase tracking-[0.3em] text-slate-400'>Top pick</p>
                  <h2 className='text-2xl font-semibold'>Gaming monitor</h2>
                  <p className='text-sm text-slate-300'>Ultra-fast refresh and vivid color for the best competitive edge.</p>
                </div>
                <div className='space-y-4 rounded-3xl bg-slate-950/90 p-5 ring-1 ring-white/10'>
                  <p className='text-sm uppercase tracking-[0.3em] text-slate-400'>Limited deal</p>
                  <h2 className='text-2xl font-semibold'>Smart watch</h2>
                  <p className='text-sm text-slate-300'>Track fitness, sleep, and notifications in one sleek device.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Carousel />
      <MidBanner />
      <Features />
    </div>
  )
}

export default Home