'use client'

import './styles.css'

import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Label } from "../../../components/Input/styles";
import Link from 'next/link'
import { Button } from "../../../components/Button/styles";
import { any } from "zod";

  export default function Login() {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>NEW ESTÉTICA</h1>
        <Input 
          {...register('email')}
          placeholder="E-mail"
          type="email"
        />
        <Input 
          {...register('password')}
          placeholder="Senha"
          type="password"
        />
        
        <Link href={'./resetPassword'} >Forgot your password?</Link>

        <Button type="submit">Entrar</Button>
      </form>
    )
  }