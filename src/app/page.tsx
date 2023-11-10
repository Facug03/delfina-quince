'use client'
import separador from '../../public/separador.png'
import { getTimeRemaining } from '@/utils/getTimeRemaining'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const endDate = new Date('2023-12-13T00:00:00')

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(endDate))

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(getTimeRemaining(endDate))
    }, 1000)
    return () => clearTimeout(timer)
  })

  return (
    <main className=''>
      <section className='font-cookie bg-main bg-cover h-screen flex items-center flex-col bg-no-repeat bg-top relative'>
        <p className='font-open text-2xl flex items-center gap-1 pt-[20%]'>
          <span className='text-[19px] font-cookie'>────────</span> 13-12-2023{' '}
          <span className='text-[19px] font-cookie'>────────</span>
        </p>
        <h1 className='text-8xl'>Delfina</h1>
        <h1 className='text-[40px]'>Mis 15 años</h1>
        <p className='text-[19px]'>───────────────────────────────</p>
        <h3 className='font-open text-center'>
          “Te espero para compartir una noche mágica, inolvidable y única.”
        </h3>

        <Image
          src={separador}
          alt='separador'
          style={{ position: 'absolute', bottom: '-25px', zIndex: 1000 }}
        />
      </section>

      <section className='font-cookie bg-fondo bg-cover flex items-center flex-col bg-no-repeat bg-top relative py-56'>
        <div className='absolute max-w-md w-full min-h-[75%] z-10 translate-x-[-50%] translate-y-[-50%] top-2/4 left-2/4'>
          <Image src='/escudo.png' fill alt='escudo' />
        </div>

        <div className='bg-white h-64 w-64 rounded-full flex flex-col items-center justify-evenly z-20'>
          <h3 className='text-black text-5xl'>Falta</h3>

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

          <Image src='/rosa.png' width={90} height={100} alt='rosa' />
        </div>

        <Image
          src={separador}
          alt='separador'
          style={{ position: 'absolute', bottom: '-25px', zIndex: 1000 }}
        />
      </section>

      <section className='font-cookie bg-fondo bg-cover flex items-center flex-col bg-no-repeat bg-top relative py-16 px-4'>
        <div className='bg-white py-14 max-w-[302px] w-full rounded-3xl flex flex-col items-center gap-3 z-20 opacity-80'>
          <div className='w-[73px] h-[73px] rounded-full bg-[#95710C] flex items-center justify-center'>
            <Image src='/iglesia.png' width={42} height={42} alt='iglesia' />
          </div>

          <h3 className='text-black text-6xl'>Misa</h3>
          <div className='font-open text-black flex flex-col gap-[2px] items-center '>
            <p className='text-lg font-medium'>13-12-2023</p>
            <p className='text-lg font-medium'>Iglesia Catedral</p>
            <p className='text-lg font-medium'>20:00 Hs.</p>
          </div>
        </div>

        <Image
          src={separador}
          alt='separador'
          style={{ position: 'absolute', bottom: '-25px', zIndex: 1000 }}
        />
      </section>

      <section className='font-cookie bg-fondo bg-cover flex items-center flex-col bg-no-repeat bg-top relative py-12 px-4'>
        <div className='bg-[#FFFFFFD9] pt-7 pb-14 max-w-[302px] w-full rounded-3xl flex flex-col items-center gap-9 z-20'>
          <div className='flex flex-col gap-2 items-center'>
            <div className='flex gap-3'>
              <h3 className='text-black text-6xl'>Fiesta</h3>

              <div className='w-14 h-14 rounded-full bg-[#95710C] flex items-center justify-center'>
                <Image src='/fiesta.png' width={42} height={42} alt='iglesia' />
              </div>
            </div>

            <p className='text-base font-medium text-black font-open'>
              ¡Hagamos una fiesta épica!
            </p>
          </div>

          <div className='flex flex-col gap-3 items-center'>
            <h3 className='text-black text-6xl'>Día</h3>

            <p className='text-base font-medium text-black font-open'>
              Sábado 16 de diciembre 22:00 Hs.
            </p>

            <button className='bg-[#000921] px-9 py-3 rounded-lg text-sm font-medium font-open opacity-100'>
              Agendar
            </button>
          </div>

          <div className='flex flex-col gap-3 items-center'>
            <h3 className='text-black text-6xl'>Lugar</h3>

            <p className='text-base font-medium text-black font-open'>
              Salón Castelum
            </p>

            <button className='bg-[#000921] px-9 py-3 rounded-lg text-sm font-medium font-open opacity-100'>
              Confirmar asistencia
            </button>
          </div>

          <div className='flex flex-col gap-3 items-center'>
            <h3 className='text-black text-6xl'>Dirección</h3>

            <p className='text-base font-medium text-black font-open'>
              Tafí Viejo, Tucumán
            </p>

            <button className='bg-[#000921] px-9 py-3 rounded-lg text-sm font-medium font-open opacity-100'>
              ¿Cómo llegar?
            </button>
          </div>
        </div>

        <Image
          src={separador}
          alt='separador'
          style={{ position: 'absolute', bottom: '-25px', zIndex: 1000 }}
        />
      </section>

      <section className='font-cookie bg-fondo bg-cover flex items-center flex-col gap-4 bg-no-repeat bg-top relative py-12 px-4'>
        <div className='bg-[#FFFFFFD9] py-14 max-w-[302px] w-full rounded-3xl flex flex-col items-center gap-9 z-20'>
          <div className='flex flex-col gap-6 items-center font-open'>
            <Image src='/music.png' width={40} height={45} alt='Musica' />

            <h3 className='text-black text-3xl font-semibold'>Música</h3>

            <p className='text-lg text-black'>
              ¿Qué canción no debería faltar?
            </p>

            <button className='bg-[#000921] px-9 py-3 rounded-lg text-sm font-medium opacity-100'>
              Sugerir canción
            </button>
          </div>
        </div>

        <div className='bg-[#FFFFFFD9] pt-7 pb-14 max-w-[302px] w-full rounded-3xl flex flex-col items-center gap-9 z-20'>
          <div className='flex flex-col gap-2 items-center'>
            <div className='flex gap-3'>
              <h3 className='text-black text-6xl'>Fiesta</h3>

              <div className='w-14 h-14 rounded-full bg-[#95710C] flex items-center justify-center'>
                <Image src='/fiesta.png' width={42} height={42} alt='iglesia' />
              </div>
            </div>

            <p className='text-base font-medium text-black font-open'>
              ¡Hagamos una fiesta épica!
            </p>
          </div>

          <div className='flex flex-col gap-3 items-center'>
            <h3 className='text-black text-6xl'>Día</h3>

            <p className='text-base font-medium text-black font-open'>
              Sábado 16 de diciembre 22:00 Hs.
            </p>

            <button className='bg-[#000921] px-9 py-3 rounded-lg text-sm font-medium font-open opacity-100'>
              Agendar
            </button>
          </div>
        </div>

        <div className='bg-[#FFFFFFD9] pt-7 pb-14 max-w-[302px] w-full rounded-3xl flex flex-col items-center gap-9 z-20'>
          <div className='flex flex-col gap-2 items-center'>
            <div className='flex gap-3'>
              <h3 className='text-black text-6xl'>Fiesta</h3>

              <div className='w-14 h-14 rounded-full bg-[#95710C] flex items-center justify-center'>
                <Image src='/fiesta.png' width={42} height={42} alt='iglesia' />
              </div>
            </div>

            <p className='text-base font-medium text-black font-open'>
              ¡Hagamos una fiesta épica!
            </p>
          </div>

          <div className='flex flex-col gap-3 items-center'>
            <h3 className='text-black text-6xl'>Día</h3>

            <p className='text-base font-medium text-black font-open'>
              Sábado 16 de diciembre 22:00 Hs.
            </p>

            <button className='bg-[#000921] px-9 py-3 rounded-lg text-sm font-medium font-open opacity-100'>
              Agendar
            </button>
          </div>
        </div>

        <Image
          src={separador}
          alt='separador'
          style={{ position: 'absolute', bottom: '-25px', zIndex: 1000 }}
        />
      </section>
    </main>
  )
}
