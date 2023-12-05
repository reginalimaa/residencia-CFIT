'use client'

import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../../components/Input/styles";
import { Button } from "../../../components/Button/styles";
import Link from 'next/link'

import { useState } from 'react';

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import './styles.css'
import Title from "../../../components/Titlle/Title";
import axios from 'axios'



/*const createUserFormSchema = z.object({
  nome: z.string().min(3, 'O nome precisa ter pelo menos três caracteres'),
  telefone: z.string().min(3, 'O sobre nome precisa ter pelo menos três caracteres'),
  dataNascimento: z.string().min(6, 'Campo obrigatório'),
  cpf: z.string().min(6, 'Campo obrigatório'),
  email: z.string().min(11, 'Campo obrigatório'),
  senha: z.string().max(11, 'Campo obrigatório'),
  confirm_senha: z.string().min(6, 'Campo obrigatório'),
  sexo: z.string(),
  acceptTerms: z.boolean(),
  receiveOffers: z.boolean(),


  role: z.enum(['Feminino', 'Masculino', 'Outro', 'Prefiro não informar'], {
    errorMap: () => {
      return { message: `Informe 'Feminino, Masculino' ou 'Outro` }
    }
  })

}).refine((filds) => filds.acceptTerms == true, {
  path: ['acceptTerms'],
  message: 'Você precisa aceitar os termos'
}).refine((filds) => filds.senha == filds.confirm_senha, {
  path: ['confirm_senha'],
  message: 'As senhas precisam ser iguais'
}).refine((filds) => filds.sexo.length, {
  path: ['sexo'],
  message: 'Por favor, selecione uma opção'
});


type createUserFormData = z.infer<typeof createUserFormSchema>
*/
export default function Login() {
  const [redirect, setRedirect] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const resposta = await axios.post('http://localhost:8080/clientes', data);

      if (resposta.status === 201) {
        const novoCliente = resposta.data.novoCliente;
        console.log('Cliente criado com sucesso:', novoCliente);

        // Configurar a variável de estado para redirecionar
        setRedirect(true);
      } else {
        console.error('Erro ao criar cliente:', resposta.statusText);
      }
    } catch (erro) {
      console.error('Erro na requisição:', erro);
    }
  };

  // Redirecionar para a página de login se a variável de estado indicar
  if (redirect) {
    return (
      <Link href="/login">
        <a>Clique aqui para fazer login</a>
      </Link>
    );
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Title title="NEW ESTÉTICA" />


      <form onSubmit={handleSubmit(onSubmit)}>

        <Input
          {...register('nome')}
          placeholder="Nome"
          type="text"
        />
        <Input
          {...register('email', {
            required: 'O e-mail é obrigatório',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'E-mail inválido',
            },
          })}
          placeholder="E-mail"
          type="email"
        />

        <Input
          {...register('telefone')}
          placeholder="telefone"
          type="text"
        />

        <Input
          {...register('dataNascimento', {
            required: 'A data de nascimento é necessária',
            // Adicione outras regras de validação conforme necessário
          })}
          placeholder="Data de nascimento"
          type="date"
        />
        <Input
          {...register('senha')}
          placeholder="Senha"
          type="senha"
        />

        <Input
          {...register('confirm_senha')}
          placeholder="Confirmar senha"
          type="senha"
        />

        <select className="select-sexo" {...register('sexo')}>
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
          <option value="outro">Outro</option>
        </select>

        <div className="select">
          <input className="" type="checkbox" {...register('acceptTerms')} />
          <label>Aceitar políticas e termos de privacidade</label>
        </div>

        <div className="select">
          <input type="checkbox" {...register('receiveOffers')} />
          <label>Aceito receber ofertas e novidades exclusivas</label>
        </div>

        <button type="submit" onClick={handleSubmit(onSubmit)}>
          Cadastrar
        </button>

      </form>

    </main>
  )

}