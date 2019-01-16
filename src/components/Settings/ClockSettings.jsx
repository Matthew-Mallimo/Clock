import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {
  toggleMilitary, toggleAmPm, toggleSeconds, changeTextColor,
} from '../../ducks'; // eslint-disable-line import/named
import ColorPicker from '../utils/ColorPicker';

const styles = {
  root: {
    color: 'white',
    fontSize: '50px',
  },
  colorPicker: {
    color: 'white',
    fontSize: '50px',
    paddingLeft: '20px',
  },
};

class SettingsPage extends React.Component {
    handleChange = (setting) => {
      console.log(`Setting ${setting} changed`);
    }

    render() {
      const {
        classes,
        changeTextColor: changeTxtColor,
        textColor,
        militaryTime,
        toggleMilitary: tgglMilitary,
        amPm,
        toggleAmPm: tgglAmPm,
        seconds,
        toggleSeconds: tggleSeconds,
      } = this.props;
      return (
        <div>
          <FormGroup>
            <FormControlLabel
              control={
                <ColorPicker setColor={changeTxtColor} initialColor={textColor} />
                        }
              label="Text Color"
              classes={{ label: classes.colorPicker }}
            />
            <FormControlLabel
              control={(
                <Switch
                  checked={militaryTime}
                  onChange={tgglMilitary}
                  value="militaryTime"
                />
              )}
              label="Military Time"
              classes={{ label: classes.root }}
            />
            <FormControlLabel
              control={(
                <Switch
                  checked={amPm}
                  onChange={tgglAmPm}
                  value="amPm"
                />
              )}
              label="Show am / pm"
              classes={{ label: classes.root }}
            />
            <FormControlLabel
              control={(
                <Switch
                  checked={seconds}
                  onChange={tggleSeconds}
                  value="seconds"
                />
              )}
              label="Show seconds"
              classes={{ label: classes.root }}
            />
          </FormGroup>
        </div>
      );
    }
}

SettingsPage.propTypes = {
  classes: PropTypes.string.isRequired,
  changeTextColor: PropTypes.string.isRequired,
  textColor: PropTypes.bool.isRequired,
  militaryTime: PropTypes.bool.isRequired,
  toggleMilitary: PropTypes.func.isRequired,
  amPm: PropTypes.bool.isRequired,
  toggleAmPm: PropTypes.func.isRequired,
  seconds: PropTypes.bool.isRequired,
  toggleSeconds: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  toggleMilitary: () => dispatch(toggleMilitary()),
  toggleAmPm: () => dispatch(toggleAmPm()),
  toggleSeconds: () => dispatch(toggleSeconds()),
  changeTextColor: color => dispatch(changeTextColor(color)),
});

const mapStateToProps = state => ({
  militaryTime: state.militaryTime,
  amPm: state.amPm,
  seconds: state.seconds,
  textColor: state.textColor,
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SettingsPage));
