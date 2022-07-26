const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');

passport.use(
  new GoogleStrategy(
    // Configuartion object
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    // The verify callback function
    // Marking a function as an async function
    // allows us to consume promises using await
    async function(accessToken, refreshToken, profile, cb) {
      // A user has logged in with OAuth...
      // Instead of using promise.then with a callback,
      // we can use the await keyword followed by the promise.
      // When that promise is fulfilled, it will return
      // whatever the promise's resolved value is.
      let user = await User.findOne({ googleId: profile.id });
      // Existing user found, so provide it to passport
      if (user) return cb(null, user);

      let check = await User.findOne({ email : profile.emails[0].value })

      try{
        if(check){
        check['name'] = profile.displayName,
        check['googleId'] =  profile.id,
        check['email'] = profile.emails[0].value,
        check['avatar'] = profile.photos[0].value
        check.save()
        return cb(null,check)
        } else {
          throw new Error('No Authorization')
        }
      } catch(err){
        return cb(err)
      }

    }
  )
);

passport.serializeUser(function(user, cb) {
  // Return a nugget of info that passport
  // will give us each time a request is made by
  // this logged in user
  cb(null, user._id);
});

// Called with every request by a logged in user
passport.deserializeUser(async function(userId, cb) {
  // Return the user's doc so that passport
  // can assign it to req.user
  const user = await User.findById(userId);
  cb(null, user);
});