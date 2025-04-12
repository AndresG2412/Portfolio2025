import React from 'react'
import ControlMode from './ControlMode'

export default function Navbar() {
    return (
        <div className='fixed top-5 left-1/2 -translate-x-1/2 flex gap-x-10 items-center px-6 tracking-wider font-semibold text-black z-50'>
            <a href="#" className='shadow-2xl'>Quien Soy</a>
            <a href="#" className='shadow-2xl'>Proyectos</a>
            <a href="#" className='shadow-2xl'>Recorrido</a>
            <a href="#" className='shadow-2xl'>Contacto</a>
            <ControlMode/>
        </div>
    )
}
