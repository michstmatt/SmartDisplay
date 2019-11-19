import React from 'react';
class RingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: false };
    }

    render() {
        return (
            <div>
                {this.state.loggedIn ?
                    (
                        <RingModule />
                    ) :
                    (
                        <RingLogin parent={this} />
                    )}
            </div>
        )
    }
}
class RingLogin extends React.Component {
    constructor(props) {
        super(props);
        this.auth = { username: '', password: '' };
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.submit = this.submit.bind(this);
        this.constants = {
            oauthUrl: "http://localhost:5000/api/ring/login",
            isAuthenticated: "http://localhost:5000/api/ring/isLoggedIn"
        };
        this.parent = props.parent;
        this.isAuthenticated();
    }

    isAuthenticated() {
        const self = this;
        fetch(this.constants.isAuthenticated)
            .then(res => res.json())
            .then(body => self.parent.setState({ loggedIn: body.authenticated }))
            .catch(err => console.error(err));
    };

    authenticate(username, password) {
        const self = this;
        fetch(this.constants.oauthUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(res => res.json())
            .then(body => {
                self.parent.setState({ loggedIn: body.success });
            })
            .catch(err => console.err(err));
    };

    submit(event) {
        this.authenticate(this.auth.username, this.auth.password);
        event.preventDefault();
    }

    handleUsername(event) {
        this.auth.username = event.target.value;
    }
    handlePassword(event) {
        this.auth.password = event.target.value;
    }
    render() {
        return (
            <div>
                <h1>Login to Ring</h1>
                <form onSubmit={this.submit}>
                    <label>username:
                    <input type="text" name="username" onChange={this.handleUsername} />
                    </label>
                    <label>password:
                    <input type="password" name="password" onChange={this.handlePassword} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}




class RingModule extends React.Component {
    render() {
        return (
            <h1>Logged into Ring!</h1>
        );
    }
}

export default RingComponent;