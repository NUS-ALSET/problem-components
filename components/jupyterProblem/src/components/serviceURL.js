import React, { Component } from 'react'
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import Input from '@material-ui/icons/Input';

export default class ServiceURL extends Component {
  updateField = () => (event) => {
    console.log('update', event.target.value)
    fetch(event.target.value)
    .then(response => response.json())
    .then(json => 
      this.props.onPastingUrl(json)
    );
  }
  render() {
    return (
      <div>
        <Grid container spacing={8} justify="center" alignItems="flex-end">
          <Grid item>
            <SupervisorAccount />
          </Grid>
          <Grid item>
            <TextField onChange={this.updateField()} style={{width: '25rem'}} id="input-with-icon-grid" label="Public Problem URL" />
          </Grid>
        </Grid>
        <Grid container spacing={8} justify="center" alignItems="flex-end">
          <Grid item>
            <Input />
          </Grid>
          <Grid item>
            <TextField style={{width: '25rem'}} id="input-with-icon-grid" label="Jupyter Execution Service Url" />
          </Grid>
        </Grid>
      </div>
    )
  }
}
