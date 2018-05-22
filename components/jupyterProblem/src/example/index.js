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
  _problemSolveUpdate() {
    alert('_solutionFileChange')
  }
  _problemSolutionSubmitRequest() {
    alert('_problemSolutionSubmitRequest')
  }
  _problemSolveSuccess() {
    alert('_problemSolveSuccess')
  }
  /**
   * Example function to get notebook's executed JSON data of given problem
   */
  _getProblem(json) {
    fetch(json.problemUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({ ProblemFile: { problemJSON: data }, problemFetched:true })
      });
  }
  _getStaticProblem() {
    window.gapi.load("client:auth2", () => {
      // 2. Initialize the JavaScript client library.
      window.gapi.client
        .init({
          apiKey: "AIzaSyC27mcZBSKrWavXNhsDA1HJCeUurPluc1E",
          // clientId and scope are optional if auth is not required.
          clientId:
            "765594031611-aitdj645mls974mu5oo7h7m27bh50prc.apps." +
            "googleusercontent.com",
          discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"
          ]
        })
        .then(resolve => {
          // 3. Initialize and make the API request.
          console.log('init client', window.gapi.client.drive.files.get({
            'fileId': '1bF3vk-jB5_Dmf7BeW3sXCtL-I1uP26ic',
            'alt': 'media'
          }).then((res) => console.log('res', res), (reason) => console.log('error', reason)))
          // window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
          // updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          // console.log('resolve', resolve)
          // fetch('https://www.googleapis.com/drive/v3/files/1fu4vKrbwz4b4QzvHJzKo4CAPefIMGmd?alt=media')
          //   .then(data => console.log('------', data))
        });
    })
  }
  render() {
    const { problemFetched, ProblemFile } = this.state;
    return (
      <div>
        <ServiceURL onPastingUrl={this._getProblem} />
        {/* {this.state.problems && (
          <div>
            <h3>{this.state.problems.userId}</h3>
            <h5>{this.state.problems.title}</h5>
          </div>
        )} */}
        <Grid container justify="center">
          <Grid item xs={10}>
            {problemFetched && (
              <Problem
                problemSolveUpdate={this._problemSolveUpdate}
                problemSolutionSubmitRequest={this._problemSolutionSubmitRequest}
                problemSolveSuccess={this._problemSolveSuccess}
                dispatch={() => {}} onChange={() => {}} problem={ProblemFile} solution={{}} />
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Example;
