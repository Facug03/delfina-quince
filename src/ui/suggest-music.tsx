'use client'

import { SuggestMusic } from '@/types'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Snackbar from './snackbar'
import Spinner from './spinner'

export default function SuggestMusic() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [loading, setLoading] = useState(false)
  const message = useRef('')
  const [form, setForm] = useState<SuggestMusic>({
    name: '',
    song: '',
  })

  const isError =
    message.current === '¡Música solicitada correctamente!' ? false : true

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden')
    }
  }, [isModalOpen])

  const closeModal = () => {
    document.body.classList.remove('overflow-hidden')
    setModalOpen(false)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.name.length > 0 && form.song.length > 0) {
      setLoading(true)

      fetch('/api/suggest-music', {
        method: 'POST',
        body: JSON.stringify(form),
      })
        .then(() => {
          message.current = '¡Música solicitada correctamente!'
          setShowSnackbar(true)
        })
        .catch(() => {
          message.current = '¡Error solicitando la música!'
          setShowSnackbar(true)
        })
        .finally(() => {
          setForm({
            name: '',
            song: '',
          })
          setLoading(false)
          document.body.classList.remove('overflow-hidden')
          setModalOpen(false)
        })
    }
  }

  return (
    <>
      <button
        onClick={() => {
          setModalOpen(true)
        }}
        className='bg-secondary px-9 py-3 rounded-lg text-sm font-medium opacity-100'
      >
        Sugerir canción
      </button>

      {showSnackbar && (
        <Snackbar
          closeSnackbar={() => setShowSnackbar(false)}
          bg={isError ? 'bg-[#d32f2f]' : 'bg-[#2e7d32]'}
          message={message.current}
          showSnackbar={showSnackbar}
        />
      )}

      {isModalOpen && (
        <div className='fixed inset-0 overflow-y-auto z-[1000] flex items-center justify-center'>
          <div
            className='fixed inset-0 bg-black opacity-50 z-[2000]'
            onClick={closeModal}
          />
          <form
            onSubmit={handleSubmit}
            className='bg-[#ffffffef] p-6 rounded-3xl shadow-lg w-full max-w-[90vw] sm:max-w-[500px] z-[3000] flex flex-col justify-around items-center px-4 max-h-[80vh] sm:max-h-[700px] h-full relative'
          >
            <h2 className='text-7xl text-[#1D1D1D] font-cookie text-center'>
              Sugerir Canción
            </h2>

            <div className='flex w-full flex-col items-center gap-5'>
              <input
                type='text'
                placeholder='Canción / banda / artista'
                className='text-[#2B2B2B] font-open w-full px-2 py-3 rounded-lg max-w-[90%] placeholder:text-center'
                value={form.song}
                onChange={(e) => {
                  setForm({ ...form, song: e.target.value })
                }}
              />

              <input
                type='text'
                placeholder='Tu nombre'
                value={form.name}
                className='text-[#2B2B2B] font-open w-full px-2 py-3 rounded-lg max-w-[90%] placeholder:text-center'
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value })
                }}
              />
            </div>

            <button
              type='submit'
              className='p-2 bg-secondary text-white rounded-lg max-w-[80%] w-full font-open mb-[45%] sm:mb-[25%]'
            >
              {loading ? <Spinner /> : 'Enviar'}
            </button>

            <Image
              src='/lumier.png'
              width={160}
              height={160}
              alt='lumier'
              className='absolute -right-6  bottom-0 -scale-x-100'
            />
          </form>
        </div>
      )}
    </>
  )
}
