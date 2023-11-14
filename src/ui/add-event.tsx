'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function AddEvent() {
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden')
    }
  }, [isModalOpen])

  const closeModal = () => {
    document.body.classList.remove('overflow-hidden')
    setModalOpen(false)
  }

  return (
    <>
      <button
        onClick={() => {
          setModalOpen(true)
        }}
        className='bg-secondary px-9 py-3 rounded-lg text-sm font-medium font-open opacity-100'
      >
        Agendar
      </button>

      {isModalOpen && (
        <div className='fixed inset-0 overflow-y-auto z-[1000] flex items-center justify-center'>
          <div
            className='fixed inset-0 bg-black opacity-50 z-[2000]'
            onClick={closeModal}
          />
          <div
            onClick={closeModal}
            className='bg-[#ffffffef] font-open p-6 rounded-3xl shadow-lg w-full max-w-[300px] z-[3000] flex flex-col gap-1 px-4 relative'
          >
            <a
              href='https://www.addevent.com/event/Hh19320657+apple'
              target='_blank'
              className='flex gap-2 items-center text-black font-medium'
            >
              <Image src='/icons/apple.png' width={50} height={50} alt='' />
              APPLE CALENDAR
            </a>
            <a
              href='https://www.addevent.com/event/Hh19320657+google'
              target='_blank'
              className='flex gap-2 items-center text-black font-medium'
            >
              <Image src='/icons/google.png' width={50} height={50} alt='' />
              GOOGLE
            </a>
            <a
              href='https://www.addevent.com/event/Hh19320657+office365'
              target='_blank'
              className='flex gap-2 items-center text-black font-medium'
            >
              <Image src='/icons/office.png' width={50} height={50} alt='' />
              OFFICE 365
            </a>
            <a
              href='https://www.addevent.com/event/Hh19320657+outlook'
              target='_blank'
              className='flex gap-2 items-center text-black font-medium'
            >
              <Image src='/icons/outlook-y.png' width={50} height={50} alt='' />
              OUTLOOK
            </a>
            <a
              href='https://www.addevent.com/event/Hh19320657+outlookcom'
              target='_blank'
              className='flex gap-2 items-center text-black font-medium'
            >
              <Image src='/icons/outlook.png' width={50} height={50} alt='' />
              OUTLOOK.COM
            </a>
            <a
              href='https://www.addevent.com/event/Hh19320657+yahoo'
              target='_blank'
              className='flex gap-2 items-center text-black font-medium'
            >
              <Image src='/icons/yahoo.png' width={50} height={50} alt='' />
              YAHOO
            </a>
          </div>
        </div>
      )}
    </>
  )
}
