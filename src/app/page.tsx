import Separator from './ui/separator'
import Timer from './ui/timer'
import bgBella from '../../public/fondo-bella.webp'
import bgShapes from '../../public/fondo.webp'

import Image from 'next/image'

export default function Home() {
  return (
    <main className=''>
      <section className='font-cookie h-screen flex items-center flex-col relative'>
        <Image
          alt='Fondo bella'
          src={bgBella}
          quality={100}
          fill
          sizes='100vw'
          priority
          style={{
            objectFit: 'cover',
            zIndex: -1,
          }}
        />

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

        <Separator />
      </section>

      <section className='font-cookie flex items-center flex-col relative py-56'>
        <Image
          alt='Fondo espacio'
          src={bgShapes}
          quality={100}
          fill
          sizes='100vw'
          priority
          style={{
            objectFit: 'cover',
            zIndex: -1,
          }}
        />

        <div className='absolute max-w-md w-full min-h-[75%] z-10 translate-x-[-50%] translate-y-[-50%] top-2/4 left-2/4'>
          <Image src='/escudo.png' fill alt='escudo' />
        </div>

        <div className='bg-white h-64 w-64 rounded-full flex flex-col items-center justify-evenly z-20'>
          <h3 className='text-black text-5xl'>Falta</h3>

          <Timer />

          <Image src='/rosa.png' width={90} height={100} alt='rosa' />
        </div>

        <Separator />
      </section>

      <section className='font-cookie flex items-center flex-col relative py-16 px-4'>
        <Image
          alt='Fondo espacio'
          src={bgShapes}
          quality={100}
          fill
          sizes='100vw'
          priority
          style={{
            objectFit: 'cover',
            zIndex: -1,
          }}
        />

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

        <Separator />
      </section>
      <section className='font-cookie flex items-center flex-col relative py-12 px-4'>
        <Image
          alt='Fondo espacio'
          src={bgShapes}
          quality={100}
          fill
          sizes='100vw'
          priority
          style={{
            objectFit: 'cover',
            zIndex: -1,
          }}
        />

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

        <Separator />
      </section>

      <section className='font-cookie flex items-center flex-col gap-4 relative py-12 px-4'>
        <Image
          alt='Fondo espacio'
          src={bgShapes}
          quality={100}
          fill
          sizes='100vw'
          priority
          style={{
            objectFit: 'cover',
            zIndex: -1,
          }}
        />

        <div className='bg-[#FFFFFFD9] py-14 max-w-[302px] w-full rounded-3xl flex flex-col items-center gap-9 z-20'>
          <div className='flex flex-col gap-6 items-center font-open'>
            <Image src='/music.png' width={42} height={49} alt='Musica' />

            <h3 className='text-black text-3xl font-semibold'>Música</h3>

            <p className='text-lg text-black'>
              ¿Qué canción no debería faltar?
            </p>

            <button className='bg-[#000921] px-9 py-3 rounded-lg text-sm font-medium opacity-100'>
              Sugerir canción
            </button>
          </div>
        </div>

        <div className='bg-[#FFFFFFD9] py-10 max-w-[302px] w-full rounded-3xl flex flex-col items-center gap-9 z-20'>
          <div className='flex flex-col gap-4 items-center font-open'>
            <Image src='/hanger.png' width={62} height={62} alt='Gancho' />

            <h3 className='text-black text-2xl font-semibold'>
              Código de vestimenta
            </h3>

            <p className='text-lg text-black'>Elegante</p>
          </div>
        </div>

        <div className='bg-[#FFFFFFD9] py-14 max-w-[302px] w-full rounded-3xl flex flex-col items-center gap-9 z-20'>
          <div className='flex flex-col gap-6 items-center font-open px-4'>
            <Image src='/gift.png' width={55} height={55} alt='Regalo' />

            <h3 className='text-black text-3xl font-semibold'>Regalos</h3>

            <p className='text-lg text-black text-center'>
              Si deseas regalarme algo más que tu hermosa presencia...
            </p>

            <p className='text-[17px] text-black font-semibold'>
              CBU: 000203402304023402
            </p>

            <p className='text-[17px] text-black font-semibold'>
              Alias: sadfasdasd
            </p>

            <p className='text-[17px] text-black font-semibold'>
              Titular: Delfina Isolina Lopez
            </p>
          </div>
        </div>

        <Separator />
      </section>

      <section className='font-cookie flex items-center flex-col gap-4 relative pt-12 pb-40 px-4'>
        <Image
          alt='Fondo espacio'
          src={bgShapes}
          quality={100}
          fill
          sizes='100vw'
          priority
          style={{
            objectFit: 'cover',
            zIndex: -1,
          }}
        />

        <div className='bg-[#FFFFFFD9] py-10 max-w-[302px] w-full rounded-3xl flex flex-col items-center gap-9 z-20'>
          <div className='flex flex-col gap-4 items-center font-open px-4'>
            <Image src='/instagram.png' width={55} height={55} alt='Gancho' />

            <h3 className='text-black text-2xl font-semibold'>#15Delfi</h3>

            <p className='text-lg text-black text-center'>
              ¡Compartí tus fotos y videos con el hashtag!
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
