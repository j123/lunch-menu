/**
 * FrLunchMenuController
 *
 * @description :: Server-side logic for managing frlunchmenus
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var FrLunchMenuController = {
  try: function (req, res) {
    var resJson = {
      menu: 'curry',
      price: 255
    };
  return res.json(200,resJson);
  },

  superGet: function (req, res) {
    FrLunchMenu.find(2).exec(function(err, menu) {
      // エラーハンドリング
      if (err) {
        return res.serverError(err);

      // User 作成は成功!
      } else {
        return res.json(200,menu);
      }
    });
  }
};

module.exports = FrLunchMenuController;
