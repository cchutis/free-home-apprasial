import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


export default class FHAEstimate extends Component {

  getEstimates = (props) => {
    const {zillowEstimate, redfinEstimate, realtorEstimate, melissaEstimate, mashvisorEstimate, realtyMoleValue, dataTreeEstimate} = this.props.estimates;
      // let final = [];
      // console.log(this.props.estimates)
      const zillow = zillowEstimate.active ? zillowEstimate.value : null;
      const redfin = redfinEstimate.active ? redfinEstimate.value : null;
      const realtor = realtorEstimate.active ? realtorEstimate.value : null;
      const melissa = melissaEstimate.active ? melissaEstimate.value : null;
      const mashvisor = mashvisorEstimate.active ? mashvisorEstimate.value : null;
      const realtyMole = realtyMoleValue.active ? realtyMoleValue.value : null;
      const dataTree = dataTreeEstimate.active ? dataTreeEstimate.value : null;
      let arr = [zillow, redfin, realtor, melissa, mashvisor, realtyMole, dataTree];
      // console.log(arr)
      let final = arr.filter(estimate => estimate !== null && typeof estimate == 'number');

      // console.log(final)
      return Math.round(final.reduce((a, b) => a + b, 0) / final.length);
    }

    numberWithCommas = (x) => {
       return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    render() {
        return (
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12}>
              <h1>FHA ESTIMATE</h1>
        <h1 style={{fontSize: 80}}>{'$' + this.numberWithCommas(this.getEstimates())}</h1>
            </Grid>
          </Grid>
        );
    }
}