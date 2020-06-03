import axios from 'axios';

const api  = 'https://covid19.mathdro.id/api';

export const fetchData = async (countryName) => {
    let changeUrl = 'https://covid19.mathdro.id/api';
    if(countryName) {
        changeUrl = `${api}/countries/${countryName}`;
    }
    try {
        const {data : {confirmed,recovered,deaths, lastUpdate}}  = await axios.get(changeUrl);
        return {confirmed, recovered, deaths, lastUpdate};

    } catch (error) {
        
    }
}

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${api}/daily`);
    
        const modifiedData = data.map((dailydata) => ({
            confirmed : dailydata.confirmed.total,
            deaths : dailydata.deaths.total,
            date : dailydata.reportDate
        }));
        
        return modifiedData;
    } catch (error) {
        
    }
}

export const fetchCountriesData = async ( ) => {
    try {
        const { data : {countries}} = await axios.get(`${api}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        
    }
}
