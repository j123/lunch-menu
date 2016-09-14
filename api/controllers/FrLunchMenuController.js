var validator = require('validator');
/**
 * FrLunchMenuController
 *
 * @description :: Server-side logic for managing frlunchmenus
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var FrLunchMenuController = {

  getMenus: function (req, res) {
    var reqDate = req.query.orderDate;
    if (reqDate.length !== 8 || !validator.isNumeric(reqDate)){
      return res.send(400);
    }
    FrLunchMenu.find({orderDate: reqDate}).exec(function (err, menus) {
      if (err){
        return res.serverError(err);
      } else if (menus.length === 0){
        return res.send(404);
      } else{
        return res.json(200, menus);
      }
    });
  }
};

module.exports = FrLunchMenuController;
