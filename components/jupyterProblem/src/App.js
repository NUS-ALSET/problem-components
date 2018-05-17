import React, { Component } from 'react';
// import Problem from './containers/Problem/Problem';
import Problem from './components/problemViews/JupyterProblem';
import Grid from 'material-ui/Grid';

class App extends Component {
  render() {
    return (
      <Grid container justify="center">
        <Grid item xs="4">
          <Problem dispatch={() => {}} onChange={() => {}} problem={{}} solution={{}} />
        </Grid>
      </Grid>
    );
  }
}

export default App;
