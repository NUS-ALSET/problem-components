import React, { Component } from 'react';
// import Problem from './containers/Problem/Problem';
import Problem from './components/problemViews/JupyterProblem';
import Grid from 'material-ui/Grid';
import ServiceURL from './components/serviceURL';

class App extends Component {
  constructor() {
    super();
    this.state = {
      problems: {}
    }
  }
  handleUrl = (data) => {
    console.log('jajajaja', data)
    this.setState({
      problems: data
    })
  }
  render() {
    return (
      <div>
        <ServiceURL onPastingUrl={this.handleUrl}/>
        {this.state.problems && 
        <div>
          <h3>{this.state.problems.userId}</h3>
        <h5>{this.state.problems.title}</h5>
          </div>
        }
        <Grid container justify="center">
          <Grid item xs="4">
            <Problem dispatch={() => {}} onChange={() => {}} problem={{}} solution={{}} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
