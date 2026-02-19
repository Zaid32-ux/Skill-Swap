import jwt from  "jsonwebtoken";

const generateJWTToken_username = (user) => {
    return jwt.sign(
        { userId: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
};

export default generateJWTToken_username;
