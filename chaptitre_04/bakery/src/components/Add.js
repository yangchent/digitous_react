import React from 'react'

class Add extends React.Component{
    constructor() {
        super();
        this.state =  {
            productName : '',
            price: 1,
        }
        }
        updateProductName=(e) => {
            this.setState({productName: e.target.value})
        }
    
        updatePrice=(e) => {
            this.setState({price: e.target.value})
        }
        insertItem = () => {
            this.props.addItem({
                name: this.state.productName, 
                price: this.state.price})
        }
    render(){
        return <div>
             <input className='border border-warning' type='text' onChange={this.updateProductName}></input>
             <button className='bg-primary btn' onClick={this.insertItem}>Add</button>
        </div>
    }
}
export default Add;