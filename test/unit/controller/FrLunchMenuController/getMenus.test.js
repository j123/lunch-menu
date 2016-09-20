var assert = require('chai').assert;
var sinon = require('sinon');
var fakeWaterlineChainMethod  = require('waterline-fakes').fakeWaterlineChainMethod;
var frLunchMenuController = require('../../../../api/controllers/FrLunchMenuController');

describe('FrLunchMenusController#getMenus', function () {
  var stub;

  afterEach(function() {
    stub.restore();
  });

  it('should return 200 when orderDate is date and category is category', function (done) {

    // should
    var expect = [
      {
        'menu': 'ハンバーグ ポン酢かけ香味野菜のせ',
        'price': 465,
        'category': 'SPECIAL',
        'orderDate': 20160905,
        'nutritionalInfo': 'Energy 378kcal  Protain 20.2g  Lipid 20.9g Carbohydrate 38.8g  Salt 3.9g',
        'recommend': 0,
        'halalFood': 0,
        'id': 1,
        'createdAt': '2016-09-14T09:25:17.000Z',
        'updatedAt': '2016-09-14T09:25:17.000Z'
      }
    ];
    // given
    var req = {
      query: {
        orderDate: '20160905',
        category:'SPECIAL'
      }
    };
    var res = {
      json:function (status, message) {
        // then
        assert.equal(status, 200);
        assert.deepEqual(message,expect);
        done();
      }
    };
    stub = sinon.stub(FrLunchMenu, 'find', fakeWaterlineChainMethod( {result: expect}));

    // when
    frLunchMenuController.getMenus(req, res);
  });

  it('should return 200 when orderDate is date', function (done) {

    // should
    var expect = [
      {
        'menu': 'ハンバーグ ポン酢かけ香味野菜のせ',
        'price': 465,
        'category': 'SPECIAL',
        'orderDate': 20160905,
        'nutritionalInfo': 'Energy 378kcal  Protain 20.2g  Lipid 20.9g Carbohydrate 38.8g  Salt 3.9g',
        'recommend': 0,
        'halalFood': 0,
        'id': 1,
        'createdAt': '2016-09-14T09:25:17.000Z',
        'updatedAt': '2016-09-14T09:25:17.000Z'
      }
    ];
    // given
    var req = {
      query: {
        orderDate: '20160905'
      }
    };
    var res = {
      json:function (status, message) {
        // then
        assert.equal(status, 200);
        assert.deepEqual(message,expect);
        done();
      }
    };
    stub = sinon.stub(FrLunchMenu, 'find', fakeWaterlineChainMethod( {result: expect}));

    // when
    frLunchMenuController.getMenus(req, res);
  });

  it('should return 200 when category is category', function (done) {

    // should
    var expect = [
      {
        'menu': 'ハンバーグ ポン酢かけ香味野菜のせ',
        'price': 465,
        'category': 'SPECIAL',
        'orderDate': 20160905,
        'nutritionalInfo': 'Energy 378kcal  Protain 20.2g  Lipid 20.9g Carbohydrate 38.8g  Salt 3.9g',
        'recommend': 0,
        'halalFood': 0,
        'id': 1,
        'createdAt': '2016-09-14T09:25:17.000Z',
        'updatedAt': '2016-09-14T09:25:17.000Z'
      }
    ];
    // given
    var req = {
      query: {
        category: 'SPECIAL'
      }
    };
    var res = {
      json:function (status, message) {
        // then
        assert.equal(status, 200);
        assert.deepEqual(message,expect);
        done();
      }
    };
    stub = sinon.stub(FrLunchMenu, 'find', fakeWaterlineChainMethod( {result: expect}));

    // when
    frLunchMenuController.getMenus(req, res);
  });

  it('should return 200 when orderDate is empty and category is category', function (done) {

    // should
    var expect = [
      {
        'menu': 'ハンバーグ ポン酢かけ香味野菜のせ',
        'price': 465,
        'category': 'SPECIAL',
        'orderDate': 20160905,
        'nutritionalInfo': 'Energy 378kcal  Protain 20.2g  Lipid 20.9g Carbohydrate 38.8g  Salt 3.9g',
        'recommend': 0,
        'halalFood': 0,
        'id': 1,
        'createdAt': '2016-09-14T09:25:17.000Z',
        'updatedAt': '2016-09-14T09:25:17.000Z'
      }
    ];
    // given
    var req = {
      query: {
        orderDate: '',
        category: 'SPECIAL'
      }
    };
    var res = {
      json:function (status, message) {
        // then
        assert.equal(status, 200);
        assert.deepEqual(message,expect);
        done();
      }
    };
    stub = sinon.stub(FrLunchMenu, 'find', fakeWaterlineChainMethod( {result: expect}));

    // when
    frLunchMenuController.getMenus(req, res);
  });

  it('should return 200 when orderDate is orderDate and category is empty', function (done) {

    // should
    var expect = [
      {
        'menu': 'ハンバーグ ポン酢かけ香味野菜のせ',
        'price': 465,
        'category': 'SPECIAL',
        'orderDate': 20160905,
        'nutritionalInfo': 'Energy 378kcal  Protain 20.2g  Lipid 20.9g Carbohydrate 38.8g  Salt 3.9g',
        'recommend': 0,
        'halalFood': 0,
        'id': 1,
        'createdAt': '2016-09-14T09:25:17.000Z',
        'updatedAt': '2016-09-14T09:25:17.000Z'
      }
    ];
    // given
    var req = {
      query: {
        orderDate: '20160905',
        category: ''
      }
    };
    var res = {
      json:function (status, message) {
        // then
        assert.equal(status, 200);
        assert.deepEqual(message,expect);
        done();
      }
    };
    stub = sinon.stub(FrLunchMenu, 'find', fakeWaterlineChainMethod( {result: expect}));

    // when
    frLunchMenuController.getMenus(req, res);
  });

  it('should return 200 when orderDate and category is empty', function (done) {

    // should
    var expect = [
      {
        'menu': 'ハンバーグ ポン酢かけ香味野菜のせ',
        'price': 465,
        'category': 'SPECIAL',
        'orderDate': 20160905,
        'nutritionalInfo': 'Energy 378kcal  Protain 20.2g  Lipid 20.9g Carbohydrate 38.8g  Salt 3.9g',
        'recommend': 0,
        'halalFood': 0,
        'id': 1,
        'createdAt': '2016-09-14T09:25:17.000Z',
        'updatedAt': '2016-09-14T09:25:17.000Z'
      }
    ];
    // given
    var req = {
      query: {
        orderDate: '',
        category: ''
      }
    };
    var res = {
      json:function (status, message) {
        // then
        assert.equal(status, 200);
        assert.deepEqual(message,expect);
        done();
      }
    };
    stub = sinon.stub(FrLunchMenu, 'find', fakeWaterlineChainMethod( {result: expect}));

    // when
    frLunchMenuController.getMenus(req, res);
  });

  it('should return 200 when orderDate and category doesn\'t exist', function (done) {

    // should
    var expect = [
      {
        'menu': 'ハンバーグ ポン酢かけ香味野菜のせ',
        'price': 465,
        'category': 'SPECIAL',
        'orderDate': 20160905,
        'nutritionalInfo': 'Energy 378kcal  Protain 20.2g  Lipid 20.9g Carbohydrate 38.8g  Salt 3.9g',
        'recommend': 0,
        'halalFood': 0,
        'id': 1,
        'createdAt': '2016-09-14T09:25:17.000Z',
        'updatedAt': '2016-09-14T09:25:17.000Z'
      }
    ];
    // given
    var req = {
      query: {}
    };
    var res = {
      json:function (status, message) {
        // then
        assert.equal(status, 200);
        assert.deepEqual(message,expect);
        done();
      }
    };
    stub = sinon.stub(FrLunchMenu, 'find', fakeWaterlineChainMethod( {result: expect}));

    // when
    frLunchMenuController.getMenus(req, res);
  });

  it('should return 400 when orderDate isn\'t the 8 characters', function (done) {

    // given
    var req = {
      query: {
        orderDate: '201609050'
      }
    };
    var res = {
      send: function (status) {
        // then
        assert.equal(status, 400);
        done();
      }
    };

    // when
    frLunchMenuController.getMenus(req, res);
  });

  it('should return 400 when orderDate isn\'t Numeric', function (done) {
    // given
    var req = {
      query: {
        orderDate: 'hogehoge'
      }
    };
    var res = {
      send: function (status) {
        // then
        assert.equal(status, 400);
        done();
      }
    };

    // when
    frLunchMenuController.getMenus(req, res);
  });

  it('should return 400 when category hasn\'t over 1 character below 50 characters', function (done) {
    // given
    var req = {
      query: {
        category: '101010101020202020203030303030404040404050505050501'
      }
    };
    var res = {
      send: function (status) {
        // then
        assert.equal(status, 400);
        done();
      }
    };
    // when
    frLunchMenuController.getMenus(req, res);
  });


  it('should return 400 when category contains any symbol characters', function (done) {
    // given
    var req = {
      query: {
        category: 'SPECIAL@'
      }
    };
    var res = {
      send: function (status) {
        // then
        assert.equal(status, 400);
        done();
      }
    };

    // when
    frLunchMenuController.getMenus(req, res);
  });

  it('should return 404 when menus  of the orderDate doesn\'t exist', function (done) {

    //given
    var expect = [];
    var req = {
      query: {
        orderDate: '20160950'
      }
    };
    var res = {
      send:function (status) {
        // then
        assert.equal(status, 404);
        done();
      }
    };
    stub = sinon.stub(FrLunchMenu, 'find', fakeWaterlineChainMethod( {result: expect}));

    // when
    frLunchMenuController.getMenus(req, res);
  });

  it('should return 404 when menus  of the caregory doesn\'t exist', function (done) {

    //given
    var expect = [];
    var req = {
      query: {
        category: 'FRENCH'
      }
    };
    var res = {
      send:function (status) {
        // then
        assert.equal(status, 404);
        done();
      }
    };
    stub = sinon.stub(FrLunchMenu, 'find', fakeWaterlineChainMethod( {result: expect}));

    // when
    frLunchMenuController.getMenus(req, res);
  });

  it('should return server Error', function (done) {

    // given
    var expect = 'server Error';
    var req = {
      query: {
        orderDate: '20160905'
      }
    };
    var res = {
      serverError:function (err) {
        // then
        assert.equal(err, expect);
        done();
      }
    };
    stub = sinon.stub(FrLunchMenu, 'find', fakeWaterlineChainMethod( {err: expect}));

    // when
    frLunchMenuController.getMenus(req, res);
  });

});
