import React, { isValidElement } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
class App extends React.Component{
constructor(){
  super();
  this.state ={
    email : '',
    password: '',
    checkbox : '',
    isValidPassword: false,
    isValidEmail: false
  }
}
onEmailChange=(e)=>{
  this.setState({	email : e.target.value })
  if(e.target.value){
    this.setState({isValidPassword: true})
  }
  else {
    this.setState({isValidPassword: false})
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

  render(){
    return( 
    <div>
      <form>
      <div className="form-group input-group-prepend">
        <label for="validationSuccess" class="form-label text-success" >Email address</label>
        <input type="email" className="form-control" id="validationSucess" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onEmailChange} />
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class= {this.state.isValidPassword ? "is-valid form-control" : "is-invalid form-control"} id="exampleInputPassword1" placeholder="Enter Password" onChange={this.onPasswordChange}/>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.oncheckboxChange} />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div> 
    )
    }
  }
export default App;