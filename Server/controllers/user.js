const User = require("../models/user");
const jwt = require("jsonwebtoken") 
require("dotenv").config();


exports.register = async (req, res) => {
    // check if user already exists
    const usernameExists = await User.findOne({
        username: req.body.username,
    });
    const emailExists = await User.findOne({
        email:req.body.email,
    });

    if (usernameExists) {
        return res.status(403).json({
            error: "Username is taken",
        });
    }
    if (emailExists) {
        return res.status(403).json({
            error: "Email is taken"
        });
    }
    // if new user, create user
    const user = new User(req.body);
    await user.save();

    res.status(201).json({
        message: "Signup Succesful! Please login!"
    })
 }

 exports.login = async (req, res) => {
    //find user on email
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email }).exec();
        
        // err or not user
        if (!user ) {
            return res.status(401).json({
                error: "Invalid Credenials",
            });
        }

        //if found authenticate from model

        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: "Invalid email or password",
            });
        }
        // generate token with user id and jwt secret

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "24h"
        });


        const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
        //generate token as jwt in cookie and expiration date
        res.cookie("jwt", token, { expires: expiryDate, httpOnly: true });
        
        // return response with user
        const { username } = user;

        return res.json({
            message: "Login Succesful",
            username,
        })
    } catch(error) {
        console.error("Login error: ", error);
        return res.status(500).json({
            error: "Internal Server Error"
        })
    };
}

exports.logout = (req, res) => {
    // clear cookie
    res.clearCookie("jwt");

    return res.json({
        message: "Logout Successful"
    });

}


exports.getLoggedInUser = (req, res) => {
    const { username } = req.user;
    return res.status(200).json({
        message: "User is still logged in",
        username
    })
}

 


