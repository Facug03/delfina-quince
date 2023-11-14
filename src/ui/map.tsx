'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
  center: {
    // lat: -26.7624207,
    // lng: -65.2446598,
    lat: -26.76146,
    lng: -65.243045,
  },
  zoom: 15,
}

export default function Map() {
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

  const renderMarkers = (map: any, maps: any) => {
    new maps.Marker({
      position: defaultProps.center,
      map,
      title: 'Marcador',
    })
  }

  return (
    <>
      <button
        onClick={() => {
          setModalOpen(true)
        }}
        className='bg-secondary px-9 py-3 rounded-lg text-sm font-medium font-open opacity-100'
      >
        ¿Cómo llegar?
      </button>

      {isModalOpen && (
        <div className='fixed inset-0 overflow-y-auto z-[1000] flex items-center justify-center'>
          <div
            className='fixed inset-0 bg-black opacity-50 z-[2000]'
            onClick={closeModal}
          />
          <div className='bg-[#ffffffef] p-6 rounded-3xl shadow-lg w-full max-w-[90vw] md:max-w-[768px] z-[3000] flex flex-col justify-around items-center px-4 max-h-[80vh] sm:max-h-[550px] h-full relative'>
            <h2 className='font-open text-3xl font-medium text-black pb-2 text-center'>
              Cómo llegar a la Fiesta
            </h2>

            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyBTZzGRDSiW_emG69ndWxY0OX1b-_p8sw0',
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
            >
              <div>Marker</div>
            </GoogleMapReact>

            <div className='pt-6'>
              <a
                href='https://maps.app.goo.gl/fLSnBgV9jnnYrNPw9'
                target='_blank'
                className='bg-secondary px-9 py-3 rounded-lg text-sm font-medium font-open opacity-100'
              >
                Ampliar
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
