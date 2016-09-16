/**
 * FrLunchMenuController
 *
 * @description :: Server-side logic for managing frlunchmenus
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var validator = require('validator');

var FrLunchMenuController = {
  getMenus: function (req, res) {

    // value of orderDate
    var reqDate = req.query.hasOwnProperty('orderDate') ? req.query.orderDate : null;
    // value of category
    var reqCate = req.query.hasOwnProperty('category') ? req.query.category : null;
    if (reqDate && (reqDate.length !== 8 || !validator.isNumeric(reqDate)) ||
        reqCate && ( !validator.isLength(reqCate, {min:1, max: 50}) || reqCate.match(/^[a-zA-Z0-9\s]$/))) {
      return res.send(400);
    }
    var criteria;
    if (reqDate && reqCate) {
      criteria = {orderDate: reqDate, category: reqCate};
    } else if (!reqDate && reqCate) {
      criteria = {category: reqCate};
    } else if (reqDate && !reqCate) {
      criteria = {orderDate: reqDate};
    } else {
      criteria = null;
    }
    FrLunchMenu.find(criteria).exec(function (err, menus) {
      if (err){
        return res.serverError(err);
      } else if (menus.length === 0){
        return res.send(404);
      } else {
        return res.json(200, menus);
      }
    });
  }
};

module.exports = FrLunchMenuController;
