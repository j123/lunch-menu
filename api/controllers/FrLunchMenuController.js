var validator = require('validator');
/**
 * FrLunchMenuController
 *
 * @description :: Server-side logic for managing frlunchmenus
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var FrLunchMenuController = {

  displayMenus: function (req, res) {
    var reqDate = req.query.orderDate;
    if (reqDate.length != 8) {
      return res.send(400);
    } else if (!validator.isNumeric(reqDate)){
      return res.send(400);
    }
    FrLunchMenu.find({orderDate: reqDate}).exec(function (err, menu) {
      if (err){
        return res.serverError(err);
      } else if (menu.length == 0){
        return res.send(404);
      } else{
        return res.json(200, menu);
      }
    });
  }
};

module.exports = FrLunchMenuController;
