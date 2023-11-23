'use client'

import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../../components/Input/styles";
import { Button } from "../../../components/Button/styles";
import Link from 'next/link'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import './styles.css'
import Title from "../../../components/Titlle/Title";

const createUserFormSchema = z.object({
  username: z.string().min(3, 'O nome precisa ter pelo menos três caracteres'),
  phone: z.string().min(3, 'O sobre nome precisa ter pelo menos três caracteres'),
  birthdate: z.string().min(6, 'Campo obrigatório'),
  cpf: z.string().min(6, 'Campo obrigatório'),
  email: z.string().min(11, 'Campo obrigatório'),
  password: z.string().max(11, 'Campo obrigatório'),
  confirm_password: z.string().min(6, 'Campo obrigatório'),
  gender: z.string(),
  acceptTerms: z.boolean(),
  receiveOffers: z.boolean(),


  role: z.enum(['Feminino', 'Masculino', 'Outro', 'Prefiro não informar'], {
    errorMap: () => {
      return { message: `Informe 'Feminino, Masculino' ou 'Outro`}
    }
  })
  
}).refine((filds) => filds.acceptTerms == true, {
  path: ['acceptTerms'],
  message: 'Você precisa aceitar os termos'
}).refine((filds) => filds.password == filds.confirm_password, {
  path: ['confirm_password'],
  message: 'As senhas precisam ser iguais'
}).refine((filds) => filds.gender.length, {
  path: ['gender'],
  message: 'Por favor, selecione uma opção'
});


type createUserFormData = z.infer<typeof createUserFormSchema>

  export default function Login() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<createUserFormData>({
      mode: 'all',
      resolver: zodResolver(createUserFormSchema)
    })
    
    const onSubmit: SubmitHandler<createUserFormData> = async (data) => {
      console.log('Dados do formulário:', data);

      try {
        // Adicione aqui a lógica para fazer a chamada à sua rota de criação de clientes
        const resposta = await fetch('http://localhost:8080/clientes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (resposta.ok) {
          const novoCliente = await resposta.json();
          console.log('Cliente criado com sucesso:', novoCliente);
        } else {
          console.error('Erro ao criar cliente:', resposta.statusText);
        }
      } catch (erro) {
        console.error('Erro na requisição:', erro);
      }
    };

    return (

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
        <Title title="NEW ESTÉTICA" />
        
        <p> Complete seu cadastro </p>

        <form onSubmit={handleSubmit(onSubmit)}>
            
            <Input 
              {...register('username')}
              placeholder="Nome"
              type="text"
            />
            {errors.username && <span>{errors.username.message}</span>}

            <Input 
              {...register('phone')}
              placeholder="telefone"
              type="text"
            />
            {errors.phone && <span>{errors.phone.message}</span>}

            <Input 
              {...register('birthdate')}
              placeholder="Data de nascimento"
              type="number"
            />
            {errors.birthdate && <span>{errors.birthdate.message}</span>}
            
            <Input 
              {...register('cpf')}
              placeholder="CPF"
              type="number"
            />
            {errors.cpf && <span>{errors.cpf.message}</span>}

            <Input 
              {...register('password')}
              placeholder="Senha"
              type="password"
            />
            {errors.password && <span>{errors.password.message}</span>}

            <Input 
              {...register('confirm_password')}
              placeholder="Confirmar senha"
              type="password"
            />
            {errors.confirm_password && <span>{errors.confirm_password.message}</span>}
            
            <select className="select-gender" {...register('gender')}>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </select>
            {errors.gender && <p>{errors.gender.message}</p>}

            <div className="select">
            <input className="" type="checkbox" {...register('acceptTerms')} />
              <label>Aceitar políticas e termos de privacidade</label>
              {errors.acceptTerms && <p>{errors.acceptTerms.message}</p>}
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