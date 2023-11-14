import separador from '../../public/separador.png'
import separatorDesktop from '../../public/separator-desktop.png'

import Image from 'next/image'

export default function Separator() {
  return (
    <>
      <Image
        src={separador}
        alt='separador'
        className='h-10 -bottom-6 min-[400px]:h-12 min-[400px]:-bottom-7 min-[500px]:h-14 min-[500px]:-bottom-8 sm:hidden'
        style={{
          position: 'absolute',
          objectFit: 'fill',
        }}
      />

      <Image
        src={separatorDesktop}
        alt='separador'
        className='h-10 -bottom-6 min-[400px]:h-12 min-[400px]:-bottom-7 min-[500px]:h-14 min-[500px]:-bottom-8 hidden sm:block'
        style={{
          position: 'absolute',
          objectFit: 'cover',
        }}
      />
    </>
  )
}
