import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const email_validator_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

class App extends React.Component{
constructor(){
  super();
  this.state ={
    email : '',
    password: '',
    isValidPassword: false,
    isValidEmail: false,
    isSubmit: false,
  }
    // this.onEmailChange = this.onEmailChange.bind(this);
    // this.onPasswordChange = this.onPasswordChange.bind(this)
}
onEmailChange=(e)=>{
  this.setState((prevState) => {
    return {
      ...prevState, 
      email : e.target.value,
      isValidEmail : email_validator_regex.test(e.target.value),
    }
  })
}
  // this.setState({ email: e.target.value })
  // if(email_validator_regex.test(e.target.value)){
  //   this.setState({isValidEmail:true})
  // }else{
  //   this.setState({isValidEmail:false})
//   }
// }

onPasswordChange=(e)=>{
  this.setState((prevState) => {
    return {
      ...prevState, 
      password : e.target.value,
      isValidPassword : e.target.value.length>5
    }
  })
}
  // this.setState({	password : e.target.value })
  // if(e.target.value.length>= 6){
  //   this.setState({isValidPassword: true})
  // }
  // else {
  //   this.setState({isValidPassword: false})
  // }
  

onSubmitted=(e)=> {
  e.preventDefault(); 

    if(this.state.isValidPassword && this.state.isValidEmail){
      this.setState((prevState)=> {
        return {
          ...prevState,
          isSubmit: true,
        }
      })
  }
}
  render(){
    
     return this.state.isSubmit ?( 
     <div className= "card-text ">
       <h1> Login</h1>
      <h2> Form submitted</h2>
      </div>)
    :( 

    <div>
      <form>
      <div className="form-group input-group-prepend">
        <label htmlfor="validationSuccess" className="form-label text-success" >Email address</label>
        <input type="email" className={this.state.isValidEmail ? "is-valid form-control" : "is-invalid form-control"} id="validationSucess" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onEmailChange} />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlfor="exampleInputPassword1">Password</label>
        <input type="password" className= {this.state.isValidPassword ? "is-valid form-control" : "is-invalid form-control"} id="exampleInputPassword1" placeholder="Enter Password" onChange={this.onPasswordChange}/>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"  />
        <label class="form-check-label" htmlfor="exampleCheck1">Check me out</label>
      </div>
      
      <button type="submit" className="btn btn-primary" onClick={this.onSubmitted} >Submit</button>
      </form>
    </div> 
    )
    }
  }
export default App;