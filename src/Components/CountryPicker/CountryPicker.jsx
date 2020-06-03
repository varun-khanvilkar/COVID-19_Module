import React , {useEffect,useState} from 'react';
import { NativeSelect , FormControl } from '@material-ui/core';
import { fetchCountriesData } from '../../api';
import  styles  from './CountryPicker.module.css';

const CountryPicker = (props) => {
    const [fetchedCountries,setFetchedCountries] = useState([]);
    

    useEffect(() => {
        fetchCountries()
        
    },[setFetchedCountries])

    const fetchCountries = async () => {
        setFetchedCountries(await fetchCountriesData());
    }
    return(
        <FormControl className={styles.formcontrol}>
            <NativeSelect defaultValue="" onChange = {(event)=>props.handleCountryChange(event.target.value)}>
            <option value="global">Global</option>
                {fetchedCountries.map((name,i) => <option key={i} value={name}>{name}</option>)}
            </NativeSelect>
        </FormControl>


    );
}

export default CountryPicker;