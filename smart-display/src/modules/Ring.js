import React from 'react';
class RingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: false };
        this.RingLogin = new RingLogin();
    }


    render() {
        console.log(this.state.loggedIn);
        if(this.state.loggedIn == true){
            // render Ring

        }else{
            // unauthenticated show login
            return this.RingLogin.render();
        }

    }

}


class RingLogin extends React.Component {
       constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.constants = {
            oauthUrl: "http://localhost:5000/api/ring/login"
        };
    }

    isAuthenticated = async() => {

    };

    authenticate = async(username, password) => {
        const response = await fetch(this.constants.oauthUrl,{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });
        
        const body = await response.json();
    };

    submit(event) {
        console.log(event);
        this.authenticate(this.state.username, this.state.password);
        event.preventDefault();
    }

    handleChange(evt) {
        // check it out: we get the evt.target.name (which will be either "email" or "password")
        // and use it to target the key on our `state` object with the same name, using bracket syntax
        this.setState({ [evt.target.name]: evt.target.value });
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>username:
                <input type="text" name="username" onChange={this.handleChange} />
                </label>
                <label>password:
                <input type="password" name="password" onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    } 
}


export default RingComponent;