const TOGGLE_MILITARY_TIME = 'TOGGLE_MILITARY_TIME';
const TOGGLE_AM_PM = 'TOGGLE_AM_PM';
const TOGGLE_SECONDS = 'TOGGLE_SECONDS';
const CHANGE_TEXT_COLOR = 'CHANGE_TEXT_COLOR';

const defaultState = {
  militaryTime: false,
  amPm: true,
  seconds: true,
  textColor: '#FFFFFF',
};

export function reducer(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_MILITARY_TIME:
      return { ...state, militaryTime: !state.militaryTime };
    case TOGGLE_AM_PM:
      return { ...state, amPm: !state.amPm };
    case TOGGLE_SECONDS:
      return { ...state, seconds: !state.seconds };
    case CHANGE_TEXT_COLOR:
      return { ...state, textColor: action.textColor };
    default:
      return state;
  }
}

export function toggleMilitary() {
  return {
    type: TOGGLE_MILITARY_TIME,
  };
}

export function toggleAmPm() {
  return {
    type: TOGGLE_AM_PM,
  };
}

export function toggleSeconds() {
  return {
    type: TOGGLE_SECONDS,
  };
}

export function changeTextColor(textColor) {
  return {
    type: CHANGE_TEXT_COLOR,
    textColor,
  };
}
