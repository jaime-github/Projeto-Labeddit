import React from "react";
import { LogoTipo, Papai, FormGeral, InputGeral, BotaoEntrar, P} from "./styled"
import 'antd/dist/antd.css';
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import useForm from '../../Hooks/useForms';
import {BASE_URL} from '../../Constants/urls';



export default function Login() {
  const navigate= useNavigate();
  const {form, onChange, clearFields}= useForm({ email: "", password: "" })


  const url = `${BASE_URL}/users/login`
  const body = form

  
  const submitForm = ((e)=>{
    e.preventDefault()
    console.log("Formulário enviado:", form)
    onSubmitLogin()    
  })
  

  const onSubmitLogin = () => {   
    
    const url = `${BASE_URL}/users/login`
    const body = form 
 
    axios.post(url,body)
    .then((res) =>{
      localStorage.setItem('token', res.data.token)
      alert("Login Autorizado!!")
      //clearFields()
      navigate("/feeds")
      console.log(res.data);
    }) 
    .catch((error) =>{
      //alert("Ops, algo deu errado, por favor tente novamente!!")
      

  const onSubmitLogin = () => {    
 
    axios.post(url, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Login autorizado")
        clearFields()
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
        
        <BotaoEntrar type="submit">
          Entrar
        </BotaoEntrar>
        </form>
        <P>Ainda não tem uma conta?  <Link to = "/cadastro">Cadastre-se</Link> </P>
        
        </FormGeral>
    </Papai>
  )
}
