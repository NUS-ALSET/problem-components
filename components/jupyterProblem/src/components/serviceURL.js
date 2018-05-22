import React, { Component } from 'react'
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

export default class ServiceURL extends Component {
  constructor() {
    super();
    this.state = {
      problemUrl:'https://raw.githubusercontent.com/walkwel/problem-components/master/jupyter-notebook-viewer/src/notebook.ipynb',
      executionServiceUrl: 'https://usjqn1w4b6.execute-api.eu-central-1.amazonaws.com/Prod'
    }
  }
  updateField = () => {
    this.props.onPastingUrl(this.state.textField);
  }
  onSolutionRefreshClick = () => {
    console.log('object')
  }
  render() {
    return (
      <div>
        <Grid container justify="center" >
          <Grid item xs={10}>
            <TextField value={this.state.problemUrl} label="Public Problem URL"
              InputLabelProps={{
                style: {
                  top: 24,
                  left: 24
                }
              }}
              fullWidth
              onChange={this.onSolutionFileChange}
              style={{ padding: 24, position: "relative", }}
            />
          </Grid>
        </Grid>
        <Grid container justify="center" >
          <Grid item xs={10}>
            <TextField
              value={this.state.executionServiceUrl} 
              label="Jupyter Execution Service Url"
              InputLabelProps={{
                style: {
                  top: 24,
                  left: 24
                }
              }}
              fullWidth
              onChange={this.onSolutionFileChange}
              style={{ padding: 24, position: "relative" }}
            />
          </Grid>
        </Grid>

      </div>
    )
  }
}
