var React = require('react');

var Notes = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        notes: React.PropTypes.array.isRequired
    },
    render: function () {
        return (
            <div>
                <h1>NOTES</h1>
                <p>Username: {this.props.username}</p>
                <p>Notes: {JSON.stringify(this.props.notes)}</p>
            </div>
        )
    }
});

module.exports = Notes;