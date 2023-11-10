import separador from '../../../public/separador.png'

import Image from 'next/image'

export default function Separator() {
  return (
    <Image
      src={separador}
      alt='separador'
      className='h-10 -bottom-6 min-[400px]:h-12 min-[400px]:-bottom-7 min-[500px]:h-14 min-[500px]:-bottom-8'
      style={{
        position: 'absolute',
        zIndex: 1000,
        objectFit: 'fill',
      }}
    />
  )
}
