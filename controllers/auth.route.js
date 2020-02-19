const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const authService = require("../services/auth.services");
const config = require("../configs/config");

router
  .route("/login")
  .post([check("password").isLength({ min: 6 })], async (req, res, next) => {
    try {
      //validation
      const errors = await validationResult(req);
      if (!errors.isEmpty()) {
        next({ msg: "ValidationError", body: errors.array() });
      }
      //check username and password
      const result = await authService.checkLogin(
        req.body.username,
        req.body.password
      );

      const isPasswordCorrect = result[0];
      const userid = result[1];

      if (!isPasswordCorrect) {
        throw { status: 401, msg: "Password Incorrect" };
      }
      //generate token
      const token = await jwt.sign(
        { username: req.body.username },
        config.jwtSecret
      );
      //response
      res.status(201).json({
        msg: "User logIn successful",
        token: token,
        userid: userid
      });
    } catch (err) {
      next(err);
    }
  });

router
  .route("/register")
  .post([check("password").isLength({ min: 6 })], async (req, res, next) => {
    try {
      let result = await authService.createAccount(req.body);
      res.status(201).json({
        msg: "New Account Created",
        body: result
      });
    } catch (err) {
      next({ status: 409, msg: "Account Already Exists", body: err });
    }
  });

module.exports = router;
