const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectUri = 'http://localhost:3000/'
let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken
        }
    }
}