import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup';
import css from './Cards.module.css';
import cx from 'classnames'

const Cards = (props) => {
    if(!props.data.confirmed) {
        return 'Loading...'
    }

    return (
        <div className={css.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(css.card,css.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={props.data.confirmed.value}
                                durations={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(css.card,css.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                        <CountUp
                                start={0}
                                end={props.data.recovered.value}
                                durations={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recovered cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(css.card,css.death)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Death</Typography>
                        <Typography variant="h5">
                        <CountUp
                                start={0}
                                end={props.data.deaths.value}
                                durations={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of death cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>



        </div>
    );
}

export default Cards;