import React from "react";
import { LogoTipo, Papai, FormGeral, InputGeral, BotaoEntrar, P} from "./styled"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import useForm from '../../Hooks/useForms';
import {BASE_URL} from '../../Constants/urls';

export default function Cadastro() {
  const {form, onChange, cleanFields}=useForm({username:"", email:"", password:""});
  const navigate= useNavigate();

  const submitForm = ((e)=>{
    e.preventDefault()
    console.log("Formulário enviado:", form)
    onSubmitSignUp()    
  })

  const onSubmitSignUp = () => {    
    const url = `${BASE_URL}/users/signup`
    const body = form

    axios.post(url, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Cadastro realizado com sucesso!!")
        cleanFields()
        navigate("/feed")        
    })
    .catch((error) => {
        alert("Algo está errado, tente novamente!")
        console.log(error.res);        
    })
  }
  
  return (
    <Papai>
      <LogoTipo src="https://i.postimg.cc/3wWpMH8Q/Labeddit-1.png"/>
      <FormGeral>
      <form
      onSubmit={submitForm}
      >
       <input
        name="username"
        placeholder="Nome de Usuário"
        type="text"
        value={form.username}
        onChange={onChange}           
        required 
        />       
       <input
        name="email"
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={onChange}           
        required 
        />
       <input
       name="password"
       placeholder="Senha"
       type="password"
       value={form.password}
       onChange={onChange}
       pattern={"\\w{8,}"}
        title={"A senha deve conter no mínimo 8 caracteres"} 
       required
       />
       <BotaoEntrar type="submit">Cadastre-se</BotaoEntrar>       
      </form> 
      <P>Já tem uma conta?  <Link to = "/">Login</Link> </P>        
      </FormGeral>
    </Papai>
  )
}
