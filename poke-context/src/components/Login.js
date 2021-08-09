import React from 'react';
import Home from './Home';
import { useForm } from "react-hook-form";



function Login(){
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
     

  return <div>
      <h1>Login</h1>
      <navBar />
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("userName", { required: true, maxLength:  15 })} />
        <input {...register("password", { required: true, minLength:  6 })} />
        <input type="submit" />
      </form>
  </div>
}
export default Login;