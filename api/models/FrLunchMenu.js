/**
 * FrLunchMenu.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

   tableName: 'frLunchMenu',

  attributes: {
    menu: 'string',
    price: 'integer',
    category: 'string',
    orderDate: 'integer',
    nutritionalInfo: 'string',
    recommend: 'integer',
    halalFood: 'integer'
  }
};

