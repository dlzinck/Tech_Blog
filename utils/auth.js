// IF USER NOT LOGGED IN, REDIRECTS TO LOGIN
// IF USER IS LOGGED IN EXECUTE FUNCTION TO VIEW
// CALL next() IF AUTHENTICATED
const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        next();
    }
};
  
module.exports = withAuth;