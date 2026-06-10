import React from 'react'
import { Truck, Lock, RotateCcw, Clock } from 'lucide-react'

const features = [
    {icon: Truck, text: 'Free Shipping', subtext: 'On orders over $100'},
    {icon: Lock, text: 'Secure Payment', subtext: '100% protected payments'},
    {icon: RotateCcw, text: 'Easy Returns', subtext: '30-day return policy'},
    {icon: Clock, text: '24/7 Support', subtext: 'Dedicated customer service'},
]
const Features = () => {

  return (
    <div className='bg-slate-950 py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300'>Why shop with us</p>
            <h2 className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl'>Trusted service for modern shoppers</h2>
          </div>
          <p className='max-w-xl text-sm leading-6 text-slate-400'>Enjoy a seamless buying journey with fast shipping, secure payments, easy returns, and support whenever you need it.</p>
        </div>
        <div className='mt-10 grid gap-6 lg:grid-cols-4'>
            {features.map((feature, index)=> {
               return <div key={index} className='rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/10'>
                    <div className='flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-red-500 to-purple-500 text-white shadow-lg shadow-red-500/20'>
                      <feature.icon className='h-6 w-6' aria-hidden="true" />
                    </div>
                    <div className='mt-6'>
                        <p className='text-lg font-semibold text-white'>{feature.text}</p>
                        <p className='mt-2 text-sm leading-6 text-slate-400'>{feature.subtext}</p>
                    </div>
                </div>
            })}
        </div>
      </div>
    </div>
  )
}

export default Features