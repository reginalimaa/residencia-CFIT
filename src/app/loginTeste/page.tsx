'use client'

import { schema } from "./schema";
import { Input } from "../../../components/Input/input";
import { useLogin } from "./useLogin";


export default function Login() {

  const { errors, handleFormSubmit, handleSubmit, register} = useLogin();

  return (
    <>
      <h1>NEW ESTÉTICA</h1>

      <p>Olá, Para continuar digite seu e-mail</p>
      
      <form onSubmit={handleSubmit(handleFormSubmit)}> 
        <Input
          {...register('email')}
          placeholder="E-mail"
          type="email"
        />
        {errors.email?.message && (
          <p>{errors.email?.message}</p>
        )}
        <Input
          {...register('password')}
          placeholder="Senha"
          type="password"
        />
        {errors.password?.message && (
          <p>{errors.password?.message}</p>
        )}
        
        <button type="submit"> Entrar</button>
      </form>
      
    </>
  )
}