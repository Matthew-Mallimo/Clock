import React, { Component } from 'react';
import ClockDisplay from './components/ClockDisplay';
import ActionBar from './components/ActionBar';
import SettingsPage from './components/Pages/SettingsPage';
import './styles/App.css';

class App extends Component {
  state = {
    page: 'Clock',
  }

  setPage = () => {
    const page = this.state.page === 'Clock' ? 'Settings' : 'Clock';
    this.setState({
      page,
    });
  }

  render() {
    const { page } = this.state;
    return (
      <div className="App">
        <ActionBar settingsAction={this.setPage} arrow={page !== 'Clock'} />
        <div className="App-header">
          {
            page === 'Clock'
              ? <ClockDisplay />
              : <SettingsPage />
          }
        </div>
      </div>
    );
  }
}

export default App;
