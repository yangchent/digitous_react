import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends React.Component{
constructor(){
  super();
  this.state ={
    email : '',
    password: '',
    checkbox : '',
    isValidPassword: false,
    isValidEmail: false,
    isSubmit: false,
  }
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this)
}
onEmailChange(e) {
  this.setState({ email: e.target.value })
  const email_validator_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(email_validator_regex.test(e.target.value)){
    this.setState({isValidEmail:true})
  }else{
    this.setState({isValidEmail:false})
  }
}

onPasswordChange=(e)=>{
  this.setState({	password : e.target.value })
  if(e.target.value.length>= 6){
    this.setState({isValidPassword: true})
  }
  else {
    this.setState({isValidPassword: false})
  }
  }
onCheckboxChange=(e)=>{
  this.setState({	checkbox : e.target.value })
}

onSubmitted=()=> {
    if(this.state.isValidPassword ===true &&this.state.isValidEmail===true){
      this.setState( {isSubmit : true })
  }
}
  render(){
    if (this.state.isSubmit=== true){
     return( 
     <div className= "card-text ">
       <h1> Login</h1>
      <h2> Form submitted</h2>
      </div>)
    }
    else {
    return( 

    <div>
      <form>
      <div className="form-group input-group-prepend">
        <label for="validationSuccess" className="form-label text-success" >Email address</label>
        <input type="email" className={this.state.isValidEmail ? "is-valid form-control" : "is-invalid form-control"} id="validationSucess" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onEmailChange} />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" className= {this.state.isValidPassword ? "is-valid form-control" : "is-invalid form-control"} id="exampleInputPassword1" placeholder="Enter Password" onChange={this.onPasswordChange}/>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.oncheckboxChange} />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      
      <button type="submit" className="btn btn-primary" onClick={this.onSubmitted} >Submit</button>
      </form>
    </div> 
    )
    }
  }}
export default App;