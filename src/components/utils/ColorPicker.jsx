/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react';
import reactCSS from 'reactcss';
import { ChromePicker } from 'react-color';

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  };

  handleClick = () => {
    const { displayColorPicker } = this.state;
    this.setState({ displayColorPicker: !displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    console.log(color);
    const { setColor } = this.props;
    setColor(color.hex);
    this.setState({ color: color.rgb });
  };

  render() {
    const { initialColor } = this.props;
    const { displayColorPicker, color } = this.state;
    const styles = reactCSS({
      default: {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `${initialColor}`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          cursor: 'pointer',
          fontSize: '10px',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
          fontSize: '20px',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        { displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <ChromePicker color={color} onChange={this.handleChange} disableAlpha />
          </div>
        ) : null }

      </div>
    );
  }
}

export default ColorPicker;
