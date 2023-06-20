import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local';

// Assuming you have a User model or service to handle user operations
import User from './models/User';

// Local strategy
passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
        },
        async (email, password, done) => {
            try {
                // Find the user with the given email
                const user = await User.findOne({ email });

                // If the user doesn't exist or the password is incorrect
                if (!user || !user.validatePassword(password)) {
                    return done(null, false, { message: 'Invalid email or password' });
                }

                // If the user and password are valid, return the user object
                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    )
);

// Serialization and deserialization of user
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error);
    }
});

