import React, { Component } from 'react'
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';

export default class ServiceURL extends Component {
  constructor() {
    super();
    this.state = {
      problemUrl:'https://raw.githubusercontent.com/walkwel/problem-components/master/jupyter-notebook-viewer/src/notebook.ipynb',
      executionServiceUrl: 'https://usjqn1w4b6.execute-api.eu-central-1.amazonaws.com/Prod'
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onPastingUrl(this.state);
  }
  render() {
    return (
      <Grid container justify='center'>
        <Grid item xs={10}>
            <div>
            <form onSubmit={(e) =>this.handleSubmit(e)}>
                  <TextField
                    value={this.state.problemUrl} label="Public Problem URL"
                    InputLabelProps={{
                      style: {
                        top: 24,
                        left: 24
                      }
                    }}
                    fullWidth
                    style={{ padding: 24, position: "relative", }}
                />
                <br />
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
                    style={{ padding: 24, position: "relative" }}
                />
                <br />
                <Button type='submit' variant="raised" color="primary">
                Submit
                </Button>
            </form>
            </div>
        </Grid>
    </Grid>
    )
  }
}
