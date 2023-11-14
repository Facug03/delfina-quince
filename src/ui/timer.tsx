'use client'
import { getTimeRemaining } from '@/utils/getTimeRemaining'

import { useEffect, useState } from 'react'

const endDate = new Date('2023-12-13T00:00:00')

export default function Timer() {
  const [hydrated, setHydrated] = useState(false)
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(endDate))

  useEffect(() => {
    setHydrated(true)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(getTimeRemaining(endDate))
    }, 1000)
    return () => clearTimeout(timer)
  })

  if (!hydrated) return null

  return (
    <div className='font-open text-black flex gap-2 '>
      <div className='text-center'>
        <p className='text-3xl leading-none'>{timeLeft.days}</p>
        <p className='text-base leading-none'>Dias</p>
      </div>

      <div className='h-3/4 border border-solid border-[#95710C] self-center' />

      <div className='text-center'>
        <p className='text-3xl leading-none'>{timeLeft.hours}</p>
        <p className='text-base leading-none'>Hs.</p>
      </div>

      <div className='h-3/4 border border-solid border-[#95710C] self-center' />

      <div className='text-center'>
        <p className='text-3xl leading-none'>{timeLeft.minutes}</p>
        <p className='text-base leading-none'>Min.</p>
      </div>

      <div className='h-3/4 border border-solid border-[#95710C] self-center' />

      <div className='text-center'>
        <p className='text-3xl leading-none'>{timeLeft.seconds}</p>
        <p className='text-base leading-none'>Seg.</p>
      </div>
    </div>
  )
}
