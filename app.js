import { express } from "express";

const app = express();
const client_id = '3de372b3c2384a78983a8d58e26f7098';
const redirect_uri = 'http://localhost:8888/callback';

app.get('/login', () => (req, res) => {
  const state = generateRandomString(16);
  const scope = 'user-read-private user-read-email user-read-recently-played';

  res.redirect('https://accounts.spotify.com/authorize?' + 
    querystring.stringify({
      response_type: 'code', //authorization code
      client_id: client_id,
      redirect_uri: redirect_uri,
      state: state,
      scope: scope
    }))
})