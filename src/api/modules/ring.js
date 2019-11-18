module.exports = {

    oauth: {},

    constants: {
        apiVersion: "11",
        rootURL: "https://api.ring.com",
        oauth: "https://oauth.ring.com/oauth/token",
        session: "/clients_api/session",
        dings: "/clients_api/dings/active",
        devices: "/clients_api/ring_devices",
        history: "/clients_api/doorbots/history",
    },

    authenticate: function (axios, username, password) {
        var oAuthBody = {
            client_id: "ring_official_android",
            grant_type: "password",
            password: password,
            scope: "client",
            username: username
        };

        return axios.post(this.constants.oauth,oAuthBody);
    }
}