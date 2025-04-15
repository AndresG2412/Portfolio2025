import React from 'react'
import ControlMode from './ControlMode'

export default function Navbar() {
    return (
        <div className='fixed dark:text-white w-full py-4 md:py-0 top-5 left-1/2 -translate-x-1/2 flex justify-center gap-x-4 md:gap-x-10 items-center md:px-6 tracking-wide md:tracking-wider font-semibold text-black z-50 bg-white/60 dark:bg-white/15 backdrop-blur-md'>
            <a href="#" className='shadow-2xl hover:scale-110 hover:duration-300 hover:text-purple-800'>Quien Soy</a>
            <a href="#Proyectos" className='shadow-2xl hover:scale-110 hover:duration-300 hover:text-purple-800'>Proyectos</a>
            <a href="#Recorrido" className='shadow-2xl hover:scale-110 hover:duration-300 hover:text-purple-800'>Recorrido</a>
            <a href="#Contacto" className='shadow-2xl hover:scale-110 hover:duration-300 hover:text-purple-800'>Contacto</a>
            <ControlMode/>
        </div>
    )
}
