import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class VideoStats extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { classes, className, videoStats } = this.props;

    const dataTable = (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Sr No.</TableCell>
              <TableCell>Event</TableCell>
              <TableCell>Time (sec)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {videoStats.map((stat, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{stat.event}</TableCell>
                  <TableCell>{stat.timeInSec}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );

    return <div>{videoStats.length > 0 ? dataTable : ''}</div>;
  }
}

VideoStats.propTypes = {
  className: PropTypes.string,
  videoStats: PropTypes.array.isRequired,
};

export default withStyles(styles)(VideoStats);
