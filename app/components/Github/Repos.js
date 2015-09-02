var React = require('react');

var Repos = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        repos: React.PropTypes.array.isRequired
    },
    render: function () {
        return (
            <div>
                <h1>REPOS</h1>
                <p>Username: {this.props.username}</p>
                <p>Repos: {this.props.repos}</p>
            </div>
        )
    }
});

module.exports = Repos;