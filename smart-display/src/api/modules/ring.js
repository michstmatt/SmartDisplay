
let oauth;

const constants = {
    apiVersion: "11",
    rootURL: "https://api.ring.com",
    oauth: "https://oauth.ring.com/oauth/token",
    session: "/clients_api/session",
    dings: "/clients_api/dings/active",
    devices: "/clients_api/ring_devices",
    history: "/clients_api/doorbots/history",
};

function authenticate(axios, username, password){
    let oAuthBody = {
        client_id: "ring_official_android",
        grant_type: "password",
        password: password,
        scope: "client",
        username: username
    };
    return axios.post(constants.oauth, oAuthBody)
        .then(response => {
            oauth = response.data;
            return true;
        })
        .catch(err=> {
            return false;
        })
}

isAuthenticated = () => { return  oauth!== null && oauth !== undefined; };


module.exports = { authenticate, isAuthenticated };