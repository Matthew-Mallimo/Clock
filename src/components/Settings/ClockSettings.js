import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { toggleMilitary, toggleAmPm, toggleSeconds, changeTextColor } from '../../ducks/';
import ColorPicker from '../utils/ColorPicker';

const styles = {
    root: {
        color: 'white',
        fontSize: '50px'
    },
    colorPicker: {
        color: 'white',
        fontSize: '50px',
        paddingLeft: '20px'
    }
}

class SettingsPage extends React.Component {

    handleChange = (setting) => {
        console.log(`Setting ${setting} changed`);
    }

    render() {
        const { classes, changeTextColor, textColor } = this.props;
        return (
            <div>
                <FormGroup>
                    <FormControlLabel
                        control={
                        <ColorPicker setColor={changeTextColor} initialColor={textColor}/>
                        }
                        label="Text Color"
                        classes={{ label: classes.colorPicker }}
                    />
                    <FormControlLabel
                        control={
                        <Switch
                            checked={this.props.militaryTime}
                            onChange={this.props.toggleMilitary}
                            value="militaryTime"
                        />
                        }
                        label="Military Time"
                        classes={{ label: classes.root }}
                    />
                    <FormControlLabel
                        control={
                        <Switch
                            checked={this.props.amPm}
                            onChange={this.props.toggleAmPm}
                            value="amPm"
                        />
                        }
                        label="Show am / pm"
                        classes={{ label: classes.root }}
                    />
                    <FormControlLabel
                        control={
                        <Switch
                            checked={this.props.seconds}
                            onChange={this.props.toggleAmPm}
                            value="seconds"
                        />
                        }
                        label="Show seconds"
                        classes={{ label: classes.root }}
                    />
                </FormGroup>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    toggleMilitary: () => dispatch(toggleMilitary()),
    toggleAmPm: () => dispatch(toggleAmPm()),
    toggleSeconds: () => dispatch(toggleSeconds()),
    changeTextColor: (color) => dispatch(changeTextColor(color)),
});

const mapStateToProps = (state) => ({
    militaryTime: state.militaryTime,
    amPm: state.amPm,
    seconds: state.seconds,
    textColor: state.textColor,
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SettingsPage));