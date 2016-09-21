var assert = require('chai').assert;
var async = require('async');
var sinon = require('sinon');
var fakeWaterlineChainMethod  = require('waterline-fakes').fakeWaterlineChainMethod;
var frLunchMenuController = require('../../../../api/controllers/FrLunchMenuController');

describe('FrLunchMenusController#getMenus', function () {
  var stub;

  var expectMenus = [
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

  afterEach(function() {
    stub.restore();
  });

  async.each([
    {
      desc: 'orderDate and category are match',
      query: {
        orderDate: '20160905',
        category:'SPECIAL'
      }
    },
    {
      desc: 'orderDate is match',
      query: {
        orderDate: '20160905'
      }
    },
    {
      desc: 'category is match',
      query: {
        category: 'SPECIAL'
      }
    },
    {
      desc: 'orderDate is empty and category is match',
      query: {
        orderDate: '',
        category: 'SPECIAL'
      }
    },
    {
      desc: 'orderDate is match and category is empty',
      query: {
        orderDate: '20160905',
        category: ''
      }
    },
    {
      desc: 'orderDate and category are empty',
      query: {
        orderDate: '',
        category: ''
      }
    },
    {
      desc: 'orderDate and category don\'t exist',
      query: {}
    }
  ], function (testcase, callback) {
    it('should return 200 when ' + testcase.desc, function (done) {
      // should
      var expect = expectMenus;

      // given
      var req = {
        query: testcase.query
      };

      var res = {
        json:function (status, message) {
          // then
          assert.equal(status, 200);
          assert.deepEqual(message, expect);
          done();
        }
      };

      stub = sinon.stub(FrLunchMenu, 'find', fakeWaterlineChainMethod( {result: expect}));

      // when
      frLunchMenuController.getMenus(req, res);
    });

    callback();
  });

  async.each([
    {
      desc: 'orderDate isn\'t the 8 characters',
      query: {
        orderDate: '201609050'
      }
    },
    {
      desc: 'orderDate isn\'t Numeric',
      query: {
        orderDate: 'hogehoge'
      }
    },
    {
      desc: 'category hasn\'t over 1 character below 50 characters',
      query: {
        category: '101010101020202020203030303030404040404050505050501'
      }
    },
    {
      desc: 'category contains any symbol characters',
      query: {
        category: 'SPECIAL@'
      }
    }
  ], function (testcase, callback) {
    it('should return 400 when ' + testcase.desc, function (done) {
      // given
      var req = {
        query: testcase.query
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

    callback();
  });

  it('should return 404 when menus of the orderDate don\'t exist', function (done) {

    //given
    var expect = [];
    var req = {
      query: {
        orderDate: '20160950',
        category:'FRENCH'
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
