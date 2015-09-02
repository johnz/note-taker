var React = require('react');

var UserProfile = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        bio: React.PropTypes.object.isRequired
    },
    render: function () {
        return (
            <div>
                <h1>USER PROFILE</h1>
                <p>Username: {this.props.username}</p>
                <p>Bio: {this.props.bio}</p>
            </div>
        )
    }
});

module.exports = UserProfile;