import { useForm } from "react-hook-form";
import { schema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useLogin = () => {
  const { 
    handleSubmit, 
    register, 
    formState: {errors}
  } = useForm({
    criteriaMode: 'all',
    mode:'all',
    resolver: zodResolver(schema)
  })
  
  console.log(errors)
  
  const handleFormSubmit = (data:any) => {
    console.log(data);
  }
  return {
    handleSubmit,
    register,
    errors,
    handleFormSubmit
  }
}

