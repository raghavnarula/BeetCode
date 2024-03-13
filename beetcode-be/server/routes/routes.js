// All the Routes are present Here..
const express = require('express');
const Router = express.Router();
const controller = require(`../controller/${process.env.version}/controller`)
const home = require('../services/homeRender')

/*servicesRoutes*/
//homeRender.js
Router.get('/',home.homePage);

/*API Routes*/
//controller.js
Router.get(`/api/${process.env.version}/home`,controller.homeAPI);
Router.get(`/api/${process.env.version}/users`,controller.usersAPI)
Router.get(`/api/v2/users`,controller.usersAPI)
Router.post(`/api/${process.env.version}/login`,controller.login)

module.exports = Router