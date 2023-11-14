'use client'

import { Assistance } from '@/types'
import Snackbar from './snackbar'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Spinner from './spinner'

export default function ComfirmAttendace() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [loading, setLoading] = useState(false)
  const message = useRef('')
  const [form, setForm] = useState<Assistance>({
    name: '',
    attendace: true,
  })

  const isError =
    message.current === '¡Asistencia confirmada correctamente!' ? false : true

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

    if (form.name.length > 0) {
      setLoading(true)

      fetch('/api/send-assistance', {
        method: 'POST',
        body: JSON.stringify(form),
      })
        .then(() => {
          message.current = '¡Asistencia confirmada correctamente!'
          setShowSnackbar(true)
        })
        .catch(() => {
          message.current = '¡Error confirmando la asistencia!'
          setShowSnackbar(true)
        })
        .finally(() => {
          setForm({
            name: '',
            attendace: true,
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
        className='bg-secondary px-9 py-3 rounded-lg text-sm font-medium font-open opacity-100'
      >
        Confirmar Asistencia
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
            className='bg-[#ffffffef] p-6 rounded-3xl shadow-lg w-full max-w-[90vw] sm:max-w-[500px]  z-[3000] flex flex-col justify-around items-center px-4 max-h-[80vh] sm:max-h-[700px] h-full relative'
          >
            <h2 className='text-7xl text-[#1D1D1D] font-cookie text-center'>
              Confirmar Asistencia
            </h2>

            <div className='flex justify-around w-full font-open'>
              <div>
                <input
                  id='default-radio-1'
                  type='radio'
                  value={1}
                  name='default-radio-1'
                  checked={form.attendace}
                  onChange={() => {
                    setForm({
                      ...form,
                      attendace: true,
                    })
                  }}
                />
                <label
                  htmlFor='default-radio-1'
                  className='text-[#292929] pl-3 text-lg'
                >
                  Si! ¡Voy! :)
                </label>
              </div>

              <div>
                <input
                  checked={!form.attendace}
                  id='default-radio-2'
                  type='radio'
                  value={0}
                  name='default-radio-2'
                  onChange={() => {
                    setForm({
                      ...form,
                      attendace: false,
                    })
                  }}
                />
                <label
                  htmlFor='default-radio-2'
                  className='text-[#292929] pl-3 text-lg'
                >
                  No puedo ir :(
                </label>
              </div>
            </div>

            <input
              type='text'
              placeholder='Escribí aquí tu nombre'
              className='text-[#2B2B2B] font-open w-full px-2 py-2 rounded-lg max-w-[90%] placeholder:text-center'
              onChange={(e) => {
                setForm({ ...form, name: e.target.value })
              }}
            />

            <button
              type='submit'
              className='p-2 bg-secondary text-white rounded-lg max-w-[80%] w-full font-open mb-[40%] sm:mb-[25%]'
            >
              {loading ? <Spinner /> : 'Enviar'}
            </button>

            <Image
              src='/bestia.png'
              width={130}
              height={165}
              alt='bestia'
              className='absolute -right-2  bottom-0'
            />
          </form>
        </div>
      )}
    </>
  )
}
