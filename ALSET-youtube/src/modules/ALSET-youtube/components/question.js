import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class Question extends Component {
  constructor() {
    super();
    this.state = {
      answer: '',
      error: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ answer: event.target.value });
  }
  handleSubmit() {
    if (this.state.answer) {
      this.props.onSubmit(this.state.answer);
      this.setState({ error: false });
    } else {
      this.setState({ error: true });
    }
  }
  render() {
    const { classes, question } = this.props;
    const { answer, error } = this.state;
    const questionHTML = {
      __html: `Q. ${question.replace(/\n/g, '<br />')}`,
    };

    const questionPanel = (
      <Paper className={classes.root} elevation={4}>
        <Typography variant="headline" component="h4" dangerouslySetInnerHTML={questionHTML} />
        <TextField
          id="full-width"
          label="Answer"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          value={answer}
          onChange={event => this.handleChange(event)}
        />
        {error && <p style={{ color: 'red' }}> Please enter your response.</p>}
        <Button variant="raised" type="submit" className={classes.button} onClick={() => this.handleSubmit()}>
          Submit
        </Button>
      </Paper>
    );

    return <div style={{ textAlign: 'left' }}>{question && questionPanel}</div>;
  }
}

Question.propTypes = {
  question: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default withStyles(styles)(Question);
