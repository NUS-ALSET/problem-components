import React from 'react';
import Grid from 'material-ui/Grid';
import ServiceURL from '../components/serviceURL';
import Problem from '../components/problemViews/JupyterProblem';
import Notebook from './notebook';

class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      problemFetched: false,
      ProblemFile: {},
    };
    this._getProblem = this._getProblem.bind(this);
    this._getStaticProblem = this._getStaticProblem.bind(this);
  }
  componentDidMount() {
    // this._getProblem();
    this._getStaticProblem();
  }
  /**
   * Example function to get notebook's executed JSON data of given problem
   */
  _getProblem(json) {
    fetch('https://usjqn1w4b6.execute-api.eu-central-1.amazonaws.com/Prod', {
      method: 'POST',
      body: JSON.stringify(Notebook),
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json',
      },
      mode: 'no-cors',
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ ProblemFile: data });
      });
  }
  _getStaticProblem() {
    this.setState({
      ProblemFile: {
        problemJSON: {
          cells: [
            {
              cell_type: 'markdown',
              metadata: { colab_type: 'text', id: '9w5dA4ucVcbz' },
              source: ['## Create the function sum() that accepts two parameters and returns the sum of them. '],
            },
            {
              cell_type: 'code',
              execution_count: 1,
              metadata: {
                colab: { autoexec: { startup: false, wait_interval: 0 } },
                colab_type: 'code',
                id: 'ASdL5tJ0VbU-',
              },
              outputs: [],
              source: ['#def sum\n'],
            },
            {
              cell_type: 'markdown',
              metadata: { colab_type: 'text', id: 'bvAlsa6kxNtf' },
              source: ['## Do not edit any code below this point. These are the tests to validate your function.'],
            },
            {
              cell_type: 'code',
              execution_count: 2,
              metadata: {
                colab: { autoexec: { startup: false, wait_interval: 0 } },
                colab_type: 'code',
                id: 'e28OMnv5Vwov',
              },
              outputs: [{ name: 'stdout', output_type: 'stream', text: ['One of the tests failed.\n'] }],
              source: [
                'try:\n',
                '  assert(sum(2,2) == 4)\n',
                '  assert(sum(2,1) == 3)\n',
                'except:\n',
                '  print("One of the tests failed.")\n',
              ],
            },
          ],
          metadata: {
            colab: {
              collapsed_sections: [],
              default_view: {},
              name: 'Sum.ipynb',
              provenance: [],
              version: '0.3.2',
              views: {},
            },
            kernelspec: { display_name: 'Python 3', name: 'python3' },
          },
          nbformat: 4,
          nbformat_minor: 0,
        },
      },
      problemFetched: true,
    });
  }
  render() {
    console.log(this.state);
    const { problemFetched, ProblemFile } = this.state;
    return (
      <div>
        <ServiceURL onPastingUrl={this.handleUrl} />
        {/* {this.state.problems && (
          <div>
            <h3>{this.state.problems.userId}</h3>
            <h5>{this.state.problems.title}</h5>
          </div>
        )} */}
        <Grid container justify="center">
          <Grid item xs={4}>
            {problemFetched ? (
              <Problem dispatch={() => {}} onChange={() => {}} problem={ProblemFile} solution={{}} />
            ) : (
              'Loading'
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Example;
