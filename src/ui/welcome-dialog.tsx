'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function WelcomeDialog() {
  const [isModalOpen, setModalOpen] = useState(true)

  const closeModal = (withAudio: boolean) => {
    document.body.classList.remove('overflow-hidden')

    if (withAudio) {
      const audio = new Audio('/music/piano.mp3')

      audio.volume = 0.3
      audio.play()
    }

    setModalOpen(false)
  }

  return (
    <>
      {isModalOpen && (
        <div className='fixed inset-0 overflow-y-auto z-[3000] flex items-center justify-center'>
          <div
            className='fixed inset-0 bg-black opacity-50 z-[1000]'
            onClick={() => {
              closeModal(false)
            }}
          />
          <div className='bg-[#ffffffef] p-6 rounded-3xl shadow-lg w-full max-w-[90vw] sm:max-w-[500px] z-[2000] flex flex-col justify-around items-center px-4 max-h-[80vh] sm:max-h-[700px] h-full relative'>
            <h2 className='text-5xl text-[#1D1D1D] font-cookie text-center'>
              ¡Bienvenidos a la invitación de Delfi!
            </h2>
            <p className='text-black font-open text-center'>
              La música de fondo es parte de la experiencia
            </p>

            <div className='flex flex-col gap-5  w-full items-center'>
              <button
                onClick={() => {
                  closeModal(true)
                }}
                className='p-2 bg-secondary text-white rounded-lg max-w-[80%] w-full'
              >
                INGRESAR CON MÚSICA
              </button>
              <button
                onClick={() => {
                  closeModal(false)
                }}
                className='p-2 bg-white text-secondary rounded-lg max-w-[80%] w-full border-secondary border-[1px] mb-[40%] sm:mb-[25%]'
              >
                INGRESAR SIN MÚSICA
              </button>
            </div>

            <Image
              src='/lumier.png'
              width={160}
              height={160}
              alt='lumier'
              className='absolute -left-6  bottom-0'
            />
          </div>
        </div>
      )}
    </>
  )
}
