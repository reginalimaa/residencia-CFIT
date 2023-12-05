'use client'

import './styles.css'

import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Label } from "../../../components/Input/styles";
import { useState } from 'react';
import axios from 'axios';
import { Button } from '../../../components/Button/styles';
import Link from 'next/link'

interface Inputs {
  email: string;
  password: string;
}

export default function Login() {

  const [token, setToken] = useState('');
  const [clientId, setClientId] = useState('');

  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await axios.post('http://localhost:8080/autenticarCliente', {
        email: data.email,
        senha: data.password,
      });

      if (response.data && response.data.token && response.data.id) {
        localStorage.setItem('clientId', response.data.id);
        setToken(response.data.token);
        setClientId(response.data.id);
        console.log('Token:', response.data.token);
        console.log('ID do Cliente:', response.data.id);

        // Redirecionar para a tela principal após a autenticação
        window.location.href = '../';
      }
    } catch (error) {
      console.error(error);
      // Trate os erros de acordo com sua lógica
    }
  };

  return (
    <main>
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
    </main>
  );
}