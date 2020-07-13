

function checkAuthentication(req, res, next) {
    if (req.session.customer) {
        next();
    } else {
        console.log('no more redirect lol')
        res.status(401).json({ error: 'user not authorize' });
        
    };
};

module.exports = checkAuthentication;
