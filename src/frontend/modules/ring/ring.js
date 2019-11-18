import Axios from "axios";

class RingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.constants = {
            oauthUrl: "http://localhost:8080/api/ring/login"
        };
    }

    authenticate(username, password) {
        Axios({
                method: "POST",
                url: this.constants.oauthUrl,
                data: {
                    username: username,
                    password: password
                }
            })
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

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
ReactDOM.render(<RingComponent />, document.getElementById('Ring'));
