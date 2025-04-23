import React from 'react'
import Navbar from './Components/Navbar'
import CardProject from './Components/CardProject'

import roadmap from "./Images/roadmap_camilo.png"
import roadmap_dark from "./Images/roadmap_camilo_dark.png"
import Github from './Components/Buttons/Github'
import Linkedin from './Components/Buttons/Linkedin'
import Javascript from './Components/Buttons/Javascript'
import Gmail from './Components/Buttons/Gmail'
import FormContact from './Components/FormContact'

export default function App() {
    return (
        <>
            <Navbar/>

            <section id='Quien Soy' className='dark:text-white w-full h-[80vh] mt-24 md:mt-28 flex flex-col items-center justify-center md:gap-y-10'>
                <div className='flex flex-col items-center justify-center h-full gap-y-10'>
                    <div className='w-[250px] h-[250px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl flex items-center justify-center'>
                    </div>
                    <div className='flex flex-col items-center text-start gap-y-5'>
                        <div className='flex items-center gap-x-2 '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="2.2" stroke="currentColor" class="size-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                            </svg>
                            <p className='font-bold tracking-wider text-4xl'>Andres Gaviria</p>
                        </div>
                        <p className='font-semibold tracking-wide text-lg text-start'>Ingeniero de Sistemas con +3 años<br />programando y emprendiendo como<br />desarrollador web junior independiente,<br />acesor y vendedor online con ambición<br />y mucho que aprender dia a dia</p>
                    </div>
                </div>
                <a href="#Contacto"><Gmail/></a>
            </section>

            <section id='Proyectos' className='dark:text-white pt-20 md:pt-24'>
                <div className='flex items.center justify-center gap-x-4 pb-12'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke="currentColor" class="size-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <p className='text-center text-4xl tracking-wider font-bold'>PROYECTOS PERSONALES</p>
                </div>
                <CardProject 
                    titulo={"Tienda Virtual"} 
                    descripcion={"Tienda de productos para ventas profesionales, con panel de administrador para subir todo lo relacionado a la tienda utilizando Next.JS y Firebase sin costo alguno de mantenimiento, mostrando los productos en la pagina principal para los clientes."}
                    linkRepo={"https://github.com/AndresG2412/OnlineShop"}
                    linkPreview={"https://salchi-gabo.vercel.app/"}
                    />
                <CardProject 
                    titulo={`"Uber" Empresarial`} 
                    descripcion={"Pagina al estilo Uber para solicitud de servicio de transporte publico para la empresa Aerotrans LTDA, proyecto profesional utilizando Next.JS y Firebase, sin costo de mantenimiento, con la finalidad de mejorar procesos internos."}
                    linkRepo={"https://github.com/AndresG2412/Aerotrans"}
                    linkPreview={"https://aerotrans.vercel.app/"}
                    />
                <CardProject 
                    titulo={"Invitaciones Online"} 
                    descripcion={"Espectacular SPA con Vite.JS y Tailwind, compartiendo invitaciones de manera virtual a celebración provada, siendo un proyecto profesional; verificando los datos en la pagina y confirmando la llegada de manera interna."}
                    linkRepo={"https://github.com/AndresG2412/cartas-mv"}
                    linkPreview={"https://cartas-mv.vercel.app/"}
                    />
            </section>

            <section id='Recorrido' className='dark:text-white pt-20 md:pt-24 pb-12'>
                <div className='flex items-center justify-center gap-x-4 pb-12'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="2.2" stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                    <p className='text-center text-4xl tracking-wider font-bold uppercase'>Recorrido Personal</p>
                </div>
                <img src={roadmap} alt="roadmap_image" className='dark:hidden block px-10 md:px-0 md:w-[50%] mx-auto'/>
                <img src={roadmap_dark} alt="roadmap_image" className='hidden dark:block px-10 md:px-0 md:w-[50%] mx-auto'/>
                <div className='md:flex justify-center items-center gap-x-10 mt-10'>
                    <div className='mx-auto mb-8 md:hidden w-[250px] h-[250px] rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl flex items-center justify-center'>
                    </div>
                    <p className='px-16 md:px-0 md:w-1/3 font-semibold text-lg'>Todo comenzo conociendo HTML, de ahi en adelante es historia,
                    conociendo CSS luego TailwindCSS, a la vez los diferentes
                    frameworks y tecnologias usadas para el desarrollo web, seguido
                    de metodologias, practicas, bases de datos, etc...
                    <br />
                    <br />
                    hoy en dia, mi camino principal es el Front-End pero tambien
                    manejo Back-End y Bases de Datos, aun sigo aprendiendo con
                    el mismo animo que el primer dia, deseo trabajar y aprender
                    mucho mas de todo este mundo hasta que mi esfuerzo
                    sea reconocido y envidiado de buena forma 🫡</p>
                    <div className='hidden w-[250px] h-[250px] rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl md:flex items-center justify-center'>
                    </div>
                </div>
            </section>

            <div className='mb-24'>
                <div className='hidden md:flex justify-center items-center gap-x-10 mb-8'>
                    <a target="_blank" href="https://github.com/AndresG2412"><Github/></a>
                    <a target="_blank" href="https://www.linkedin.com/in/andres-gaviria-503757257/"><Linkedin/></a>
                    <a target="_blank" href="/hojadevida2025.pdf" download><Javascript/></a>
                </div>
                <div className='md:hidden flex flex-col gap-y-8 justify-center items-center gap-x-10 mb-8'>
                    <a target="_blank" href="https://github.com/AndresG2412"><Github/></a>
                    <a target="_blank" href="https://www.linkedin.com/in/andres-gaviria-503757257/"><Linkedin/></a>
                    <a target="_blank" href="/hojadevida2025.pdf" download><Javascript/></a>
                </div>
            </div>

            <section id='Contacto' className='dark:text-white pt-20 md:pt-24 pb-24'>
                <div className='flex items-center justify-center gap-x-4 pb-12'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="2.2" stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                    <p className='text-center text-4xl tracking-wider font-bold'>CONTACTAME</p>
                </div>
                <div className='md:w-2/3 px-4 md:px-0 mx-auto'>
                    <FormContact/>
                </div>
            </section>
        </>
    )
}
