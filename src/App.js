import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Cards from './Components/Cards/Cards';
// import Chart from './Components/Chart/Chart';
// import Country from './Components/Country/Country';

import {Cards, Charts,Country} from './Components';// Depending on index.js in components folder
import style from './App.module.css';
import {fetchData} from './api';
import corona from './image/Covid 19.jpg';


class App extends React.Component {
  state= {
    data:{},
    country: '',

  }
  async componentDidMount(){
    const fetchedData= await fetchData();
    this.setState({data:fetchedData})
  }
  handleCountryChange= async (country) =>{
    
    const fetchedData= await fetchData(country);
    this.setState({data: fetchedData, country: country});

  }
  render(){
    const {data,country}= this.state;
    return(
        <div className={style.container}> 
          <img className={style.image} src={corona} alt="COVID"/>
          
          <Cards data={data}/>
          <Country handleCountryChange={this.handleCountryChange}/>
          <Charts data={data} country = {country}/>
          <h2> By Oluwaseun Odeyemi</h2>
          <p>  Development Training <a href="https://www.youtube.com/watch?v=khJlrj3Y6Ls"> link</a></p>
          <p>  Data Source <a href="https://covid19.mathdro.id/api">API</a> </p>
        </div>
   );
}
}

export default App;
