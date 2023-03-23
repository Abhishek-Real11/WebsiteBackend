var connection = require('../database');
const JWT_SECRET_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY3OTU0NjQ1MiwiaWF0IjoxNjc5NTQ2NDUyfQ.Rwf-BnnWQsGu2CoVxeRPu1PjFdf-yRUoYlTwIKWZDgE"
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');
var mysql = require("mysql");

const signup = async (req, res) => {
    let sql = 'SELECT * FROM website_real11.user';
    connection.query(sql, function (err, results) {
        if (err) console.log(err);
        res.send(results)
    })
}

const login = async (req, res) => {
    try {
        let user;
        if (!req.body.email || !req.body.password || !req.body.username) {
            return res.status(400).send("Insufficient Data");
        }
        let sql = 'SELECT * FROM website_real11.user WHERE email= ?';
        connection.query(sql, [req.body.email], function (err, result) {
            if (err) return res.status(400).send(err);
            if (result.length === 0) return res.send("User Not Found!")
            if (req.body.password === result[0].password && req.body.username === result[0].username) {
                const payload = { id: result[0].id, email: result[0].email, username: result[0].username }
                return res.send({ token: jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '30m' }), payload });
            } else {
                return res.status(400).send("Incorrect Email or Password")
            }
        })
    } catch (error) {
        return  res.status(400).send(error);
    }
}

const getOtp = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).send("Please Enter Email");
        }
        let sql = 'SELECT * FROM website_real11.user WHERE email= ?';
        connection.query(sql, [req.body.email], function (err, result) {
            if (err) res.status(400).send(err);
            if (result.length === 0)
                return res.status(400).send("User Does'nt exists");
            let otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
            let sql = "UPDATE website_real11.user SET otp = ? WHERE email = ?";
            connection.query(sql, [otp, email], function (err, result) {
                if (err) res.status(400).send(err);
                if (result) {
                    let transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: "abhishek@real11.com",
                            pass: "fedvuempqdhqokhs"
                        }
                    });
                    let mailOptions = {
                        from: "abhishek@real11.com",
                        to: email,
                        subject: 'Password Reset OTP',
                        text: otp
                    };
                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            return res.status(400).send(error)
                        } else {
                            return  res.status(200).send("OTP Send Successfully")
                        }
                    });
                }

            })
        })
    } catch (error) {
        return res.status(200).send(error)
    }

}

const resetPassword = async (req, res) => {
    try {
        const { otp, password, email } = req.body;
        let sql = 'SELECT * FROM website_real11.user WHERE email= ?';
        connection.query(sql, [email], function (err, result) {
            if (err) return res.status(400).send(err);
            if (result.length === 0) return res.send("User Not Found!")
            if (otp === result[0].otp) {
                let sql = "UPDATE website_real11.user SET password = ? WHERE email = ?";
                connection.query(sql, [password, email], function (err, result) {
                    if (err) res.status(400).send(err);
                    if (result) res.send("OTP Verified & Password Reset")
                })
            } else {
                return res.status(200).send("OTP Not Verified")
            }
        })
    } catch (error) {
        return  res.status(200).send(error)
    }

}

module.exports = {
    signup,
    login,
    getOtp,
    resetPassword
}