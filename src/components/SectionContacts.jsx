import SectionContactsStyled from "./styled/SectionContactsStyled";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { z } from "zod"
import emailjs from '@emailjs/browser'
import { useState } from "react";
const validateForm = z.object({
        name: z.string()
        .nonempty("O nome é obrigatorio")
        .min(5, "seu nome está muito pequeno"),
        email: z.string()
        .nonempty("O email é obrigatorio").email("formato do email está errado"),
        mensagem: z.string()
        .nonempty("A mensagem é obrigatoria"),
    })
function SectionContacts(){
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [email, setEmail] = useState("")
    const { register , handleSubmit, formState: { errors }  } = useForm({
        resolver: zodResolver(validateForm),
    })
    const params = {
        from_name: name,
        message: message,
        email: email
    }
    const onSubmit =  () => {
        console.log(email);
        emailjs.send("service_hnwk7eg", "template_9c7bkc2", {
        from_name: name,
        message: message,
        email: email
    }, "6LdpoBAZmFWvzYi7W")
        .then((res) => {
            alert("email enviado")
            setEmail("")
            setMessage("")
            setName("")
            
        })
    }
    return(
        <SectionContactsStyled id="contacts" className="flex flex-col items-center max-sm:mt-14">
            <div className="contacts flex gap-2">
                <a className="px-5 py-3 bg-green-500 text-white rounded-full" target="_blank" href="https://api.whatsapp.com/send?phone=559999815137437&text=olá">WHATSAPP</a>
                <a className="px-5 py-3 bg-blue-500 text-white rounded-full" target="_blank" href="https://www.linkedin.com/in/danilodevjs ">LINKEDIN</a>
            </div>
            <form className="flex flex-col w-2/4 gap-1 mt-5 max-sm:w-full"  onSubmit={handleSubmit(onSubmit)}>
                <input type="text"
                placeholder="SEU NOME?"
                className="p-4"
                {...register('name')}
                onChange = {(e) => setName(e.target.value)}
                
                />
                 <span className="text-red-500 text-xl">{errors.name?.message}</span>
                <input type="text"
                placeholder="SEU EMAIL?"
                className="p-4"
                {...register('email')}
                onChange = {(e) => setEmail(e.target.value)}
                />
                 <span className="text-red-500 text-xl">{errors.email?.message}</span>
                <input type="text"
                placeholder="SEU MENSAGEM?"
                className="p-4"
                {...register('mensagem')}
                onChange = {e => setMessage(e.target.value)}
                />
                 <span className="text-red-500 text-xl">{errors.mensagem?.message}</span>
                <button className="p-4" type="submit">ENVIAR EMAIL</button>
            </form>
        </SectionContactsStyled>
    )
}

export default SectionContacts