import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button  from './components/button';
import Card from './components/card'

class App extends React.Component{
  constructor(){
    super()
    this.state={
        capital : "",
        flag :"",
        population : "",
        region : "",
        country:"",
    }
  }
  componentDidMount() {
    this.getCountry("france")
}

getCountry(country) {
    const url = "http://localhost:3000/" + country

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                name: data.data[0].name,
                capital: data.data[0].capital,
                flag: data.data[0].flag,
                population: data.data[0].population,
                region: data.data[0].region,
            })
        })
}

render() {
    return (
        <div className="container">

            <div className="row">
                <div className="offset-4 col-4">
                    <h1 className="text-center">Countries</h1>
                </div>
            </div>

            <div className="row m-5">
                <div className="offset-3 col-2 text-center">
                    <Button onClick={() => this.getCountry("france")} >France</Button>
                </div>
                <div className="col-2 text-center">
                    <Button onClick={() => this.getCountry("brazil")}>Brazil</Button>
                </div>
                <div className="col-2 text-center">
                    <Button onClick={() => this.getCountry("croatia")}>Croatia</Button>
                </div>
            </div>

            <Card
                name={this.state.name} 
                capital={this.state.capital} 
                flag={this.state.flag} 
                population={this.state.population} 
                region={this.state.region} 
            />

        </div>
    );
}
}

export default App;