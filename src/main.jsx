let React = require('react')
    , ReactDOM = require('react-dom')
    , DateCountDown = require('./components/DateCountDown.jsx');

// render into screen
ReactDOM.render(<DateCountDown targetDate="25 December, 2017 00:00:00"/>, document.getElementById('l-date'));