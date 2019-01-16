import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

class ClockDisplay extends React.Component {

    state = {
        currentTime: moment().local().format('hh:mm:ss')
    }

    componentDidMount = () => {
        const { militaryTime, amPm, seconds } = this.props;
        const format = `${militaryTime ? 'HH' : 'hh'}:mm${seconds ? ':ss' : ''} ${amPm ? ' A' : ''}`;
        setInterval(() => {
            this.setState({
                currentTime: moment().local().format(format),
            });
        })
    }
    
    render() {
        const { currentTime } = this.state;
        const { textColor } = this.props;
        return (
            <div>
                <h1 style={{ color: textColor }}>{currentTime}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    militaryTime: state.militaryTime,
    amPm: state.amPm,
    seconds: state.seconds,
    textColor: state.textColor,
});

export default connect(mapStateToProps)(ClockDisplay);