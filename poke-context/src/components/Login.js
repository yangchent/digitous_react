import React,{useContext} from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from "../App";



function Login(){
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const  loggedContext  = useContext(UserContext)

    const onSubmit = () =>  loggedContext.setAuth();
 

  return <div className="container">
      <h1>Login</h1>
      <navBar />

      <form onSubmit={handleSubmit(onSubmit)} className="form-group">
        <label for="">Name</label>
        <input {...register("userName", { required: true, maxLength:  15 })} 
        class="form-control" type="userName" />
        {errors.userName && <p>Username is required!</p>}
        <label for="">Password</label>
        <input {...register("password", { required: true, minLength:  6  })} type="password" class="form-control" />
        {errors.password && <p>password is required!</p>}
        
        {!loggedContext.isLogged ? <input onClick={handleSubmit} type="submit" value="se connecter"/> 
        : <input onClick={handleSubmit} type="submit" value="se déconnecter" /> }
      </form>
  </div>
}
export default Login;