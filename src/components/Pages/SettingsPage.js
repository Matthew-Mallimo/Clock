import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ClockSettings from '../Settings/ClockSettings';
import SettingsDrawerList from '../Settings/SettingsDrawerList';
import '../../styles/App.css';

const styles = theme => ({
  root: {
    backgroundColor: '#282c34',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    backgroundColor: '#282c34',
    fontSize: '20px',
    height: '98vh'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

function SettingsPage(props) {
  const { classes } = props;

  return (
    <div>
      <Drawer
        variant="permanent"
        classes={{
            paper: classes.drawerPaper
        }}
      >
        <SettingsDrawerList />
      </Drawer>
      <div>
        <ClockSettings />
      </div>
    </div>
  );
}

SettingsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SettingsPage);