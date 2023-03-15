const admin = require('firebase-admin');


const getAuthToken = (req, res, next) => {
    //console.log("auth: " +req.headers.authorization);
    if (
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer'
        
    ) {
        req.authToken = req.headers.authorization.split(' ')[1];
    } else {
        req.authToken = null;
    }
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
        console.log("my user id: "+userInfo.uid);
        try {
            const { authToken } = req;
            const userInfo = await admin
                .auth()
                .verifyIdToken(authToken);
            req.authId = userInfo.uid;
            console.log("my user id: "+userInfo.uid);
            return next();
        } catch (e) {
            //#TODO fix this Sasha because this is not proper authentication
            return next();
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


