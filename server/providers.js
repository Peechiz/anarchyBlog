require('dotenv').config()

module.exports = {
  "google-login": {
    "provider": "google",
    "module": "passport-google-oauth",
    "strategy": "OAuth2Strategy",
    "clientID": process.env.GOOGLE_CLIENT_ID,
    "clientSecret": process.env.GOOGLE_CLIENT_SECRET,
    "callbackURL": `https://anarchy-blog.herokuapp.com/auth/google/callback`,
    "authPath": "/auth/google",
    "callbackPath": "/auth/google/callback",
    "successRedirect": "/auth/account",
    "scope": [
      "email",
      "profile"
    ]
  }
}