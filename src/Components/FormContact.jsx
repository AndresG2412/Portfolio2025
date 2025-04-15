import { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export default function FormContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('Este es un mensaje predeterminado.'); // ya que no es editable

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos vacíos
    if (!name.trim() || !email.trim() || !message.trim()) {
        Swal.fire({
            icon: 'error',
            title: 'Campos incompletos',
            text: 'Por favor completa todos los campos antes de enviar.',
            confirmButtonColor: '#000'
        });
        return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send('service_0fkq5ot', 'template_9v4pv47', templateParams, 'nctrpObNBSEbwL1cc')
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            Swal.fire({
            position: "center",
            icon: "success",
            title: "Correo enviado correctamente!",
            showConfirmButton: false,
            timer: 2500
            });

            setName('');
            setEmail('');
            setMessage('Este es un mensaje predeterminado.');
        })
        .catch((err) => {
            console.error('FAILED...', err);
            Swal.fire({
            position: "center",
            icon: "error",
            title: "¡Ups! Algo salió mal. Por favor, intenta más tarde.",
            showConfirmButton: false,
            timer: 2500
            });
        });
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col md:px-24 px-6'>
        <label className='text-center text-2xl py-3'>Tu Nombre: </label>
        <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border-2 dark:border-white border-black rounded px-4 py-2'
        />

        <label className='text-center text-2xl py-3'>Tu Correo: </label>
        <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-2 dark:border-white border-black rounded px-4 py-2'
        />

        <label htmlFor="" className='text-center text-2xl py-3'>Escribe tu Mensaje: </label>
        <textarea
            readOnly
            value={message}
            className='border-2 dark:border-white border-black rounded px-4 py-2 resize-none' // desactiva el resize
        />

        <button
            type="submit"
            className="font-semibold tracking-wider text-xl mt-8 mb-4 mx-auto w-[150px] md:w-55 dark:text-black dark:bg-white bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-300 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#4c4c4c] before:to-[rgb(111,111,111)] before:transition-all before:duration-300 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
        >
            Enviar
        </button>
        </form>
    );
}
