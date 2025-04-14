import React from 'react'

export default function CardProject({titulo, descripcion, linkRepo, linkPreview}) {
    return (
        <div className='w-2/3 mx-auto md:flex gap-x-12 py-8 items-center justify-center'>
            <div className=' md:w-[50rem] h-52 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl mb-8 md:mb-0'>
            </div>
            <div className='flex flex-col items-start justify-center gap-y-5'>
                <p className='text-3xl font-bold tracking-wider'>{titulo}</p>
                <p className='tracking-wide text-lg w-full'>{descripcion}</p>
                <div className='grid md:grid-cols-2 w-full md:justify-center md:gap-x-16 gap-y-3'>
                    <button 
                        className='hover:border-purple-800 flex items-center gap-x-1 justify-center hover:scale-110 hover:duration-300 bg-blue-800 border-2 border-blue-800 rounded-lg px-4 py2 font-semibold tracking-wider md:text-xl'>
                            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path fill="#fff" d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm5.5,17.5H6.5V6.5h11Z"/></svg>
                            <a href={linkRepo} className='text-lg uppercase text-white'>| REPOSITORIO</a>
                    </button>
                    <button 
                        className='hover:border-purple-800 flex items-center gap-x-2 justify-center hover:scale-110 hover:duration-300 bg-blue-800 border-2 border-blue-800 rounded-lg px-4 py2 font-semibold tracking-wider md:text-xl'>
                            <svg viewBox="0 0 256 222" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path fill="#fff" d="m128 0 128 221.705H0z"/></svg>
                            <a href={linkPreview} className='text-lg uppercase text-white'>| Preview</a>
                    </button>
                </div>
            </div>
        </div>
    )
}
