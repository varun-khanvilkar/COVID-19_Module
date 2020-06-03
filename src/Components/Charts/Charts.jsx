import React, { useEffect, useState} from 'react';
import { fetchDailyData }  from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import  styles  from './Charts.module.css';

const Charts = ({data : {confirmed, recovered, deaths},country}) => {
    const [dailyData, setDailyData] = useState({});
    
    useEffect(()=>{   
        const fetchAPI = async () =>{
            setDailyData(await fetchDailyData());
        }  
        fetchAPI(); 
    },[])

    console.log(confirmed);


const BarChar =(

    confirmed 
    ?
    (<Bar
        data={{
            labels : ['Infected', 'Recoverd', 'Deaths' ],
            datasets : [{
                label : 'People',
                backgroundColor: [
                    'rgba(0,0,255,0.5)',
                    'rgba(0,255,0,0.5)',
                    'rgba(255,0,0,0.5)',
                ],
                data :  [confirmed.value,recovered.value,deaths.value]
            }]
        }}
        oprions = {{
            legend : {display : false},
            title : {display : true, text : `Current state in ${country}`}
        }}
    />
    ):null
);

const LineChart = (
    dailyData.length ?
       (<Line
            data={{
            labels : dailyData.map(({date}) => date),
            datasets:[{
                data : dailyData.map(({confirmed})=> confirmed),
                label : 'Infected',
                borderColor : '#3333ff',
                fill : true,
            },{
                data : dailyData.map(({deaths})=> deaths),
                label : 'death',
                borderColor : 'red',
                backgroundColor : 'rgba(255,0,0,0.5)',
                fill : true,
            }],
        }}
       />):null
);

    return ( 
        <div className={styles.container}>
            {country? BarChar : LineChart}
        </div>
    )
}

export default Charts;