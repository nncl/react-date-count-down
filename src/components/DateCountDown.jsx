/**
 * @description
 * Module responsible to count down til xmas.
 */

let React = require('react')
    , DateCountDown = React.createClass({
    componentWillMount: function () {
        this.setState({
            targetDate: Date.parse(this.props.targetDate)
        });

        let date_now = setInterval(this.tick, 1000),
            init_timer = setTimeout(this.tick, 0); // Update clock on init
    },
    tick: function () {
        // Finds the days remaining, then removes that amount of time from
        // timeRemaining, then does the same with hours, min, secs

        let time_remaining = this.state.targetDate - Date.now();
        let days = Math.floor(time_remaining / 86400000);
        time_remaining = time_remaining - (days * 86400000);
        let hours = Math.floor(time_remaining / 3600000);
        time_remaining = time_remaining - (hours * 3600000);
        let minutes = Math.floor(time_remaining / 60000);
        time_remaining = time_remaining - (minutes * 60000);
        let seconds = Math.floor(time_remaining / 1000);

        this.setState({
            days: days
            , hours: hours
            , minutes: minutes
            , seconds: seconds
        });
    },
    render: function () {
        return (
            <div>
                <p>{this.state.days} Days</p>
                <p>{this.state.hours} Hours</p>
                <p>{this.state.minutes} Minutes</p>
                <p>{this.state.seconds} Seconds</p>
            </div>
        );
    }
});

module.exports = DateCountDown;
