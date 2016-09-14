var validator = require('validator');
/**
 * FrLunchMenuController
 *
 * @description :: Server-side logic for managing frlunchmenus
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var FrLunchMenuController = {
  try: function (req, res) {
    console.log('req.query=', req.query);
    var resJson = {
      menu: 'curry',
      price: 255
    };
  return res.json(200,resJson);
  },

  superGet: function (req, res) {
    console.log('req.query=', req.query);
    if (req.query.hoge === '3') {
      return res.send(400);
    }
    FrLunchMenu.find(req.query.hoge).exec(function(err, menu) {
      // エラーハンドリング
      if (err) {
        return res.serverError(err);

      // User 作成は成功!
      } else {
        return res.json(200,menu);
      }
    });
  },

  displayMenus: function (req, res) {
    var reqDate = req.query.orderDate;
    console.log('reqDate Length=', reqDate.length);
    if (reqDate.length != 8) {
      console.log('reqDate Length Error');
      return res.send(400);
    } else if (!validator.isNumeric(reqDate)){
      console.log('reqDate Numeric Error');
      return res.send(400);
    }
    FrLunchMenu.find({orderDate: reqDate}).exec(function (err, menu) {
      console.log('menu Length=', menu.length);
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
