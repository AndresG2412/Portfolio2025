import React from 'react'
import ControlMode from './ControlMode'

export default function Navbar() {
    return (
        <div className='fixed top-5 left-1/2 -translate-x-1/2 flex gap-x-10 items-center px-6 tracking-wider font-semibold text-black z-50'>
            <a href="#" className='shadow-2xl hover:scale-110 hover:duration-300 hover:text-purple-800'>Quien Soy</a>
            <a href="#" className='shadow-2xl hover:scale-110 hover:duration-300 hover:text-purple-800'>Proyectos</a>
            <a href="#" className='shadow-2xl hover:scale-110 hover:duration-300 hover:text-purple-800'>Recorrido</a>
            <a href="#" className='shadow-2xl hover:scale-110 hover:duration-300 hover:text-purple-800'>Contacto</a>
            <ControlMode/>
        </div>
    )
}
