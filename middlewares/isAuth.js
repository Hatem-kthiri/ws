const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const isAuth = async (req, res, next) => {
    try {
        var token;
        req.headers["authorization"]
            ? (token = req.headers["authorization"])
            : req.body.headers["authorization"]
            ? (token = req.body.headers["authorization"])
            : null;

        if (!token) {
            return res
                .status(401)
                .send({ errors: [{ msg: "you are not authorized1" }] });
        }
        const decoded = jwt.verify(token, process.env.SECRETKEY);

        const user = await User.findOne({ _id: decoded.user._id }).select(
            "-password"
        );
        if (!user) {
            return res
                .status(401)
                .send({ errors: [{ msg: "you are not authorized2" }] });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({ errors: [{ msg: "you are not authorized" }] });
    }
};

module.exports = isAuth;
