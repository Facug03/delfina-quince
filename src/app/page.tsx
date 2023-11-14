import Timer from '@/ui/timer'
import WelcomeDialog from '@/ui/welcome-dialog'
import ComfirmAttendace from '@/ui/confirm-attendance'
import SuggestMusic from '@/ui/suggest-music'
import Separator from '@/ui/separator'
import AddEvent from '@/ui/add-event'
import Map from '@/ui/map'

import Image from 'next/image'

export default function Home() {
  return (
    <main className=''>
      <WelcomeDialog />

      <section className='font-cookie h-screen flex items-center flex-col relative'>
        <Image
          alt='Fondo bella'
          src='/fondo-bella.webp'
          quality={100}
          fill
          sizes='100vw'
          priority
          style={{
            objectFit: 'cover',
            zIndex: -1,
          }}
          className='sm:hidden'
        />
        <Image
          alt='Fondo bella'
          src='/fondo-bella-desktop.webp'
          quality={100}
          fill
          sizes='100vw'
          priority
          style={{
            objectFit: 'cover',
            objectPosition: 'top',
            zIndex: -1,
          }}
          className='hidden sm:block'
        />

        <div className='flex gap-1 pt-[20%] sm:pt-[15%] items-center'>
          <hr className='h-[1px] bg-white w-20' />
          <p className='font-open text-2xl sm:text-3xl flex items-center gap-1 '>
            13-12-2023
          </p>
          <hr className='h-[1px] bg-white w-20' />
        </div>

        <h1 className='text-8xl sm:text-9xl'>Delfina</h1>
        <h1 className='text-[40px] sm:text-6xl'>Mis 15 años</h1>

        <hr className='h-[1px] bg-white w-72 mb-8' />

        <h3 className='font-open text-center sm:text-xl'>
          “Te espero para compartir una noche mágica, inolvidable y única.”
        </h3>

        <div className='absolute top-[70%] sm:top-[80%]'>
          <Image src='/arrow.png' width={39} height={44} alt='arrow' />
          <Image src='/arrow.png' width={39} height={44} alt='arrow' />
          <Image src='/arrow.png' width={39} height={44} alt='arrow' />
        </div>

        <Separator />
      </section>

      <section className='font-cookie flex items-center flex-col relative py-56 sm:py-72'>
        <Image
          alt='Fondo espacio'
          src='/fondo.webp'
          quality={100}
          fill
          sizes='100vw'
          priority
          style={{
            objectFit: 'cover',
            zIndex: -1,
          }}
          className='sm:hidden'
        />
        <Image
          alt='Fondo espacio'
          src='/fondo-desktop.webp'
          quality={100}
          fill
          sizes='100vw'
          priority
          style={{
            objectFit: 'cover',
            zIndex: -1,
          }}
          className='hidden sm:block'
        />

        <div className='absolute max-w-md w-full min-h-[75%] z-10 translate-x-[-50%] translate-y-[-50%] top-2/4 left-2/4'>
          <Image src='/escudo.png' fill alt='escudo' sizes='448px' />
        </div>

        <div className='bg-white h-64 w-64 sm:h-80 sm:w-80 rounded-full flex flex-col items-center justify-evenly z-10'>
          <h3 className='text-black text-5xl sm:text-6xl'>Falta</h3>

          <Timer />

          <Image src='/rosa.png' width={90} height={100} alt='rosa' />
        </div>

        <Separator />
      </section>

      <section className='font-cookie flex items-center flex-col relative py-16 sm:py-24 px-4'>
        <Image
          alt='Fondo espacio'
          src='/fondo.webp'
          quality={100}
          fill
          sizes='100vw'
          priority
          style={{
            objectFit: 'cover',
            zIndex: -1,
          }}
          className='sm:hidden'
        />
        <Image
          alt='Fondo espacio'
          src='/fondo-desktop.webp'
          quality={100}
          fill
          sizes='100vw'
          priority
          style={{
            objectFit: 'cover',
            zIndex: -1,
          }}
          className='hidden sm:block'
        />

        <div className='bg-[#FFFFFFD9] py-14 max-w-[302px] sm:max-w-[500px] sm:py-20 w-full rounded-3xl flex flex-col items-center gap-3'>
          <div className='w-[73px] h-[73px] rounded-full bg-[#95710C] flex items-center justify-center'>
            <Image src='/iglesia.png' width={42} height={42} alt='iglesia' />
          </div>

          <h3 className='text-black text-6xl sm:text-7xl'>Misa</h3>
          <div className='font-open text-black flex flex-col gap-[2px] items-center '>
            <p className='text-lg sm:text-xl font-medium'>13-12-2023</p>
            <p className='text-lg sm:text-xl font-medium'>Iglesia Catedral</p>
            <p className='text-lg sm:text-xl font-medium'>20:00 Hs.</p>
          </div>
        </div>

        <Separator />
      </section>

      <section className='font-cookie flex items-center flex-col relative py-12 sm:py-24 px-4'>
        <Image
          alt='Fondo espacio'
          src='/fondo.webp'
          quality={100}
          fill
          sizes='100vw'
          priority
          style={{
            objectFit: 'cover',
            zIndex: -1,
          }}
          className='sm:hidden'
        />
        <Image
          alt='Fondo espacio'
          src='/fondo-desktop.webp'
          quality={100}
          fill
          sizes='100vw'
          priority
          style={{
            objectFit: 'cover',
            zIndex: -1,
          }}
          className='hidden sm:block'
        />

        <div className='bg-[#FFFFFFD9] pt-7 pb-14 max-w-[302px] sm:max-w-[500px] sm:pt-14 sm:pb-28 w-full rounded-3xl flex flex-col items-center gap-9'>
          <div className='flex flex-col gap-2 items-center'>
            <div className='flex gap-3'>
              <h3 className='text-black text-6xl sm:text-7xl'>Fiesta</h3>

              <div className='w-14 h-14 rounded-full bg-secondary flex items-center justify-center'>
                <Image
                  src='/confetti.webp'
                  width={42}
                  height={42}
                  alt='Confetti'
                  className='rounded-full'
                />
              </div>
            </div>

            <p className='text-base sm:text-lg font-medium text-black font-open'>
              ¡Hagamos una fiesta épica!
            </p>
          </div>

          <div className='flex flex-col gap-3 items-center'>
            <h3 className='text-black text-6xl sm:text-7xl'>Día</h3>

            <p className='text-base sm:text-lg font-medium text-black font-open'>
              Sábado 16 de diciembre 22:00 Hs.
            </p>

            <AddEvent />
          </div>

          <div className='flex flex-col gap-3 items-center'>
            <h3 className='text-black text-6xl sm:text-7xl'>Lugar</h3>

            <p className='text-base sm:text-lg font-medium text-black font-open'>
              Salón Castelum
            </p>

            <ComfirmAttendace />
          </div>

          <div className='flex flex-col gap-3 items-center'>
            <h3 className='text-black text-6xl sm:text-7xl'>Dirección</h3>

            <p className='text-base sm:text-lg font-medium text-black font-open'>
              Tafí Viejo, Tucumán
            </p>

            <Map />
          </div>
        </div>

        <Separator />
      </section>

      <section className='font-cookie flex items-center flex-col gap-6 relative py-12 sm:py-24 px-4'>
        <Image
          alt='Fondo espacio'
          src='/fondo.webp'
          quality={100}
          fill
          sizes='100vw'
          priority
          style={{
            objectFit: 'cover',
            zIndex: -1,
          }}
          className='sm:hidden'
        />
        <Image
          alt='Fondo espacio'
          src='/fondo-desktop.webp'
          quality={100}
          fill
          sizes='100vw'
          priority
          style={{
            objectFit: 'cover',
            zIndex: -1,
          }}
          className='hidden sm:block'
        />

        <div className='bg-[#FFFFFFD9] py-14 max-w-[302px] sm:max-w-[500px] sm:py-24 w-full rounded-3xl flex flex-col items-center gap-9'>
          <div className='flex flex-col gap-6 items-center font-open'>
            <div className='bg-primary py-1 pl-1 pr-[6px] rounded-full'>
              <Image
                src='/music.webp'
                width={58}
                height={58}
                alt='Musica'
                className='rounded-full'
              />
            </div>

            <h3 className='text-black text-3xl sm:text-4xl font-semibold'>
              Música
            </h3>

            <p className='text-lg sm:text-xl text-black'>
              ¿Qué canción no debería faltar?
            </p>

            <SuggestMusic />
          </div>
        </div>

        <div className='bg-[#FFFFFFD9] py-10 max-w-[302px] sm:max-w-[500px] sm:py-20 w-full rounded-3xl flex flex-col items-center gap-9'>
          <div className='flex flex-col gap-4 items-center font-open'>
            <div className='bg-primary pt-3.5 pb-5 px-1 rounded-full flex items-center justify-center'>
              <Image src='/hanger.png' width={62} height={62} alt='Gancho' />
            </div>

            <h3 className='text-black text-2xl sm:text-3xl font-semibold'>
              Código de vestimenta
            </h3>

            <p className='text-lg sm:text-xl text-black'>Elegante</p>
          </div>
        </div>

        <div className='bg-[#FFFFFFD9] py-14 max-w-[302px] sm:max-w-[500px] sm:py-24 w-full rounded-3xl flex flex-col items-center gap-9'>
          <div className='flex flex-col gap-6 items-center font-open px-4'>
            <div className='bg-primary py-1 px-1 rounded-full'>
              <Image
                src='/gift.webp'
                width={60}
                height={60}
                alt='Regalo'
                className='rounded-full'
              />
            </div>

            <h3 className='text-black text-3xl sm:text-4xl font-semibold'>
              Regalos
            </h3>

            <p className='text-lg sm:text-xl text-black text-center'>
              Si deseas regalarme algo más que tu hermosa presencia...
            </p>

            <p className='text-[17px] sm:text-[19px] text-black font-semibold'>
              CBU: 0170070140000078848531
            </p>

            <p className='text-[17px] sm:text-[19px] text-black font-semibold'>
              Alias: DELFI.DELFINA15
            </p>
          </div>
        </div>

        <Separator />
      </section>

      <section className='font-cookie flex items-center flex-col gap-4 relative pt-12 pb-40 sm:pt-24 sm:pb-32 px-4'>
        <Image
          alt='Fondo espacio'
          src='/fondo.webp'
          quality={100}
          fill
          sizes='100vw'
          priority
          style={{
            objectFit: 'cover',
            zIndex: -1,
          }}
          className='sm:hidden'
        />
        <Image
          alt='Fondo espacio'
          src='/fondo-desktop.webp'
          quality={100}
          fill
          sizes='100vw'
          priority
          style={{
            objectFit: 'cover',
            zIndex: -1,
          }}
          className='hidden sm:block'
        />

        <div className='bg-[#FFFFFFD9] py-10 max-w-[302px] sm:max-w-[500px] sm:py-20 w-full rounded-3xl flex flex-col items-center gap-9'>
          <div className='flex flex-col gap-4 items-center font-open px-4'>
            <Image src='/instagram.png' width={55} height={55} alt='Gancho' />

            <h3 className='text-black text-2xl sm:text-3xl font-semibold'>
              #15Delfi
            </h3>

            <p className='text-lg sm:text-xl text-black text-center'>
              ¡Compartí tus fotos y videos con el hashtag!
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
