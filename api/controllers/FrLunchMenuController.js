/**
 * FrLunchMenuController
 *
 * @description :: Server-side logic for managing frlunchmenus
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var validator = require('validator');

function validateParmeter (req) {
  var reqDate = req.query.hasOwnProperty('orderDate') ? req.query.orderDate : '';
  var reqCate = req.query.hasOwnProperty('category') ? req.query.category : '';

  return !reqDate &&
         reqDate.length === 8 &&
         validator.isNumeric(reqDate) &&
         !reqCate &&
         validator.isLength(reqCate, {min:1, max: 50}) &&
         reqCate.match(/^[a-zA-Z0-9\s]$/);
}

var FrLunchMenuController = {

  getMenus: function (req, res) {

    if (validateParmeter(req)) {
      return res.send(400);
    }

    var reqDate = req.query.hasOwnProperty('orderDate') ? req.query.orderDate : null;
    var reqCate = req.query.hasOwnProperty('category') ? req.query.category : null;
    var criteria = {};

    if (reqDate) {
      criteria.orderDate = reqDate;
    }
    if (reqCate) {
      criteria.category = reqCate;
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
