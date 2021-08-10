import React from 'react';
import { useForm } from "react-hook-form";



function Login(){
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
     

  return <div className="container">
      <h1>Login</h1>
      <navBar />

      <form onSubmit={handleSubmit(onSubmit)} className="form-group">
        <label for="">Name</label>
        <input {...register("userName", { required: true, maxLength:  15 })} 
        class="form-control" type="userName" />
        <label for="">Password</label>
        <input {...register("password", { required: true, minLength:  6  })} type="password" class="form-control" />
        <input type="submit" />
      </form>
  </div>
}
export default Login;