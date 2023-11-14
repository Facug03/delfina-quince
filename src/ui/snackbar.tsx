'use client'

import { useEffect } from 'react'

interface Props {
  message: string
  showSnackbar: boolean
  closeSnackbar: () => void
  bg: string
}

export default function Snackbar({
  closeSnackbar,
  showSnackbar,
  bg,
  message,
}: Props) {
  useEffect(() => {
    if (showSnackbar) {
      const timer = setTimeout(() => {
        closeSnackbar()
      }, 1500)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [showSnackbar, closeSnackbar])

  return (
    <div
      className={`${bg} text-white p-4 rounded-md fixed bottom-4 right-4 flex gap-3 items-center font-open text-xs md:text-lg`}
    >
      {message}
      <button onClick={closeSnackbar} className='text-white'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='w-4 h-4'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>
    </div>
  )
}
