
import jwt from 'jsonwebtoken';
const userAuth = (req, res, next) => {
    const token = req.cookies.authToken;
    
    if (!token) {
        return res.status(401).send('Unauthorized');
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send('Unauthorized');
        }
        req.userId = decoded.id;
        console.log("sandy")
        next();
    });
};

export default userAuth;
