import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { MdAlarm, MdAccessTime } from 'react-icons/md';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#52565c',
    color: 'white',
    margin: '5px',
    height: '10vh'
  },
  label: {
      color: 'white',
  },
});

function SettingsDrawerList(props) {
  const { classes } = props;
  return (
    <div>
      <List component="nav">
        <ListItem button classes={{ root: classes.root }}>
          <ListItemIcon>
            <MdAccessTime className={classes.label} />
          </ListItemIcon>
          <ListItemText primary="Clock" classes={{ primary: classes.label }} />
        </ListItem>
        <ListItem button classes={{ root: classes.root }}>
          <ListItemIcon>
            <MdAlarm className={classes.label} />
          </ListItemIcon>
          <ListItemText primary="Alarm" classes={{ primary: classes.label }} />
        </ListItem>
      </List>
    </div>
  );
}

SettingsDrawerList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SettingsDrawerList);
