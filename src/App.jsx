import React from 'react'
import Navbar from './Components/Navbar'
import CardProject from './Components/CardProject'

import roadmap from "./Images/roadmap_camilo.png"
import Github from './Components/Buttons/Github'
import Linkedin from './Components/Buttons/Linkedin'
import Javascript from './Components/Buttons/Javascript'
import Gmail from './Components/Buttons/Gmail'

export default function App() {
    return (
        <>
            <Navbar/>

            <section id='Quien Soy' className='w-full h-[80vh] md:mt-28 flex flex-col items-center justify-center gap-y-10'>
                <div className='flex flex-col items-center justify-center h-full gap-y-10'>
                    <div className='w-[250px] h-[250px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl flex items-center justify-center'>
                    </div>
                    <div className='flex flex-col items-center text-start gap-y-5'>
                        <p className='font-bold tracking-wider text-4xl text-start'>Andres Gaviria</p>
                        <p className='font-semibold tracking-wide text-lg text-start'>Ingeniero de Sistemas con +3 años<br />programando y emprendiendo como<br />desarrollador web junior independiente,<br />acesor y vendedor online con ambición<br />y mucho que aprender dia a dia</p>
                    </div>
                </div>
                <a href=""><Gmail/></a>
            </section>

            <section id='Proyectos' className='pt-16 md:pt-24'>
                <p className='text-center text-4xl tracking-wider font-bold pb-12'>PROYECTOS PERSONALES</p>
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

            <section id='Recorrido' className='pt-16 md:pt-24 pb-12'>
                <p className='text-center text-4xl tracking-wider font-bold pb-12 uppercase'>Recorrido Personal</p>
                <img src={roadmap} alt="roadmap_image" className='px-10 md:px-0 md:w-[50%] mx-auto'/>
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
                    <a href="https://github.com/AndresG2412"><Github/></a>
                    <a href="https://www.linkedin.com/in/andres-gaviria-503757257/"><Linkedin/></a>
                    <a href="/hojadevida2025.pdf" download><Javascript/></a>
                </div>
                <div className='md:hidden flex flex-col gap-y-8 justify-center items-center gap-x-10 mb-8'>
                    <a href="https://github.com/AndresG2412"><Github/></a>
                    <a href="https://www.linkedin.com/in/andres-gaviria-503757257/"><Linkedin/></a>
                    <a href="/hojadevida2025.pdf" download><Javascript/></a>
                </div>
            </div>
        </>
    )
}
