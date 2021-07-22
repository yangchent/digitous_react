import React from 'react'
import App from "../App"

class Button extends React.Component{
    render(){
        return <div>
                <button className="btn btn_primary" onClick={this.props.onClick} isSelected={this.props.isSelected}> {this.props.children} </button>
                </div>
    }
}
export default Button;