import React from 'react';
import style from './App.module.css';
import Cards from './Components/Cards/Cards'
import Charts from './Components/Charts/Charts';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import {fetchData} from './api';
import coronaimg from './Images/image.png';
import  styles  from './App.module.css';


class App extends React.Component {
state = {
  data : {},
  country :''
}

async componentDidMount () {
  const fetchedData  = await fetchData();
  this.setState({data : fetchedData});
  
}

  handleCountryChange = async (countryName) => {
    const fetchedData  = await fetchData(countryName);
    this.setState({data : fetchedData ,country : countryName });
  }
  

  render() {
  const {data,country} = this.state;
  
    return (
      <div className={style.container}>
        <img className={styles.image} src={coronaimg} alt="COVID-19"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange = {this.handleCountryChange}/>
        <Charts data={data} country={country}/>
      </div>
    )

  }


}
export default App;
