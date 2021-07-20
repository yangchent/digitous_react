import React from "React"
import './App.css'
import users from "../../Users/src/users.json"
import UserInfo from "../../users/src/UserInfo"
import Counter from "../../counter/src/Counter"

// class App extends React.Component{
//   constructor(){  
//     super();
//       this.state = {
//         count: 10,
//       }
//   }
//   render(){
//     return (
//       <div>
//         <Counter count={this.state.count} addFunction={this.addFunction} substractFunction={this.substractFunction} />
//         </div>
//         <div>
//         {users.map((user) => (
// 					<UserInfo name={user.name} email={user.email} />
          
// 				))}
//       </div>
//     )
//   }
// }

// export default App;

const listOfUsers = [users[0]]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1
    };
  }
  addFunction=()=> {
    if (this.state.count < users.length) {
      this.setState({
        count: this.state.count+1
      })
      listOfUsers.push(users[this.state.count])
      console.log(listOfUsers)
    }
  }
  substractFunction=()=> {
    if (this.state.count > 1) {
      this.setState({
        count: this.state.count-1
      })
      listOfUsers.pop(users[this.state.count])
      console.log(listOfUsers)
    }
  }
  render () {
    return (
      <div>
        <div>
          <Counter count={this.state.count} addFunction={this.addFunction} substractFunction={this.substractFunction} />
        </div>
        <div>
          <p></p>
          {listOfUsers.map((user) =>(
            <UserInfo name={user.name} />
        ))}
        </div>
      </div>
    )
  }
}
export default App;