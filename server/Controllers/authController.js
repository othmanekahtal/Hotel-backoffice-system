const AsyncCatch = require("../utils/asyncCatch");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("./../utils/errorHandler");
const adminModel = require("../models/adminModel");
const generateToken = (id, role) =>
  jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });

exports.login = AsyncCatch(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(
      new ErrorHandler({
        message: "provide email and password !",
        statusCode: 400,
      })
    );
  let response = await userModel.findOne({ email })?.select("+password");
  console.log(response);
  const passwordsMatch = await response?.correctPassword({
    candidatePassword: response.password,
    userPassword: password,
  });
  if (response && passwordsMatch)
    return res.status(201).json({
      status: "success",
      token: await generateToken(response._id),
    });
  next(
    new ErrorHandler({
      message: "password or email is not correct",
      statusCode: 401,
    })
  );
});

exports.signup = AsyncCatch(async (req, res) => {
  const user = req.body;
  // delete role when we create a cleint
  user.role = undefined;
  let response = await userModel.create(user);
  console.log(response);
  response.password = undefined;
  const token = await generateToken(response._id, response.role);
  console.log(token);
  res.status(201).json({
    status: "success",
    token,
    data: response,
  });
});

exports.addAdmin = AsyncCatch(async (req, res) => {
  const addAdmin = req.body;
  addAdmin.role = "admin";
  let id = await userModel.create(addAdmin).select('id');
  let response = await adminModel.create({ admin: id });
  response = delete { ...response }.password;
  console.log(response);
  res.status(201).json({
    status: "success",
    data: response,
  });
});