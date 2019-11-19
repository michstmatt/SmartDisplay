
const oauth= {};

const constants = {
        apiVersion: "11",
        rootURL: "https://api.ring.com",
        oauth: "https://oauth.ring.com/oauth/token",
        session: "/clients_api/session",
        dings: "/clients_api/dings/active",
        devices: "/clients_api/ring_devices",
        history: "/clients_api/doorbots/history",
    };

const authenticate = async (axios, username, password) =>{
        const oAuthBody = {
            client_id: "ring_official_android",
            grant_type: "password",
            password: password,
            scope: "client",
            username: username
        };
        const response = await axios.post(constants.oauth, oAuthBody);
        const body = response.data;
        console.log(body);
        return body;
}

module.exports = {authenticate};