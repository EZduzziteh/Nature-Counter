const admin = require('firebase-admin');


const getAuthToken = (req, res, next) => {
    
    console.log(req.headers.autorization);
    if (
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
        req.authToken = req.headers.authorization.split(' ')[1];
    } else {
        req.authToken = null;
    }
    
    console.log(req.authToken);
    next();
};

// exports.verifyUser = (req, res, next) => {
//     getAuthToken(req, res, async () => {
//         return next();
//     });
// };

exports.verifyUser = (req, res, next) => {
    console.log('VERIFYING USER');
    getAuthToken(req, res, async () => {
        console.log("auth token: "+req);
        try {
            const { authToken } = req;
            const userInfo = await admin
                .auth()
                .verifyIdToken(authToken);
            console.log("user: "+req);
            req.authId = userInfo.uid;
            console.log("auth id: "+req.authId);
            return next();
        } catch (e) {
            //return next();
            return res
                .status(401)
                .send({ error: 'You are not authorized to make this request' });
        }
    });
};


/*exports.verifyAdmin = (req, res, next) => {
    getAuthToken(req, res, async () => {
        try {
            const { authToken } = req;
            const userInfo = await admin
                .auth()
                .verifyIdToken(authToken);

            if (userInfo.admin === true) {
                req.authId = userInfo.uid;
                return next();
            }

            throw new Error('unauthorized')
        } catch (e) {
            return res
                .status(401)
                .send({ error: 'You are not authorized to make this request' });
        }
    });
};*/


